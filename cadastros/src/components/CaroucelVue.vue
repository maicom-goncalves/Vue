<template>
  <div class="carousel">
    <div class="carousel-slide" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
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
        "https://imgur.com/Lo8JDeE.jpg",
        "https://imgur.com/ibzQW5a.jpg",
        "https://imgur.com/FUHcE5b.jpg",
      ],
      currentIndex: 0,
      translateValue: 0,
      slideInterval: 3000, 
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;   
    },
    startAutoSlide() {
      setInterval(this.nextSlide, this.slideInterval);
    },
  },
  mounted() {
    this.startAutoSlide(); 
  },
};
</script>

<style scoped>
  .carousel {
    position: relative;
    width: 100%;
    
    background-color:#F3FCF0;
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