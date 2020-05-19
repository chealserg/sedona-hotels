<template>
  <div class="home">
    <Header />
    <Jumbotron />
    <div>
    <b-container class="central-text">
       <b-row>
          <b-col>
            <h2>Sedona is a small city in Arizona, <br>
            that desirved more attention!
            </h2>
            <p class="underline-text">Let's have a look why this place cooler than a Grand Canion"</p>
          </b-col>
       </b-row>
    </b-container>
    
    <b-container class="cont-adv">
      <b-row>
        <b-col cols="4" class="bgr-light-blue">
          <textcard />
        </b-col>
        <b-col cols="8" class="w-100">
          <div>
             <img src="../assets/Adv-img1.png">
          </div>
        </b-col>
      </b-row>
    </b-container>
    </div>

  <div>
  <b-card-group deck>
    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
</div>  


    <div>
     <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="8">
            <img src="../assets/Adv-img1.png" style="width:100%">
          </b-col>
          <b-col md="4">
            <b-card-body title="Horizontal Card">
              <b-card-text>
              This is a wider card with supporting text as a natural lead-in to additional content.
              This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>

     <div>
  <b-card-group class="bgr-grey" deck>
    <b-card class="card-body no-border" title="Title" sub-title="– №3 –">
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
    </b-card>

    <b-card class="card-body no-border" title="Title" sub-title="– №4 –">
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
    </b-card>

    <b-card class="card-body no-border" title="Title" sub-title="– №5 –">
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
    </b-card>
  </b-card-group>
</div>  



  </div>


</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import Textcard from '@/components/Textcard.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Jumbotron,
    Textcard
  }
}
</script>

<style scoped>
  .central-text {
    padding-top: 40px;
  }
  .underline-text {
    padding-top: 20px;
  }
  .cont-adv {
    height: 260px;
  }

  .w100 img {
    width: 100%;
  } 

  .bgr-light-blue {
    background-color:#81b3d2;
  }
  .bgr-grey {
    
    background-color: #eeeeee;
  }

  .no-border {
    border: none;
    background-color:#eeeeee;
  } 
</style>
