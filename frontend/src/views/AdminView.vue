<template>
    
        <div>
            <div>
              <h2 style="margin-top:2rem;color:black;">PRODUCTS</h2>
              <button class="btn"><AddProducts/></button>
              <div class="table-responsive" style="margin-top: 1rem" >
                <table class="table" >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                      <th>Category</th>
                      <th>Image</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in products" :key="product.productID">
                      <td>{{ product.prodID }}</td>
                      <td>{{ product.prodName }}</td>
                      <td>{{ product.quantity }}</td>
                      <td>{{ product.amount }}</td>
                      <td>{{ product.Category }}</td>
                      <td>
                        <img :src="product.prodUrl" :alt="product.prodName" style="width: 5rem; height: 6rem" loading="lazy">
                      </td>
                      <td><button><EditProduct/></button></td>
                      <td>
                        <button class="btn btn-dark" @click="deleteProduct(product.prodID)">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h2 style="margin-top:2rem;color:black;">USERS</h2>
            <button class="btn"><AddUser/></button>
            <div class="table-responsive" style="margin-top: 1rem">
              <table class="table" v-if="products">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Gender</th>
                    <th>User Role</th>
                    <th>Email</th>
                    <!-- <th>Password</th> -->
                    <th>Image</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.userID">
                    <td>{{ user.userID }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.Gender }}</td>
                    <td>{{ user.userRole }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <!-- <td>{{ user.userPass }}</td> -->
                    <td>
                      <img :src="user.userProfile" :alt="user.userName" style="width: 7rem; height: 10rem" loading="lazy">
                    </td>
                    <td> <button><EditUser/></button></td>
                    <td>
                      <button class="btn btn-dark" @click="deleteUser(user.userID)">Delete</button>
                    </td>
                  </tr>
                </tbody>

                  <h2 style="margin-top:2rem;">ORDERS</h2>
                  <div class="table-responsive" style="margin-top: 1rem">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>OrderID</th>
                          <th>UserID</th>
                          <th>ProdID</th>
                          <th>OrderDate</th>
                        </tr>

                      </thead>
                    </table>
  
 
                </div>
              </table>
              <div class="else" v-else>
                <Spinner/>
              </div>
            </div>
          </div>
  
</template>

<script>
import AddProducts from '@/components/AddProducts.vue'
import AddUser from '@/components/AddUser.vue'
import EditProduct from '@/components/EditProduct.vue'
import EditUser from '@/components/EditUser.vue'
import axios from 'axios'
export default {
  components: {
    AddProducts,
    AddUser,
    EditProduct,
    EditUser
  },

  computed: {
    data(){
      return{
orders:[],
      }
    },
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch('fetchUsers');
  },
  methods: {
    deleteUser(userID) {
      this.$store.dispatch('deleteUserFUNC', userID);
    },
    deleteProduct(prodID) {
      this.$store.dispatch('deleteProductFUNC', prodID);
    },
  }
  };
</script>

<style scoped>
.body{
    font-family: "Inter", sans-serif;
}
</style>