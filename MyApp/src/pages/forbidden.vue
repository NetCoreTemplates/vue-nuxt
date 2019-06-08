<template>
    <div class="forbidden">
        <h3>
            You are not authorized to access
            <code v-if="usePath">{{usePath}}</code>
            <span v-else>this page</span>
        </h3>
        <p v-if="message">{{message}}</p>
        <p v-else-if="useRole">Missing role <code>{{useRole}}</code></p>
        <p v-else-if="usePermission">Missing permission <code>{{usePermission}}</code></p>
    </div>    
</template>

<script>
export default {
    props: {
        message: { default: '' },
        path: { default: '' },
        role: { default: '' },
        permission: { default: '' },
    },

    computed: {
        query() {
            return (this.$route && this.$route.query) || {};
        },
        usePath() {
            return this.path || this.query.path || null;
        },
        useRole() {
            return this.role || this.query.role || null;
        },
        usePermission() {
            return this.permission || this.query.permission || null;
        }
    }
}
</script>
