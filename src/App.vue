<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light custom-bg-gray">
      <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" :class="'nav-link red-text'" :active-class="'active'" :exact-path-active-class="''">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/player-cards" :class="'nav-link red-text'" :active-class="'active'" :exact-path-active-class="''">Player Cards</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/weapons" :class="'nav-link red-text'" :active-class="'active'" :exact-path-active-class="''">Weapons</RouterLink>
          </li>
          <li>
            <RouterLink to="/skins" :class="'nav-link red-text'" :active-class="'active'" :exact-path-active-class="''">Skins</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <RouterView />
</template>
<style>
body {
  background-color: black;
}
.custom-bg-gray {
  background-color: #777;
}
.red-text {
  color: red;
}
</style>
