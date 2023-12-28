<template>
  <div>
    <Menu />
    <h1>Cadastros</h1>
    <nav class="cadastros">
    <ul>
      <router-link to="/cadastro" tag="li" active-class="active" exact>
        CADASTRO CLIENTE
      </router-link>
       <router-link to="/cadastroAgente" tag="li" active-class="active" exact>
        CADASTRO MÉDICO
      </router-link>
    </ul>
  </nav>
  </div>
</template>
<script>
import Menu from '../template/Menu.vue'
//import '../../fonts/fontes'
export default {
  components: {Menu},
}
</script>

<style scoped>
  .cadastros{
    display: flex;
    justify-content: space-between;
    flex-direction: column;    
    overflow: hidden;
    font-family: 'HindMadurai-Regular', sans-serif;
    box-shadow: 17px 65px 113px -39px rgba(155,155,155,1);
    border-radius: 0px 0px 18px 18px;
  }
  .cadastros li {
    width: 65%;
    flex: 1;
    list-style: none;
    background-color: #304c89e8;
    border: 1px solid #304C89;
    color: #EEE5E9;
    margin-top:2% ;
    padding:0;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    font-size: 2vh;
    padding: 2% 1%;
  }
  .cadastros a {
    
    text-decoration: none;
    font-weight: 400;
    white-space: nowrap;
  }
  .cadastros ul :hover {
    background-color: #08415C;
    color: #E01A4F;
  }
  .cadastros .active {
    background-color: #af2bbf;
    color: whitesmoke;
  }

  .cadastros .active a {
    color: #F87666;
  }
  .cadastros a {
      color: #FFF;
  }
  @media screen and (max-width: 600px) {
    .cadastros{
      width: 100%;
  }
  }
</style>