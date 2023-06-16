<script setup lang="ts">
import { inject } from "vue";
import type { CategoryItem } from "@/types";
const categoryList = inject("categoryList") as CategoryItem[];
</script>

<style scoped>
.category-nav {
  width: 200px;
  /* Adjust the width as needed */
  height: 400px;
  background-color: var(--neutral-color);
}

.category-buttons {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.button.category-button.router-link-active {
  background-color: black;
  padding: 10px;
  display: block;
  text-decoration: none;
}

.button.category-button {
  background-color: var(--neutral-color);
  padding: 10px;
  display: block;
  text-decoration: none;
}

.button.category-button:hover,
.button.category-button:active {
  background-color: black;
  padding: 10px;
  display: block;
  text-decoration: none;
}
</style>

<template>
  <nav class="category-nav">
    <ul class="category-buttons">
      <li v-for="category in categoryList" :key="category.categoryId">
        <router-link
            :to="'/category/' + category.name"
            class="button category-button"
        >
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
