<template>
<div>
  <div class="relogios">
    <button class="marca"  @click="mudarMarca('casio')">
      <img src="../images/casio.png"/>
    </button>
    <button class="marca" @click="mudarMarca('orient')">
      <img src="../images/orient.jpg"/>
    </button>
    <button class="marca" @click="mudarMarca('rolex')">
      <img src="../images/rolex2.png"/>
    </button>
    <button class="marca" @click="mudarMarca('patek philippe')">
      <img src="../images/patek-philippe.png"/>
    </button>
    <button class="marca" @click="mudarMarca('timex')">
      <img src="../images/timex.jpeg"/>
    </button>
    <button class="marca" @click="mudarMarca('zodiac')">
      <img src="../images/zodiac.jpg"/>
    </button>
    <button class="marca" @click="mudarMarca('tag-heuer')">
      <img src="../images/tag-heuer.png"/>
    </button>
  </div>
  <div class="modelos">
    <ModelosVue />
  </div>
</div>
  
</template>

<script>
import EventBus from '../EventBus'
import ModelosVue from './ModelosVue.vue'
export default {
  components: {
    ModelosVue
  },
  methods: {
    mudarMarca(variavel) {
       EventBus.$emit("nome", (this.marca = variavel));
    },
  },
};
</script>

<style scoped>
.relogios {
  display: flex;
  background-color: #ffffff;
  /*overflow: hidden;*/
  align-content: space-around;
  /*padding-left: 8%;
  padding-right: 8%;*/
  flex-wrap: wrap;
}
.marca{
  width: 16%;
  height: auto;
  margin: 1%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0;
  border-color:#ffffff;
  cursor: pointer;
   }
 .marca img{
  width: 99%;
  height: auto;
  margin: 0;
 }  
</style>