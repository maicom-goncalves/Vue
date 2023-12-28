<template>
  <div>
    <h3>Lista Agentes</h3>
    <h4>{{ aldeias }}</h4>
    <li class="lista" v-for="agentes in agentes" :key="agentes['.key']">
      <router-link
        tag="li"
        :to="{ name: 'casas', params: { id: agentes['.key']} }"
        class="item-lista"
      >
        <button @click="mudarevento(agentes.nome+agentes.sobrenome)">
          <b>{{ agentes.nome }} {{agentes.sobrenome}}</b>
        </button>
      </router-link>
    </li>
  </div>
</template>
<script>
import { db } from "../../firebase";
import { mapActions } from "vuex";
export default {
  props: ["aldeia"],
  data() {
    return {
      date: "",
    };
  },
  firestore() {
    return {
      //agentes: db.collection("agente").doc(this.aldeias).collection("agentes")
      agentes: db
        .collection("agente")
        .doc(this.aldeias)
        .collection("agentes")
        .orderBy("nome", "asc"),
    };
  },
  computed: {
    aldeias() {
      return this.$store.state.aldeia;
    },
  },
  methods: {
    ...mapActions([" mudarCns"]),
    mudarevento(valor) {
      this.$store.dispatch("mudarCns", valor);
    },
  },
  created() {
    console.log("teste");
  },
};
</script>

<style scoped>
.lista {
  margin-top: 20%;
  text-align: center;
}
</style>