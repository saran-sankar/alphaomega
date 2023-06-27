<script setup lang="ts">
import { defineProps } from "vue"; // needed if you don't want an error below
import type { BookItem } from "@/types";
import CategoryBookListItem from "@/components/CategoryBookListItem.vue";
const props = defineProps<{
  bookList: BookItem[];
}>();
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  gap: 3em;
  height:400px; /* mysterious! */
}

li{
width:240px;
}
</style>

<template>
  <ul>
    <template v-for="book in props.bookList" :key="book.bookId">
      <category-book-list-item :book="book"></category-book-list-item>
    </template>
  </ul>
</template>
