<script setup lang="ts">
  import { estados } from "./API";
  import { ref } from "vue";
  import FormDepE from "./components/formDepE.vue";
  
  import { criaEstado, pegaEstado } from "./service";
  import { Estado } from "./API";
  import awsconfig from "./aws-exports";
  import { Amplify, API, graphqlOperation } from 'aws-amplify';
  import FormDepF from "./components/formDepF.vue";
  import GovEstadual from "./components/GovEstadual.vue";
  import Senado from "./components/senado.vue";
  
  Amplify.configure(awsconfig);
  
  
  const estados_lista = ref(Object.values(estados).sort())
  
  const estadosSliceLG = estados_lista.value.slice(0, 26)
  const estadosSliceMD = [estados_lista.value.slice(0, 26 / 2), estados_lista.value.slice(26 / 2)]
  const lengthEstados = estados_lista.value.length;
  const lengthdivisor = 4;
  const med = lengthEstados / lengthdivisor;
  const estadosSliceSM = [
    estados_lista.value.slice(0, med),
    estados_lista.value.slice(med, med + (med * 1)),
    estados_lista.value.slice(med + (med * 1), med + (med * 2)),
    estados_lista.value.slice(med + (med * 2), med + (med * 3))
  
  ]
  const estado_selecionado = ref<Estado>({
    __typename: "Estado",
    uf: estados.AC,
    depEstadual: null,
    depFederal: null,
    govEstadual: null,
    senadores: null,
    createdAt: "",
    updatedAt: "",
  })
  
  const getEstado = (uf_estado: string) => {
    pegaEstado(
      {
        uf: {
          eq: uf_estado as estados
        }
      }
  
    ).then(est => estado_selecionado.value = est)
  }
  // for (let estado of estados_lista.value) {
  //   criaEstado({
  //     uf: estado,
  //   }).then(x=>{
  //     console.log(x)
  //   })
  // }
  enum tipoEnum {
    FormDepE = "FormDepE",
    FormDepF = "FormDepF",
    GovEstadual = "GovEstadual",
    Senado = "Senado"
  }
  const tipo = ref<tipoEnum>()
  </script>
  
  <template>
    <div class="container">
  
  
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <button @click="tipo=tipoEnum.FormDepE" type="button" class="m-1 btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            +FormDepE
          </button>
        </li>
        <li class="nav-item">
          <button @click="tipo=tipoEnum.FormDepF" type="button" class="m-1 btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            +FormDepF
          </button>
        </li>
        <li class="nav-item">
          <button @click="tipo=tipoEnum.GovEstadual" type="button" class="m-1 btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            +GovEstadual
          </button>
        </li>
        <li class="nav-item">
          <button @click="tipo=tipoEnum.Senado" type="button" class="m-1 btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            +Senado
          </button>
        </li>
      </ul>
  
      <div class="d-flex justify-content-center m-5">
        <ul class="list-group list-group-horizontal">
          <div v-for="estados_sliced in estadosSliceSM">
            <li v-for="estado in estados_sliced" class="list-group-item">
              <button class="btn btn-dark btn-sm" @click="getEstado(estado)">
                {{estado}}
              </button>
            </li>
          </div>
        </ul>
      </div>
  
      <div class="d-flex flex-column align-items-center m-5">
        <section>
             
          <h3 class="text-center">Dep. Estadual</h3>
          {{estado_selecionado.depEstadual?.items}}
        </section>
        <section>
  
          <h3 class="text-center">Dep. Federal</h3>
          {{estado_selecionado.depFederal?.items}}
        </section>
        <section>
  
          <h3 class="text-center">Gov. Estado</h3>
          {{estado_selecionado.govEstadual?.items}}
        </section>
        <section>
  
          <h3 class="text-center">Senado</h3>
          {{estado_selecionado.senadores?.items}}
        </section>
  
      </div>
  
      <!-- Button trigger modal -->
  
  
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
  
            <FormDepE v-if="tipo==tipoEnum.FormDepE" />
            <FormDepF v-if="tipo==tipoEnum.FormDepF" />
            <GovEstadual v-if="tipo==tipoEnum.GovEstadual" />
            <Senado v-if="tipo==tipoEnum.Senado" />
  
  
          </div>
        </div>
      </div>
    </div>
  
  </template>
  
  <style scoped>
  
  </style>
  