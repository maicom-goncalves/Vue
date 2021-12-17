<template>
  <div id="app">
    <h1>teste</h1>
     <Busca/>
  </div>
</template>

<script>
import Busca from "./components/Busca.vue";
export default {
  components:{Busca },
  name: "App",
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
