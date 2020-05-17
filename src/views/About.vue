<template>
  <div class="about">
    <h1>This is an about page</h1>
    <lol desc="lol, kek, cheburek" />
  </div>
</template>

<script>
import Lol from '@/components/Lol.vue'
export default {
  name: 'About',
  components: {
    Lol
  }
}
</script>
