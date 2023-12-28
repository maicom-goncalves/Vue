<template>
  <div class="eventos">
    <router-link to="/pagina" exact>
      <button @click="mudarevento('Água Clara')">Água Clara</button>
    </router-link>

    <router-link to="/pagina" exact>
      <button @click="mudarevento('Bananal')">Bananal</button>
    </router-link>

    <router-link to="/pagina" exact>
      <button @click="mudarevento('Buritizinho')">Buritizinho</button>
    </router-link>

    <router-link to="/pagina" exact>
      <button @click="mudarevento('Ipegue')">Ipegue</button>
    </router-link>
    
    <router-link to="/pagina" exact>
      <button @click="mudarevento('Morrinho')">Morrinho</button>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "mudarevento",
  props: ["aldeia"],
  methods: {
    ...mapActions([" mudarAldeia"]),
    mudarevento(valor) {
      this.$store.dispatch("mudarAldeia", valor);
    },
  },
};
</script>

<style scoped>
button {
  padding: 3px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  font-size: 37px;
}
a {
  text-decoration: none;
  justify-content: center;
  color: blue;
}
</style>