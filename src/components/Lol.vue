<template>
  <div class="wrap">
      <h3>  {{ header }} </h3>
      <p> {{ desc }} </p>
  </div>
</template>

<script>
export default {
  name: 'Lol',
  props: {
    desc: String,
    header: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
    font-size: 30px;
}
</style>
