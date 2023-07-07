<script setup lang="ts">
import TheHeaderDropdown from "@/components/TheHeaderDropdown.vue";
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();
</script>

<style scoped>
.cart-button {
  position: relative;
}

.cart-number {
  position: absolute;
  top: 0;
  right: 0;
  color: white; /* Customize the text color */
  padding: 1px 2px; /* Customize the padding */
  border-radius: 50%; /* Make it circular */
  font-size: 12px; /* Customize the font size */
}

.login-button {
  display: flex;
  align-items: center;
  gap: 5px; /* Adjust the gap between the image and text */
}
</style>

<template>
  <header class="container header-container">
    <section class="bookstore-logo">
      <router-link to="/">
        <img
          src="/site-images/bookstore-logo.png"
          alt="Another Bookstore Logo"
          width="50"
          height="auto"
        />
      </router-link>
    </section>
    <section class="title-and-search-bar">
      <router-link to="/" style="color:white; text-decoration: none;">
      <h1 class="text-logo">Alpha & Omega Books</h1>
      </router-link>
      <form class="search-form" action="/category">
        <input type="text" class="search-bar" style="color: black"/>
        <button class="search-button">
          <img src="/site-images/search_button.png">
        </button>
      </form>
    </section>
    <section class="header-dropdown-and-cart">
      <the-header-dropdown></the-header-dropdown>
      <button class="button cart-button">
        <img src="/site-images/cart-3.png">
        <span class="cart-number">{{ cartStore.count }}</span>
      </button>
      <button class="button login-button">
        <img src="/site-images/login.png">
        <span class="login-name">Saran</span>
      </button>
    </section>
  </header>
</template>
