<template>
  <div id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <RouterLink to="/" class="btn btn-link">Home</RouterLink>
          <RouterLink to="/kanban">Kanban</RouterLink>
        </section>
        <section class="navbar-center">
          <img class="img-responsive img-logo" src="@/assets/logo.png" alt="logo"/>
        </section>
        <section class="navbar-section">
          <a href="" class="btn btn-link">Twitter</a>
          <a href="" class="btn btn-link">Git Hub</a>
        </section>
      </header>
      <RouterView class="pt-2"/>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    data() {
        return RouterView;
    },
    components: { RouterLink }
};
</script>

<style>
.img-logo {
  max-width: 100px;
  margin: 0 auto;
}
</style>
