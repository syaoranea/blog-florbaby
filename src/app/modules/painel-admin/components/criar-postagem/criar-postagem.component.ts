import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
/* import { generateClient } from 'aws-amplify/api';
import { createBlog, createPost } from '../../../../../graphql/mutations'; */


@Component({

  selector: 'app-criar-postagem',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar-postagem.component.html',
  styleUrl: './criar-postagem.component.css',
})
export class CriarPostagemComponent {

  constructor() {

  }

  postForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    description: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    categoria: new FormControl('', [Validators.required]),
  });

  async onSubmit() {
    /* const client = generateClient();
    console.log(this.postForm.value);

    if (this.postForm.valid) {
      const postDetails = {
        title: this.postForm.value.title,
        description: this.postForm.value.description,
        author: this.postForm.value.author,
        category: this.postForm.value.categoria,
        createdAt: this.today
      };

      const result = await client.graphql({
        query: createPost,
        variables: {
          input: postDetails,
        },
      });

      console.log(result);
    } */
   console.log('s')
  }
}
