<template>
  <div>
    <div class="car">
      <div class="card" v-if="user" style="height: 30rem;">
  <img :src="user.userProfile" class="card-img-top" :alt="user.firstName">
  <div class="card-body">
  <h5 class="card-title">ID: {{ user.userID }}</h5>
  <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
  <h5 class="card-text">{{ user.userRole }}</h5>
  <button class="btn" @click="logOut">Log Out</button>
  </div>
  </div>
    </div>
    <!-- <router-link to="/login" class="btn btn-dark" @click="deleteUserFUNC(user.userID)">Delete</router-link> -->
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
// import EditProfile from '@/components/EditProfile.vue'
// import ChangePass from '@/components/ChangePass.vue'
    export default {
      components: {
        // EditProfile,
        // ChangePass
      },
    computed: {
    user() {
      return this.$store.state.user;
    },
  },
    beforeCreate() {
    this.$store.dispatch("fetchUser");
    },
    mounted() {
    console.log(cookies.get("theUser"));
    },
    created() {
      const storedUser = (localStorage.getItem("user"));
      if (storedUser) {
        this.user = JSON.parse(storedUser)
      }
      const data = JSON.parse(localStorage.getItem("user"));
      if (data) {
        this.$store.commit("setUser", data)
      }
    },
    methods: {
          logOut() {
            this.$store.dispatch("logOut")
          },
          deleteUserFUNC(userID) {
        this.$store.dispatch('deleteUserFUNC', userID);
      },
        },
    }
</script>

<style scoped>

img {
  width: 14rem;
}

.car {
  display: flex;
  justify-content: center;
}
</style>
