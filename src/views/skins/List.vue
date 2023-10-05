<template>
  <main class="container">
    <section class="card mt-4">
      <header class="card-header">
        <h1 class="card-title">Skins</h1>
      </header>

      <article class="card-body">
        <label for="sortSelect">Sort by:</label>
        <select id="sortSelect" v-model="sortCriteria">
          <option value="alphabetical">Alphabetical</option>
          <option value="weaponType">Weapon Type</option>
        </select>
        <div v-if="isLoading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else-if="sortedSkins.length === 0">
          <p>No Skins found.</p>
        </div>
        <div class="row">
          <div v-for="skin in sortedSkins" :key="skin.uuid" class="col-md-4">
            <div class="card-item">
              <h2 class="card-display-name">{{ skin.displayName }}</h2>
              <RouterLink :to="{ path: 'player-cards/show', props: skin }" :class="'card-image-link'">
                <img :src="skin.displayIcon" class="card-image" alt="Player Card Image" />
              </RouterLink>
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
      skins: [],
      isLoading: true,
      sortCriteria: 'alphabetical',
    };
  },
  created() {
    this.getSkins();
  },
  computed: {
    sortedSkins() {
      let sortedSkins = [...this.skins];
      if (this.sortCriteria === 'alphabetical') {
        sortedSkins.sort((a, b) => a.displayName.localeCompare(b.displayName));
      } else if (this.sortCriteria === 'weaponType') {
        sortedSkins.sort((a, b) => {
          return a.weaponType.localeCompare(b.weaponType) || a.displayName.localeCompare(b.displayName);
        });
      }
      if (!this.skins || this.skins.length === 0) {
        return [];
      }
      return sortedSkins;
    },
  },
  methods: {
    getSkins() {
      axios
        .get('https://valorant-api.com/v1/weapons/skins')
        .then((response) => {
          this.skins = response.data.data;
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
.card-image {
  max-width: 80%;
  max-height: 150px;
}
</style>
