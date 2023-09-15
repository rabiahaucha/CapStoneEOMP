<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal4" data-bs-whatever="@mdo">Edit</button>
        <div class="modal fade" id="exampleModal4" tabindex="-2" aria-labelledby="exampleModalLabel4" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel4">Edit User</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="editForm" class="d-flex flex-column gap-5">
                    <input type="text" v-model="edtUser.userID" placeholder="id" name="" id="">
                    <input type="text" v-model="edtUser.firstName" placeholder="name" name="" id="">
                    <input type="text" v-model="edtUser.lastName" placeholder="surname" name="" id="">
                    <input type="text" v-model="edtUser.Gender" placeholder="gender" name="" id="">
                    <input type="text" v-model="edtUser.userRole" placeholder="userRole" name="" id="">
                    <input type="text" v-model="edtUser.emailAdd" placeholder="email" name="" id="">
                    <input type="text" v-model="edtUser.userPass" placeholder="password" name="" id="">
                    <input type="text" v-model="edtUser.userProfile" placeholder="image" name="" id="">
                    <button type="submit" class="btn">Save Changes</button>
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
        edtUser:{
        userID: "",
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
          async editForm(){
            this.$store.dispatch('editUser', this.edtUser)
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
    color: #ec2c8c;
    background-color: white;
    border: black solid 2px;
  }
li {
    text-decoration: none;
}
</style>