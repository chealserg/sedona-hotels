<template>
    <div class="card-wrap">
  <b-card 
    :img-src="CardIcon"
    :title="titleIconText"
    :sub-title="subTitleIconText"
    sub-title-text-variant="dark"
    text-variant="dark">
     <b-card-text>
         {{ IconCardText }}
    </b-card-text>
  </b-card>
</div>

</template>

<script>
export default {
  name: 'Iconcard',
  props: [
      "CardIcon",
      "titleIconText",
      "subTitleIconText",
      "IconCardText" 
  ],
}

</script>

<style scoped>


.card-body {
    /* background-color: #ffffff; */
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    padding:25px;
}

.card {
    border: 0px;
    width: 100%;
}

.card-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  min-height: 330px;
}

img.card-img {
  width: auto;
  margin: 0 auto;
}

h4 {
  font-size: 21px;
  font-weight: 600;
}





</style>



