<template>
  <div class="carousel">
    <div class="carousel-slide" :style="{ transform: `translateX(${translateValue}px)` }">
      <div v-for="(image, index) in images" :key="index" class="carousel-slide-item">
        <img :src="image" alt="Carousel Slide" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://imgur.com/4mpY4C4.jpg",
        "https://imgur.com/VqIh1A9.jpg",
        "https://imgur.com/4mpY4C4.jpg",
        "https://imgur.com/LkTSQ5r.jpg",
        "https://imgur.com/moGCaaK.jpg",
      ],
      currentIndex: 0,
      translateValue: 0,
      slideInterval: 100, 
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.translateValue -= 100; // Mover para o próximo slide
    },
    startAutoSlide() {
      setInterval(this.nextSlide, this.slideInterval);
    },
  },
  mounted() {
    this.startAutoSlide(); // Inicia o slide automático quando o componente é montado
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  background-color: #9d9df3;
  overflow: hidden;
}

.carousel-slide {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide-item {
  flex: 0 0 100%;
}

img {
  width: 100%;
  height: auto;
}
</style>
