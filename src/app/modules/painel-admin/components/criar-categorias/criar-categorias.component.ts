import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoadingService } from '../../../../shared/services/loading.service';
import { APIService, CreateCategoriaInput, UpdateCategoriaInput } from 'src/app/API.service';

@Component({
  selector: 'app-criar-categorias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar-categorias.component.html',
  styleUrl: './criar-categorias.component.scss'
})
export class CriarCategoriasComponent {
  @Output() page = new EventEmitter
  @Input() dataEdit?: any;
  categoriaForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.maxLength(500)]),

  });

  constructor(
    private api: APIService,
    private loadingService: LoadingService
  ) {

  }

  ngOnInit(): void {
    this.categoriaForm.get('nome')?.setValue(this.dataEdit?.nome);

  }

  async onSubmit() {
    this.loadingService.show();
    if(this.dataEdit){
      const postDetails = {
        id: this.dataEdit.id,
        nome: this.categoriaForm.value.nome,

      };
      this.api.UpdateCategoria(postDetails as UpdateCategoriaInput);
      this.page.emit();
      this.loadingService.hide();
      return
    }

    if (this.categoriaForm.valid) {
      const categoriaDetails = {
        nome: this.categoriaForm.value.nome,
      };
      this.api.CreateCategoria(categoriaDetails as CreateCategoriaInput);
      this.loadingService.hide();
    }
    this.loadingService.hide();
  }

  goToPage() {
    this.page.emit();
  }
}
