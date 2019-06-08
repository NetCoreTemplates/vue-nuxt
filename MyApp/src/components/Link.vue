<template>
    <a v-if="!to" href="javascript:void(0)" @click="(e) => $emit('click',e)" v-bind="attrs"><slot></slot></a>
    <a v-else-if="isAbsolute" :href="to" v-bind="attrs"><slot></slot></a>
    <nuxt-link v-else tag="a" :to="to" v-bind="attrs" :exact="exact"><slot></slot></nuxt-link>
</template>

<script>
export default {
    props: ['to','attrs','exact','click'],

    computed: {
        isAbsolute() {
            return this.to && (this.to.startsWith('http://') || this.to.startsWith('https://') || this.to.startsWith('://'));
        }
    }
}
</script>
