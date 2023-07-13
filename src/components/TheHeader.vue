<script setup lang="ts">
  import TheHeaderDropdown from "@/components/TheHeaderDropdown.vue";
  import {
    useCartStore
  } from '@/stores/cart';
  const cartStore = useCartStore();
</script>

<style scoped>
  header {
    background: var(--secondary-background-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-and-title{
    display: flex;
  }

  .text-logo {
    font-family: var(--title-font-family);
    padding: 0.5em;
  }

.right-header-content{
  display: flex;

}

  .search-bar {
    padding: 0.5em;
  }

  .search-form {
    display: flex;
    align-items: center;
    margin-right: 1.5em;
  }

  .search-button {
    border: none;
    padding: 0;
    border-radius: 50%;
    margin-left: 0.5em;
  }

  .cart-button {
    border: none;
    padding: 0;
    border-radius: 8%;
    background-color: #B70000;
  }

  @media (max-width: 600px) {
    header {
      flex-direction: column;
    }
  }

  .cart-button {
    position: relative;
  }

  .cart-number {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    /* Customize the text color */
    padding: 1px 2px;
    /* Customize the padding */
    border-radius: 50%;
    /* Make it circular */
    font-size: 12px;
    /* Customize the font size */
  }

  .login-button {
    display: flex;
    align-items: center;
    gap: 5px;
    /* Adjust the gap between the image and text */
  }
</style>

<template>
  <header class="container header-container">
    <div class="logo-and-title">
      <section class="bookstore-logo">
        <router-link to="/">
          <img src="/site-images/bookstore-logo.png" alt="Another Bookstore Logo" width="50" height="auto" />
        </router-link>
      </section>
      <router-link to="/" style="color:white; text-decoration: none;">
        <h1 class="text-logo">Alpha & Omega Books</h1>
      </router-link>
    </div>
    <div class="right-header-content">
      <form class="search-form" action="/category">
        <input type="text" class="search-bar" style="color: black" />
        <button class="search-button">
          <img src="/site-images/search_button.png">
        </button>
      </form>
        <the-header-dropdown></the-header-dropdown>
        <router-link to="/cart">
          <button class="button cart-button">
            <img src="/site-images/cart-3.png">
            <span class="cart-number">{{ cartStore.count }}</span>
          </button>
        </router-link>
        <button class="button login-button">
          <img src="/site-images/login.png">
          <span class="login-name">Saran</span>
        </button>
    </div>
  </header>
</template>