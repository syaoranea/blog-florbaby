import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { generateClient } from 'aws-amplify/api';
import { APIService, CreatePostagemInput } from '../../../../API.service';


@Component({
  selector: 'app-criar-postagem',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar-postagem.component.html',
  styleUrl: './criar-postagem.component.css',
})
export class CriarPostagemComponent {

  constructor(
    private api: APIService
  ) {

  }

  postForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    description: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    categoria: new FormControl('', [Validators.required]),
  });

  async onSubmit() {

    /* const client = generateClient();
    console.log(this.postForm.value); */

    if (this.postForm.valid) {
      const postDetails = {
        title: this.postForm.value.title,
        categoria: this.postForm.value.categoria,
        descricao: this.postForm.value.description,
        imagem: 'aaaaaa',
        autor: this.postForm.value.author,
      };
      this.api.CreatePostagem(postDetails as CreatePostagemInput);
    }
 /*
      const result = await client.graphql({
        query: createPostagem,
        variables: {
          input: postDetails,
        },
      });

      console.log(result);
    } */

   console.log('s')
  }
}
