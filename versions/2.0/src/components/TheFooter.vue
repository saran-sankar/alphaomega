<script setup lang="ts">
</script>

<style scoped>
footer {
  background: var(--secondary-background-color);
  display: flex;
  gap: 10em;
}

.links{
  display: flex;
  flex-direction: row;
  gap: 2.5em;
}
.social-media-icons {
  display: flex;
  flex-direction: row;
}

.social-media-icons {
  text-align: center;
  gap: 0.25em;
}

.social-media-button{
  border: none;
  padding: 0;
}
</style>

<template>
  <footer class="container">
    <section class="links">
      © 2023 Alpha & Omega Books
    </section>
    <section class="links">
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/directions">Directions</a>
    </section>
    <section class="social-media-icons">
      <a class="button social-media-button">
        <img src="/site-images/facebook.png">
      </a>
      <a class="button social-media-button">
        <img src="/site-images/twitter.png">
      </a>
      <a class="button social-media-button">
        <img src="/site-images/instagram.png">
      </a>
    </section>
  </footer>
</template>
