<template>
<div>
  <nav class="menu">
    <ul>
      <router-link to="/inicio" tag="li" active-class="active" exact>
      <img src="../../img/home.png" alt="home">
        INICIO
      </router-link>
      <router-link to="/usuario" tag="li" active-class="active" exact>
        CLIENTES
      </router-link>
      <router-link to="/cadastros" tag="li" active-class="active" exact>
        CADASTRAR
      </router-link>
      <!--<router-link to="/" tag="li" active-class="active" exact>
        TESTE
      </router-link>-->
      <button class="botao" @click="sair">
       <b>SAIR </b> 
        <img src="../../img/out3.png" alt="sair">
      </button>
    </ul>
  </nav>
  </div>
</template>
<script>
import "../../fonts/fontes.css";

import firebase from 'firebase';
export default {
   methods: {
    sair: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
  },
};
</script>
<style scoped>
img{
  width: 7.5%;
}
.botao{
  padding:0;
  background-color: #fcfcfce7;
  color: #fcfcfce7;
  cursor: pointer;
  font-size: 3vh;
  border-style: none;
  text-align: center;
}
.botao :hover {
    background-color: #E5E1EE;
    color: #575652;
}
/*
.menu{
  box-shadow: 2px 0px #3d443da6;
 box-shadow: -43px -49px 79px -68px rgba(155,155,155,1);
 border-radius: 10px 10px 0px 0px;
}*/
.menu ul {
    display: flex;    
    background-color: #f9f9f9fd;
    border: 1px 0px solid #dfded8;
    /*box-shadow: 2px 0px #3d443da6;*/
    box-shadow: -8px -65px 160px -39px rgba(155,155,155,1);
    margin-bottom: 0%;
    list-style: none;
    padding:0;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;
    cursor: pointer;
    font-size: 3vh;
    text-align: center;
    font-family: 'Righteous', cursive;
}
.menu li {
    flex: 1;
}
.menu a {
    display: flex;
    justify-content: center;
    padding: 0% 2%;
    text-decoration: none;
    font-weight: 600;
    white-space: nowrap;
}
.menu ul :hover {
    background-color: #E5E1EE;
    color: #575652;
}
.menu .active {
    background-color: #104547;
    color: whitesmoke;
}

.menu .active a {
    color: #104547;
}

.menu a {
    color: #FFF;
}
</style>
