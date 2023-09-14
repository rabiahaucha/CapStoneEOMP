<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add</button>
        <div class="modal fade" id="exampleModal" tabindex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Add Users</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="addForm" class="d-flex flex-column gap-5">
                    <input type="text" v-model="userData.firstName" placeholder="name" name="" id="">
                    <input type="text" v-model="userData.lastName" placeholder="surname" name="" id="">
                    <input type="text" v-model="userData.Gender" placeholder="gender" name="" id="">
                    <input type="text" v-model="userData.userRole" placeholder="userRole" name="" id="">
                    <input type="text" v-model="userData.emailAdd" placeholder="email" name="" id="">
                    <input type="text" v-model="userData.userPass" placeholder="password" name="" id="">
                    <input type="text" v-model="userData.userProfile" placeholder="image" name="" id="">
                    <button type="submit" class="btn">Add</button>
                   </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
    export default {
    data(){
    return{
      userData:{
        firstName: "",
        lastName: "",
        Gender: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        userProfile: ""
      }
    }
  },
  methods:{
          async addForm(){
            this.$store.dispatch('addUser', this.userData);
            location.reload()
          },
        }
    }
</script>
<style scoped>
.btn {
    color: white ;
    background-color: black;
  }
  .btn:hover {
    color: #C11111;
    background-color: white;
    border: black solid 2px;
  }
li {
    text-decoration: none;
}
</style>