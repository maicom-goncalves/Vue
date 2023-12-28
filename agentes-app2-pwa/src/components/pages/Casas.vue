<template>
  <div>
    <img class="icones" src="../../img/home03.png" alt="casa" />
    <div class="agente">
      <h2>{{agente.aldeia}}</h2>
      <h2><b>Nome Agente:</b>{{ agente.nome}}</h2>
      <br />
    </div>
    <h2>Lista de Casas</h2>
    <li class="lista" v-for="casas in casas" :key="casas['.key']">
      <router-link
        tag="li"
        :to="{ name: 'moradores', params: { id2: casas.numero } }"
        class="item-lista"
      >
        <b>{{ casas.numero }}</b>
      </router-link>
    </li>
  </div>
</template>
<script>
import { db } from "../../firebase";
export default {
  props: ["id"],
  data() {
    return {
      casas: [],
      agente: [],
      nome: ""
    };
  },
  firestore() {
    return {
      agente: db
        .collection("agente")
        .doc(this.aldeias)
        .collection("agentes")
        .doc(this.id),
      casas: db
        .collection("agentes")
        .doc(this.cnss)
        .collection("casa")
    };
  },
  computed: {
    aldeias() {
      return this.$store.state.aldeia;
    },
    cnss(){
      return this.$store.state.cns;
    }
  },
  created() {
    //receber documento do firebase
    this.nome=this.id
    var docRef = db
      .collection("morador")
        .doc(this.aldeias)
        .collection("casa")
        .where("agente", "==","Aline")
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  },
};
</script>

<style>
</style>