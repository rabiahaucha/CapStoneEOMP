<template>
       <div>
        <Navbar class="navbar navbar-expand-lg" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
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
                        <router-link to="/" class="nav-link"><span style="color:black;">HOME</span></router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/about" class="nav-link"><span style="margin-left:0.3rem;color:black;">ABOUT</span></router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/products" class="nav-link"><span style="margin-left:1.3rem;color:black;">PRODUCTS</span></router-link>
                    </li>
                    <li class="nav-item ">
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