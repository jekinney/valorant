<template>
  <main class="container">

    <section v-if="weapon" class="card mt-4">
      <header class="card-header">
          <h1 class="card-title">{{  weapon.displayName }}</h1>
      </header>

      <article class="card-body">
        <img :src="weapon.displayIcon" alt="{{  weapon.displayName }}" class="img-thumbnail"/>

        <div class="row mt-3">
            <section class="col card p-0">
                <h3 class="card-header">Weapon Stats</h3>
                <dl class="card-body">
                    <dt>Fire Rate</dt>
                    <dd>{{ weapon.weaponStats.fireRate }}</dd>
                    <dt>Magazine Size</dt>
                    <dd>{{ weapon.weaponStats.magazineSize }}</dd>
                    <dt>Run Speed Multiplier</dt>
                    <dd>{{ weapon.weaponStats.runSpeedMultiplier }}</dd>
                    <dt>Equip Time</dt>
                    <dd>{{ weapon.weaponStats.equipTimeSeconds }} Seconds</dd>
                    <dt>Reload Time</dt>
                    <dd>{{ weapon.weaponStats.reloadTimeSeconds }} Seconds</dd>
                </dl>
            </section>
            <section class="col card p-0">
                <h3 class="card-header">Shop Data</h3>
                <dl class="card-body">
                    <dt>Cost</dt>
                    <dd>{{ weapon.shopData.cost }}</dd>
                    <dt>Category</dt>
                    <dd>{{ weapon.shopData.categoryText }}</dd>
                    <dt>Can Trash</dt>
                    <dd>{{ weapon.shopData.canBeTrashed }}</dd>
                </dl>
            </section>
        </div>

      </article>
    </section>
    
    <div v-if="weapon == null" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

  </main>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      weapon: null
    }
  },
  created() {
    this.getWeapon()
  },   
  methods: {
    getWeapon() {
        axios.get('https://valorant-api.com/v1/weapons/'+ this.$route.params.weaponId).then(response => {
          this.weapon = response.data.data
        }).catch(errors => {
          console.log(errors)
        })
      }
    }
  }

</script>
