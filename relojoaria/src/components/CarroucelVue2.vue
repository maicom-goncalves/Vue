<template>
  <div class="carousel">
    <div
      class="carousel-slide"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(image, index) in images" :key="index" class="carousel-item">
        <img :src="image" alt="Slide" />
        {{ index + 1 }}
      </div>
    </div>
    <button class="carousel-button prev" @click="prevSlide">Anterior</button>
    <button class="carousel-button next" @click="nextSlide">Próximo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        "https://imgur.com/4mpY4C4.jpg",
        "https://imgur.com/VqIh1A9.jpg",
        "https://imgur.com/4mpY4C4.jpg",
        "https://imgur.com/LkTSQ5r.jpg",
        "https://imgur.com/moGCaaK.jpg",
      ],
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    autoSlide() {
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, "2000");
    },
  },
  created() {
    this.autoSlide();

    console.log("Created funcionou.");
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
  transition: transform 0.3s ease-in-out;
}

.carousel-item {
  flex-shrink: 0;
  width: 100%;
}

.carousel img {
  width: 100%;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px;
  border: none;
  cursor: pointer;
}

.carousel-button.prev {
  left: 10px;
}

.carousel-button.next {
  right: 10px;
}
</style>
