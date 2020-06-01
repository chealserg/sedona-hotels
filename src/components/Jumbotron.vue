<template>
  <div class="wraper main-screen"> 
   <b-row class="main-screen">
    <b-col></b-col>
    <b-col class="align-images">
             <div class="d-block">
                <img src="../assets/welcome.png">
                <img class="undertext" src="../assets/welcomeText.png">
            </div>
             
            <div class="main-screen-img">
                 <img src="../assets/sedona.png">
             </div>
            <div class="main-screen-img">
                <img src="../assets/main-text-italic.png">
            </div>
    </b-col>
    <b-col></b-col>
  </b-row>
</div>
</template>

<script>
export default { 

}
</script>

<style scoped>


.main-screen {
    margin-top: -10px;
    position: relative;
    background-image: url('../assets/main-bgr.jpg');
    height: 510px;
    background-repeat: no-repeat;
    background-position: 0px -50px;
}


.row.main-screen {
    margin: 0;
}

.align-images.col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

img.undertext {
    margin-top: 20px;
}

.wraper.main-screen:after {
    content: "";
    position: absolute;
    background: #ffffff;
    height: 60px;
    width: 300px;
    right: -5px;
    bottom: -15px;
    transform: rotate(-6deg);
    z-index: 1002;
}

.wraper.main-screen:before {
    content: "";
    position: absolute;
    background: #ffffff;
    height: 60px;
    width: 300px;
    bottom: -15px;
    left: -10px;
    transform: rotate(6deg);
    z-index: 1002;
}



</style>

