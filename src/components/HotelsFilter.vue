<template>
    <div class="hotels-filter-section"> 
        <div class="blur"></div>
            <b-row>
                <b-col cols="6">
                    <b-row>
                    <b-col>
                    <div class="left-padding block-position d-flex flex-column align-items-start justify-content-center">
                
                        <h5 class="m-0 pb-4">Amenities:</h5>
                        <b-form-checkbox size="md" class="text-white">Pool</b-form-checkbox>
                        <b-form-checkbox size="md" class="text-white">Parking</b-form-checkbox>
                        <b-form-checkbox size="md" class="text-white">WI-FI</b-form-checkbox>
               
                    </div>
                    </b-col>
                    
                    <b-col>
                        <div class="block-position d-flex flex-column align-items-start justify-content-center pl-4">
               
                        <h5 class="m-0 pb-4">Accomodation:</h5>
                        <b-form-checkbox size="md" class="text-white pl-">Hostel</b-form-checkbox>
                        <b-form-checkbox size="md" class="text-white">Motel</b-form-checkbox>
                        <b-form-checkbox size="md" class="text-white">Apartments</b-form-checkbox>
                        </div>
                        
                    </b-col>
                    </b-row>
                </b-col>
                
                <b-col cols="6">
                    <div class="right-padding block-position d-flex flex-column justify-content-center">
                        
                         <label for="range-2" class="text-white align-self-start m-0 pb-3">Cost per night</label>
                            <div class="range-block-from-to d-inline-flex align-self-start align-items-center mb-3">
                                    <div class="w-50 text-white r-border">From 0</div> 
                                     <!-- <div class="w-50 text-white">to 3000</div> -->
                                    <div class="w-50 text-white ">To {{ value+' usd' }}</div>
                              </div>
                            
                              <b-form-input id="range-2" v-model="value" type="range" class="form-control-range" min="0" max="3000" step="200"></b-form-input>
                             

                          <button type="button" class="btn btn-outline-light range-button mt-2">Show</button>
                    </div>
                </b-col>
            </b-row>
         </div> 
</template>

<script>
export default {
    data() {
      return {
        value: '2'
      }
    }
}
</script>

<style scoped>


.row,
.col,
.col-6 {
    margin:0;
    padding:0;
}

h5 {
    font-size: 16px;
    font-weight: bold;
    color: white;
}

.left-padding {
    padding-left: 75px;
}

.right-padding {
    padding-right: 75px;
    padding-left: 200px;
}

.text-white.custom-control.custom-checkbox.b-custom-control-md {
    padding-bottom: 15px;
}

h5.pad-btm-25  {
    padding-bottom: 25px;
}

.range-button {
    width: 50%;
    margin: 0 auto;
    align-items: center;
    text-transform: uppercase;

}


/*adding background with bluering*/

.hotels-filter-section {
    background-image: url('../assets/main-bgr.jpg');
    min-height: 230px; /*Bluering working better */
    backdrop-filter: blur(10px);
    background-position: 0px -270px;
    background-repeat: no-repeat;

    height: 225px;
    width: 1200px;
    position: relative;
    z-index: 1;
    margin-top: -10px;
}



.blur {
  background: rgba(255, 255, 255, 0.2); 
  backdrop-filter: blur(10px);
  height: 100%;
  width: 100%;
  position: absolute;
    z-index: 1;
}
/*----------------------------------adding background with bluering*/


.block-position {
    position: relative; 
    z-index: 1020;
    min-height: 230px;
}


.custom-control.custom-checkbox.b-custom-control-lg {
    padding-top: 15px;
}

label.custom-control-label {
    font-size: 14px;
}

.custom-control-label {
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
    font-size: 14px;
    color: white;
}


.range-block-from-to {
    width: 320px;
    height: 35px;
    border: 2px solid white;
}

.w-50.text-white.r-border {
    border-right: 1px solid white;
}

</style>