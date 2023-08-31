<template>
  <div>
 <Navbar/>
  <router-view/>
  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/FooterVue.vue'
import Navbar from '@/components/NavbarVue.vue';

export default {
  components :{
    Footer,
    Navbar
}
}
</script>
<style>
#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
