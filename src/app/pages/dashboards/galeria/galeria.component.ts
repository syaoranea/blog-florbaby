import { CreateGaleriaInput } from './../../../API.service';
import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormArray, Validators, FormControl, FormGroup } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Observable } from 'rxjs';

// Sweet Alert
import Swal from 'sweetalert2';

import { ListJs, paginationlist, dataattribute, existingList, FuzzyList, ListJsCategoria } from '../../../core/data/table-listjs';

import { CategoriaModel } from '../../tables/listjs/listjs.model';
import { NgbdListSortableHeader} from '../../tables/listjs/listjs-sortable.directive';
import { APIService, CreateTagsInput,  DeleteTagsInput,  UpdateTagsInput } from 'src/app/API.service';
import { ListCategoriaService } from '../categorias/listjs-categoria.service';
import { DeleteGaleriaInput } from 'src/assets/API.service';


@Component({
  selector: 'app-galeria',
  standalone: false,
 // imports: [],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
  providers: [ListCategoriaService, DecimalPipe]
})
export class GaleriaComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  submitted = false;
  listJsForm!: UntypedFormGroup;
  ListJsData!: CategoriaModel[];
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
  ListJsList!: Observable<CategoriaModel[]>;
  total: number = 0;
  @ViewChildren(NgbdListSortableHeader) headers!: QueryList<NgbdListSortableHeader>;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  @ViewChild('deleteModal', { static: false }) deleteModal?: ModalDirective;
  constructor(private api: APIService,public service: ListCategoriaService, private pipe: DecimalPipe) {
    this.ListJsList = service.countries$;


  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Admin' },
      { label: 'Categoria', active: true }
    ];

    /**
   * Form Validation
   */
    this.listJsForm = new FormGroup({
      ids: new FormControl(''),
      imagem: new FormControl('', [Validators.required]),
    });

    this.api.ListGalerias().then((res)=> {
      if (res.items) {
        console.log(res.items);
        this.ListJsDatas = res.items;
        this.total = res.items.length; // Atribuir apenas a parte 'items' do resultado
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
    this.ListJsDatas = ListJsCategoria.slice(0, 8);
  }

  tablepageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.ListJsDatas = this.ListJsDatas.slice(startItem, endItem);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
  const endItem = event.page * event.itemsPerPage;
  this.paginationDatas = this.ListJsDatas.slice(startItem, endItem);
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

      if (this.listJsForm.get('ids')?.value) {
        const postDetails = {
          id: this.listJsForm.value.ids,
          imagem: this.listJsForm.value.imagem,
        };
        console.log(postDetails)
        this.ListJsDatas = this.ListJsDatas.map((data: { id: any; }) => data.id === this.listJsForm.get('ids')?.value ? { ...data, ...postDetails } : data)

        this.api.UpdateGaleria(postDetails as UpdateTagsInput);
        this.showModal?.hide()
        setTimeout(() => {
          this.listJsForm.reset();
        }, 2000);
        return
      }
        const imagem = this.listJsForm.get('imagem')?.value;
          const postDetails = {
            imagem
          }
        this.ListJsDatas.push({id: 1, ...postDetails});
        this.api.CreateGaleria(postDetails as unknown as CreateGaleriaInput).then(res=>{
          console.log(res)
        }).catch(error=>{
          console.log(error)
        });
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
    this.api.DeleteGaleria(idd as unknown as DeleteGaleriaInput);
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
    this.listJsForm.get('imagem')?.setValue(listData.imagem);

  }

  // Sorting
  sortname() {
    this.ListJsDatas.sort(function (a: any, b: any) {
      if (a.firstname < b.firstname) { return -1; }
      if (a.firstname > b.firstname) { return 1; }
      return 0;
    })
  }

}

