
/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import GraphQLAPI , { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
//import { API } from '@aws-amplify/api';
import { Observable } from "rxjs";
import { generateClient } from 'aws-amplify/api';


export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreatePostagem: OnCreatePostagemSubscription;
  onUpdatePostagem: OnUpdatePostagemSubscription;
  onDeletePostagem: OnDeletePostagemSubscription;
  onCreateCategoria: OnCreateCategoriaSubscription;
  onUpdateCategoria: OnUpdateCategoriaSubscription;
  onDeleteCategoria: OnDeleteCategoriaSubscription;
  onCreateTags: OnCreateTagsSubscription;
  onUpdateTags: OnUpdateTagsSubscription;
  onDeleteTags: OnDeleteTagsSubscription;
  onCreateGaleria: OnCreateGaleriaSubscription;
  onUpdateGaleria: OnUpdateGaleriaSubscription;
  onDeleteGaleria: OnDeleteGaleriaSubscription;
};

export type CreatePostagemInput = {
  id?: string | null;
  title: string;
  categoria: string;
  descricao: string;
  imagem: string;
  autor: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelPostagemConditionInput = {
  title?: ModelStringInput | null;
  categoria?: ModelStringInput | null;
  descricao?: ModelStringInput | null;
  imagem?: ModelStringInput | null;
  autor?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelPostagemConditionInput | null> | null;
  or?: Array<ModelPostagemConditionInput | null> | null;
  not?: ModelPostagemConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Postagem = {
  __typename: "Postagem";
  id: string;
  title: string;
  categoria: string;
  descricao: string;
  imagem: string;
  autor: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdatePostagemInput = {
  id: string;
  title?: string | null;
  categoria?: string | null;
  descricao?: string | null;
  imagem?: string | null;
  autor?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeletePostagemInput = {
  id: string;
};

export type CreateCategoriaInput = {
  id?: string | null;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelCategoriaConditionInput = {
  nome?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCategoriaConditionInput | null> | null;
  or?: Array<ModelCategoriaConditionInput | null> | null;
  not?: ModelCategoriaConditionInput | null;
};

export type categoria = {
  __typename: "categoria";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateCategoriaInput = {
  id: string;
  nome?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteCategoriaInput = {
  id: string;
};

export type CreateTagsInput = {
  id?: string | null;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelTagsConditionInput = {
  nome?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelTagsConditionInput | null> | null;
  or?: Array<ModelTagsConditionInput | null> | null;
  not?: ModelTagsConditionInput | null;
};

export type Tags = {
  __typename: "Tags";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateTagsInput = {
  id: string;
  nome?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteTagsInput = {
  id: string;
};

export type CreateGaleriaInput = {
  id?: string | null;
  imagem: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelGaleriaConditionInput = {
  imagem?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelGaleriaConditionInput | null> | null;
  or?: Array<ModelGaleriaConditionInput | null> | null;
  not?: ModelGaleriaConditionInput | null;
};

export type Galeria = {
  __typename: "Galeria";
  id: string;
  imagem: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateGaleriaInput = {
  id: string;
  imagem?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteGaleriaInput = {
  id: string;
};

export type ModelPostagemFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  categoria?: ModelStringInput | null;
  descricao?: ModelStringInput | null;
  imagem?: ModelStringInput | null;
  autor?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelPostagemFilterInput | null> | null;
  or?: Array<ModelPostagemFilterInput | null> | null;
  not?: ModelPostagemFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelPostagemConnection = {
  __typename: "ModelPostagemConnection";
  items: Array<Postagem | null>;
  nextToken?: string | null;
};

export type ModelCategoriaFilterInput = {
  id?: ModelIDInput | null;
  nome?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelCategoriaFilterInput | null> | null;
  or?: Array<ModelCategoriaFilterInput | null> | null;
  not?: ModelCategoriaFilterInput | null;
};

export type ModelCategoriaConnection = {
  __typename: "ModelCategoriaConnection";
  items: Array<categoria | null>;
  nextToken?: string | null;
};

export type ModelTagsFilterInput = {
  id?: ModelIDInput | null;
  nome?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelTagsFilterInput | null> | null;
  or?: Array<ModelTagsFilterInput | null> | null;
  not?: ModelTagsFilterInput | null;
};

export type ModelTagsConnection = {
  __typename: "ModelTagsConnection";
  items: Array<Tags | null>;
  nextToken?: string | null;
};

export type ModelGaleriaFilterInput = {
  id?: ModelIDInput | null;
  imagem?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelGaleriaFilterInput | null> | null;
  or?: Array<ModelGaleriaFilterInput | null> | null;
  not?: ModelGaleriaFilterInput | null;
};

export type ModelGaleriaConnection = {
  __typename: "ModelGaleriaConnection";
  items: Array<Galeria | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionPostagemFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  categoria?: ModelSubscriptionStringInput | null;
  descricao?: ModelSubscriptionStringInput | null;
  imagem?: ModelSubscriptionStringInput | null;
  autor?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPostagemFilterInput | null> | null;
  or?: Array<ModelSubscriptionPostagemFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionCategoriaFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  nome?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCategoriaFilterInput | null> | null;
  or?: Array<ModelSubscriptionCategoriaFilterInput | null> | null;
};

export type ModelSubscriptionTagsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  nome?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTagsFilterInput | null> | null;
  or?: Array<ModelSubscriptionTagsFilterInput | null> | null;
};

export type ModelSubscriptionGaleriaFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  imagem?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionGaleriaFilterInput | null> | null;
  or?: Array<ModelSubscriptionGaleriaFilterInput | null> | null;
};

export type CreatePostagemMutation = {
  __typename: "Postagem";
  id: string;
  title: string;
  categoria: string;
  descricao: string;
  imagem: string;
  autor: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdatePostagemMutation = {
  __typename: "Postagem";
  id: string;
  title: string;
  categoria: string;
  descricao: string;
  imagem: string;
  autor: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeletePostagemMutation = {
  __typename: "Postagem";
  id: string;
  title: string;
  categoria: string;
  descricao: string;
  imagem: string;
  autor: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateCategoriaMutation = {
  __typename: "categoria";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateCategoriaMutation = {
  __typename: "categoria";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteCategoriaMutation = {
  __typename: "categoria";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateTagsMutation = {
  __typename: "Tags";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateTagsMutation = {
  __typename: "Tags";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteTagsMutation = {
  __typename: "Tags";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateGaleriaMutation = {
  __typename: "Galeria";
  id: string;
  imagem: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateGaleriaMutation = {
  __typename: "Galeria";
  id: string;
  imagem: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteGaleriaMutation = {
  __typename: "Galeria";
  id: string;
  imagem: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type GetPostagemQuery = {
  __typename: "Postagem";
  id: string;
  title: string;
  categoria: string;
  descricao: string;
  imagem: string;
  autor: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListPostagemsQuery = {
  __typename: "ModelPostagemConnection";
  items: Array<{
    __typename: "Postagem";
    id: string;
    title: string;
    categoria: string;
    descricao: string;
    imagem: string;
    autor: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetCategoriaQuery = {
  __typename: "categoria";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListCategoriasQuery = {
  __typename: "ModelCategoriaConnection";
  items: Array<{
    __typename: "categoria";
    id: string;
    nome: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetTagsQuery = {
  __typename: "Tags";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListTagsQuery = {
  __typename: "ModelTagsConnection";
  items: Array<{
    __typename: "Tags";
    id: string;
    nome: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetGaleriaQuery = {
  __typename: "Galeria";
  id: string;
  imagem: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ListGaleriasQuery = {
  __typename: "ModelGaleriaConnection";
  items: Array<{
    __typename: "Galeria";
    id: string;
    imagem: string;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreatePostagemSubscription = {
  __typename: "Postagem";
  id: string;
  title: string;
  categoria: string;
  descricao: string;
  imagem: string;
  autor: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdatePostagemSubscription = {
  __typename: "Postagem";
  id: string;
  title: string;
  categoria: string;
  descricao: string;
  imagem: string;
  autor: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeletePostagemSubscription = {
  __typename: "Postagem";
  id: string;
  title: string;
  categoria: string;
  descricao: string;
  imagem: string;
  autor: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateCategoriaSubscription = {
  __typename: "categoria";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateCategoriaSubscription = {
  __typename: "categoria";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteCategoriaSubscription = {
  __typename: "categoria";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateTagsSubscription = {
  __typename: "Tags";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateTagsSubscription = {
  __typename: "Tags";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteTagsSubscription = {
  __typename: "Tags";
  id: string;
  nome: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnCreateGaleriaSubscription = {
  __typename: "Galeria";
  id: string;
  imagem: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnUpdateGaleriaSubscription = {
  __typename: "Galeria";
  id: string;
  imagem: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type OnDeleteGaleriaSubscription = {
  __typename: "Galeria";
  id: string;
  imagem: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
   client = generateClient();
  async CreatePostagem(
    input: CreatePostagemInput,
    condition?: ModelPostagemConditionInput
  ): Promise<CreatePostagemMutation> {
    const statement = `mutation CreatePostagem($input: CreatePostagemInput!, $condition: ModelPostagemConditionInput) {
        createPostagem(input: $input, condition: $condition) {
          __typename
          id
          title
          categoria
          descricao
          imagem
          autor
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    console.log(response)
    return <CreatePostagemMutation>response.data.createPostagem;
  }
  async UpdatePostagem(
    input: UpdatePostagemInput,
    condition?: ModelPostagemConditionInput
  ): Promise<UpdatePostagemMutation> {
    const statement = `mutation UpdatePostagem($input: UpdatePostagemInput!, $condition: ModelPostagemConditionInput) {
        updatePostagem(input: $input, condition: $condition) {
          __typename
          id
          title
          categoria
          descricao
          imagem
          autor
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostagemMutation>response.data.updatePostagem;
  }
  async DeletePostagem(
    input: DeletePostagemInput,
    condition?: ModelPostagemConditionInput
  ): Promise<DeletePostagemMutation> {
    const statement = `mutation DeletePostagem($input: DeletePostagemInput!, $condition: ModelPostagemConditionInput) {
        deletePostagem(input: $input, condition: $condition) {
          __typename
          id
          title
          categoria
          descricao
          imagem
          autor
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostagemMutation>response.data.deletePostagem;
  }
  async CreateCategoria(
    input: CreateCategoriaInput,
    condition?: ModelCategoriaConditionInput
  ): Promise<CreateCategoriaMutation> {
    const statement = `mutation CreateCategoria($input: CreateCategoriaInput!, $condition: ModelCategoriaConditionInput) {
        createCategoria(input: $input, condition: $condition) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoriaMutation>response.data.createCategoria;
  }
  async UpdateCategoria(
    input: UpdateCategoriaInput,
    condition?: ModelCategoriaConditionInput
  ): Promise<UpdateCategoriaMutation> {
    const statement = `mutation UpdateCategoria($input: UpdateCategoriaInput!, $condition: ModelCategoriaConditionInput) {
        updateCategoria(input: $input, condition: $condition) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoriaMutation>response.data.updateCategoria;
  }
  async DeleteCategoria(
    input: DeleteCategoriaInput,
    condition?: ModelCategoriaConditionInput
  ): Promise<DeleteCategoriaMutation> {
    const statement = `mutation DeleteCategoria($input: DeleteCategoriaInput!, $condition: ModelCategoriaConditionInput) {
        deleteCategoria(input: $input, condition: $condition) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoriaMutation>response.data.deleteCategoria;
  }
  async CreateTags(
    input: CreateTagsInput,
    condition?: ModelTagsConditionInput
  ): Promise<CreateTagsMutation> {
    const statement = `mutation CreateTags($input: CreateTagsInput!, $condition: ModelTagsConditionInput) {
        createTags(input: $input, condition: $condition) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTagsMutation>response.data.createTags;
  }
  async UpdateTags(
    input: UpdateTagsInput,
    condition?: ModelTagsConditionInput
  ): Promise<UpdateTagsMutation> {
    const statement = `mutation UpdateTags($input: UpdateTagsInput!, $condition: ModelTagsConditionInput) {
        updateTags(input: $input, condition: $condition) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTagsMutation>response.data.updateTags;
  }
  async DeleteTags(
    input: DeleteTagsInput,
    condition?: ModelTagsConditionInput
  ): Promise<DeleteTagsMutation> {
    const statement = `mutation DeleteTags($input: DeleteTagsInput!, $condition: ModelTagsConditionInput) {
        deleteTags(input: $input, condition: $condition) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTagsMutation>response.data.deleteTags;
  }
  async CreateGaleria(
    input: CreateGaleriaInput,
    condition?: ModelGaleriaConditionInput
  ): Promise<CreateGaleriaMutation> {
    const statement = `mutation CreateGaleria($input: CreateGaleriaInput!, $condition: ModelGaleriaConditionInput) {
        createGaleria(input: $input, condition: $condition) {
          __typename
          id
          imagem
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGaleriaMutation>response.data.createGaleria;
  }
  async UpdateGaleria(
    input: UpdateGaleriaInput,
    condition?: ModelGaleriaConditionInput
  ): Promise<UpdateGaleriaMutation> {
    const statement = `mutation UpdateGaleria($input: UpdateGaleriaInput!, $condition: ModelGaleriaConditionInput) {
        updateGaleria(input: $input, condition: $condition) {
          __typename
          id
          imagem
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGaleriaMutation>response.data.updateGaleria;
  }
  async DeleteGaleria(
    input: DeleteGaleriaInput,
    condition?: ModelGaleriaConditionInput
  ): Promise<DeleteGaleriaMutation> {
    const statement = `mutation DeleteGaleria($input: DeleteGaleriaInput!, $condition: ModelGaleriaConditionInput) {
        deleteGaleria(input: $input, condition: $condition) {
          __typename
          id
          imagem
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGaleriaMutation>response.data.deleteGaleria;
  }
  async GetPostagem(id: string): Promise<GetPostagemQuery> {
    const statement = `query GetPostagem($id: ID!) {
        getPostagem(id: $id) {
          __typename
          id
          title
          categoria
          descricao
          imagem
          autor
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostagemQuery>response.data.getPostagem;
  }
  async ListPostagems(
    filter?: ModelPostagemFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostagemsQuery> {
    const statement = `query ListPostagems($filter: ModelPostagemFilterInput, $limit: Int, $nextToken: String) {
        listPostagems(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            categoria
            descricao
            imagem
            autor
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostagemsQuery>response.data.listPostagems;
  }
  async GetCategoria(id: string): Promise<GetCategoriaQuery> {
    const statement = `query GetCategoria($id: ID!) {
        getCategoria(id: $id) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoriaQuery>response.data.getCategoria;
  }
  async ListCategorias(
    filter?: ModelCategoriaFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategoriasQuery> {
    const statement = `query ListCategorias($filter: ModelCategoriaFilterInput, $limit: Int, $nextToken: String) {
        listCategorias(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nome
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategoriasQuery>response.data.listCategorias;
  }
  async GetTags(id: string): Promise<GetTagsQuery> {
    const statement = `query GetTags($id: ID!) {
        getTags(id: $id) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTagsQuery>response.data.getTags;
  }
  async ListTags(
    filter?: ModelTagsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTagsQuery> {
    const statement = `query ListTags($filter: ModelTagsFilterInput, $limit: Int, $nextToken: String) {
        listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nome
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTagsQuery>response.data.listTags;
  }
  async GetGaleria(id: string): Promise<GetGaleriaQuery> {
    const statement = `query GetGaleria($id: ID!) {
        getGaleria(id: $id) {
          __typename
          id
          imagem
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGaleriaQuery>response.data.getGaleria;
  }
  async ListGalerias(
    filter?: ModelGaleriaFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGaleriasQuery> {
    const statement = `query ListGalerias($filter: ModelGaleriaFilterInput, $limit: Int, $nextToken: String) {
        listGalerias(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            imagem
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGaleriasQuery>response.data.listGalerias;
  }
/*   OnCreatePostagemListener(
    filter?: ModelSubscriptionPostagemFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePostagem">>
  > {
    const statement = `subscription OnCreatePostagem($filter: ModelSubscriptionPostagemFilterInput) {
        onCreatePostagem(filter: $filter) {
          __typename
          id
          title
          categoria
          descricao
          imagem
          autor
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePostagem">>
    >;
  }

  OnUpdatePostagemListener(
    filter?: ModelSubscriptionPostagemFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePostagem">>
  > {
    const statement = `subscription OnUpdatePostagem($filter: ModelSubscriptionPostagemFilterInput) {
        onUpdatePostagem(filter: $filter) {
          __typename
          id
          title
          categoria
          descricao
          imagem
          autor
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePostagem">>
    >;
  }

  OnDeletePostagemListener(
    filter?: ModelSubscriptionPostagemFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePostagem">>
  > {
    const statement = `subscription OnDeletePostagem($filter: ModelSubscriptionPostagemFilterInput) {
        onDeletePostagem(filter: $filter) {
          __typename
          id
          title
          categoria
          descricao
          imagem
          autor
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePostagem">>
    >;
  }

  OnCreateCategoriaListener(
    filter?: ModelSubscriptionCategoriaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategoria">>
  > {
    const statement = `subscription OnCreateCategoria($filter: ModelSubscriptionCategoriaFilterInput) {
        onCreateCategoria(filter: $filter) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategoria">>
    >;
  }

  OnUpdateCategoriaListener(
    filter?: ModelSubscriptionCategoriaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategoria">>
  > {
    const statement = `subscription OnUpdateCategoria($filter: ModelSubscriptionCategoriaFilterInput) {
        onUpdateCategoria(filter: $filter) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategoria">>
    >;
  }

  OnDeleteCategoriaListener(
    filter?: ModelSubscriptionCategoriaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategoria">>
  > {
    const statement = `subscription OnDeleteCategoria($filter: ModelSubscriptionCategoriaFilterInput) {
        onDeleteCategoria(filter: $filter) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategoria">>
    >;
  }

  OnCreateTagsListener(
    filter?: ModelSubscriptionTagsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTags">>
  > {
    const statement = `subscription OnCreateTags($filter: ModelSubscriptionTagsFilterInput) {
        onCreateTags(filter: $filter) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTags">>
    >;
  }

  OnUpdateTagsListener(
    filter?: ModelSubscriptionTagsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTags">>
  > {
    const statement = `subscription OnUpdateTags($filter: ModelSubscriptionTagsFilterInput) {
        onUpdateTags(filter: $filter) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTags">>
    >;
  }

  OnDeleteTagsListener(
    filter?: ModelSubscriptionTagsFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTags">>
  > {
    const statement = `subscription OnDeleteTags($filter: ModelSubscriptionTagsFilterInput) {
        onDeleteTags(filter: $filter) {
          __typename
          id
          nome
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTags">>
    >;
  }

  OnCreateGaleriaListener(
    filter?: ModelSubscriptionGaleriaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateGaleria">>
  > {
    const statement = `subscription OnCreateGaleria($filter: ModelSubscriptionGaleriaFilterInput) {
        onCreateGaleria(filter: $filter) {
          __typename
          id
          imagem
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateGaleria">>
    >;
  }

  OnUpdateGaleriaListener(
    filter?: ModelSubscriptionGaleriaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateGaleria">>
  > {
    const statement = `subscription OnUpdateGaleria($filter: ModelSubscriptionGaleriaFilterInput) {
        onUpdateGaleria(filter: $filter) {
          __typename
          id
          imagem
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateGaleria">>
    >;
  }

  OnDeleteGaleriaListener(
    filter?: ModelSubscriptionGaleriaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteGaleria">>
  > {
    const statement = `subscription OnDeleteGaleria($filter: ModelSubscriptionGaleriaFilterInput) {
        onDeleteGaleria(filter: $filter) {
          __typename
          id
          imagem
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return this.client.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteGaleria">>
    >;
  }
}
 */
}
