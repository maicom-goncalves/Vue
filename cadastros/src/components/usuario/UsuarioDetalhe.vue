<template>
  <div class="usuario-detalhe">
    <h2>Dados do Cliente</h2>
  <h3 id="nomesobrenome">{{ morador.nome }} {{ morador.sobrenome }}</h3>
      <hr />
    <table id="customers" @submit.prevent="onUpdateForm" class="dados-usuario">
      
      <tr>
        <th>Cidade Natal</th>
        <th>Data de Nascimento</th>
        <th>plano</th>
        <th>MS-MED</th>
      </tr>
      <tr>
        <td>{{ morador.cidade }}</td>
        <td>{{ printDia(morador.data) }}</td>
        <td>{{morador.plano}}</td>
        <td>MS-MED</td>
      </tr>
      <tr>
        <th>Nome da Mãe</th>
        <th>Nome do Pai</th>
      </tr>
      <tr>
        <td>{{ morador.Mae }}</td>
        <td>{{ morador.pai }}</td>
      </tr>
      <tr>
        <th>rua</th>
        <th>Bairro</th>
        <th>Numero da casa</th>
      </tr>
      <tr>
        <td>{{ morador.rua }}</td>
        <td>{{ morador.bairro }}</td>
        <td>{{ morador.casa }}</td>
      </tr>
      <br />
      <tr>
        <th>CPF</th>
        <th>Cartão do SUS</th>

        <th>Sexo</th>
      </tr>
      <tr>
        <td>{{ morador.cpf }}</td>
        <td>{{ morador.cartaosus }}</td>

        <td>{{ morador.genero }}</td>
      </tr>
      <br />
      <h4 clas="titulo">Vacinas</h4>
      <tr>
        <th>Nome da Vacina</th>
        <th>Doze</th>
        <th>Data</th>

        <th>Validade</th>
      </tr>
      <tr>
        <td>{{ morador.vacina }}</td>
        <td>{{ morador.doze }}</td>
        <td>{{ printDia(morador.data2) }}</td>
        <td>{{ printDia(morador.validade) }}</td>
      </tr>
      <h4 clas="titulo">Doenças</h4>
      <tr>
        <th>ID</th>
        <th>Data do Diagnostico</th>
        <th>Situação</th>
      </tr>
      <tr>
        <td>{{ morador.doencaId }}</td>
        <td>{{ printDia(morador.dataDiagnosticoId) }}</td>
        <td>{{ morador.situacaoId }}</td>
      </tr>
      <h4 clas="titulo">Medicações de uso continuo</h4>
      <tr>
        <th>Medicamento</th>
        <th>Doze</th>
        <th>Horarios</th>
      </tr>
      <tr>
        <td>{{ morador.medicamentoId }}</td>
        <td>{{ morador.doze2Id }}</td>
        <td>{{ morador.horarioId }}</td>
      </tr>
      <br />
      <br />

      <br />
    </table>
    <div class="botoes">
      <router-link
        class="editarlink"
        :to="{ name: 'editarUsuario', params: { id: $route.params.id } }"
      >
        <b>EDITAR</b>
      </router-link>
      <button class="apagar" v-on:click="deleteUser()">
        <b>APAGAR</b>
      </button>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase";
import "../../fonts/fontes.css";
export default {
  props: ["id", "id2"],

  firestore() {
    return {
      moradores: db
        .collection(this.id)
        .doc("cadastros")
        .collection("moradores")
        .doc(this.id2),
    };
  },
  methods: {
    printDia: function (data) {
      return new Date(data).toLocaleDateString();
    },
    onUpdateForm(event) {
      event.preventDefault();
      db.collection(this.$route.params.id)
        .doc("cadastros")
        .collection("moradores")
        .doc(this.$route.params.id2)
        .update(this.morador)
        .then(() => {
          this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteUser: function () {
      alert("certeza que deseja apagar " + this.$route.params.id2);

      db.collection(this.$route.params.id)
        .doc("cadastros")
        .collection("moradores")
        .doc(this.$route.params.id2)
        .delete();
    },
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  data() {
    return {
      morador: {},
    };
  },
  created() {
    let dbRef = db
      .collection(this.id)
      .doc("cadastros")
      .collection("moradores")
      .doc(this.id2);
    dbRef
      .get()
      .then((doc) => {
        this.morador = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
  #nomesobrenome {
    font-size: 4vh;
    color: #115f37;
    text-align: justify;
  }
  .usuario-detalhe {
    text-align: justify;
    width: 99%;
  }
  .titulo {
    font-size: 2vh;
  }
  #customers {
    font-family: "Hind Madurai", sans-serif;
     width: 100%;

   /* margin-top: 3%;
    margin-bottom: 4%;
    color: black;
    background-color: #fcfcfce7;
    padding: 2%;
    margin: 1%;*/
  }
  #customers td {
    font-size: 1.5vh;
    padding: 0%;
 
   
  }
  #customers tr:nth-child(even) {
    background-color: #f1f0ea;
  }
  #customers tr:hover {
    background-color: #ddd;
  }

  #customers th {
    background-color: #2b93a5;
    color: white;
    /*
    border-width: 1px;
    border-color: #7EA8F8;
    border-style: solid;
    padding: 1v;
    */
    font-family: "Hind Madurai", sans-serif;
    font-size: 1.5vh;
    margin-top: 3%;
    margin-left: 2%;
    margin-right: 2%;
    text-align: center;
    padding: 1%;
    
  }
  .botoes {
    display: flex;
    justify-content: space-between;
  }
  .editarlink {
    font-size: 3vh;
    background-color: #dbd56e;
    border-style: none;
    color: #585757;
    border-radius: 14px;
    width: 10%;
    margin: 1.9%;
    cursor: pointer;
    padding: 2%;

    list-style: none;
    text-decoration: none;
    text-align: center;
  }
  .editarlink:hover {
    background-color: #05f140;
    color: #fff;
  }
  .apagar {
    font-size: 3vh;
    background-color: #f87666;
    color: #f0f8f5;
    border: 1px solid #f87666;
    border-radius: 14px;
    margin: 2%;
    cursor: pointer;
    padding: 2%;
  }
  .apagar:hover {
    box-shadow: 17px 65px 113px -39px rgba(155, 155, 155, 1);
    border: 1px solid #81171b;
    background-color: #81171b;
    color: #f0f8f5;
  }
  @media screen and (max-width: 600px) {
    .usuario-detalhe {
      text-align: left;
      width: 98%;
      display: flex;
      flex-flow: row wrap;
    }
    #nomesobrenome {
      font-size: 2vh;
    }
    .titulo {
      font-size: 1vh;
    }
    #customers {
      flex-flow: column nowrap;
      margin-top: 3%;
      margin-bottom: 4%;
      padding: 2%;
      margin: 1%;
      width: 50%;
    }
    #customers tr {
      font-size: 1vh;
      margin-top: 1%;
      margin-left: 1%;
      margin-right: 1%;
      padding: 2%;
      width: 10%;
    }
    #customers th {
      font-size: 1vh;
      margin-top: 1%;
      margin-left: 1%;
      margin-right: 1%;
      padding: 1%;
      font-size: 25pt;
      text-align: left;
    }
  }
</style>
