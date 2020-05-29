<template>
  <div class="container">
    <div id="app">
      <!-- <div id="nav"> -->
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
      <!-- </div> -->
      <router-view/>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
#app {
  font-family: 'PT Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-transform: uppercase;
}

#app {
  padding:0 !important;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983
  
  ;
}

@media (min-width: 1200px) {
    .container {
    max-width: 1200px important;
    }
}

h4 {
  font-weight: 600;
  font-size: 21px;
}

</style>
