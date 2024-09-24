import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIService, CreateGaleriaInput } from '../../../../API.service';

@Component({
  selector: 'app-criar-galeria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar-galeria.component.html',
  styleUrl: './criar-galeria.component.scss'
})
export class CriarGaleriaComponent {
  galeriaForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.maxLength(500)]),

  });

  constructor(
    private api: APIService
  ) {

  }
  async onSubmit() {
    if (this.galeriaForm.valid) {
      const galeriaDetails = {
        imagem: this.galeriaForm.value.nome,
      };
      this.api.CreateGaleria(galeriaDetails as CreateGaleriaInput);
    }

  }
}
