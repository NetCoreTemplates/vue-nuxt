<template>
<div class="row">
    <div class="col-4">
        <h3>Sign In</h3>
        
        <form ref="form" @submit.prevent="submit" :class="{ error:responseStatus, loading }" >
            <div class="mb-3">
                <error-summary except="userName,password" :responseStatus="responseStatus" />
            </div>
            <div class="mb-3">
                <v-input id="userName" v-model="userName" placeholder="Username" :responseStatus="responseStatus" 
                         label="Email"  help="Email you signed up with" />
            </div>
            <div class="mb-3">
                <v-input type="password" id="password" v-model="password" placeholder="Password" :responseStatus="responseStatus" 
                         label="Password"  help="6 characters or more" />
            </div>
            <div class="mb-3">
                <v-checkbox id="rememberMe" v-model="rememberMe" :responseStatus="responseStatus">
                    Remember Me
                </v-checkbox>
            </div>
            <div class="mb-3">
                <button type="submit" class="btn btn-lg btn-primary">Login</button>
                <link-button href="/signup" lg outline-secondary class="ml-2">Register New User</link-button>
            </div>
        </form>
        
        <div class="pt-3">
            <h5>Quick Login:</h5>
            <p class="btn-group">
                <link-button outline-info sm @click="switchUser('admin@email.com')">admin@email.com</link-button>
                <link-button outline-info sm @click="switchUser('new@user.com')">new@user.com</link-button>
            </p>
        </div>
    </div>
    <div class="col-3"></div>
    <div class="col-5">
        <div class="row justify-content-end mt-5" style="max-width:300px">
            <nav-button-group class="nav-button-group" 
                :items="nav.navItemsMap.auth" :attributes="userAttributes" :baseHref="nav.baseUrl" block lg />
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import { Routes, requiresAuth } from '../shared';
import { auth } from '../shared/gateway';
import { Authenticate } from '../shared/dtos';

export default {

    data: () => ({ 
        userName: '',
        password: '',
        rememberMe: true,
        loading: false,
        responseStatus: null
    }),

    computed: {
        ...mapGetters(["nav", "userAttributes", "userSession"])
    },

    mounted() {
        if (this.userSession != null) {
            this.$router.push(this.$route.query.redirect || Routes.Home);
        }
    },

    methods: {

        async submit() {
            try {
                this.loading = true;
                this.responseStatus = null;

                const response = await auth(new Authenticate({
                    provider: 'credentials',
                    userName: this.userName,
                    password: this.password,
                    rememberMe: this.rememberMe,
                }));

                this.$store.dispatch('signin', response);

                this.$router.push(this.$route.query.redirect || Routes.Home);

            } catch (e) {
                this.responseStatus = e.responseStatus || e;
            } finally {
                this.loading = false;
            }
        },

        switchUser(email) {
            this.userName = email;
            this.password = 'p@55wOrd';
        }
    }
}
</script>
