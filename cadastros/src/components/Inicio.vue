<template>
  <div class="inicio">
    <Menu />
    <div id="inicio">
      <br/>
      <CaroucelVue />
       <header id="cabecalho">
        <img src="../img/ms-med.png" />
        <h1><b>MS/MED</b> </h1>
        <h4><b>Saúde não tem preço é prioridade</b></h4>
      </header>
      
    </div>
  </div>
</template>

<script>
import "../fonts/fontes.css";
import CaroucelVue from './CaroucelVue.vue';
import Menu from "./template/Menu.vue";

export default {
  components: { Menu,CaroucelVue },
};
</script>

<style scoped>
.inicio{
   border: 1px 0px solid #FCFCFC;
  box-shadow: 17px 65px 113px -39px rgba(155,155,155,1);
  border-radius: 0px 0px 18px 18px;
}
#cabecalho {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2%;
  padding-top: 1%;
  text-align: center;
  font-family: "Abril Fatface", cursive;
 
}
#cabecalho img {
  width: 8%;
  height: auto;
}
#cabecalho h1 {
  font-size: 45px;
}
#cabecalho h2 {
  font-size: 40px;
}
@media screen and (max-width: 600px) {
  #cabecalho {
    margin-top: 3%;
    padding-top: 2%;
  }
  #cabecalho img {
    width: 30%;
  }
  #cabecalho h1 {
    font-size: 2.5vh;
  }
  #cabecalho h2 {
    font-size: 1.5vh;
  }
}
</style>