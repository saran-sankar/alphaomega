<script setup lang="ts">
import { defineProps } from "vue";
import type { BookItem } from "@/types";
const props = defineProps<{
  book: BookItem;
}>();
const bookImageFileName = function (book: BookItem): string {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.jpeg`;
};
</script>
<style scoped>

</style>

<template>
  <li class="book-box">
    <div class="book-image">
      <img
        :src="'/book-images/' + bookImageFileName(props.book)"
        :alt="book.title"
      />
      <button class="button"><img src="/site-images/read-now.png" /></button>
    </div>
    <div class="book-title">{{ book.title }}</div>
    <div class="book-author">{{ book.author }}</div>
    <div class="book-price">${{ (book.price / 100).toFixed(2) }}</div>
    <div class="add-to-cart">
      <button class="button"><img src="/site-images/add-to-cart.png" /></button>
    </div>
  </li>
</template>
