<template>
    <div>
      <section class="pt-5 pb-5">
        <div class="container">
          <div class="row w-100">
            <div class="col-lg-12 col-md-12 col-12">
              <h3 class="display-5 mb-2 text-center">Shopping Cart</h3>
              <p class="mb-5 text-center">
                <i class="text-info font-weight-bold">{{ cart.length }}</i> items in your cart
              </p>
              <table id="shoppingCart" class="table table-condensed table-responsive">
                <thead>
                  <tr>
                    <th style="width:60%">Product</th>
                    <th style="width:12%">Price</th>
                    <th style="width:10%">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product, index) in cart" :key="product.prodID">
                    <td data-th="Product">
                      <div class="row">
                        <div class="col-md-3 text-left w-100">
                          <img :src="product.key.prodUrl" style="width: 10rem" alt="" class="img-fluid d-md-block rounded mb-2 shadow">
                        </div>
                        <div class="col-md-9 text-left mt-sm-2">
                          <h4>{{ product.key.prodName }}</h4>
                          <p class="font-weight-light">{{ product.key.prodDescription }}</p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">{{ product.key.amount }}</td>
                    <td data-th="Quantity">
                      <input type="number" class="form-control form-control-lg text-center" v-model="product.quantity" @input="updateQuantity(index)">
                    </td>
                    <td class="actions" data-th="">
                      <div class="text-right">
                        <button class="btn btn-white border-secondary bg-white btn-md mb-2" @click="removeFromCart(index)">
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="float-right text-right">
                <h4>Subtotal:</h4>
                <h1 v-if="cart.length > 0">
                  {{ calculateSubtotal() }}
                </h1>
                <h1 v-else>
                  0.00
                </h1>
              </div>
            </div>
          </div>
          <div class="row mt-4 d-flex align-items-center">
            <div class="col-sm-6 order-md-2 text-right">
              <a href="catalog.html" class="btn btn-primary mb-4 btn-lg pl-5 pr-5">Checkout</a>
            </div>
            <div class="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
              <a href="catalog.html">
                <i class="fas fa-arrow-left mr-2"></i> Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart;
      },
    },
    methods: {
      calculateSubtotal() {
        let subtotal = 0;
        for (const product of this.cart) {
          subtotal += product.key.amount * product.quantity;
        }
        return subtotal.toFixed(2);
      },
      updateQuantity(index) {
        if (this.cart[index].quantity < 0) {
          this.cart[index].quantity = 0;
        }
        // You can update the cart in localStorage here if needed
      },
      removeFromCart(index) {
        this.cart.splice(index, 1);
        // You can also update the cart in localStorage here if needed
      },
    },
  };
  </script>
  