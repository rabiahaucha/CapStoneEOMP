<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="car col-12 col-md-6">
          <div class="card" v-if="user">
      <img :src="user.userProfile" class="card-img-top" :alt="user.firstName">
      <div class="card-body">
      <h5 class="card-title">ID: {{ user.userID }}</h5>
      <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
      <h5 class="card-text">{{ user.userRole }}</h5>
      <button class="btn btn-dark" @click="deleteUser(user.userID)">Delete</button>
      </div>
      </div>
    </div>
      <div class="car2 col-12 col-md-6">
        <div>
          <h4>
            Edit Details
          </h4>
          <button><EditProfile/></button>
          <h4>
            Change Password
          </h4>
          <button class="btn"><ChangePass/></button>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import EditProfile from '@/components/EditProfile.vue'
import ChangePass from '@/components/ChangePass.vue'
    export default {
      components: {
        EditProfile,
        ChangePass
      },
    computed: {
    user() {
      return this.$store.state.user;
    },
  },
    // beforeCreate() {
    // this.$store.dispatch("fetchUser");
    // },
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
          // logOut() {
          //   this.$store.dispatch("logOut")
          // },
          deleteUser(userID) {
        this.$store.dispatch('deleteUserFUNC', userID);
        cookies.remove('theUser')
        localStorage.removeItem('user')
      },
        },
    }
</script>

<style scoped>

img {
    width: 14.9rem;
    border-radius: 1rem
}

.car {
  display: flex;
  justify-content: center;
}

.card {
  border: 1px solid  #FFB5E8;
  border-radius: 1rem;
  width: 15rem;
}

.row {
  background-color: #FFB5E8;
  display: flex;
  justify-content: center;
}

h4 {
  color: black;
}

.car2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
body{
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
