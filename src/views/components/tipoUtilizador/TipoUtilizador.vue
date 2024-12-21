<template>
   <div class="mt-5 px-5">
    <h1 class="title-page"> Utilizador </h1>
    <div>
        <b-alert
            :show="alert.showAlert"
            :variant="alert.variant"
            class="custom-alert"
        >
            {{alert.text}}
        </b-alert>
    </div>
    <b-form>
        <div class="accordion" role="tablist">
            <b-card no-body>
                <b-card-header header-tag="header" block v-b-toggle.accordion-1 class="p-1" role="tab">
                    <b-row>
                        <b-col class="text-left"> Tipo Utilizador </b-col>
                        <b-col class="text-right"> <i class="fa-solid fa-minus"></i> </b-col>
                    </b-row>
                </b-card-header>
                <b-collapse id="accordion-1" visible role="tabpanel">
                    <b-card-body class="px-4 ml-4 py-4">
                        <CustomCheckbox
                            :options="checkboxOptions"
                            v-model="selectedCheckboxes"
                            @checkbox-changed="handleCheckboxChange"
                        />
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body>
                <b-card-header header-tag="header" block v-b-toggle.accordion-2 class="p-1" role="tab">
                    <b-row>
                        <b-col class="text-left"> Contacto </b-col>
                        <b-col class="text-right"> <i class="fa-solid fa-minus"></i> </b-col>
                    </b-row>
                </b-card-header>
                <b-collapse id="accordion-2" visible role="tabpanel">
                    <b-card-body>
                        <b-row>
                            <b-col cols="4">
                                <div class="container">
                                    <label for="email">Email</label>
                                    <b-form-input type="email" id="email" name="email"  v-model="email" placeholder="exemplo@dominio.com"></b-form-input>
                                </div>
                            </b-col>
                            <b-col cols="4">
                                <div class="container">
                                    <label for="password">Palavra-passe</label>
                                    <b-form-input type="password" id="password" name="password" v-model="password" placeholder="Palavra-passe"></b-form-input>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="4">
                                <div class="container">
                                    <label for="phone">Telefone</label>
                                    <b-form-input type="text" id="phone" name="phone" v-model="phone" placeholder="+351 999 999 999"></b-form-input>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
        <div class="mt-5 d-flex justify-content-end">
            <b-button @click="onReset" pill variant="outline-secondary" class="custom-button button-cancel">Cancelar</b-button>
            <b-button @click="onSubmit" pill variant="primary" class="custom-button button-save">GUARDAR</b-button>
        </div>
    </b-form>
</div>
</template>
<script>
import CustomCheckbox from '@/views/components/customCheckbox/CustomCheckbox.vue'
export default {
  name: 'TipoUtilizador',
  components:{
    CustomCheckbox
  },
  data() {
    return {
      checkboxOptions: [
        { label: "Project Manager", value: "pm" },
        { label: "Developer", value: "dev" },
        { label: "Architect", value: "arch" },
      ],
      selectedCheckboxes: [],
      email: '',
      password: '',
      phone: '',
      alert:{
        showAlert: false,
        variant: 'success',
        text: ''
      },
      roleMap: {
        pm: "Project Manager",
        dev: "Developer",
        arch: "Architect",
      },
    };
  },

  methods:{
    onSubmit(){
      if(this.verifyInputs()){
        const utilizadoresExistentes = JSON.parse(localStorage.getItem("utilizadores")) || [];

        const idUtilizador = utilizadoresExistentes.length + 1;

        const novoUtilizador = {
            idUtilizador: idUtilizador,
            tipoUtilizador: this.selectedCheckboxes.map(role => this.roleMap[role]),
            emailUtilizador: this.email,
            phoneUtilizador: this.phone,
        };

        utilizadoresExistentes.push(novoUtilizador);

        localStorage.setItem("utilizadores", JSON.stringify(utilizadoresExistentes));

        const utilizadoresInserido = JSON.parse(localStorage.getItem("utilizadores")) || [];

        const ultimoUtilizador = utilizadoresInserido[utilizadoresInserido.length - 1];

        if(ultimoUtilizador.idUtilizador === idUtilizador){
          this.resetForm();
          this.alert.showAlert = true;
          this.alert.text = 'Cadastro  efetivado com sucesso!';
          this.alert.variant = 'success';
          setTimeout(() => {
            this.alert.showAlert = false;
          }, 1700);
        }else{
          this.resetForm();
          this.alert.showAlert = true;
          this.alert.text = 'Algo saiu mal, tente novamente!';
          this.alert.variant = 'warning';
          setTimeout(() => {
            this.alert.showAlert = false;
          }, 1700);
        }
      }
    },
    onReset(){
      this.resetForm();
    },
    handleCheckboxChange(value) {
      const index = this.selectedCheckboxes.indexOf(value);
      if (index === -1) {
        this.selectedCheckboxes.push(value);
      } else {
        this.selectedCheckboxes.splice(index, 1);
      }
    },
    resetForm(){
      this.selectedCheckboxes = [];
      this.email = '';
      this.password = '';
      this.phone = '';
    },
    verifyValidEmail(email) {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regexEmail.test(email);
    },
    verifyInputs(){
      if (
        this.selectedCheckboxes.length === 0 ||
        !this.verifyValidEmail(this.email) ||
        this.password === '' ||
        this.phone === ''
      ) {   
        this.alert.showAlert = true;
        this.alert.text = 'Preencha corretamente o formulário!';
        this.alert.variant = 'warning';
        setTimeout(() => {
          this.alert.showAlert = false;
        }, 1700);
        return false;
      }else{
        return true;
      }
    }
  },

};
</script>
<style>
.text-left {
    text-align: left;
    padding: 0 2rem;
    font-size: 18px;
    font-weight: 600;
    color: #333F52;
    line-height: 1.5;
    display: flex;
    align-items: center;
}
.text-right {
    text-align: right;
    padding: 0 2rem;
    font-size: 28px;
    font-weight: 800;
    color: #333F52;
    line-height: 1.5;
    display: flex-end;
    align-items: center;
}
.close-collapse {
    width: 15px;
    height: 8px;
    color: #333F52;
}
.container {
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #5a5a5a;
  margin-bottom: 20px;
}
.container label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #697689;
}
.container input {
  width: 100%;
  padding: 10px 8px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  font-size: 14px;
  color: #333;
  outline: none;
  transition: border-color 0.3s;
}
.container input:focus {
  border-bottom: 1px solid #000;
}
.container input::placeholder {
  color: #ccc;
  font-style: italic;
}
.custom-button {
  display: inline-block;
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-radius: 20px;
  padding: 10px 100px;
  margin: 0 10px;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}
.button-cancel {
  background-color: transparent;
  color: #5a5a5a;
  border: 2px solid #ccc;
}
.button-cancel:hover {
  background-color: #f5f5f5;
  border-color: #b3b3b3;
  color: #b3b3b3;
}
.button-save {
  background-color: #00aaff;
  color: white;
  border: none;
}
.button-save:hover {
  background-color: #008ecc;
}
.custom-alert{
    border: none;
}
</style>