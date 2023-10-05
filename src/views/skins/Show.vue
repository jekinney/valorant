<template>
    <main class="container">
  
      <section v-if="skin" class="card mt-4">
        <header class="card-header">
            <h1 class="card-title">{{ skin.displayName }}</h1>
        </header>
  
        <article class="card-body">
          <img :src="skin.displayIcon" alt="{{ skin.displayName }}" class="img-thumbnail"/>
        </article>
      </section>
      
      <div v-if="skin == null" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
  
    </main>
  </template>
  
<script>
export default {
  name: 'ShowWeaponSkin',
  props: {
    skin: Object
  }
 }
</script>
  