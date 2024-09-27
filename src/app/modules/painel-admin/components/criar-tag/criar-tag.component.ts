import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIService, CreateTagsInput, UpdateTagsInput } from '../../../../API.service';
import { LoadingService } from '../../../../shared/services/loading.service';

@Component({
  selector: 'app-criar-tag',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar-tag.component.html',
  styleUrl: './criar-tag.component.scss'
})
export class CriarTagComponent {
  @Output() page = new EventEmitter
  @Input() dataEdit?: any;
  tagForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.maxLength(500)]),

  });

  constructor(
    private api: APIService,
    private loadingService: LoadingService
  ) {

  }

  ngOnInit(): void {
    this.tagForm.get('nome')?.setValue(this.dataEdit?.nome);

  }

  goToPage() {
    this.page.emit();
  }

  async onSubmit() {
    this.loadingService.show();
    if(this.dataEdit){
      const postDetails = {
        id: this.dataEdit.id,
        nome: this.tagForm.value.nome,

      };
      this.api.UpdateTags(postDetails as UpdateTagsInput);
      this.page.emit();
      this.loadingService.hide();
      return
    }

    if (this.tagForm.valid) {
      const tagDetails = {
        nome: this.tagForm.value.nome,
      };
      this.api.CreateTags(tagDetails as CreateTagsInput);
    }

  }
}
