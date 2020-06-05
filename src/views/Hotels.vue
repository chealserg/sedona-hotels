<template>
  <div class="hotel-page">
    <Header />
    <HotelsFilter />
    <SortItemsBlock />
    
    <HotelOptionCard 
        v-for="hotelCard in hotelInfo"
          :key="hotelCard.id"
        :itemImgUrl="hotelCard.img"
        :itemRating="hotelCard.rate"
        :itemPropertyType="hotelCard.type"
        :itemPrice="hotelCard.price" />

    <Footer class="m-0 bg-white" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HotelsFilter from '@/components/HotelsFilter.vue'
import SortItemsBlock from '@/components/SortItemsBlock.vue'
import HotelOptionCard from '@/components/HotelOptionCard.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Hotels',
  components: {
  Header,
  HotelsFilter,
  HotelOptionCard,
  SortItemsBlock,
  Footer
  },

  data:function () {
    return {
      hotelInfo: [
        {img:"https://i.ibb.co/QfYgnhF/Hotel-Amara.png", rate:"7.2", type:"Hotel", price:"From 80$", amenities: [ {parking:"true", wifi:"true", pool:"true"}], id:"1"},
        {img:"https://i.ibb.co/J3ntjXQ/Desert-Quail.png", rate:"8.3", type:"Motel", price:"From 65$", amenities: [ {parking:"true", wifi:"true", pool:"false"}], id:"2"},
        {img:"https://i.ibb.co/rszM3TQ/Villas-At-Poco.png", rate:"3.6", type:"Apartments", price:"From 45$", amenities: [ {parking:"false", wifi:"true", pool:"false"}], id:"3"}
      ]
    }
  }
}
</script>

<style scoped>

</style>
