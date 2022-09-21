/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDepEstadualInput = {
  id?: string | null,
  nome?: string | null,
  foto?: string | null,
  numero?: number | null,
  partido?: string | null,
  movimentos?: string | null,
  saibaMais?: string | null,
  entrevista?: string | null,
  aprovado?: boolean | null,
  estadoDepEstadualId?: string | null,
};

export type ModelDepEstadualConditionInput = {
  nome?: ModelStringInput | null,
  foto?: ModelStringInput | null,
  numero?: ModelIntInput | null,
  partido?: ModelStringInput | null,
  movimentos?: ModelStringInput | null,
  saibaMais?: ModelStringInput | null,
  entrevista?: ModelStringInput | null,
  aprovado?: ModelBooleanInput | null,
  and?: Array< ModelDepEstadualConditionInput | null > | null,
  or?: Array< ModelDepEstadualConditionInput | null > | null,
  not?: ModelDepEstadualConditionInput | null,
  estadoDepEstadualId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type DepEstadual = {
  __typename: "DepEstadual",
  id: string,
  nome?: string | null,
  foto?: string | null,
  numero?: number | null,
  partido?: string | null,
  movimentos?: string | null,
  saibaMais?: string | null,
  entrevista?: string | null,
  aprovado?: boolean | null,
  createdAt: string,
  updatedAt: string,
  estadoDepEstadualId?: string | null,
};

export type UpdateDepEstadualInput = {
  id: string,
  nome?: string | null,
  foto?: string | null,
  numero?: number | null,
  partido?: string | null,
  movimentos?: string | null,
  saibaMais?: string | null,
  entrevista?: string | null,
  aprovado?: boolean | null,
  estadoDepEstadualId?: string | null,
};

export type DeleteDepEstadualInput = {
  id: string,
};

export type CreateSenadoInput = {
  id?: string | null,
  nome?: string | null,
  foto?: string | null,
  numero?: number | null,
  partido?: string | null,
  movimentos?: string | null,
  saibaMais?: string | null,
  entrevista?: string | null,
  aprovado?: boolean | null,
  estadoSenadoresId?: string | null,
};

export type ModelSenadoConditionInput = {
  nome?: ModelStringInput | null,
  foto?: ModelStringInput | null,
  numero?: ModelIntInput | null,
  partido?: ModelStringInput | null,
  movimentos?: ModelStringInput | null,
  saibaMais?: ModelStringInput | null,
  entrevista?: ModelStringInput | null,
  aprovado?: ModelBooleanInput | null,
  and?: Array< ModelSenadoConditionInput | null > | null,
  or?: Array< ModelSenadoConditionInput | null > | null,
  not?: ModelSenadoConditionInput | null,
  estadoSenadoresId?: ModelIDInput | null,
};

export type Senado = {
  __typename: "Senado",
  id: string,
  nome?: string | null,
  foto?: string | null,
  numero?: number | null,
  partido?: string | null,
  movimentos?: string | null,
  saibaMais?: string | null,
  entrevista?: string | null,
  aprovado?: boolean | null,
  createdAt: string,
  updatedAt: string,
  estadoSenadoresId?: string | null,
};

export type UpdateSenadoInput = {
  id: string,
  nome?: string | null,
  foto?: string | null,
  numero?: number | null,
  partido?: string | null,
  movimentos?: string | null,
  saibaMais?: string | null,
  entrevista?: string | null,
  aprovado?: boolean | null,
  estadoSenadoresId?: string | null,
};

export type DeleteSenadoInput = {
  id: string,
};

export type CreateGovEstadualInput = {
  id?: string | null,
  nome?: string | null,
  foto?: string | null,
  numero?: number | null,
  partido?: string | null,
  movimentos?: string | null,
  saibaMais?: string | null,
  entrevista?: string | null,
  aprovado?: boolean | null,
  estadoGovEstadualId?: string | null,
};

export type ModelGovEstadualConditionInput = {
  nome?: ModelStringInput | null,
  foto?: ModelStringInput | null,
  numero?: ModelIntInput | null,
  partido?: ModelStringInput | null,
  movimentos?: ModelStringInput | null,
  saibaMais?: ModelStringInput | null,
  entrevista?: ModelStringInput | null,
  aprovado?: ModelBooleanInput | null,
  and?: Array< ModelGovEstadualConditionInput | null > | null,
  or?: Array< ModelGovEstadualConditionInput | null > | null,
  not?: ModelGovEstadualConditionInput | null,
  estadoGovEstadualId?: ModelIDInput | null,
};

export type GovEstadual = {
  __typename: "GovEstadual",
  id: string,
  nome?: string | null,
  foto?: string | null,
  numero?: number | null,
  partido?: string | null,
  movimentos?: string | null,
  saibaMais?: string | null,
  entrevista?: string | null,
  aprovado?: boolean | null,
  createdAt: string,
  updatedAt: string,
  estadoGovEstadualId?: string | null,
};

export type UpdateGovEstadualInput = {
  id: string,
  nome?: string | null,
  foto?: string | null,
  numero?: number | null,
  partido?: string | null,
  movimentos?: string | null,
  saibaMais?: string | null,
  entrevista?: string | null,
  aprovado?: boolean | null,
  estadoGovEstadualId?: string | null,
};

export type DeleteGovEstadualInput = {
  id: string,
};

export type CreateDepFederalInput = {
  id?: string | null,
  nome?: string | null,
  foto?: string | null,
  numero?: number | null,
  partido?: string | null,
  movimentos?: string | null,
  saibaMais?: string | null,
  entrevista?: string | null,
  aprovado?: boolean | null,
  estadoDepFederalId?: string | null,
};

export type ModelDepFederalConditionInput = {
  nome?: ModelStringInput | null,
  foto?: ModelStringInput | null,
  numero?: ModelIntInput | null,
  partido?: ModelStringInput | null,
  movimentos?: ModelStringInput | null,
  saibaMais?: ModelStringInput | null,
  entrevista?: ModelStringInput | null,
  aprovado?: ModelBooleanInput | null,
  and?: Array< ModelDepFederalConditionInput | null > | null,
  or?: Array< ModelDepFederalConditionInput | null > | null,
  not?: ModelDepFederalConditionInput | null,
  estadoDepFederalId?: ModelIDInput | null,
};

export type DepFederal = {
  __typename: "DepFederal",
  id: string,
  nome?: string | null,
  foto?: string | null,
  numero?: number | null,
  partido?: string | null,
  movimentos?: string | null,
  saibaMais?: string | null,
  entrevista?: string | null,
  aprovado?: boolean | null,
  createdAt: string,
  updatedAt: string,
  estadoDepFederalId?: string | null,
};

export type UpdateDepFederalInput = {
  id: string,
  nome?: string | null,
  foto?: string | null,
  numero?: number | null,
  partido?: string | null,
  movimentos?: string | null,
  saibaMais?: string | null,
  entrevista?: string | null,
  aprovado?: boolean | null,
  estadoDepFederalId?: string | null,
};

export type DeleteDepFederalInput = {
  id: string,
};

export type CreateEstadoInput = {
  uf: estados,
};

export enum estados {
  GO = "GO",
  ES = "ES",
  SP = "SP",
  RJ = "RJ",
  DF = "DF",
  SC = "SC",
  AL = "AL",
  BA = "BA",
  CE = "CE",
  MA = "MA",
  PB = "PB",
  PE = "PE",
  PI = "PI",
  RN = "RN",
  SE = "SE",
  RS = "RS",
  PR = "PR",
  RR = "RR",
  RO = "RO",
  TO = "TO",
  PA = "PA",
  MG = "MG",
  AC = "AC",
  AP = "AP",
  AM = "AM",
  MT = "MT",
  MS = "MS",
}


export type ModelEstadoConditionInput = {
  and?: Array< ModelEstadoConditionInput | null > | null,
  or?: Array< ModelEstadoConditionInput | null > | null,
  not?: ModelEstadoConditionInput | null,
};

export type Estado = {
  __typename: "Estado",
  uf: estados,
  depEstadual?: ModelDepEstadualConnection | null,
  depFederal?: ModelDepFederalConnection | null,
  govEstadual?: ModelGovEstadualConnection | null,
  senadores?: ModelSenadoConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelDepEstadualConnection = {
  __typename: "ModelDepEstadualConnection",
  items:  Array<DepEstadual | null >,
  nextToken?: string | null,
};

export type ModelDepFederalConnection = {
  __typename: "ModelDepFederalConnection",
  items:  Array<DepFederal | null >,
  nextToken?: string | null,
};

export type ModelGovEstadualConnection = {
  __typename: "ModelGovEstadualConnection",
  items:  Array<GovEstadual | null >,
  nextToken?: string | null,
};

export type ModelSenadoConnection = {
  __typename: "ModelSenadoConnection",
  items:  Array<Senado | null >,
  nextToken?: string | null,
};

export type UpdateEstadoInput = {
  uf: estados,
};

export type DeleteEstadoInput = {
  uf: estados,
};

export type ModelDepEstadualFilterInput = {
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  foto?: ModelStringInput | null,
  numero?: ModelIntInput | null,
  partido?: ModelStringInput | null,
  movimentos?: ModelStringInput | null,
  saibaMais?: ModelStringInput | null,
  entrevista?: ModelStringInput | null,
  aprovado?: ModelBooleanInput | null,
  and?: Array< ModelDepEstadualFilterInput | null > | null,
  or?: Array< ModelDepEstadualFilterInput | null > | null,
  not?: ModelDepEstadualFilterInput | null,
  estadoDepEstadualId?: ModelIDInput | null,
};

export type ModelSenadoFilterInput = {
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  foto?: ModelStringInput | null,
  numero?: ModelIntInput | null,
  partido?: ModelStringInput | null,
  movimentos?: ModelStringInput | null,
  saibaMais?: ModelStringInput | null,
  entrevista?: ModelStringInput | null,
  aprovado?: ModelBooleanInput | null,
  and?: Array< ModelSenadoFilterInput | null > | null,
  or?: Array< ModelSenadoFilterInput | null > | null,
  not?: ModelSenadoFilterInput | null,
  estadoSenadoresId?: ModelIDInput | null,
};

export type ModelGovEstadualFilterInput = {
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  foto?: ModelStringInput | null,
  numero?: ModelIntInput | null,
  partido?: ModelStringInput | null,
  movimentos?: ModelStringInput | null,
  saibaMais?: ModelStringInput | null,
  entrevista?: ModelStringInput | null,
  aprovado?: ModelBooleanInput | null,
  and?: Array< ModelGovEstadualFilterInput | null > | null,
  or?: Array< ModelGovEstadualFilterInput | null > | null,
  not?: ModelGovEstadualFilterInput | null,
  estadoGovEstadualId?: ModelIDInput | null,
};

export type ModelDepFederalFilterInput = {
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  foto?: ModelStringInput | null,
  numero?: ModelIntInput | null,
  partido?: ModelStringInput | null,
  movimentos?: ModelStringInput | null,
  saibaMais?: ModelStringInput | null,
  entrevista?: ModelStringInput | null,
  aprovado?: ModelBooleanInput | null,
  and?: Array< ModelDepFederalFilterInput | null > | null,
  or?: Array< ModelDepFederalFilterInput | null > | null,
  not?: ModelDepFederalFilterInput | null,
  estadoDepFederalId?: ModelIDInput | null,
};

export type ModelEstadoFilterInput = {
  uf?: ModelestadosInput | null,
  and?: Array< ModelEstadoFilterInput | null > | null,
  or?: Array< ModelEstadoFilterInput | null > | null,
  not?: ModelEstadoFilterInput | null,
};

export type ModelestadosInput = {
  eq?: estados | null,
  ne?: estados | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelEstadoConnection = {
  __typename: "ModelEstadoConnection",
  items:  Array<Estado | null >,
  nextToken?: string | null,
};

export type CreateDepEstadualMutationVariables = {
  input: CreateDepEstadualInput,
  condition?: ModelDepEstadualConditionInput | null,
};

export type CreateDepEstadualMutation = {
  createDepEstadual?:  {
    __typename: "DepEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepEstadualId?: string | null,
  } | null,
};

export type UpdateDepEstadualMutationVariables = {
  input: UpdateDepEstadualInput,
  condition?: ModelDepEstadualConditionInput | null,
};

export type UpdateDepEstadualMutation = {
  updateDepEstadual?:  {
    __typename: "DepEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepEstadualId?: string | null,
  } | null,
};

export type DeleteDepEstadualMutationVariables = {
  input: DeleteDepEstadualInput,
  condition?: ModelDepEstadualConditionInput | null,
};

export type DeleteDepEstadualMutation = {
  deleteDepEstadual?:  {
    __typename: "DepEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepEstadualId?: string | null,
  } | null,
};

export type CreateSenadoMutationVariables = {
  input: CreateSenadoInput,
  condition?: ModelSenadoConditionInput | null,
};

export type CreateSenadoMutation = {
  createSenado?:  {
    __typename: "Senado",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoSenadoresId?: string | null,
  } | null,
};

export type UpdateSenadoMutationVariables = {
  input: UpdateSenadoInput,
  condition?: ModelSenadoConditionInput | null,
};

export type UpdateSenadoMutation = {
  updateSenado?:  {
    __typename: "Senado",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoSenadoresId?: string | null,
  } | null,
};

export type DeleteSenadoMutationVariables = {
  input: DeleteSenadoInput,
  condition?: ModelSenadoConditionInput | null,
};

export type DeleteSenadoMutation = {
  deleteSenado?:  {
    __typename: "Senado",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoSenadoresId?: string | null,
  } | null,
};

export type CreateGovEstadualMutationVariables = {
  input: CreateGovEstadualInput,
  condition?: ModelGovEstadualConditionInput | null,
};

export type CreateGovEstadualMutation = {
  createGovEstadual?:  {
    __typename: "GovEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoGovEstadualId?: string | null,
  } | null,
};

export type UpdateGovEstadualMutationVariables = {
  input: UpdateGovEstadualInput,
  condition?: ModelGovEstadualConditionInput | null,
};

export type UpdateGovEstadualMutation = {
  updateGovEstadual?:  {
    __typename: "GovEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoGovEstadualId?: string | null,
  } | null,
};

export type DeleteGovEstadualMutationVariables = {
  input: DeleteGovEstadualInput,
  condition?: ModelGovEstadualConditionInput | null,
};

export type DeleteGovEstadualMutation = {
  deleteGovEstadual?:  {
    __typename: "GovEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoGovEstadualId?: string | null,
  } | null,
};

export type CreateDepFederalMutationVariables = {
  input: CreateDepFederalInput,
  condition?: ModelDepFederalConditionInput | null,
};

export type CreateDepFederalMutation = {
  createDepFederal?:  {
    __typename: "DepFederal",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepFederalId?: string | null,
  } | null,
};

export type UpdateDepFederalMutationVariables = {
  input: UpdateDepFederalInput,
  condition?: ModelDepFederalConditionInput | null,
};

export type UpdateDepFederalMutation = {
  updateDepFederal?:  {
    __typename: "DepFederal",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepFederalId?: string | null,
  } | null,
};

export type DeleteDepFederalMutationVariables = {
  input: DeleteDepFederalInput,
  condition?: ModelDepFederalConditionInput | null,
};

export type DeleteDepFederalMutation = {
  deleteDepFederal?:  {
    __typename: "DepFederal",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepFederalId?: string | null,
  } | null,
};

export type CreateEstadoMutationVariables = {
  input: CreateEstadoInput,
  condition?: ModelEstadoConditionInput | null,
};

export type CreateEstadoMutation = {
  createEstado?:  {
    __typename: "Estado",
    uf: estados,
    depEstadual?:  {
      __typename: "ModelDepEstadualConnection",
      items:  Array< {
        __typename: "DepEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    depFederal?:  {
      __typename: "ModelDepFederalConnection",
      items:  Array< {
        __typename: "DepFederal",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepFederalId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    govEstadual?:  {
      __typename: "ModelGovEstadualConnection",
      items:  Array< {
        __typename: "GovEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoGovEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    senadores?:  {
      __typename: "ModelSenadoConnection",
      items:  Array< {
        __typename: "Senado",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoSenadoresId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEstadoMutationVariables = {
  input: UpdateEstadoInput,
  condition?: ModelEstadoConditionInput | null,
};

export type UpdateEstadoMutation = {
  updateEstado?:  {
    __typename: "Estado",
    uf: estados,
    depEstadual?:  {
      __typename: "ModelDepEstadualConnection",
      items:  Array< {
        __typename: "DepEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    depFederal?:  {
      __typename: "ModelDepFederalConnection",
      items:  Array< {
        __typename: "DepFederal",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepFederalId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    govEstadual?:  {
      __typename: "ModelGovEstadualConnection",
      items:  Array< {
        __typename: "GovEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoGovEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    senadores?:  {
      __typename: "ModelSenadoConnection",
      items:  Array< {
        __typename: "Senado",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoSenadoresId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEstadoMutationVariables = {
  input: DeleteEstadoInput,
  condition?: ModelEstadoConditionInput | null,
};

export type DeleteEstadoMutation = {
  deleteEstado?:  {
    __typename: "Estado",
    uf: estados,
    depEstadual?:  {
      __typename: "ModelDepEstadualConnection",
      items:  Array< {
        __typename: "DepEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    depFederal?:  {
      __typename: "ModelDepFederalConnection",
      items:  Array< {
        __typename: "DepFederal",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepFederalId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    govEstadual?:  {
      __typename: "ModelGovEstadualConnection",
      items:  Array< {
        __typename: "GovEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoGovEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    senadores?:  {
      __typename: "ModelSenadoConnection",
      items:  Array< {
        __typename: "Senado",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoSenadoresId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDepEstadualQueryVariables = {
  id: string,
};

export type GetDepEstadualQuery = {
  getDepEstadual?:  {
    __typename: "DepEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepEstadualId?: string | null,
  } | null,
};

export type ListDepEstadualsQueryVariables = {
  filter?: ModelDepEstadualFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepEstadualsQuery = {
  listDepEstaduals?:  {
    __typename: "ModelDepEstadualConnection",
    items:  Array< {
      __typename: "DepEstadual",
      id: string,
      nome?: string | null,
      foto?: string | null,
      numero?: number | null,
      partido?: string | null,
      movimentos?: string | null,
      saibaMais?: string | null,
      entrevista?: string | null,
      aprovado?: boolean | null,
      createdAt: string,
      updatedAt: string,
      estadoDepEstadualId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSenadoQueryVariables = {
  id: string,
};

export type GetSenadoQuery = {
  getSenado?:  {
    __typename: "Senado",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoSenadoresId?: string | null,
  } | null,
};

export type ListSenadosQueryVariables = {
  filter?: ModelSenadoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSenadosQuery = {
  listSenados?:  {
    __typename: "ModelSenadoConnection",
    items:  Array< {
      __typename: "Senado",
      id: string,
      nome?: string | null,
      foto?: string | null,
      numero?: number | null,
      partido?: string | null,
      movimentos?: string | null,
      saibaMais?: string | null,
      entrevista?: string | null,
      aprovado?: boolean | null,
      createdAt: string,
      updatedAt: string,
      estadoSenadoresId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGovEstadualQueryVariables = {
  id: string,
};

export type GetGovEstadualQuery = {
  getGovEstadual?:  {
    __typename: "GovEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoGovEstadualId?: string | null,
  } | null,
};

export type ListGovEstadualsQueryVariables = {
  filter?: ModelGovEstadualFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGovEstadualsQuery = {
  listGovEstaduals?:  {
    __typename: "ModelGovEstadualConnection",
    items:  Array< {
      __typename: "GovEstadual",
      id: string,
      nome?: string | null,
      foto?: string | null,
      numero?: number | null,
      partido?: string | null,
      movimentos?: string | null,
      saibaMais?: string | null,
      entrevista?: string | null,
      aprovado?: boolean | null,
      createdAt: string,
      updatedAt: string,
      estadoGovEstadualId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDepFederalQueryVariables = {
  id: string,
};

export type GetDepFederalQuery = {
  getDepFederal?:  {
    __typename: "DepFederal",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepFederalId?: string | null,
  } | null,
};

export type ListDepFederalsQueryVariables = {
  filter?: ModelDepFederalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepFederalsQuery = {
  listDepFederals?:  {
    __typename: "ModelDepFederalConnection",
    items:  Array< {
      __typename: "DepFederal",
      id: string,
      nome?: string | null,
      foto?: string | null,
      numero?: number | null,
      partido?: string | null,
      movimentos?: string | null,
      saibaMais?: string | null,
      entrevista?: string | null,
      aprovado?: boolean | null,
      createdAt: string,
      updatedAt: string,
      estadoDepFederalId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEstadoQueryVariables = {
  uf: estados,
};

export type GetEstadoQuery = {
  getEstado?:  {
    __typename: "Estado",
    uf: estados,
    depEstadual?:  {
      __typename: "ModelDepEstadualConnection",
      items:  Array< {
        __typename: "DepEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    depFederal?:  {
      __typename: "ModelDepFederalConnection",
      items:  Array< {
        __typename: "DepFederal",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepFederalId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    govEstadual?:  {
      __typename: "ModelGovEstadualConnection",
      items:  Array< {
        __typename: "GovEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoGovEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    senadores?:  {
      __typename: "ModelSenadoConnection",
      items:  Array< {
        __typename: "Senado",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoSenadoresId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEstadosQueryVariables = {
  uf?: estados | null,
  filter?: ModelEstadoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEstadosQuery = {
  listEstados?:  {
    __typename: "ModelEstadoConnection",
    items:  Array< {
      __typename: "Estado",
      uf: estados,
      depEstadual?:  {
        __typename: "ModelDepEstadualConnection",
        nextToken?: string | null,
      } | null,
      depFederal?:  {
        __typename: "ModelDepFederalConnection",
        nextToken?: string | null,
      } | null,
      govEstadual?:  {
        __typename: "ModelGovEstadualConnection",
        nextToken?: string | null,
      } | null,
      senadores?:  {
        __typename: "ModelSenadoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDepEstadualSubscription = {
  onCreateDepEstadual?:  {
    __typename: "DepEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepEstadualId?: string | null,
  } | null,
};

export type OnUpdateDepEstadualSubscription = {
  onUpdateDepEstadual?:  {
    __typename: "DepEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepEstadualId?: string | null,
  } | null,
};

export type OnDeleteDepEstadualSubscription = {
  onDeleteDepEstadual?:  {
    __typename: "DepEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepEstadualId?: string | null,
  } | null,
};

export type OnCreateSenadoSubscription = {
  onCreateSenado?:  {
    __typename: "Senado",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoSenadoresId?: string | null,
  } | null,
};

export type OnUpdateSenadoSubscription = {
  onUpdateSenado?:  {
    __typename: "Senado",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoSenadoresId?: string | null,
  } | null,
};

export type OnDeleteSenadoSubscription = {
  onDeleteSenado?:  {
    __typename: "Senado",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoSenadoresId?: string | null,
  } | null,
};

export type OnCreateGovEstadualSubscription = {
  onCreateGovEstadual?:  {
    __typename: "GovEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoGovEstadualId?: string | null,
  } | null,
};

export type OnUpdateGovEstadualSubscription = {
  onUpdateGovEstadual?:  {
    __typename: "GovEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoGovEstadualId?: string | null,
  } | null,
};

export type OnDeleteGovEstadualSubscription = {
  onDeleteGovEstadual?:  {
    __typename: "GovEstadual",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoGovEstadualId?: string | null,
  } | null,
};

export type OnCreateDepFederalSubscription = {
  onCreateDepFederal?:  {
    __typename: "DepFederal",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepFederalId?: string | null,
  } | null,
};

export type OnUpdateDepFederalSubscription = {
  onUpdateDepFederal?:  {
    __typename: "DepFederal",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepFederalId?: string | null,
  } | null,
};

export type OnDeleteDepFederalSubscription = {
  onDeleteDepFederal?:  {
    __typename: "DepFederal",
    id: string,
    nome?: string | null,
    foto?: string | null,
    numero?: number | null,
    partido?: string | null,
    movimentos?: string | null,
    saibaMais?: string | null,
    entrevista?: string | null,
    aprovado?: boolean | null,
    createdAt: string,
    updatedAt: string,
    estadoDepFederalId?: string | null,
  } | null,
};

export type OnCreateEstadoSubscription = {
  onCreateEstado?:  {
    __typename: "Estado",
    uf: estados,
    depEstadual?:  {
      __typename: "ModelDepEstadualConnection",
      items:  Array< {
        __typename: "DepEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    depFederal?:  {
      __typename: "ModelDepFederalConnection",
      items:  Array< {
        __typename: "DepFederal",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepFederalId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    govEstadual?:  {
      __typename: "ModelGovEstadualConnection",
      items:  Array< {
        __typename: "GovEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoGovEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    senadores?:  {
      __typename: "ModelSenadoConnection",
      items:  Array< {
        __typename: "Senado",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoSenadoresId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEstadoSubscription = {
  onUpdateEstado?:  {
    __typename: "Estado",
    uf: estados,
    depEstadual?:  {
      __typename: "ModelDepEstadualConnection",
      items:  Array< {
        __typename: "DepEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    depFederal?:  {
      __typename: "ModelDepFederalConnection",
      items:  Array< {
        __typename: "DepFederal",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepFederalId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    govEstadual?:  {
      __typename: "ModelGovEstadualConnection",
      items:  Array< {
        __typename: "GovEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoGovEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    senadores?:  {
      __typename: "ModelSenadoConnection",
      items:  Array< {
        __typename: "Senado",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoSenadoresId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEstadoSubscription = {
  onDeleteEstado?:  {
    __typename: "Estado",
    uf: estados,
    depEstadual?:  {
      __typename: "ModelDepEstadualConnection",
      items:  Array< {
        __typename: "DepEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    depFederal?:  {
      __typename: "ModelDepFederalConnection",
      items:  Array< {
        __typename: "DepFederal",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoDepFederalId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    govEstadual?:  {
      __typename: "ModelGovEstadualConnection",
      items:  Array< {
        __typename: "GovEstadual",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoGovEstadualId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    senadores?:  {
      __typename: "ModelSenadoConnection",
      items:  Array< {
        __typename: "Senado",
        id: string,
        nome?: string | null,
        foto?: string | null,
        numero?: number | null,
        partido?: string | null,
        movimentos?: string | null,
        saibaMais?: string | null,
        entrevista?: string | null,
        aprovado?: boolean | null,
        createdAt: string,
        updatedAt: string,
        estadoSenadoresId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
