<template>
  <section class="splash">
    <div>
      <app-logo/>
      <h1 class="title">
        MyApp
      </h1>
      <h2 class="subtitle">
        ServiceStack Nuxt.js
      </h2>
      <div class="form-group">
          <input class="form-control" type="text" placeholder="Your name" v-model="name" />
          <div class="result">{{ result }}</div>
      </div>

      <div class="mt-5">
        <div v-if="userSession">
          <p class="pt-3">Hi {{userSession.displayName}}!</p>
          <link-button @click="$store.dispatch('signout')" sm primary>Sign Out</link-button>
        </div>
        <div v-else>
        <p class="pt-3">You are not authenticated.</p>
          <link-button href="/signin" sm primary>Sign In</link-button>
          <link-button href="/signup" sm outline-secondary class="ml-2">Register New User</link-button>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import AppLogo from '~/components/AppLogo.vue'
import { hello } from "~/shared/gateway";

export default {
  components: {
    AppLogo
  },
  
  data: () => ({ 
    name: '',
    result: ''
  }),

  computed: {
      ...mapGetters(["userSession"])
  },

  mounted () {
    this.name = 'Nuxt';
  },

  watch: {
    name: async function(newName) {
      this.result = newName
        ? await hello(newName)
        : '';
    }
  }
}
</script>

<style>
.splash {
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 90px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.result {
  padding-top: 15px;
  height: 30px;
  line-height: 30px;
  font-size: 24px;
}
</style>
