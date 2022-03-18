<template>
  <div id="busca">
    <li v-for="(user, id) in users" :key="id">
      <p class="destaque">
        <b>{{ user.nome }} {{ user.sobrenome }}</b>
      </p>
      <p />
      <p>nome:{{ user.nome }} -sobrenome: {{ user.sobrenome }}</p>
      <p>mãe:{{ user.Mae }}</p>
      <p>Pai {{ user.pai }}</p>
      <p>etnia:{{ user.etnia }}</p>
      <p>aldeia:{{ user.aldeia }}</p>
      <p>cidade:{{ user.cidade }} - Polo-base:{{ user.pole }}</p>
      <p>cartão do SUS:{{ user.cartaosus }}</p>
      <p>CPF:{{ user.cpf }}</p>
      <p>Data de Nascimento:{{ user.data }}</p>
      <br />
      <button v-on:click="excluir(id)"><b>REMOVE</b></button>
      <button v-on:click="carregar(id)"><b>REMOVE</b></button>
      <hr />
    </li>
  </div>
</template>

<script>
export default {
props:['id'],
 methods: {
    excluir(id) {
      this.$http.delete(`/users/${id}.json`).then(() => this.limpar());
    },
    carregar(id) {
      this.id = id;
      this.user = { ...this.users[id] };
    }
  }
};
</script>

<style scoped>
#busca {
  display: grid;
  background-color: #e0df95;
  color: black;
  border: 1px solid #ffeeee;
  margin: 10px;
  font-size: 24px;
  text-align: justify;
  padding: 20px;
}
.destaque {
  font-size: 26px;
}
button {
  font-size: 30px;
  background-color: #bf0603;
  color: #ecebe3;
  border-radius: 10px;
  margin: 5px;
}
</style>
