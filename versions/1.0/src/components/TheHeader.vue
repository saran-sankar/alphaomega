<script setup lang="ts">
import TheHeaderDropdown from "@/components/TheHeaderDropdown.vue";
</script>

<style scoped>
header {
  background: var(--secondary-background-color);
  display: flex;
  padding: 1em;
  gap: 1em;
  align-items: center;
}

.button {
  margin-right: 10px; /* Add spacing between buttons */
  background-color: black;
}

.header-container>section {
  display: flex;
  align-items: center;
}

.text-logo {
  font-family: var(--title-font-family);
}

.search-bar {
  padding: 0.5em;
}

.search-form {
  display: flex;
  align-items: center;
}

.search-button {
  border: none;
  padding: 0;
  border-radius: 50%;
  margin-left: 5px;
}

.categories-button {
  display: flex;
  align-items: center;
  background-color: black;
}

.categories-button img {
  margin-left: 5px;
  /* Adjust the spacing between text and image */
  vertical-align: middle;
  /* Align the image vertically */
}

.cart-button {
  border: none;
  padding: 0;
  border-radius: 8%;
  background-color: #B70000;
}

.title-and-search-bar {
  margin-right: 10px;
}

.search-bar{
  margin-left: 260px;
}

@media (max-width: 600px) {
  header {
    flex-direction: column;
  }
}
</style>

<template>
  <header class="container header-container">
    <section class="bookstore-logo">
      <a href="index.html">
        <img
            src="site-images/bookstore-logo.png"
            alt="Another Bookstore Logo"
            width="auto"
            height="auto"
        />
      </a>
    </section>
    <section class="title-and-search-bar">
      <h1 class="text-logo">Alpha & Omega Books</h1>
      <form class="search-form" action="category.html">
        <input type="text" class="search-bar" />
        <button class="search-button">
          <img src="site-images/search_button.png">
        </button>
      </form>
    </section>
    <section class="header-dropdown-and-cart">
      <div class="header-dropdown">
        <button class="button categories-button">Categories<img src="site-images/dropdown.png" alt="Button Image"></button>
        <ul>
          <li><a href="category.html?category=Classics">Classics</a></li>
          <li><a href="category.html?category=Fantasy">Fantasy</a></li>
          <li><a href="category.html?category=Mystery">Mystery</a></li>
          <li><a href="category.html?category=NonFiction">Non-Fiction</a></li>
        </ul>
      </div>
      <button class="button cart-button"><img src="site-images/cart-3.png"></button>
      <button class="button">Login</button>
    </section>
  </header>
</template>
