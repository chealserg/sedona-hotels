<template>
  <div>
     <b-row>
       <b-col cols="12" class="bgr-light-blue">
         <div class="d-flex single-car-section">
            <Textcard />
             <img class="single-card-section-image" :src="imgUrl">  
          </div>
      </b-col>
    </b-row>
 </div>
</template>

<script>

import Textcard from '@/components/Textcard.vue'

export default {
  name: 'SingleCardSection',
  props: [
      "cardHeader",
      "subHeader",
      "text",
      "direction",
      "imgUrl"
  ],
  components: {
    Textcard
  }
}
</script>

<style scoped>

.single-card-section-image {
    width: calc(100% - 400px);
}
.single-car-section {
    height: 260px;
}
  
</style>