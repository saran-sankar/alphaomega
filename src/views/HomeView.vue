<script setup lang="ts">
import TheHomeCategoryList from "@/components/TheHomeCategoryList.vue";
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
}

.welcome-text {
  width: 20em;
}

.overlay-text {
  position: absolute;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -400%);
  font-size: 40px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 10px;
}

.overlay-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -200%);
  border: none;
  padding: 0;
  background-color: transparent;
}

.hero-image {
  width: 100%;
  max-width: 100vw;
}

</style>
<template>
<div class="home-page">
<section class="hero-section">
<img src="/site-images/hero-image.jpg" alt="Hero Image" class="hero-image">
<h1 class="overlay-text">Best place to find your favorite books</h1>
<router-link to="/category/Fantasy">
<button class="overlay-button"><img src="/site-images/cta.png"></button>
</router-link>
</section>
<section class="category-images container">
<the-home-category-list></the-home-category-list>
</section>
</div>
</template>
