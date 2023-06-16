<script setup lang="ts">
import { defineProps } from "vue"; // needed if you don't want an error below
import type { BookItem } from "@/types";
import CategoryBookListItem from "@/components/CategoryBookListItem.vue";
const props = defineProps<{
  bookList: BookItem[];
}>();
</script>

<style scoped>
#book-boxes {
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  gap: 1em;
}

.book-box {
  display: flex;
  flex-direction: column;
  background-color: var(--card-background-color);
  padding: 1em;
  gap: 0.25em;
}

.book-title {
  font-weight: bold;
}

.book-author {
  font-style: italic;
}
</style>

<template>
  <ul>
    <template v-for="book in props.bookList" :key="book.bookId">
      <category-book-list-item :book="book"></category-book-list-item>
    </template>
  </ul>
</template>
