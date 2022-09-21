import { ModelEstadoFilterInput, Estado, ListEstadosQuery, CreateEstadoInput, CreateEstadoMutation } from "./API";
import { listDepEstaduals, listEstados } from "./graphql/queries";
import { GraphQLResult } from "@aws-amplify/api";
import { API } from "aws-amplify";
import { createEstado } from "./graphql/mutations";

export const pegaEstado = async (
  uf: ModelEstadoFilterInput
): Promise<Estado> => {
  const t = await (API.graphql({ query: listaEstados,variables:{filter:uf} }) as Promise<
    GraphQLResult<ListEstadosQuery>
  >);
  if (t.data?.listEstados?.items) {
    if (t.data?.listEstados?.items.length >= 1) {
      const estado = t.data?.listEstados?.items.pop();
      if (estado) {
        return estado as Estado;
      }
    }
  }
  throw new Error("lista de estado retornada errado ");
};
export const criaEstado = async (
  estado_input: CreateEstadoInput
): Promise<Estado> => {
  const t = await (API.graphql({ query: createEstado,variables:{input:estado_input} }) as Promise<
    GraphQLResult<CreateEstadoMutation>
  >);
    return t.data?.createEstado as Estado
  //   throw new Error("lista de estado retornada errado ");
};

const listaEstados = /* GraphQL */ `
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
      nextToken
    }
  }
`;
