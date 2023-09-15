<template>
    <div>
      <button
        type="button"
        class="btn edit-users-btn"
        @click="openEditModal(user.userID)"
        data-bs-toggle="modal"
        :data-bs-target="'#edit-user-modal' + user.userID"
      >
        Edit
      </button>
  
      <div 
      class="modal"
      :id="'edit-user-modal' + user.userID"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content blue-bg">
          <div class="modal-header">
            <h1 class="modal-title text-center heading-text">Update User:</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="close"
            ></button>
          </div>
  
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">First Name :</label>
              <input type="text" class="form-control" v-model="editUser.firstName" />
            </div>
  
            <div class="mb-3">
              <label class="form-label">Last Name :</label>
              <input type="text" class="form-control" v-model="editUser.lastName" />
            </div>
  
            <div class="mb-3">
              <label class="form-label">Email :</label>
              <input type="text" class="form-control" v-model="editUser.emailAdd" />
            </div>
  
            <div class="mb-3">
              <label class="form-label">Password :</label>
              <input type="text" class="form-control" v-model="editUser.userPass" />
            </div>
  
            <div class="mb-3">
              <label class="form-label">Profile Image :</label>
              <input type="text" class="form-control" v-model="editUser.userImg" />
            </div>
          </div>
  
          <div class="modal-footer">
            <button
              type="button"
              class="btn edit-user-btn"
              @click="updateUser(user.userID)"
            >
              Update
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["user"],
  
    data() {
      return {
        editUser: {
          ...this.user,
        },
  
        editUserID: null,
  
        user: {
          firstName: "",
          lastName: "",
          emailAdd: "",
          userPass: "",
          userImg: "",
        },
      };
    },
  
    computed: {
      currentUser() {
        return this.$store.state.user;
      },
    },
  
    methods: {
      openEditModal(userID) {
        this.editUserID = userID;
        this.editUser = {
          ...this.$store.state.users.find((user) => user.userID === userID),
        };
      },
  
      updateProduct(userID) {
        this.$store
          .dispatch("updateUser", {
            userID: userID,
            data: { ...this.editUser },
          })
          .then(() => {
            console.log("User updated!");
            setTimeout(() => {
              window.location.reload();
            }, 500);
          })
          .catch((err) => {
            console.error("Error updating: ", err);
          });
      },
    },
  };
  </script>
  
  <style scoped>
 
  </style>