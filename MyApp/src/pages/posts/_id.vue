<template>
  <section class="container">
    <div>
      <h1>Post</h1>

      <h4 style="margin-top: 30px">ServiceStack Post #{{ id }}</h4>
      
    </div>
  </section>
</template>

<script>
export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  computed: {
    id: function () {
      return this.$route.params.id
    }
  }
}
</script>
