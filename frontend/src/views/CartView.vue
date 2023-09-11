<template>
    <div  v-for="product in products" :key="product.prodID">
        <div class="card" style="width: 18rem;" >
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
    </div>


    
</template>

<script>
    export default {
        computed:{
            products(){
                return this.$store.state.products
            }
        },
       methods:{
    addToCart(product){
      this.$store.dispatch('addToCart', product);
      },
      },
    }
</script>

<style scoped>

</style>