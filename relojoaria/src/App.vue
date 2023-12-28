<template>
  <div class="app">
    <CabecalhoVue />
    <MenuVue />
		<router-view />
  </div>
</template>

<script>
import CabecalhoVue from './components/CabecalhoVue.vue'
import MenuVue from './templates/MenuVue.vue'

export default {
  name: 'App',
  components: {
    CabecalhoVue,MenuVue
  }
}
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  padding-left: 12%;
  padding-right: 12%;
  /*background-image: url("./images/doodelwatcths.png");
  background-repeat:repeat;*/
}
</style>
