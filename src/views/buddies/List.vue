<template>
  <main class="container">
    <section class="card mt-4">
      <header class="card-header">
        <h1 class="card-title">Buddies</h1>
      </header>

      <article class="card-body">
        <div v-if="isLoading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else-if="buddies.length === 0">
          <p>No Buddies found.</p>
        </div>
        <div class="row">
          <div v-for="buddy in buddies" :key="buddy.uuid" class="col-md-4">
            <div class="card-item">
              <h2 class="card-display-name">{{ buddy.displayName }}</h2>
            </div>
          </div>
        </div>
        <div v-if="loadingError" class="alert alert-danger" role="alert">
          Error loading buddies. Please try again later.
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      buddies: [],
      isLoading: true,
      loadingError: false,
    };
  },
  created() {
    this.getBuddies();
  },
  methods: {
    getBuddies() {
      axios
        .get('https://valorant-api.com/v1/buddies')
        .then((response) => {
          this.buddies = response.data.data; 
          this.isLoading = false;
        })
        .catch((error) => {
          console.error('Error loading buddies:', error);
          this.loadingError = true;
        });
    },
  },
};
</script>

<style scoped>
</style>
