<script setup lang="ts">
import CartTable from "@/components/CartTable.vue";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
const clearCart = function () {
    cartStore.clearCart();
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
    margin: 1em auto;
    text-align: center;
}
</style>

<template>
    <div class="container">
    <h1>Cart Page</h1>
    <cart-table></cart-table>
    </div>
</template>