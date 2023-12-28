<template>
  <div class="modelos">
    <div class="marca" v-for="marca in marcas" :key="marca['.key']">
      <h4>{{marca.modelo}}</h4>
      <img :src="marca.img">
    </div>
  </div>
</template>

<script>
import EventBus from '../EventBus'
import { db } from "../firebase";
export default {
    data() {
    return {
      marcas: [],
    };
  },
    created() {
    EventBus.$on("nome", (marca) => {
     this.marcas= [], 
     db.collection("relojoaria")
        .doc("relogios")
        .collection(marca)
        .orderBy("modelo", "asc")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.marcas.push((doc.id, " => ", doc.data()));
            console.log(this.marcas);
          });
        });
    });
  },
}
</script>

<style scoped>
  .modelos{
    display: flex;
    background-color: #ffffff;
    align-content: space-around;
    flex-wrap: wrap;
  }
  .marca{
    width: 21%;
    height: auto;
    margin: 1%;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 0;
    box-shadow: 5px 5px #ababebe1, 2px 2px #ff000085, 5px 5px #0df50d57;
    cursor: pointer;
   }
   .marca img{
    width: 50%;
    height: auto;
    margin: 0;
 }  
</style>