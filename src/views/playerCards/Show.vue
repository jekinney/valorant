<template>
  <main>
    <header>
        <h1 class="show">Show Player Card</h1>
    </header>
    {{ card }}
  </main>
</template>

<script>
export default {
  name: 'ShowPlayerCard',
  props: {
    card: Object
  }
}
</script>
<style scoped>
.show {
  color: white;
  text-align: center;
}
</style>