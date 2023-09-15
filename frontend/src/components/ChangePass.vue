<template>
    <div>
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal5"
        data-bs-whatever="@mdo"
      >
        Edit
      </button>
      <div
        class="modal fade"
        id="exampleModal5"
        tabindex="-2"
        aria-labelledby="exampleModalLabel5"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel5">Edit User</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="editForm" class="d-flex flex-column gap-5">
                <input
                  type="text"
                  v-model="edUser.userID"
                  placeholder="ID"
                  name=""
                  id=""
                  required
                />
                <input
                  type="text"
                  v-model="edUser.userPass"
                  placeholder="password"
                  name=""
                  id=""
                  required
                />
                <button type="submit" class="btn">Save Changes</button>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        edUser: {
          userID: "",
          userPass: "",
        },
      };
    },
    methods: {
      async editForm() {
        this.$store.dispatch("editUser", this.edUser);
        location.reload()
      },
    },
  };
  </script>
  <style scoped>
  .btn {
    color: black;
    background-color: white;
  }
  .btn:hover {
    color: red;
    background-color: black;
    border: black solid 2px;
  }
  li {
    text-decoration: none;
  }
  </style>