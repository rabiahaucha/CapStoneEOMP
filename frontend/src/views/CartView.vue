<template>
    <div>

    </div>
</template>

<script>
    export default {
        methods:{
    addToCart (
      product){
        this.$store.dispatch('addToCart',product);
      },
      },
    }
</script>

<style scoped>

</style>