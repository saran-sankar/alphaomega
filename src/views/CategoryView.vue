<script setup lang="ts">
import type { BookItem } from "@/types";
import TheCategoryNav from "@/components/TheCategoryNav.vue";
import TheCategoryBookList from "@/components/TheCategoryBookList.vue";
import { useRoute } from "vue-router";
import { apiUrl } from "@/api"
const route = useRoute();
let response = await fetch(apiUrl + `/categories/name/${route.params.name}/books/`);
let data = await response.json();
let bookList = data as BookItem[];
</script>

<style scoped>
.category-page {
  display: flex;
  flex-direction: row;
}
</style>

<template>
  <div class="category-page">
    <the-category-nav></the-category-nav>
    <the-category-book-list :bookList="bookList"> </the-category-book-list>
  </div>
</template>
