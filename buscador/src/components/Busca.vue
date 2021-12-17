<template>
  <div>
    <h1>Busca</h1>
    <input type="search" v-model="query" />

    <ul v-for="cep in filteredCeps" class="cep" :key="cep['.key']">
      <li>{{ cep.numero }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Busca",
  data() {
    return {
      query: "",
      ceps: [],
    };
  },
  computed: {
    filteredCeps() {
      if (!this.query) return this.ceps;

      return this.cep.filter((cep) => {
        return [cep.numero].find((field) => {
          return field.toLowerCase().includes(this.query.toLowerCase().trim());
        });
      });
    },
  },
  created() {
    this.fetchAllcep();
  },
  methods: {
    fetchAllcep() {
      /*no fetch colocar o endereço do backend*/
      fetch("")
        .then((res) => res.json())
        .then((res) => (this.cep = res))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>