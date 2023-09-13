<template>
    <div>
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">Add</button>
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel1">Add to the collection</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="addForm" class="d-flex flex-column gap-5">
                    <input type="text" v-model="prodData.prodID" placeholder="id" name="" id="">
                    <input type="text" v-model="prodData.prodName" placeholder="name" name="" id="">
                    <input type="text" v-model="prodData.amount" placeholder="amount" name="" id="">
                    <input type="text" v-model="prodData.Category" placeholder="category" name="" id="">
                    <input type="text" v-model="prodData.prodUrl" placeholder="image" name="" id="">
                    <button type="submit" class="btn">Add</button>
                   </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
      prodData:{
        prodID: "",
        prodName: "",
        amount: "",
        Category: ""
      }
    }
  },
  methods:{
          addForm(){
            this.$store.dispatch('addProduct', this.prodData)
            console.log(this.prodData);
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
    border: black solid 2px;
  }
</style>