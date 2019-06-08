import Vue from 'vue';
import Controls from '@servicestack/vue';
import Link from "~/components/Link.vue";

Vue.use(Controls);
Vue.use('v-link', Link); //override v-link use of router-link to use nuxt-link
