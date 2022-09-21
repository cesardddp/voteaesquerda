/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDepEstadual = /* GraphQL */ `
  query GetDepEstadual($id: ID!) {
    getDepEstadual(id: $id) {
      id
      nome
      foto
      numero
      partido
      movimentos
      saibaMais
      entrevista
      aprovado
      createdAt
      updatedAt
      estadoDepEstadualId
    }
  }
`;
export const listDepEstaduals = /* GraphQL */ `
  query ListDepEstaduals(
    $filter: ModelDepEstadualFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepEstaduals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        foto
        numero
        partido
        movimentos
        saibaMais
        entrevista
        aprovado
        createdAt
        updatedAt
        estadoDepEstadualId
      }
      nextToken
    }
  }
`;
export const getSenado = /* GraphQL */ `
  query GetSenado($id: ID!) {
    getSenado(id: $id) {
      id
      nome
      foto
      numero
      partido
      movimentos
      saibaMais
      entrevista
      aprovado
      createdAt
      updatedAt
      estadoSenadoresId
    }
  }
`;
export const listSenados = /* GraphQL */ `
  query ListSenados(
    $filter: ModelSenadoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSenados(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        foto
        numero
        partido
        movimentos
        saibaMais
        entrevista
        aprovado
        createdAt
        updatedAt
        estadoSenadoresId
      }
      nextToken
    }
  }
`;
export const getGovEstadual = /* GraphQL */ `
  query GetGovEstadual($id: ID!) {
    getGovEstadual(id: $id) {
      id
      nome
      foto
      numero
      partido
      movimentos
      saibaMais
      entrevista
      aprovado
      createdAt
      updatedAt
      estadoGovEstadualId
    }
  }
`;
export const listGovEstaduals = /* GraphQL */ `
  query ListGovEstaduals(
    $filter: ModelGovEstadualFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGovEstaduals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        foto
        numero
        partido
        movimentos
        saibaMais
        entrevista
        aprovado
        createdAt
        updatedAt
        estadoGovEstadualId
      }
      nextToken
    }
  }
`;
export const getDepFederal = /* GraphQL */ `
  query GetDepFederal($id: ID!) {
    getDepFederal(id: $id) {
      id
      nome
      foto
      numero
      partido
      movimentos
      saibaMais
      entrevista
      aprovado
      createdAt
      updatedAt
      estadoDepFederalId
    }
  }
`;
export const listDepFederals = /* GraphQL */ `
  query ListDepFederals(
    $filter: ModelDepFederalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepFederals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        foto
        numero
        partido
        movimentos
        saibaMais
        entrevista
        aprovado
        createdAt
        updatedAt
        estadoDepFederalId
      }
      nextToken
    }
  }
`;
export const getEstado = /* GraphQL */ `
  query GetEstado($uf: estados!) {
    getEstado(uf: $uf) {
      uf
      depEstadual {
        items {
          id
          nome
          foto
          numero
          partido
          movimentos
          saibaMais
          entrevista
          aprovado
          createdAt
          updatedAt
          estadoDepEstadualId
        }
        nextToken
      }
      depFederal {
        items {
          id
          nome
          foto
          numero
          partido
          movimentos
          saibaMais
          entrevista
          aprovado
          createdAt
          updatedAt
          estadoDepFederalId
        }
        nextToken
      }
      govEstadual {
        items {
          id
          nome
          foto
          numero
          partido
          movimentos
          saibaMais
          entrevista
          aprovado
          createdAt
          updatedAt
          estadoGovEstadualId
        }
        nextToken
      }
      senadores {
        items {
          id
          nome
          foto
          numero
          partido
          movimentos
          saibaMais
          entrevista
          aprovado
          createdAt
          updatedAt
          estadoSenadoresId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEstados = /* GraphQL */ `
  query ListEstados(
    $uf: estados
    $filter: ModelEstadoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEstados(
      uf: $uf
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        uf
        depEstadual {
          nextToken
        }
        depFederal {
          nextToken
        }
        govEstadual {
          nextToken
        }
        senadores {
          items {
            id
            nome
            foto
            numero
            partido
            movimentos
            saibaMais
            entrevista
            aprovado
            createdAt
            updatedAt
            estadoSenadoresId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
