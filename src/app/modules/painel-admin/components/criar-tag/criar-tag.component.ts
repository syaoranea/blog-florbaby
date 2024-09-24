import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIService, CreateTagsInput } from '../../../../API.service';

@Component({
  selector: 'app-criar-tag',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar-tag.component.html',
  styleUrl: './criar-tag.component.scss'
})
export class CriarTagComponent {
  tagForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.maxLength(500)]),

  });

  constructor(
    private api: APIService
  ) {

  }
  async onSubmit() {
    if (this.tagForm.valid) {
      const tagDetails = {
        nome: this.tagForm.value.nome,
      };
      this.api.CreateTags(tagDetails as CreateTagsInput);
    }

  }
}
