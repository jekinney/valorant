<template>
  <main class="container">
    <section class="card mt-4">
      <header class="card-header">
        <h1 class="card-title">Player Cards</h1>
      </header>

      <article class="card-body">
        <div v-if="isLoading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>
          <div v-else-if='sortedCards.length === o'>
            <p>No player cards found.</p>
            </div>
            <div v-else class="card-container">
              <div v-for="card in sortedCards" :key="card.uuid" class="card-item">
                <h2 class="card-display-name">{{ card.displayName }}</h2>
                <RouterLink :to="{ path: 'player-cards/show', props: card }" :class="'card-image-link'">
                  <img :src="card.displayIcon" class="card-image" alt="Player Card Image" />
                </RouterLink>
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
      cards: null,
      isLoading: true,
    };
  },
  created() {
    this.getCards();
  },
  computed: {
    sortedCards() {
            if (this.cards && !this.isLoading) {
        return [...this.cards].sort((a, b) => a.displayName.localeCompare(b.displayName));
      }
      return [];
    },
  },
  methods: {
    getCards() {
      axios
        .get('https://valorant-api.com/v1/playercards')
        .then((response) => {
          this.cards = response.data.data;
          this.isLoading = false; 
        })
        .catch((errors) => {
          console.log(errors);
          this.isLoading = false; 
        });
    },
  },
};
</script>

<style scoped>
.card-body {
  display: flex;
  flex-wrap: wrap;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card-item {
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
}

.card-item h2 {
  font-size: 14px;
}

.card-display-name {
  margin-top: 5px;
}

.card-image {
  max-width: 100%;
  height: auto;
}

.card-title {
  text-align: center;
  color: red;
  background-color: #777 !important;
  padding: 10px 0;
  margin: 0;
}
</style>