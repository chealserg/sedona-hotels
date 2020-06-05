<template>
  
      <b-row>
          <b-col>
                <div class="sort-block">
                    <h4 class="m-0">Founded: {{ itemRating }}</h4>
                    <h5 class="m-0 sort-by">Sort by</h5>
                    <a @click="sortParam='price'" class="sort-by price">Price</a>
                    <a @click="sortParam='type'" class="sort-by type">Type</a>
                    <a @click="sortParam='rating'" class="sort-by rating">Rating</a>
                </div>
          </b-col>
          <b-col>
              <div class="sort-triangles">
                <a href="#" class="sort-by">d</a>
                <a href="#" class="sort-by">t</a>
              </div>
          </b-col>
        </b-row>

</template>

<script>
export default {
 name: 'Hotels',
 props: [
      "itemRating"
  ],
  
//   data: {
//       sortParam: '', { price: '40', type: 'hotel', 

//       }
//   }
}

</script>


<style scoped>
.sort-block {
    display: flex;
    justify-content: space-between;
    min-height: 90px;
    align-items: center;
    padding-left:75px;
    
}
.sort-triangles {
    display: flex;
    justify-content: flex-end;
    align-items: flex;
    width: 100%;
    height: 100%;
    align-items: center;
}

a.sort-by {
    color: grey;
}


</style>