<template>
       <div>
        <Navbar class="navbar navbar-expand-lg" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"></a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <router-link to="/">
                    <img src="https://i.postimg.cc/RFWk6nL9/Screenshot-2023-08-28-094033.png" style="width:10rem;" alt="logo">
                    </router-link>
                    </ul>
                 
                </div>
             </Navbar>

 <nav class="navbar navbar-expand-lg" id="nav1">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item ">
                        <router-link to="/" class="nav-link"><span style="color:black;margin-left:0.3rem;">HOME</span></router-link>
                    </li>
                            <li class="nav-item dropdown">
          <router-link to="/about" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style="color:#ec3d93;">
            <span style="margin-left:1.3rem;color:black;">ABOUT US</span>
          </router-link>
          <ul class="dropdown-menu">
            <li> <router-link to="/about" class="dropdown-item" exact>OUR STORY</router-link> </li>
            <li><hr class="dropdown-divider"></li>
            <li>   <router-link to="#fundraiser" class="dropdown-item" exact>FUNDRAISER</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li>   <router-link to="#careers" class="dropdown-item" exact>CAREERS</router-link></li>
          </ul>
        </li>
                    <li class="nav-item ">
                        <router-link to="/bakery" class="nav-link"><span style="margin-left:1.3rem;color:black;">BAKERY</span></router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/checkout" class="nav-link"><span style="margin-left:1.3rem;color:black;">CHECKOUT</span></router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="nav-link"><span style="margin-left:1.3rem;color:black;">CONTACT</span></router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/admin" class="nav-link"><span style="margin-left:1.3rem;color:black;">ADMIN</span></router-link>
                    </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
</style>