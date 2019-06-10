<template>
  <div v-if="userSession" id="profile" class="text-center">

      <img :src="userSession.profileUrl" class="svg-8x" />

      <p class="my-2">
          {{userSession.displayName}} <span v-if="userSession.userId">#{{userSession.userId}}</span>
      </p>
      <p>
          {{userSession.userName}}
      </p>
      <p v-if="userSession && userSession.roles" class="roles">
          <mark v-for="x in userSession.roles" :key="x">{{x}}</mark>
      </p>
      <p v-if="userSession && userSession.permissions" class="permissions">
          <mark v-for="x in userSession.permissions" :key="x">{{x}}</mark>
      </p>
      <p>
          <link-button @click="signout" primary>Sign Out</link-button>
      </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { requiresAuth } from '../shared';

export default {

    computed: {
        ...mapGetters(["userSession"])
    },

    mounted () {
        this.requiresAuth();
    },

    methods: {
        requiresAuth,

        async signout() {
            await this.$store.dispatch('signout');
            this.requiresAuth();
        }
    }

}
</script>
