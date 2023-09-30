<template>
  <main class="container">
    <section class="card mt-4">
      <header class="card-header">
        <h1 class="card-title">Weapons</h1>
      </header>

      <article class="card-body">
        <div>
          <label for="categorySelect">Select a category:</label>
          <select id="categorySelect" v-model="selectedCategory">
            <option value="all">All</option>
            <option v-for="category in getUniqueCategories()" :key="category" :value="category">{{ category }}</option>
          </select>
        </div>
        <div class="weapons-grid" v-if="filteredWeapons">
          <div v-for="weapon in filteredWeapons" :key="weapon.uuid" class="weapon-item">
            <h2>{{ weapon.displayName }}</h2>
            <a :href="'/weapons/show/' + weapon.uuid">
              <img :src="weapon.displayIcon" />
            </a>
          </div>
        </div>
        <div v-else class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
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
      weapons: null,
      selectedCategory: 'all',
    };
  },

  created() {
    this.getWeapons(() => {
      console.log('Weapons Data:', this.weapons);
    });
  },

  methods: {
    getWeapons() {
      axios
        .get('https://valorant-api.com/v1/weapons')
        .then((response) => {
          this.weapons = response.data.data;
          console.log('API Response Data:', this.weapons);
                    
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    getUniqueCategories() {
      if (!this.weapons) {
        return [];
      }
      const categories = new Set();
      this.weapons.forEach((weapon) => {
        if (weapon.shopData && weapon.shopData.categoryText) {
          categories.add(weapon.shopData.categoryText);
        }
      });
      const uniqueCategories = Array.from(categories);
      console.log('API Data:', this.weapons);
      console.log('Unique Categories:', uniqueCategories);
      return uniqueCategories;
    },
  },

  computed: {
    filteredWeapons() {
      if (!this.weapons || this.weapons.length === 0) {
        return [];
      }

      if (this.selectedCategory === 'all') {
        return this.weapons;
      } else {
        return this.weapons.filter((weapon) => {
          return weapon.shopData && weapon.shopData.categoryText === this.selectedCategory;
        });
      }
    }
  },
};
</script>

<style scoped>
.card-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-title {
  text-align: center;
  color: red;
  background-color: #777 !important;
  padding: 10px 0;
  margin: 0;
}
.weapons-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.weapon-item {
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
}
.weapon-item img {
  max-width: 100%;
}

</style>