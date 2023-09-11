<template>
    <div>
        <section class="product-section">
          <div class="product-grid">
            <div class="card">
              <div class="card-pill">
                Sale
              </div>
              <img :src="$route.query.img"
              :alt="$route.query.img"
              style="width: 9rem; height: 9rem"
              loading="lazy" >
              <div class="flex-row space-between w-full mb-sm">
                <p class="product-brand">{{ $route.query.prodName }}</p>
                <p class="product-cat hide">{{ $route.query.Category }}</p>
              </div>
              <h1 class="product-name">R {{ $route.query.amount }}</h1>
              <div class="flex-row">
                <p class="price strike">R<span>35</span></p>
                <p class="price">Qty: {{ $route.query.quantity }}</p>
              </div>
              <div class="btn-col">
              </div>
            </div>
          </div>
        </section>
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