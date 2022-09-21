/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDepEstadual = /* GraphQL */ `
  mutation CreateDepEstadual(
    $input: CreateDepEstadualInput!
    $condition: ModelDepEstadualConditionInput
  ) {
    createDepEstadual(input: $input, condition: $condition) {
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
export const updateDepEstadual = /* GraphQL */ `
  mutation UpdateDepEstadual(
    $input: UpdateDepEstadualInput!
    $condition: ModelDepEstadualConditionInput
  ) {
    updateDepEstadual(input: $input, condition: $condition) {
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
export const deleteDepEstadual = /* GraphQL */ `
  mutation DeleteDepEstadual(
    $input: DeleteDepEstadualInput!
    $condition: ModelDepEstadualConditionInput
  ) {
    deleteDepEstadual(input: $input, condition: $condition) {
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
export const createSenado = /* GraphQL */ `
  mutation CreateSenado(
    $input: CreateSenadoInput!
    $condition: ModelSenadoConditionInput
  ) {
    createSenado(input: $input, condition: $condition) {
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
export const updateSenado = /* GraphQL */ `
  mutation UpdateSenado(
    $input: UpdateSenadoInput!
    $condition: ModelSenadoConditionInput
  ) {
    updateSenado(input: $input, condition: $condition) {
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
export const deleteSenado = /* GraphQL */ `
  mutation DeleteSenado(
    $input: DeleteSenadoInput!
    $condition: ModelSenadoConditionInput
  ) {
    deleteSenado(input: $input, condition: $condition) {
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
export const createGovEstadual = /* GraphQL */ `
  mutation CreateGovEstadual(
    $input: CreateGovEstadualInput!
    $condition: ModelGovEstadualConditionInput
  ) {
    createGovEstadual(input: $input, condition: $condition) {
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
export const updateGovEstadual = /* GraphQL */ `
  mutation UpdateGovEstadual(
    $input: UpdateGovEstadualInput!
    $condition: ModelGovEstadualConditionInput
  ) {
    updateGovEstadual(input: $input, condition: $condition) {
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
export const deleteGovEstadual = /* GraphQL */ `
  mutation DeleteGovEstadual(
    $input: DeleteGovEstadualInput!
    $condition: ModelGovEstadualConditionInput
  ) {
    deleteGovEstadual(input: $input, condition: $condition) {
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
export const createDepFederal = /* GraphQL */ `
  mutation CreateDepFederal(
    $input: CreateDepFederalInput!
    $condition: ModelDepFederalConditionInput
  ) {
    createDepFederal(input: $input, condition: $condition) {
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
export const updateDepFederal = /* GraphQL */ `
  mutation UpdateDepFederal(
    $input: UpdateDepFederalInput!
    $condition: ModelDepFederalConditionInput
  ) {
    updateDepFederal(input: $input, condition: $condition) {
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
export const deleteDepFederal = /* GraphQL */ `
  mutation DeleteDepFederal(
    $input: DeleteDepFederalInput!
    $condition: ModelDepFederalConditionInput
  ) {
    deleteDepFederal(input: $input, condition: $condition) {
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
export const createEstado = /* GraphQL */ `
  mutation CreateEstado(
    $input: CreateEstadoInput!
    $condition: ModelEstadoConditionInput
  ) {
    createEstado(input: $input, condition: $condition) {
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
export const updateEstado = /* GraphQL */ `
  mutation UpdateEstado(
    $input: UpdateEstadoInput!
    $condition: ModelEstadoConditionInput
  ) {
    updateEstado(input: $input, condition: $condition) {
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
export const deleteEstado = /* GraphQL */ `
  mutation DeleteEstado(
    $input: DeleteEstadoInput!
    $condition: ModelEstadoConditionInput
  ) {
    deleteEstado(input: $input, condition: $condition) {
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
