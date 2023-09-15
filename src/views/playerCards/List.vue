<template>
  <main class="container">
    <section class="card mt-4">
      <header class="card-header">
          <h1 class="card-title">Player Cards</h1>
      </header>

      <article class="card-body">
        <div v-if="cards" v-for="card in cards" :key="card.uuid">
          <h2>{{  card.displayName }}</h2>
          <img :src="card.displayIcon"/>
        </div>
        <div v-else class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </article>

    </section>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      cards: null
    }
  },
  created() {
    this.getCards()
  },   
  methods: {
    getCards() {
        axios.get('https://valorant-api.com/v1/playercards').then(response => {
          this.cards = response.data.data
        }).catch(errors => {
          console.log(errors)
        })
      }
    }
  }

</script>