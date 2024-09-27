import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIService, CreateGaleriaInput, UpdateGaleriaInput } from '../../../../API.service';
import { LoadingService } from '../../../../shared/services/loading.service';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-criar-galeria',
  standalone: true,
  imports: [ReactiveFormsModule, LoadingComponent],
  templateUrl: './criar-galeria.component.html',
  styleUrl: './criar-galeria.component.scss'
})
export class CriarGaleriaComponent {
  @Output() page = new EventEmitter
  @Input() dataEdit?: any;
  galeriaForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.maxLength(500)]),

  });

  constructor(
    private api: APIService,
    private loadingService: LoadingService
  ) {}

    ngOnInit(): void {
      this.galeriaForm.get('nome')?.setValue(this.dataEdit?.imagem);
      console.log(this.dataEdit)

    }
    goToPage() {
      this.page.emit();
    }

    onSubmit() {
      this.loadingService.show();
      if(this.dataEdit){
        const postDetails = {
          id: this.dataEdit.id,
          imagem: this.galeriaForm.value.nome,

        };
        this.api.UpdateGaleria(postDetails as UpdateGaleriaInput);
        this.page.emit();
        this.loadingService.hide();
        return
      }

    if (this.galeriaForm.valid) {
      const galeriaDetails = {
        imagem: this.galeriaForm.value.nome,
      };
      this.api.CreateGaleria(galeriaDetails as CreateGaleriaInput);
    }

  }
}
