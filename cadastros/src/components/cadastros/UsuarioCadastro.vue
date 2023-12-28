<template>
  <div id="formularioId">
    <h2>
      <b>Formulario de cadastro</b>
    </h2>
    
    <form id="form" v-on:submit.prevent="addUser" v-if="!enviado">
      <div class="parte-um">
        <div>
          <h3>Identificação</h3>
          <div>
            <label for="nome">Nome</label>
            <input id="nameId" type="text" v-model="newUsers.nameId" required />
          </div>
          <div>
            <label for="mae">Nome da mãe</label>
            <input
              id="mother"
              type="text"
              v-model="newUsers.motherId"
              required
            />
          </div>
          <div>
            <label for="sobrenome">Sobrenome</label>
            <input
              id="lastnameId"
              type="text"
              v-model="newUsers.lastnameId"
              required
            />
          </div>
          <div>
            <label for="sangue">Tipo de sangue</label>
            <input id="sangue" type="text" v-model="newUsers.sangue" required />
          </div>
          
          <br />
          <div>
            <label for="city">Número da Casa</label>
            <input id="casa" v-model="newUsers.casaId" />
          </div>
          <br/>
          <div>
            <label for="city">Bairro</label>
            <input id="bairro" v-model="newUsers.bairro" />
          </div>
          <br/>
          <div>
            <label for="city">Rua</label>
            <input id="casa" v-model="newUsers.rua" />
          </div>
          <div>
            <label for="city">Município</label>
            <input id="cidade" v-model="newUsers.cityId" />
          </div>
          <div>
            <label for="sus">N° do Cartão SUS</label>
            <input
              id="saudesus"
              type="number"
              value="0"
              v-model="newUsers.cardsusId"
            />
          </div>
          
        </div>
        <div>
          <h4><b>MEDICAMENTO</b></h4>
          <transition name="fade" mode="out-in">
            <b v-if="!medicamentoshow">sim</b>
            <b v-if="medicamentoshow">não</b>
          </transition>
          <label class="switch">
            <input
              type="checkbox"
              v-on:input="medicamentoshow = !medicamentoshow"
            />
            <span class="slider round"></span>
          </label>
          <transition name="slide-fade">
            <div id="medicamento" v-if="!medicamentoshow">
              <h4><b>SESSÃO D:MEDICAÇÕES DE USO CONTÍNUO</b></h4>
              <div>
                <label for="medicamento">Medicamento</label>
                <input id="data" type="text" v-model="newUsers.medicamentoId" />
              </div>
              <div>
                <label for="doze">Doze</label>
                <input id="text" type="text" v-model="newUsers.doze2Id" />
              </div>
              <div>
                <label for="horarios">Horarios</label>
                <input type="text" v-model="newUsers.horarioId" />
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="parte-dois">
        <br />
        <div>
          <label for="nascimento">Nascimento</label>
          <input
            id="nascimento"
            type="date"
            v-model="newUsers.dateId"
            required
          />
        </div>
        <div>
          <label for="pai">Nome do Pai</label>
          <input id="father" type="text" required v-model="newUsers.fatherId" />
        </div>
        <p>Sexo</p>
        <div class="genero">
          <label for="masculino">Masculino</label>
          <input
            v-model="newUsers.generoId"
            type="radio"
            required
            value="Masculino"
          />
          <label for="feminino">Feminino</label>
          <input
            v-model="newUsers.generoId"
            type="radio"
            required
            value="Feminino"
          />
        </div>
        <div>
          <label for="cpf">RG</label>
          <input
            id="rg"
            type="number"
            value="0"
            required
            v-model="newUsers.rg"
          />
        </div>
        <div>
          <label for="cpf">CPF</label>
          <input
            id="cpfId"
            type="text"
            value="0"
            required
            v-model="newUsers.cpfId"
          />
          <p class="cpfFalso" v-show="cpfFalso">
            <b>número de CPF inválido</b>
          </p>
        </div>
         <div>
            <p>Tipo de plano</p>
            <select
              class="selecao"
              name="plano"
              v-model="newUsers.plano"
            >
              <option value="básico"><b>Básico</b></option>
              <option value="plus">Plus</option>
              <option value="família">família</option>
              <option value="família-plus">família-plus</option>
            </select>
          </div>
        <h3>Doença</h3>
        <transition name="fade" mode="out-in">
          <b v-if="!doencashow">sim</b>
          <b v-if="doencashow">não</b>
        </transition>
        <label class="switch">
          <input type="checkbox" v-on:input="doencashow = !doencashow" />
          <span class="slider round"></span>
        </label>
        <transition name="slide-fade">
          <div id="doencadiv" v-if="!doencashow">
            <label for="doenca">Doença</label>
            <input
              id="nameId"
              type="text"
              v-model="newUsers.doencaId"
              required
            />
            <div>
              <label for="datadiagnostico">Data do Diagnostico</label>
              <input
                id="data"
                type="date"
                v-model="newUsers.dataDiagnosticoId"
              />
            </div>
            <div>
              <label for="situacao">Situção</label>
              <input type="text" v-model="newUsers.situacaoId" required />
            </div>
          </div>
        </transition>
      </div>
      <div class="parte-tres">
        <button class="enviar" type="submit" value="AddUser">
          <b>ENVIAR</b>
        </button>
      </div>
    </form>
    <div class="enviado" v-else>
      <span>Enviado com sucesso</span>
      <br />
      <button class="novoCadastro" @click="() => limpaForm()">
        Novo Cadastro
      </button>
      <br/>
      <!--
      <router-link
        class="visualizar"
        :to="{ name: 'UsuarioLista', params: { id: this.newUsers.cityId} }"
      >
        VISUALIZAR
      </router-link>
      -->
    </div>
  </div>
</template>
<script>
import { db } from "../../firebase";
export default {
  props: ["id", "id2"],
  data() {
    return {
      enviado: false,
      cpfFalso: false,
      morador: [],
      
      newUsers: {
        nameId: "",
        lastnameId: "",
        generoId: "",
        cpfId: "",
        rg:"",
        plano:"",
        sangue: "",
        motherId: "",
        cityId: "",
        rua:"",
        cardsusId: "",
        dateId: "",
        fatherId: "",
        casaId: "",
        bairro:"",
        doencaId: "sem doença diagnosticada",
        dataDiagnosticoId: "sem data",
        situacaoId: "saúdavel",
        medicamentoId: "sem uso de medicação",
        doze2Id: "",
        horarioId: "",
        atestadoId: "",
      },
      doencashow: true,
      obitoshow: true,
      medicamentoshow: true,
      texto: "SIM",
    };
  },
  firestore() {
    return {
      users: db.collection("morador").doc(this.id).collection("moradores"),
    };
  },
  methods: {
    addUser: function () {
      let newCpf = "";
      function TestaCPF(cpf) {
        if (typeof cpf !== "string") return false;
        cpf = cpf.replace(/[^\d]+/g, "");
        newCpf = cpf + "";
        if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
        cpf = cpf.split("");
        const validator = cpf
          .filter((digit, index, array) => index >= array.length - 2 && digit)
          .map((el) => +el);
        const toValidate = (pop) =>
          cpf
            .filter(
              (digit, index, array) => index < array.length - pop && digit
            )
            .map((el) => +el);
        const rest = (count, pop) =>
          ((toValidate(pop).reduce(
            (soma, el, i) => soma + el * (count - i),
            0
          ) *
            10) %
            11) %
          10;
        return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]);
      }
      var strCPF = TestaCPF(`${this.newUsers.cpfId}`);
      if (strCPF == true) {
        db.collection(this.newUsers.cityId)
          .doc("cadastros")
          .collection("moradores")
          .add({
            nome: `${this.newUsers.nameId}`,
            sobrenome: `${this.newUsers.lastnameId}`,
            genero: `${this.newUsers.generoId}`,
            cpf: newCpf,
            rg: `${this.newUsers.rg}`,
            casa: `${this.newUsers.casaId}`,
            sangue: `${this.newUsers.sangue}`,
            plano: `${this.newUsers.plano}`,
            Mae: `${this.newUsers.motherId}`,
            cidade: `${this.newUsers.cityId}`,
            bairro: `${this.newUsers.bairro}`,
            rua: `${this.newUsers.rua}`,
            cartaosus: `${this.newUsers.cardsusId}`,
            data: `${this.newUsers.dateId}`,
            pai: `${this.newUsers.fatherId}`,
            doencaId: `${this.newUsers.doencaId}`,
            dataDiagnosticoId: `${this.newUsers.dataDiagnosticoId}`,
            situacaoId: `${this.newUsers.situacaoId}`,
            medicamentoId: `${this.newUsers.medicamentoId}`,
            doze2Id: `${this.newUsers.doze2Id}`,
            horarioId: `${this.newUsers.horarioId}`,
          });
        this.enviado = true;
      } else {
        this.cpfFalso = true;
      }
    },
    limpaForm() {
      this.newUsers = [
        (this.nameId = ""),
        (this.lastnameId = ""),
        (this.generoId = ""),
        (this.cpfId = ""),
        (this.rg = ""),
        (this.plano = ""),
        (this.sangue = ""),
        (this.motherId = ""),
        (this.cityId = ""),
        (this.rua = ""),
        (this.bairro = ""),
        (this.cardsusId = ""),
        (this.dateId = ""),
        (this.fatherId = ""),
        (this.casaId = ""),
        (this.doencaId = "sem doença diagnosticada"),
        (this.dataDiagnosticoId = "sem data"),
        (this.situacaoId = "saúdavel"),
        (this.medicamentoId = "sem uso de medicação"),
        (this.doze2Id = ""),
        (this.horarioId = "")
      ];
      this.enviado = false;
    },
  },
};
</script>
<style scoped>
.selecao {
    font-family: Arial;
    background-color: #0abab4d8;
    border-radius: 5px;
    width: 93%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-user-select: none;
    user-select: selectpicker;
    position: relative;
  }
.selecao:after {
    content: "";
    top: 1%;
    right: 0px;
    width: 0%;
    height: 0;
    border: 1px solid transparent;
    border-color: #0ABAB5 transparent transparent transparent;
    border-radius: 5px;
    padding-right: 0%;
    position: absolute;
  }
  .selecao.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }
   .selecao.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }

.select-items div,
  .opcoes {
    color: #37b0e0;
    padding: 3% 2%;
    border: 1px solid transparent;
    border-color: transparent transparent #c1ecd51a transparent;
  }
input {
  font-size: 18pt;
  margin-bottom: 10px;
  margin-left: 5px;
  width: 98%;
}
#form {
  margin-top: 2%;
  font-family: Arial;
  font-size: 18pt;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "parte-um parte-dois" "parte-tres parte-tres";
  border-radius: 18px;
  color: black;
  /*box-shadow: 12px 12px 30px 7px grey;*/
}
.genero {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5%;
  font-size: larger;
}
.genero label {
  margin-right: 5px;
  line-height: 5px;
  text-align: justify;
}
.genero input {
  border-radius: 50%;
  width: 36px;
  height: 26px;
  border: 2px solid rgb(26, 25, 25);
  margin-right: 5px;
}
.parte-um {
  grid-area: parte-um;
  text-align: left;
  padding: 20px;
}
.parte-dois {
  grid-area: parte-dois;
  text-align: left;
  padding: 20px;
}
.parte-tres {
  grid-area: parte-tres;
  padding-top: 20px;
  margin-top: 20px;
  text-align: center;
}
#medicamento {
  background-color: #24d1b4;
  padding: 25px 45px;
  border-radius: 5px;
  margin: 7px;
}
#medicamento input {
  font-size: 18pt;
  margin-bottom: 10px;
  margin-left: 5px;
  width: 95%;
}
#doencadiv {
  background-color: #d1ac00;
  border-radius: 5px;
  padding: 25px 45px;
  margin: 7px;
}

.enviado {
  font-size: 45px;
  text-align: center;
}
.opcoes {
  position: relative;
  background-color: white;
  border-color: #131313;
  border-radius: 5px;
  width: 80%;
}
.opcoes:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 0px;
  width: 0%;
  height: 0;
  border-radius: 5px;
  padding-right: 0%;
}
.opcoes.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}
.select-items div,
.opcoes {
  color: #131313;
  padding: 3% 2%;
  border: 1px solid transparent;
  border-color: transparent transparent #0000001a transparent;
  border: #131313 2px;
  cursor: pointer;
}
.cpfFalso {
  color: red;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>