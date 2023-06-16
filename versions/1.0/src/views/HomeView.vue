<script setup lang="ts">
import TheHomeCategoryList from "@/components/TheHomeCategoryList.vue";
</script>

<style scoped>
.home-page {
  display: flex;
}

.welcome-text {
  width: 20em;
}
</style>
<template>
<div class="home-page">
<section class="hero-section">
<img src="site-images/hero-image.jpg" alt="Hero Image" class="hero-image">
<h1 class="overlay-text">Best place to find your favorite books</h1>
<button class="overlay-button"><img src="site-images/cta.png"></button>
</section>
<section class="category-images container">
<div class="category-image-items">
<a>
<img
 src="images/categories/classics.jpg"
alt="Classics category"
width="180px"
height="180px"
/>
<div>Classics</div>
</a>
<a>
<img
 src="images/categories/fantasy.jpg"
alt="Fantasy category"
width="180px"
height="180px"
/>
<div>Fantasy</div>
</a>
<a>
<img
 src="images/categories/mystery.jpg"
alt="Mystery category"
width="180px"
height="180px"
/>
<div>Mystery</div>
</a>
<a>
<img
 src="images/categories/nonfiction.jpg"
alt="Non-Fiction category"
width="180px"
height="180px"
/>
<div>Non-Fiction</div>
</a>
</div>
</section>
</div>
</template>
