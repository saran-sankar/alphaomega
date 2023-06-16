<script setup lang="ts">
import { inject } from "vue";
import type { CategoryItem } from "@/types";
const categoryList = inject("categoryList") as CategoryItem[];
const categoryImageFileName = function (category: CategoryItem): string {
  let name = category.name.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.jpg`;
};
</script>

<style scoped>
.category-image-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
}

.category-box {
  text-align: center;
  cursor: pointer;
  padding: 40px;
  background-color: black;
}

.category-image {
  width: 180px;
}

.category-text {
  padding: 0.5em 0;
  background: rgba(0, 0, 0, 0.5); /* last # is percent opacity */
  color: white;
  transform: translateY(-3em);
  margin-bottom: -2em;
}
</style>

<template>
  <ul>
    <div class="category-image-items">
    <li v-for="category in categoryList" :key="category.categoryId">
      <router-link :to="'../category/' + category.name">
        <section class="category-box">
        <img
          :src="'category-images/' + categoryImageFileName(category)"
          :alt="category.name + ' category'"
          class="category-image"
        />
        <div class="category-text"><h2>{{ category.name }}</h2></div>
        </section>
      </router-link>
    </li>
    </div>
  </ul>
</template>
