<template>
  <div class="usuario-lista">
    <h3>Lista de Moradores</h3>
    <li class="lista" v-for="morador in moradores" :key="morador['.key']">
      <router-link tag="li" :to="{ name: 'usuarioDetalhe',
       params: { id2: morador['.key']} }" class="item-lista">
       <b> {{ morador.nome }} {{ morador.sobrenome}} </b> 
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
      moradores:[],
    };
  },
   firestore() {
    return {
      moradores: db.collection(this.id).doc("cadastros").collection("moradores")
    };
  }
};
</script>

<style>
#usuarios {
  padding: 0;
  margin: 0;
  border: none;
}

.lista {
  list-style: none;
  padding: 0px;
  border: 1px solid #0ABAB5;
  border-radius: 8px;
  overflow: hidden;
  font-size: 23px;
  margin-bottom: 4px;
}

.lista .item-lista {
  padding: 17px 27px;
  cursor: pointer;
}

.lista .item-lista:hover {
  background-color: #0ABAB5;
  color: #faf0ca;
}

.lista .item-lista:nth-child(n + 2) {
  border-top: 1px solid #faf0ca;
}
</style>