<template>
  <div v-if="userSession" id="admin" class="text-center">
      <div class="svg-female-business svg-8x ml-2"/>
      <p class="my-2">
          {{userSession.displayName}}
      </p>
      <p>
          {{userSession.userName}}
      </p>
      <p v-if="userSession && userSession.roles" class="roles">
          <mark v-for="x in userSession.roles" :key="x">{{x}}</mark>
      </p>
      <h3 class="mt-5">Admin Page</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { store, requiresRole } from '../../shared';

export default {

    computed: {
        ...mapGetters(["userSession"])
    },

    mounted () {
        this.requiresRole('Admin');
    },

    methods: { requiresRole }
}
</script>
