<template>
  <main class="container">
    <section class="card mt-4">
      <header class="card-header">
          <h1 class="card-title">Weapons</h1>
      </header>

      <article class="card-body">
        <div v-if="weapons" v-for="weapon in weapons" :key="weapon.uuid">
          <h2>{{  weapon.displayName }}</h2>
          <a :href="'/weapons/show/'+ weapon.uuid">
            <img :src="weapon.displayIcon"/>
          </a>
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
      weapons: null
    }
  },
  created() {
    this.getWeapons()
  },   
  methods: {
    getWeapons() {
        axios.get('https://valorant-api.com/v1/weapons').then(response => {
          this.weapons = response.data.data
        }).catch(errors => {
          console.log(errors)
        })
      }
    }
  }

</script>