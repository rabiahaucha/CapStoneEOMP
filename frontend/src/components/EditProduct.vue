<template>
    <div>
        <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo">Edit</button>
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel2">Edit the Collection</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="edtForm" class="d-flex flex-column gap-5">
                    <input type="text" v-model="edtProduct.prodID" placeholder="id" name="" id="">
                    <input type="text" v-model="edtProduct.prodName" placeholder="name" name="" id="">
                    <input type="text" v-model="edtProduct.quantity" placeholder="quantity" name="" id="">
                    <input type="text" v-model="edtProduct.amount" placeholder="amount" name="" id="">
                    <input type="text" v-model="edtProduct.Category" placeholder="category" name="" id="">
                    <input type="text" v-model="edtProduct.prodUrl" placeholder="image" name="" id="">
                    <button type="submit" class="btn" >Save Changes</button>
                   </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
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
        edtProduct:{
        prodID: "",
        prodName: "",
        quantity: "",
        amount: "",
        Category: "",
        prodUrl: ""
      }
    }
  },
  methods:{
          edtForm(){
            this.$store.dispatch('editProduct', this.edtProduct)
            location.reload()
          }
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
    
  }
</style>