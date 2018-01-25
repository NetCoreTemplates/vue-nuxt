<template>
  <section class="container">
    <div>

      <div id="post">
        <h2 v-if="!post && loading" class="svg-icon loading">Loading Post {{id}} ...</h2>
        <h2 v-else-if="post">{{post.title}}</h2>

        <div v-if="post" class="description">{{ post.description }}</div>
      </div>
      
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  validate({ params }) {   
    return /^\d+$/.test(params.id); // Must be a number
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    post(){
      return this.$store.getters.getPost(this.id);
    },
    ...mapGetters(['loading'])
  },
  mounted() {
    this.$store.dispatch("getPost", this.id);
  }
};
</script>
