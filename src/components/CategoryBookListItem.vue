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
.book-image {
  position: relative;
}

.book-image button {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, -10%);
  z-index: 2;
  padding: 0;
  background-color: transparent;
  width: 100px; /* Increase the width as desired */
  height: 50px; /* Increase the height as desired */
}
</style>

<template>
  <li class="book-box">
    <div class="book-image">
      <img
        :src="'/book-images/' + bookImageFileName(props.book)"
        :alt="book.title"
      />
      <button v-if="props.book.isPublic" class="button"><img src="/site-images/read-now.png" /></button>
    </div>
    <div class="book-title">{{ book.title }}</div>
    <div class="book-author">{{ book.author }}</div>
    <div class="book-price">${{ (book.price / 100).toFixed(2) }}</div>
    <div class="add-to-cart">
      <button class="button"><img src="/site-images/add-to-cart.png" /></button>
    </div>
  </li>
</template>
