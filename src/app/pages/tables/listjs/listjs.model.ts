export interface ListJsModel {
  id: string | number | undefined;
  title?: string;
  categoria?: string;
  descricao?: string;
  imagem?: string;
  autor?: string;
  createdAt?: string;
  updatedAt?: string;
  nome?: string;
  /* id: any;
  title: string;
  categoria: string;
  imagem: string;
  date: string;
  status: string;
  status_color: string;
  isSelected?: any; */
}

export interface CategoriaModel {
  id: string | number | undefined;
  nome: string;

}

export interface paginationModel {
  ids: any;
  name: string;
  type: string;
  img: string;
}
