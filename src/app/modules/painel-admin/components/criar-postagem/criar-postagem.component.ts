import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { generateClient } from 'aws-amplify/api';
import { APIService, CreatePostagemInput, UpdatePostagemInput } from 'src/app/API.service';


@Component({
  selector: 'app-criar-postagem',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './criar-postagem.component.html',
  styleUrl: './criar-postagem.component.css',
})
export class CriarPostagemComponent implements OnInit{
  @Output() page = new EventEmitter
  @Input() dataEdit?: any;
  constructor(
    private api: APIService
  ) {

  }


  postForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    description: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    categoria: new FormControl('', [Validators.required]),
    imagem: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.postForm.get('title')?.setValue(this.dataEdit?.title);
    this.postForm.get('description')?.setValue(this.dataEdit?.descricao);
    this.postForm.get('author')?.setValue(this.dataEdit?.autor);
    this.postForm.get('categoria')?.setValue(this.dataEdit?.categoria);
    this.postForm.get('imagem')?.setValue(this.dataEdit?.imagem);
  }
  async onSubmit() {

    if(this.dataEdit){
      const postDetails = {
        id: this.dataEdit.id,
        title: this.postForm.value.title,
        categoria: this.postForm.value.categoria,
        descricao: this.postForm.value.description,
        imagem: this.postForm.value.imagem,
        autor: this.postForm.value.author,
      };
      this.api.UpdatePostagem(postDetails as UpdatePostagemInput);
      this.page.emit();
      return
    }

    if (this.postForm.valid) {
      const postDetails = {
        title: this.postForm.value.title,
        categoria: this.postForm.value.categoria,
        descricao: this.postForm.value.description,
        imagem: this.postForm.value.imagem,
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




  goToPage() {
    this.page.emit();
  }
}
