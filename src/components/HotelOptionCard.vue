<template>
  <div class="hotelcard">
      <b-row>
          <b-col>
              <div class="singlehoteldesc d-flex align-items-center">
                    <div class="property-image">
                        <img :src="imgUrl">  
                    </div>
                    <div class="property-parametrs text-left d-flex flex-column justify-content-between">
                        <h5>Amara Resort & Spa</h5>
                        <div class="d-inline-block pd-1">
                            <div class="w-50 d-inline-block">{{ accomodation }}</div> 
                            <div class="w-50 d-inline-block">{{ price }}</div>
                        </div>
                                                     
                    <div class="property-buttons">    
                        
                        <b-button squared variant="info" size="sm" class="property-buttons-styling-short-btn" >INFO</b-button>
                        <b-button squared size="sm" class="property-buttons-styling-long-btn" >BOOK IT</b-button>
                    </div>
                    </div>
                </div>
            </b-col>

            <b-col>
                <div class="property-raiting">
                    <div class="property-raiting-content">
                        <b-form-rating variant="info" class="p-0 border-0" show-value-max="5"  v-model="value" readonly></b-form-rating>
                          <p class="rating-subtext">Rating: {{ value }}</p>
                    </div>
                </div>
            </b-col>
        </b-row>
  </div>
</template>

<script>
export default {
  name: 'HotelOptionCard',
  props: [
      "imgUrl",
      "value",
      "accomodation",
      "price"
  ],
//   data() {
//   return {
//      value: 7.6
//       }
//     }
}
</script>

<style>


.row,
.col {
    padding:0;
    margin:0;
}

.hotelcard,
.singlehoteldesc  {
    min-height: 150px;
}

.singlehoteldesc {
    padding-left: 75px;
}

.property-parametrs {
    padding-left:30px;
    min-height: 90px;
}
.property-parametrs.text-left h5 {
    margin:0;
    font-size: 21px;
    font-weight: 600;
}

.property-buttons-styling-short-btn {
    background-color: #81b3d2;
    width: 110px;
    margin-right: 6px;
    height: 27px;

    border: none;
}

.property-buttons-styling-long-btn {

    background-color: #766357;
    width: 140px;
    height: 27px;

    border: none;

}

.hotelcard {
    border: 1px solid #80808038 ;
}

.property-raiting {
    width: auto;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}


.property-raiting-content {
    padding-right: 75px;
}



p.rating-subtext {
    padding: 0;
    margin: 0;
    font-size: 14px;
    background: #d3d3d342;
    margin-top: 15px;
}



</style>