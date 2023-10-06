<template>
  <main class="container">
    <section class="card mt-4">
      <header class="card-header">
        <h1 class="card-title">{{ buddy.displayName }}</h1>
      </header>

      <article class="card-body">
        <div class="row">
          <div class="col-md-4">
            <div class="card-item">
              <img :src="buddy.displayIcon" class="card-image" alt="Buddy Avatar" />
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-item">
              <p><strong>Name:</strong> {{ buddy.displayName }}</p>
              <p><strong>Status:</strong> {{ buddy.status }}</p>
            </div>
          </div>
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
      buddy: {},
    };
  },
  created() {
    this.getBuddyDetails();
  },
  methods: {
    getBuddyDetails() {
      const buddyId = this.$route.params.buddyId; 
      axios
        .get(`https://valorant-api.com/v1/buddies/${buddyId}`)
        .then((response) => {
          this.buddy = response.data;
        })
        .catch((error) => {
          console.error('Error fetching buddy details:', error);
        });
    },
  },
};
</script>

<style scoped>
</style>
