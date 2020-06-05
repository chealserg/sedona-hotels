<template>
  <div class="home">
    <Header />
    <Jumbotron />
    
    <div class="central-text">
       <b-row>
          <b-col>
            <h4 class="z-indexfixed">Sedona is a small city in Arizona, <br>
            desirved more attention!
            </h4>
            <p class="underline-text">Let's have a look why this place cooler than a Grand Canion</p>
          </b-col>
       </b-row>
    </div>
    
    <SingleCardComponent
      imgUrl="https://i.ibb.co/1Th914q/Adv-img1.png"
      card-header="A Real
      City" 
      sub-header="– №1 –" 
      text="Sedona is not just a tourist attraction,
       here life goes on" />

    <div class="d-flex flex-wrap">
          <Iconcard v-for="cardIcon in cardIconInfo"
                  :key="cardIcon.id"
           :CardIcon="cardIcon.icon"
           :titleIconText="cardIcon.header"
           :IconCardText="cardIcon.text" />
    </div>
         
    <SingleCardComponent
      :reverse="true"
      :styleSingleCard="true"
      imgUrl="https://i.ibb.co/JcWyL4g/Adv-img2.png" 
      cardHeader="There is a Devil's bridge" 
      subHeader="– №4 –" 
      text="Yes, take a walk on it 
      if you dare"
       />

     <div class="d-flex flex-wrap">
            <Textcard bgrColor="light"
                      textColor="dark"
                      subTitleColor="dark"
            v-for="card in cardInfo" 
                      :key="card.id"
            :titleText="card.header"
            :subTitleText="card.subHeader"
            :innerText="card.text"
             /> 
    </div> 

     <div class="findhotel bg-white">
       <b-row>
          <b-col>
            <h3>Intrerested?</h3>
            <p class="underline-text">Set up estematad date for your trip,<br>
            we show you the best hotels in Sedona </p>
          </b-col>
       </b-row>
    </div>

    <SearchForm />
    <GoogleMap />
    <Footer />

  </div>
     
</template>

<script>
import Header from '@/components/Header.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import SingleCardComponent from '@/components/SingleCardComponent.vue'
import Textcard from '@/components/Textcard.vue'
import Iconcard from '@/components/Iconcard.vue'
import SearchForm from '@/components/SearchForm.vue'
import GoogleMap from '@/components/GoogleMap.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Jumbotron,
    SingleCardComponent,
    Textcard,
    Iconcard,
    SearchForm,
    GoogleMap,
    Footer
  },

  data:function () { 
  return {
    cardInfo: [
      {header:"A small\n area", subHeader:"– №3 –", text:"all sights\n sutuated close by", id:"1"},
      {header:"Beatiful\n road", subHeader:"– №4 –", text:"the way from LA\n will not let you bored!", id:"2"},
      {header:"Less\n tourists", subHeader:"– №5 –", text:"most of them heading to\n a crowded Grand Canyon", id:"3"}   
    ],
  
    cardIconInfo: [
      {icon:"https://i.ibb.co/FnjRSjm/icon-1.png", header:"Accomodation", text:"Reccomend to stay in the motel\n like in real movie!", id:"4"},
      {icon:"https://i.ibb.co/njYbV00/icon-3.png", header:"Food", text:"Try out delicios burger special,\n you won't be disappointed ", id:"5"},
      {icon:"https://i.ibb.co/0DV4FmY/icon-2.png", header:"Souvenirs", text:"Not only chiness-made,\n but also produced by local", id:"6"}   
    ]
  }
  }

}

</script>

<style scoped>

  p {
    font-size: 14px;
  }

  h3 {
    font-size: 30px;
  }

   h4.card-title {
    font-weight: 600;
    font-size: 21px !important;
  }

  .central-text {
    position: relative;
    padding-top: 60px;
    z-index: 1003;
  }

  .underline-text {
    padding-top: 20px;
  }
  .cont-adv {
    height: 260px;
  }

  .no-border {
    border-radius: 0px;
    border: none;
    background-color:#eeeeee;
  } 

  .card-body {
    background-color: #81b3d2 !important;
  }

  .single-card-section-image {
    width: calc(100% - 400px);
  }

  .single-car-section {
    height: 260px;
  }

  .card-body p {
    white-space: pre-line;
    text-transform: uppercase;
}
.underline-text {
    padding-bottom: 20px;
    padding-top: 20px;
 }

 /*DECORATION BETWEEN TEXT AND JUMBOTRON SECTIONS*/
.central-text:before {
   content: " ";
    position: absolute;
    background: white;
    height: 60px;
    width: 350px;
    transform: rotate(9deg);
    left: 250px;
    bottom: 170px;
    z-index: 1003;
}
.central-text::after { 
   content: " ";
    position: absolute;
    background: #fff;
    height: 60px;
    width: 350px;
    transform: rotate(-9deg);
    bottom: 170px;
    z-index: 1002;
 }

 .z-indexfixed {
   position: relative;
   z-index: 1003;
 }

 h4 {
   font-size:21px;
   font-weight: 600;
 }

.findhotel {
  padding-top: 60px;
  min-height: 225px;
}


</style>
