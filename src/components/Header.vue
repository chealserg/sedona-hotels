<template>
  <div>
  <b-navbar type="light" variant="white">
    <b-navbar-nav class="w-100" fill justified>
      <b-nav-item active href=
      
       "#">Information</b-nav-item>
      <b-nav-item href="#">Foto & Video</b-nav-item>
      <b-nav-item href="#" class="nav-logo"><img src="../assets/logo-1.png"></b-nav-item>
      <b-nav-item href="#">Map</b-nav-item>
      <b-nav-item href="#">Hotels</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
   .navbar-expand .navbar-nav .nav-link {
    padding: 0;
}

nav.navbar.navbar-light.bg-white.navbar-expand {
  padding: 0;
}
   .nav-link a {
    padding: 0;
}

    li {
        font-weight: bold;
    }

    li.nav-item.nav-logo {
    position: relative;
    z-index: 999;
}
    li.nav-item {
    align-self: baseline;
    
  
}
   
</style>

