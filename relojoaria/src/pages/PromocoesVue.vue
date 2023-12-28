<template>
  <div class="promocoes">
   <CarouselVue />
  
  </div>
</template>
<script>
import CarouselVue from '@/components/CarroucelVue.vue';

export default {
  components: {
    CarouselVue
  }
};
</script>

<style scoped>
  .promocoes {
    position: relative;
    width: 100%;
    background-color: #F3FCF0;
    overflow: hidden;
    padding: 1px;
    }
</style>