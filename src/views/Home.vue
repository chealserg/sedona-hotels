<template>
  <div class="home">
    <Header />
    <Jumbotron />
    <Static />
    <AdvCard />
    <!-- <ImgAdv /> -->
    <!-- <TextCard /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Static from '@/components/Static.vue'
import Header from '@/components/Header.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import AdvCard from '@/components/AdvCard.vue'
// import ImgAdv from '@components/ImgAdv.vue'
// import TextCard from '@components/TextCard.vue'


export default {
  name: 'Home',
  components: {
    Static,
    Header,
    Jumbotron,
    AdvCard,
    // ImgAdv,
    // TextCard
  }
}
</script>
