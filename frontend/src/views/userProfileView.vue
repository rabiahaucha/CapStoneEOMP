<template>
  <div>
    <h1 class="title-pen" v-if="user" > User Profile <span>{{ user.userID }}</span></h1>
<div class="user-profile" >
	<img :src="user.userProfile" class="card-img-top" :alt="user.firstName" />
    <div class="username">{{ user.firstName }} {{ user.lastName }}</div>
  </div>
    <div class="description">
      {{ user.userRole }}
  </div>
  <div>

    <button class="btn btn-dark" @click="deleteUser(user.userID)">Delete</button>
    <h4>
      Edit Details
    </h4>
    <button><EditProfile/></button>
    <h4>
      Change Password
    </h4>
    <button><ChangePass/></button>
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
  width: 14rem;
}

.car {
  display: flex;
  justify-content: center;
}
/* CSS design by @jofpin */
@import url(https://fonts.googleapis.com/css?family=Raleway|Varela+Round|Coda);
@import url(http://weloveiconfonts.com/api/?family=entypo);

[class*="entypo-"]:before {
  font-family: 'entypo', sans-serif;
}

body {
  background: #fffcdd;
  padding: 2.23em;
}

.title-pen {
  color: #333;
  font-family: "Coda", sans-serif;
  text-align: center;
}
.title-pen span {
  color: black;
}

.user-profile {
  margin: auto;
	width: 25em; 
  height: 11em;
  background: #fff;
  border-radius: .3em;
}

.user-profile  .username {
  margin: auto;
  margin-top: -4.40em;
  margin-left: 5.80em;
  color: #658585;
  font-size: 1.53em;
  font-family: "Coda", sans-serif;
  font-weight: bold;
}
.user-profile  .bio {
  margin: auto;
  display: inline-block;
  margin-left: 10.43em;
  color: #e76043; 
  font-size: .87em;
  font-family: "varela round", sans-serif;
}
.user-profile > .description {
  margin: auto;
  margin-top: 1.35em;
  margin-right: 4.43em;
  width: 14em;
  color: #c0c5c5; 
  font-size: .87em;
  font-family: "varela round", sans-serif;
}
.user-profile > img.avatar {
	padding: .7em;
  margin-left: .3em;
  margin-top: .3em;
  height: 6.23em;
  width: 6.23em;
  border-radius: 18em;
}

.user-profile ul.data {
	margin: 2em auto;
	height: 3.70em;
  background: #4eb6b6;
  text-align: center;
  border-radius: 0 0 .3em .3em;
}
.user-profile li {
	margin: 0 auto;
  padding: 1.30em; 
  width: 33.33334%;
  display: table-cell;
  text-align: center;
}

.user-profile span {
	font-family: "varela round", sans-serif;
	color: #e3eeee;
  white-space: nowrap;
  font-size: 1.27em;
  font-weight: bold;
}
.user-profile span:hover {
  color: #daebea;
}

footer > h1 {
  display: block;
  text-align: center;
  clear: both;
  font-family: "Coda", sans-serif;
  color: #343f3d;
  line-height: 6;
  font-size: 1.6em;
}
footer > h1 a {
  text-decoration: none;
  color: #ea4c89;
}
</style>
