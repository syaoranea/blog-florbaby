import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIService, CreateCategoriaInput } from '../../../../API.service';

@Component({
  selector: 'app-criar-categorias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar-categorias.component.html',
  styleUrl: './criar-categorias.component.scss'
})
export class CriarCategoriasComponent {
  categoriaForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.maxLength(500)]),

  });

  constructor(
    private api: APIService
  ) {

  }
  async onSubmit() {
    if (this.categoriaForm.valid) {
      const categoriaDetails = {
        nome: this.categoriaForm.value.nome,
      };
      this.api.CreateCategoria(categoriaDetails as CreateCategoriaInput);
    }

  }
}
