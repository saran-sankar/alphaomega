<script setup lang="ts">
import TheHeaderDropdown from "@/components/TheHeaderDropdown.vue";
import { inject } from "vue";
import type { CategoryItem } from "@/types";
const categoryList = inject("categoryList") as CategoryItem[];
</script>

<style scoped>

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
      <div class="header-dropdown">
        <button class="button categories-button">Categories<img src="/site-images/dropdown.png" alt="Button Image"></button>
        <ul>
          <li v-for="category in categoryList" :key="category.categoryId">
            <router-link :to="'/category/' + category.name">
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <button class="button cart-button"><img src="/site-images/cart-3.png"></button>
      <button class="button">Login</button>
    </section>
  </header>
</template>
