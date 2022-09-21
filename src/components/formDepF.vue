

<script setup lang="ts">
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import { ref } from "vue";
import { CreateDepFederalInput,  DepFederal, estados } from "../API";
import { createDepFederal } from "../graphql/mutations";

const estados_lista = ref(Object.values(estados).sort())
const input = ref<CreateDepFederalInput>(
    {
        nome: "",
        foto: "",
        numero: null,
        partido: "",
        movimentos: "",
        saibaMais: "",
        entrevista: "",
        estadoDepFederalId: estados.AC,
    }
)

const cria = async (): Promise<DepFederal> => {
  const t = await (API.graphql({ query: createDepFederal,variables:{input:input} }) as Promise<
    GraphQLResult<CreateDepFederalInput>
  >);
    return t.data as DepFederal
  //   throw new Error("lista de estado retornada errado ");
};

</script>

<template>
    <div class="form-floating mb-3">
        <label for="exampleFormControlInput1" name="floating-nome" class="form-label">nome</label>
        <input v-model="input.nome" type="text" class="form-control" id="floating-nome"
            placeholder="name@example.com">
    </div>
    <div class="form-floating mb-3">
        <label for="exampleFormControlInput1" name="floating-foto" class="form-label">foto</label>
        <input v-model="input.foto" type="text" class="form-control" id="floating-foto"
            placeholder="name@example.com">
    </div>
    <div class="form-floating mb-3">
        <label for="exampleFormControlInput1" name="floating-numero" class="form-label">numero</label>
        <input v-model="input.numero" type="number" class="form-control" id="floating-numero"
            placeholder="name@example.com">
    </div>
    <div class="form-floating mb-3">
        <label for="exampleFormControlInput1" name="floating-partido" class="form-label">partido</label>
        <input v-model="input.partido" type="text" class="form-control" id="floating-partido"
            placeholder="name@example.com">
    </div>
    <div class="form-floating mb-3">
        <label for="exampleFormControlInput1" name="floating-movimentos" class="form-label">movimentos</label>
        <input v-model="input.movimentos" type="text" class="form-control" id="floating-movimentos"
            placeholder="name@example.com">
    </div>
    <div class="form-floating mb-3">
        <label for="exampleFormControlInput1" name="floating-saibaMais" class="form-label">saibaMais</label>
        <input v-model="input.saibaMais" type="text" class="form-control" id="floating-saibaMais"
            placeholder="name@example.com">
    </div>
    <div class="form-floating mb-3">
        <label for="exampleFormControlInput1" name="floating-entrevista" class="form-label">entrevista</label>
        <input v-model="input.entrevista" type="text" class="form-control" id="floating-entrevista"
            placeholder="name@example.com">
    </div>

    <select class="form-select" v-model="input.estadoDepFederalId">
        <option selected >Selecione um estado</option>
        <option v-for="estado in estados_lista" value="estado">{{estado}}</option>
    </select>
    <button class="btn btn-success" @click="cria" >cria </button>
</template>