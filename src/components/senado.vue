

<script setup lang="ts">
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import { ref } from "vue";
import { CreateDepEstadualInput, CreateSenadoInput, estados, Senado } from "../API";
import { createSenado } from "../graphql/mutations";

const estados_lista = ref(Object.values(estados).sort())
const input = ref<CreateSenadoInput>(
    {
        nome: "",
        foto: "",
        numero: null,
        partido: "",
        movimentos: "",
        saibaMais: "",
        entrevista: "",
        estadoSenadoresId: estados.AC,
    }
)
const cria = async (): Promise<Senado> => {
    const t = await (API.graphql({ query: createSenado, variables: { input: input.value } }) as Promise<
        GraphQLResult<CreateSenadoInput>
    >);
    return t.data as Senado
    //   throw new Error("lista de estado retornada errado ");
};


</script>

<template>
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Senado</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">

        <div class="form-floating mb-3">
            <input v-model="input.nome" type="text" class="form-control" id="floating-nome"
            placeholder="name@example.com">
            <label for="exampleFormControlInput1" name="floating-nome" class="form-label">nome</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="input.foto" type="text" class="form-control" id="floating-foto"
            placeholder="name@example.com">
            <label for="exampleFormControlInput1" name="floating-foto" class="form-label">foto</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model.number="input.numero" type="number" class="form-control" id="floating-numero"
            placeholder="name@example.com">
            <label for="exampleFormControlInput1" name="floating-numero" class="form-label">numero</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="input.partido" type="text" class="form-control" id="floating-partido"
            placeholder="name@example.com">
            <label for="exampleFormControlInput1" name="floating-partido" class="form-label">partido</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="input.movimentos" type="text" class="form-control" id="floating-movimentos"
            placeholder="name@example.com">
            <label for="exampleFormControlInput1" name="floating-movimentos" class="form-label">movimentos</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="input.saibaMais" type="text" class="form-control" id="floating-saibaMais"
            placeholder="name@example.com">
            <label for="exampleFormControlInput1" name="floating-saibaMais" class="form-label">saibaMais</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="input.entrevista" type="text" class="form-control" id="floating-entrevista"
            placeholder="name@example.com">
            <label for="exampleFormControlInput1" name="floating-entrevista" class="form-label">entrevista</label>
        </div>

        <select class="form-select" v-model="input.estadoSenadoresId">
            <!-- <option selected>Selecione um estado</option> -->
            <option v-for="estado in estados_lista" :value="estado">{{estado}}</option>
        </select>
    </div>
    <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button> -->
        <button class="btn btn-success" @click="cria">cria </button>
    </div>
</template>