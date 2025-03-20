<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src="@/assets/logo.svg" alt="Logo" style="width: 25px;">
    <a class="navbar-brand" href="#">Examen UF2</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav gap-3">
        <li class="nav-item btn btn-outline-primary">
          <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item btn btn-outline-primary">
          <RouterLink class="nav-link" to="/aigua">Aigua</RouterLink>
        </li>
        <li class="nav-item btn btn-outline-primary">
          <a class="nav-link" href="#">Llista de la compra</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
<header>
  <h1>Aigua</h1>
</header>
</template>
<style scoped>

</style>