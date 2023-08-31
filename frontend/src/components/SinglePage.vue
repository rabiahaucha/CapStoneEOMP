<template>
    <div>
        <div class="row" style="margin-top: 3rem display: flex; justify-content: center;">
          <div
            class="car col-12 col-sm-6 col-md-4 p-2" style="border: 2px solid"
          >
            <img
              :src="$route.query.img"
              :alt="$route.query.img"
              style="width: 9rem; height: 9rem"
              loading="lazy"
            />
            <div class="card-body">
            
              <h5 class="card-title">{{ $route.query.prodName }}</h5>
              <h5 class="card-title">{{ $route.query.Category }}</h5>
      
              <p class="card-text">R {{ $route.query.amount }}</p>
              <p class="card-text">Qty: {{ $route.query.quantity }}</p>
              </div>
              </div>
        </div>
      </div>
</template>

<script>
   
        export default {
  props: ["prodID"],
  created() {
    this.$store.dispatch('fetchProduct', this.prodID)
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  }
}  
    
</script>

<style scoped>

</style>