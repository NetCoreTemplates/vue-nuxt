<template>
  <section class="container">
    <div>
      <h1>Contact</h1>

      <h4 style="margin-top: 30px">ServiceStack Links</h4>
      <ul>
        <li v-for="(url, name) in links" :key="name">
          <a :href="url">{{name}}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters([
    'links'
  ]),

  mounted() {
    //initially render with Vuex state then refresh with latest data from server
    this.$store.dispatch('getLinks') //comment line to view stale data
  }
}

</script>