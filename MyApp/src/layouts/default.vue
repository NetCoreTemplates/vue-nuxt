<template>
<div>
    <link rel="stylesheet" href="/css/buttons.css">
    <link rel="stylesheet" href="/css/svg-auth.css">
    <link rel="stylesheet" href="/css/svg-icons.css">
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <nuxt-link to="/">
                <div class="navbar-brand">
                    <i class="svg-logo svg-lg mr-1"></i>
                    <span class="align-middle">MyApp</span>
                </div>
            </nuxt-link>
          
            <navbar :items="nav.results" :attributes="userAttributes" />
        </div>
    </nav>

    <div id="content" class="container">
        <nuxt/>
    </div>

    <div id="footer" style="text-align:center;width:100%;">
        <h4>
            <v-svg id="servicestack" class="svg-3x" fill="#333" />
            <a href="https://github.com/NetCoreTemplates/vue-nuxt">Learn about this Vue Nuxt.js template</a>
        </h4>
        <div>Copyright &copy; 2021</div>
    </div>
    
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["nav", "userAttributes"])
    }
}
</script>
