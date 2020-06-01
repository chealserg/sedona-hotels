<template>
  <div class="hotel-page">
    <Header />
    <HotelsFilter />
    <SortItemsBlock />
    
    <HotelOptionCard 
        imgUrl="https://i.ibb.co/QfYgnhF/Hotel-Amara.png"
        value="7.2"
        accomodation="Hotel"
        price="From 80$" />
     <HotelOptionCard 
        imgUrl="https://i.ibb.co/J3ntjXQ/Desert-Quail.png"
        value="8.3"
        accomodation="Motel"
        price="From 65$" />
     <HotelOptionCard 
        imgUrl="https://i.ibb.co/rszM3TQ/Villas-At-Poco.png"
        value="3.6"
        accomodation="Apartments"
        price="From 45$" />
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
  }
}
</script>

<style scoped>

</style>
