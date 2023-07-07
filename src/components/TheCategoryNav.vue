<script setup lang="ts">
import { useCategoryStore } from "../stores/category";
const categoryStore = useCategoryStore();
</script>

<style scoped>
.category-nav {
  width: 300px;
  /* Adjust the width as needed */
  min-height: 79.5vh;
  background-color: var(--neutral-color);
}

.category-buttons {
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 20px;
}

.button.category-button.router-link-active {
  background-color: black;
  padding: 20px;
  display: block;
  text-decoration: none;
}

.button.category-button {
  background-color: var(--neutral-color);
  padding: 20px;
  display: block;
  text-decoration: none;
}

.button.category-button:hover,
.button.category-button:active {
  background-color: black;
  padding: 20px;
  display: block;
  text-decoration: none;
}
</style>

<template>
  <nav class="category-nav">
    <ul class="category-buttons">
      <li v-for="category in categoryStore.categoryList" :key="category.categoryId">
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
