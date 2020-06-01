<template>
  <div>
     <b-row>
       <b-col cols="12">
         <div class="d-flex single-car-section" :class="{'reverse-row': reverse }">
            <Textcard  :titleText="cardHeader" :subTitleText="subHeader" :innerText="text" :class="{'single-card-styling': styleSingleCard }" />
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
      "reverse",
      "imgUrl",
      "styleSingleCard"  
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
.reverse-row {
  flex-direction: row-reverse;
}
.single-card-styling {
  color: red;
}

</style>