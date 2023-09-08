<template>
  <div v-if="user">
    <Navbar />
     <router-view />
    <Footer />
  </div>
  <div v-else>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/FooterVue.vue";
import Navbar from "@/components/NavbarVue.vue";
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export default {
  components: {
    Footer,
    Navbar,
  },
  created(){
    const myData = JSON.parse(localStorage.getItem('myData'))
    if(myData){
      this.$store.commit("setUser", myData)
    }
    const token = localStorage.getItem("token")
    if(token){
      cookies.set("theUser", token, {
        expires: 1
      })
    }
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
  }
};
</script>
<style>
#app {
  font-family: "Roboto Condensed", sans-serif;
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
