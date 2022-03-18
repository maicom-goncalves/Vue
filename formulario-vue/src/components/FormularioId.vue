<template>
  <div id="formularioId">
    <form id="form" >
      <div class="parte-um">
        <div>
          <label for="nome">Nome</label>
          <input id="nameId" type="text" v-model="users.nameId" required />
        </div>
        <div>
          <label for="mae">Nome da mãe</label>
          <input id="mother" type="text" v-model="users.motherId" required />
        </div>
        <div>
          <label for="sobrenome">Sobrenome</label>
          <input
            id="lastnameId"
            type="text"
            v-model="users.lastnameId"
            required
          />
        </div>
        <div>
          <label for="etnos">Etnia</label>
          <input id="etnia" type="text" v-model="users.etnosId" required />
        </div>
        <div>
          <label for="residencia">Aldeia de Residência</label>
          <input id="residence" v-model="users.residenceId" />
        </div>
        <div>
          <label for="city">Município</label>
          <input id="cidade" v-model="users.cityId" />
        </div>
        <div>
          <label for="sus">N° do Cartão SUS</label>
          <input
            id="saudesus"
            type="number"
            value="0"
            v-model="users.cardsusId"
          />
        </div>
      </div>
      <div class="parte-dois">
        <div>
          <label for="nascimento">Nascimento</label>
          <input id="nascimento" type="date" v-model="users.dateId" />
        </div>
        <div>
          <label for="pai">Nome do Pai</label>
          <input id="father" type="text" required v-model="users.fatherId" />
        </div>

        <div>
          <label for="house">Casa</label>
          <input id="casa" type="number" v-model="users.houseId" required />
        </div>
        <hr />
        <div>
          <label for="sex">Sexo</label>
          <input id="genero" />
        </div>
        <div>
          <label for="altura">N° da casa</label>
          <input
            id="altura"
            type="number"
            value="0"
            v-model="users.numbhouseId"
          />
        </div>
        <div>
          <label for="polo">Polo Base</label>
          <input id="polo" type="text" required v-model="users.poleId" />
        </div>
        <div>
          <label for="cpf">CPF</label>
          <input
            id="cpfId"
            type="number"
            value="0"
            required
            v-model="users.cpfId"
          />
        </div>
      </div>
      <div class="parte-tres">
        <button @click="salvar" >Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "formularioId",
  data() {
    return {
      users: [],
      user: {
        name: "",
        lastname: "",
        cpf:"",
        house: "",
        etnos: "",
        mother: "",
        residence: "",
        city: "",
        cardsus: "",
        date: "",
        father: "",
        numbhouse: "",
        pole: "",
      },
      id:null
    };
  },
  methods: {
      limpar() {
        this.user.name= "",
        this.user.lastname= "",
        this.user.cpf="",
        this.user.house= "",
        this.user.etnos="",
        this.user.mother= "",
        this.user.residence= "",
        this.user.city= "",
        this.user.cardsus= "",
        this.user.date= "",
        this.user.father= "",
        this.user.numbhouse= "",
        this.user.pole= "",
        this.id = null;
    },
    carregar(id) {
      this.id = id;
      this.user = { ...this.users[id] };
    },
    excluir(id) {
      this.$http.delete(`/users/${id}.json`).then(() => this.limpar())
    },
    salvar() {
      const metodo = this.id ? 'patch' : 'post'
      const finalUrl = this.id ? `/${this.id}.json` : '.json'
      this.$http[metodo](`/users${finalUrl}`, this.user)
      .then((()=> this.limpar())
        
      );
      console.log('salvo no banco de dados')
    },
    obterusers() {
      this.$http.get("users.json").then((res) => {
        this.users = res.data;
      });
    },
  },
};
</script>

<style scoped>
input {
  font-size: 18pt;
  margin-bottom: 10px;
  margin-left: 5px;
  width: 98%;
}
button {
  font-size: 40px;
  background-color: #cf3c31;
  color: #ecebe3;
  border-radius: 20px;
}

form {
  /*max-width: 1200px;*/
  background: #9ce0e9;
  border: 1px solid rgb(255, 238, 238);
  font-family: Arial;
  font-size: 27px;
  display: grid;
  /*grid-template-columns: 700px 700px;*/
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 800px;
  border-radius: 18px;
  color: black;
  /*grid-template-areas: " parte-um parte-dois" "parte-tres parte-tres";*/
}
.parte-um {
  /*grid-area: parte-um;*/
  text-align: left;
  padding: 20px;
}
.parte-dois {
  /* grid-area: parte-dois;*/
  text-align: left;
  padding: 20px;
}
.parte-tres {
  /* grid-area: parte-tres;*/
  text-align: center;
}
</style>
