<template>
    <div class="card-wrap">
  <b-card 
  :title="titleText"
  :sub-title="subTitleText"
  :sub-title-text-variant="subTitleColor"
  :text-variant="textColor"
  :bg-variant="bgrColor" >   
     <b-card-text>
         {{ innerText }}
    </b-card-text>
  </b-card>
</div>

</template>

<script>
export default {
  name: 'Textcard',
  props: [
      "titleText",
      "subTitleText",
      "innerText",
      "subTitleColor",
      "textColor",
      "bgrColor"
  ],
}

</script>

<style scoped>


h4 {
  font-weight: 600;
  font-size: 21px;
}

h6.card-subtitle.text-white.mb-2 {
  margin: 0;
  padding: 15px 0
}

.card {
    border: 0px;
    width: 100%;
    border-radius: 0;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

}

.card-body p {
    white-space: pre-line;

}

.card-wrap {
  display: flex;
  width: 400px;
  min-height: 260px;
}

  /* // "build": "vue-cli-service build", */

</style>



