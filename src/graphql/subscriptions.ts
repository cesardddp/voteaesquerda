/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDepEstadual = /* GraphQL */ `
  subscription OnCreateDepEstadual {
    onCreateDepEstadual {
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
export const onUpdateDepEstadual = /* GraphQL */ `
  subscription OnUpdateDepEstadual {
    onUpdateDepEstadual {
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
export const onDeleteDepEstadual = /* GraphQL */ `
  subscription OnDeleteDepEstadual {
    onDeleteDepEstadual {
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
export const onCreateSenado = /* GraphQL */ `
  subscription OnCreateSenado {
    onCreateSenado {
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
export const onUpdateSenado = /* GraphQL */ `
  subscription OnUpdateSenado {
    onUpdateSenado {
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
export const onDeleteSenado = /* GraphQL */ `
  subscription OnDeleteSenado {
    onDeleteSenado {
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
export const onCreateGovEstadual = /* GraphQL */ `
  subscription OnCreateGovEstadual {
    onCreateGovEstadual {
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
export const onUpdateGovEstadual = /* GraphQL */ `
  subscription OnUpdateGovEstadual {
    onUpdateGovEstadual {
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
export const onDeleteGovEstadual = /* GraphQL */ `
  subscription OnDeleteGovEstadual {
    onDeleteGovEstadual {
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
export const onCreateDepFederal = /* GraphQL */ `
  subscription OnCreateDepFederal {
    onCreateDepFederal {
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
export const onUpdateDepFederal = /* GraphQL */ `
  subscription OnUpdateDepFederal {
    onUpdateDepFederal {
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
export const onDeleteDepFederal = /* GraphQL */ `
  subscription OnDeleteDepFederal {
    onDeleteDepFederal {
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
export const onCreateEstado = /* GraphQL */ `
  subscription OnCreateEstado {
    onCreateEstado {
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
export const onUpdateEstado = /* GraphQL */ `
  subscription OnUpdateEstado {
    onUpdateEstado {
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
export const onDeleteEstado = /* GraphQL */ `
  subscription OnDeleteEstado {
    onDeleteEstado {
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
