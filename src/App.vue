<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
const route = useRoute();
import { useCategoryStore } from "./stores/category";
const categoryStore = useCategoryStore();
categoryStore.fetchCategories();
</script>

<style>
main {
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <suspense>
  <div id="app">
    <the-header></the-header>
    <router-view :key="route.fullPath"></router-view>
    <the-footer></the-footer>
  </div>
  </suspense>
</template>
