<template>
  <div class="usuario-lista">
    <h3>Cidades</h3>
    <li class="lista">
      <router-link tag="li" :to="{ name: 'usuario', params: { id: 'Aquidauana' } }" class="item-lista">
        Aquidauana
      </router-link>
    </li>
    <li class="lista">
      <router-link tag="li" :to="{ name: 'usuario', params: { id: 'Anastacio' } }" class="item-lista">
       Anastacio
      </router-link>
    </li>
    <li class="lista">
      <router-link tag="li" :to="{ name: 'usuario', params: { id: 'Campo Grande' } }" class="item-lista">
        Campo Grande
      </router-link>
    </li>
    <li class="lista">
      <router-link tag="li" :to="{ name: 'usuario', params: { id: 'Bonito' } }" class="item-lista">
        Bonito
      </router-link>
    </li>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>