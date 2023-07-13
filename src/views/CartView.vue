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
  flex-direction: row;
  align-items: center;
  padding-left: 15em;
}
.cart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
    margin: 0.5em auto;
    text-align: center;
    color: black;
}
h2{
    margin: 1em auto;
    color: black;
}
h3 {
    margin: 0.5em auto;
    color: black;
}

.buttons-container{
    display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 5em;
}
.checkout-button, .continue-button, .clear-button{
    background-color: transparent;
}
.checkout-button img{
    transform: scale(1.1);
}
</style>

<template>
    <div class="container">
    <div class="cart-container">
    <h1>Shopping Cart</h1>
    <h3>There are {{ cartStore.count }} books in your cart.</h3>
    <cart-table></cart-table>
    <button class="button clear-button">
            <img src="site-images/clear.png">
    </button>
    </div>
    <div class="buttons-container">
    <h2>Subtotal: ${{ cartStore.subtotal }}</h2>
    <router-link to="/category/Fantasy">
        <button class="button continue-button">
            <img src="site-images/continue.png">
        </button>
    </router-link>
    <router-link to="/checkout">
    <button class="button checkout-button">
        <img src="site-images/checkout.png">
    </button>
    </router-link>
    </div>
    </div>
    
</template>