<template>
  <div id="about">
    <div class="svg-users svg-8x ml-2"/>
    <h3>{{message}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      default: 'About page'
    }
  }  
}
</script>
