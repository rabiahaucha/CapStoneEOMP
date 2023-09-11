<template>
    <div >
        <section class="product-section" >
          <div class="product-grid">
            <div class="card" v-for="item in cart" :key="item.prodID">
              <div class="card-pill">
                Sale
              </div>
              <img :src="item.img"
              :alt="item.img"
              style="width: 9rem; height: 9rem"
              loading="lazy" >
              <div class="flex-row space-between w-full mb-sm">
                <p class="product-brand">{{ item.prodName }}</p>
                <p class="product-cat hide">{{ item.Category }}</p>
              </div>
              <h1 class="product-name">R {{ item.amount }}</h1>
              <div class="flex-row">
                <p class="price">Qty: {{ item.quantity }}</p>
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
      props:["prodID"],
      created() {
        this.$store.dispatch('fetchFromCart')
      },
        computed:{
            cart() {
              return this.$store.state.cart
            }
        },
    }
</script>

<style scoped>

</style>