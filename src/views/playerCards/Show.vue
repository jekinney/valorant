<template>
  <main class="container">

    <section v-if="card" class="card mt-4">
      <header class="card-header">
          <h1 class="card-title">{{  card.displayName }}</h1>
      </header>

      <article class="card-body">
        <img :src="card.displayIcon" alt="{{  card.displayName }}" class="img-thumbnail"/>
      </article>
    </section>
    
    <div v-if="card == null" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

  </main>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      card: null
    }
  },
  created() {
    this.getCard()
  },   
  methods: {
    getCard() {
        axios.get('https://valorant-api.com/v1/playercards/'+ this.$route.params.cardId).then(response => {
          this.card = response.data.data
        }).catch(errors => {
          console.log(errors)
        })
      }
    }
  }

</script>