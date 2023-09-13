<template>
  <div>
    <h1 style="margin-top: 2rem;">
      <span style="color: #ec2c8c;">SWEET</span>
      <span>
        <img
          src="https://i.postimg.cc/WbQHW9GL/icons8-sprinkle-78.png"
          loading="lazy"
        />
      </span>
      <span style="color: #ec2c8c;">BAKERY</span>
    </h1>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            <router-link to="/bakery" class="nav-link">All</router-link>
            <router-link to="/special" class="nav-link">Special</router-link>
            <router-link to="/glazed" class="nav-link">Glazed</router-link>
            <router-link to="/roll" class="nav-link">Roll</router-link>
            <router-link to="/cake" class="nav-link">Cake</router-link>
            <router-link to="/pocket" class="nav-link">Pocket</router-link>
          </div>
        </div>
      </div>
    </nav>

    <div class="row" style="margin-top: 3rem;" v-if="products">
      <div>
        <button @click="sortByName" >Sort Name</button>
        <button @click="sortByPrice">Sort Price</button>
        <div>
          <div>
            <input type="text" v-model="searchQuery" placeholder="Search...">
            <button @click="searchProducts">Search</button>
          </div>
        </div>
      </div>

      <div
        class="car col-12 col-sm-6 col-md-4 p-2"
        v-for="product in sortedProducts"
        :key="product.prodID"
        style="margin-bottom: 4rem;"
      >
        <img
          :src="product.prodUrl"
          :alt="product.prodName"
          style="width: 10rem; height: 10rem;"
          loading="lazy"
        />
        <div class="card-body">
          <h2 class="card-title">{{ product.prodName }}</h2>
          <h5 class="card-title">Category: {{ product.Category }}</h5>
          <h5>R {{ product.amount }}</h5>
          <h5>Qty: {{ product.quantity }}</h5>
          <router-link
            :to="{
              name: 'single',
              params: { id: product.prodID },
              query: {
                prodName: product.prodName,
                Category: product.Category,
                img: product.prodUrl,
                amount: product.amount,
                quantity: product.quantity
              }
            }"
            class="btn"
          >
            View More
          </router-link>
          <button @click="addToCart(product)" class="btn" style="margin-left:1rem;">Buy Now</button>
        </div>
      </div>
    </div>

    <div class="else" v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/SpinnerVue.vue';

export default {
  components: {
    Spinner
  },
  computed: {
  products() {
    return this.$store.state.products;
  },
  sortedProducts() {
    let filteredProducts = this.products;

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter((product) =>
        product.prodName.toLowerCase().includes(query)
      );
    }
    if (this.sortType === 'price') {
      return [...filteredProducts].sort((a, b) => a.amount - b.amount);
    } else if (this.sortType === 'name') {
      return [...filteredProducts].sort((a, b) =>
        a.prodName.localeCompare(b.prodName)
      );
    }

    return filteredProducts;
  }
},
    sortedProducts() {
      if (this.sortType === 'price') {
        return [...this.products].sort((a, b) => a.amount - b.amount);
      } else if (this.sortType === 'name') {
        return [...this.products].sort((a, b) =>
          a.prodName.localeCompare(b.prodName)
        );
      }
      return this.products;
    },
    sortedProducts() {
    let filteredProducts = this.products;

    // Apply search filter
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter((product) =>
        product.prodName.toLowerCase().includes(query)
      );
    }

    // Sort by selected type
    if (this.sortType === 'price') {
      return [...filteredProducts].sort((a, b) => a.amount - b.amount);
    } else if (this.sortType === 'name') {
      return [...filteredProducts].sort((a, b) =>
        a.prodName.localeCompare(b.prodName)
      );
    }

    return filteredProducts;
  },
  data() {
    return {
      sortType: '',
      searchQuery: ''
    };
  },
  methods: {
    sortByName() {
      this.sortType = 'name';
    },
    sortByPrice() {
      this.sortType = 'price';
    },
    searchProducts() {
      this.$store.commit('setSearchQuery', this.searchQuery); 
    },
    addToCart(product) {
        const data = JSON.parse(localStorage.getItem('cart')) || []

        const newData = {key: product}
        data.push(newData)

        localStorage.setItem('cart', JSON.stringify(data))
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  }

};

</script>

<style scoped>
* {
  color: black;
}

h5 {
  font-size: 20px;
}

.btn {
  color: white;
  background: #ec2c8c;
}

.btn:hover {
  color: #ec2c8c;
  background-color: black;
  border: black solid 2px;
}

.nav-link {
  color: #ec2c8c;
}
</style>
