<template>
  <div>
    <img class="icones" src="../../img/people02.png" alt="morador" />
    <h2><b>{{agentes.aldeia}}</b></h2>
    <h3>{{agentes.nome}}</h3>
    <h3>Pessoas da casa : {{this.id2}}</h3>
    <li class="lista" v-for="moradores in moradores" :key="moradores['.key']">
      <router-link
        tag="li"
        :to="{ name: 'agenda', params: { id3: moradores['.key'] } }"
        class="item-lista"
      >
        <b>{{ moradores.nome }}</b>   
      </router-link>
    </li>
  </div>
</template>

<script>
import {db} from '../../firebase'
export default {
  props: ["id","id2"],
  data() {
      return {
        //aldeia:this.agentes.aldeia
      }
      },
  firestore() {
    return {
      agentes:db.collection("agente").doc(this.aldeias).collection("agentes").doc(this.id),
      moradores: db.collection("morador").doc(this.aldeias).collection("moradores").where("casa", "==",this.id2)
      //.orderBy("casa")
    };
  },
   computed: {
     aldeias(){
        return this.$store.state.aldeia;
      }
  }
};
</script>

<style>
</style>