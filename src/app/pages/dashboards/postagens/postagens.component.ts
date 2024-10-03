import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Observable } from 'rxjs';

// Sweet Alert
import Swal from 'sweetalert2';

import { ListJs, paginationlist, dataattribute, existingList, FuzzyList } from '../../../core/data/table-listjs';


import { ListService } from '../../tables/listjs/listjs.service';
import { ListJsModel } from '../../tables/listjs/listjs.model';
import { listSortEvent , NgbdListSortableHeader} from '../../tables/listjs/listjs-sortable.directive';
import { APIService, CreatePostagemInput, DeletePostagemInput, UpdatePostagemInput } from 'src/app/API.service';
import { sub } from 'date-fns';


@Component({
  selector: 'app-postagens',
  standalone: false,
 // imports: [ BasicComponent,  GridjsComponent, ListjsComponent, NgbdGridJsSortableHeader, NgbdListSortableHeader],
  templateUrl: './postagens.component.html',
  styleUrl: './postagens.component.scss',
  providers: [ListService, DecimalPipe]
})
export class PostagensComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  submitted = false;
  listJsForm!: UntypedFormGroup;
  ListJsData!: ListJsModel[];
  checkedList: any;
  masterSelected!: boolean;
  ListJsDatas: any | undefined;

  paginationDatas: any;
  attributedata: any;
  existingData: any;
  fuzzyData: any;

  existingTerm: any;
  fuzzyTerm: any;
  dataterm: any;
  term: any;

  // Table data
  ListJsList!: Observable<ListJsModel[]>;
  total: Observable<number>;
  @ViewChildren(NgbdListSortableHeader) headers!: QueryList<NgbdListSortableHeader>;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  @ViewChild('deleteModal', { static: false }) deleteModal?: ModalDirective;
  constructor(private api: APIService,public service: ListService, private formBuilder: UntypedFormBuilder, private pipe: DecimalPipe) {
    this.ListJsList = service.countries$;
    this.total = service.total$;

  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Admin' },
      { label: 'Postagens', active: true }
    ];

    /**
   * Form Validation
   */
    this.listJsForm = new FormGroup({
      ids: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      categoria: new FormControl('', [Validators.required]),
      imagem: new FormControl('', [Validators.required]),
      tag: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      subtitulo: new FormControl('', [Validators.required]),
      views: new FormControl('', [Validators.required]),
      tempodeleitura: new FormControl('', [Validators.required, Validators.maxLength(100)]),

    });

    this.api.ListPostagems().then((res)=> {
      if (res.items) {
        console.log(res.items);
        this.ListJsDatas = res.items;  // Atribuir apenas a parte 'items' do resultado
      }

    }).catch((error)=>{
      console.log(error)

    })

    /**
     * fetches data
     */
    this.ListJsList.subscribe(x => {
      this.ListJsDatas = Object.assign([], x);
    });
    this.attributedata = dataattribute
    this.existingData = existingList
    this.fuzzyData = FuzzyList
    this.paginationDatas = paginationlist

    this.paginationDatas = paginationlist.slice(0, 3);
    this.ListJsDatas = ListJs.slice(0, 8);
  }

  tablepageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.ListJsDatas = ListJs.slice(startItem, endItem);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.paginationDatas = paginationlist.slice(startItem, endItem);
  }

  /**
   * Form data get
   */
  get form() {
    return this.listJsForm.controls;
  }

  /**
  * Save saveListJs
  */
  saveListJs() {

    if (this.listJsForm.valid) {
      console.log('saiu')
      if (this.listJsForm.get('ids')?.value) {
        const postDetails = {
          id: this.listJsForm.value.ids,
          title: this.listJsForm.value.title,
          categoria: this.listJsForm.value.categoria,
          descricao: this.listJsForm.value.description,
          imagem: this.listJsForm.value.imagem,
          autor: this.listJsForm.value.author,
          tag: this.listJsForm.value.tag,
          subtitulo: this.listJsForm.value.subtitulo,
          views: this.listJsForm.value.views,
          tempodeleitura: this.listJsForm.value.tempodeleitura,
        };
        this.ListJsDatas = this.ListJsDatas.map((data: { id: any; }) => data.id === this.listJsForm.get('ids')?.value ? { ...data, ...postDetails } : data)

        this.api.UpdatePostagem(postDetails as UpdatePostagemInput);
        this.showModal?.hide()
        return
      }
        const title = this.listJsForm.get('title')?.value;
        const descricao = this.listJsForm.get('description')?.value;
        const categoria = this.listJsForm.get('categoria')?.value;
        const autor = this.listJsForm.get('author')?.value;
        const imagem = this.listJsForm.get('imagem')?.value;
        const tag =  this.listJsForm.get('tag')?.value;
        const subtitulo = this.listJsForm.get('subtitulo')?.value;
        const views = this.listJsForm.get('views')?.value;
        const tempodeleitura = this.listJsForm.get('tempodeleitura')?.value;
        const blog = 1;
          const postDetails = {
            title,
            descricao,
            categoria,
            autor,
            imagem,
            tag,
            subtitulo,
            views,
            tempodeleitura,
            blog
          }
        //title: string;    categoria: string;    descricao: string;    imagem: string;    autor: string;
        console.log(postDetails);
        this.ListJsDatas.push({id: 1, ...postDetails});
        this.api.CreatePostagem(postDetails as CreatePostagemInput).then(res=>{
          console.log(res)
        }).catch(error=>{
          console.log(error)
        });
        console.log('saiu')


    }
    this.showModal?.hide()
    setTimeout(() => {
      this.listJsForm.reset();
    }, 2000);
    this.submitted = true
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.ListJsDatas.forEach((x: { state: any; }) => x.state = ev.target.checked)
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.ListJsDatas.length; i++) {
      if (this.ListJsDatas[i].state == true) {
        result = this.ListJsDatas[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? (document.getElementById("remove-actions") as HTMLElement).style.display = "block" : (document.getElementById("remove-actions") as HTMLElement).style.display = "none";

  }
  isAllChecked() {
    return this.ListJsDatas.every((_: { state: any; }) => _.state);
  }

  /**
  * Confirmation mail model
  */
  deleteId: any;
  confirm(id: any) {
    this.deleteId = id;
    this.deleteModal?.show();
  }


  /**
  * Multiple Delete
  */
  checkedValGet: any[] = [];

  // Delete Data
  deleteData(id: any) {
    if (id) {
      document.getElementById('a_' + id)?.remove();

    }
    this.checkedValGet.forEach((item: any) => {
      document.getElementById('a_' + item)?.remove();
      this.masterSelected = false;
    });
    const idd = {
      id: id
    }
    console.log(idd);
    this.api.DeletePostagem(idd as unknown as DeletePostagemInput);
    this.deleteModal?.hide();
  }

  /**
  * Open modal
  * @param content modal content
  */
  editModal(id: any) {
    this.submitted = false;
    var updateBtn = document.getElementById('add-btn') as HTMLAreaElement;

    updateBtn.innerHTML = "Update";
    this.showModal?.show()
    var listData = this.ListJsDatas[id];
    this.listJsForm.get('ids')?.setValue(listData.id);
    this.listJsForm.get('title')?.setValue(listData.title);
    this.listJsForm.get('description')?.setValue(listData.descricao);
    this.listJsForm.get('author')?.setValue(listData.autor);
    this.listJsForm.get('categoria')?.setValue(listData.categoria);
    this.listJsForm.get('imagem')?.setValue(listData.imagem);
    this.listJsForm.get('subtitulo')?.setValue(listData.subtitulo);
    this.listJsForm.get('tag')?.setValue(listData.tag);
    this.listJsForm.get('tempodeleitura')?.setValue(listData.tempodeleitura);
    this.listJsForm.get('views')?.setValue(listData.views);
   // this.listJsForm.get('blog')?.setValue(listData.blog);
  }

  // Sorting
  sortname() {
    this.ListJsDatas.sort(function (a: any, b: any) {
      if (a.firstname < b.firstname) { return -1; }
      if (a.firstname > b.firstname) { return 1; }
      return 0;
    })
  }

  /**
* Sort table data
* @param param0 sort the column
*
*/
  onSort({ column, direction }: listSortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.listsortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }





}
