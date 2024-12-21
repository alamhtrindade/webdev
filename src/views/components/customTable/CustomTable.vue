<template>
   <div class="mt-5 px-5">
        <h1 class="title-page mb-5"> Todos Utilizadores </h1>
        <b-table
            id="tableUtilizadores"
            responsive
            hover
            borderless
            :busy.sync="tabela.tabelaOcupada"
            :fields="tabela.fields"
            :items="tabela.items"
            class="custom-table"
        >
            <template #cell(idUtilizador)="row">
                <strong class="custom-row">
                    {{ row.value }}
                </strong>
            </template>
            <template #cell(tipoUtilizador)="row">
                <strong class="custom-row">
                    {{ row.value.join(', ') }}
                </strong>
            </template>
            <template #cell(emailUtilizador)="row">
                <strong class="custom-row">
                    {{ row.value }}
                </strong>
            </template>
            <template #cell(phoneUtilizador)="row">
                <strong class="custom-row"> 
                    {{ row.value }}
                </strong>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
  name: 'CustomTable',
  data () {
    return {
      tabela: {
        semDados: false,
        erroTabela: false,
        tabelaOcupada: false,
        fields: [
          { key: 'idUtilizador', label: 'IDENTIFICAÇÃO',},
          { key: 'tipoUtilizador', label: 'TIPO UTILIZADOR'},
          { key: 'emailUtilizador', label: 'EMAIL'},
          { key: 'phoneUtilizador', label: 'TELEFONE' }
        ],
        items: [],
      },
    };
  },
  
  mounted() {
    this.loadTable();
  },
  methods:{
    loadTable(){
        const utilizadoresExistentes = JSON.parse(localStorage.getItem("utilizadores")) || [];

        this.tabela.items = utilizadoresExistentes;
    }
  }
};
</script>
<style>
.custom-row{
    color: #273142 !important;
    font-family: "Source Sans 3", sans-serif !important;
    font-size: 16px;
    font-weight: 400;
}
</style>