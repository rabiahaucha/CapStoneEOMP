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
                    <router-link to="/userprofile" class="text-hover">
                     <i class="bi bi-person-circle" style="margin-left:0.5rem;margin-right:0.2rem;"></i>
                    </router-link>
                      <router-link class="btn" to="/login"  @click="logOut()" style="margin-top:2;margin-left:1rem;" ><i class="bi bi-box-arrow-right"></i></router-link  >
                </div>
             </Navbar>

 <nav class="navbar navbar-expand-lg" id="nav1">
            <div class="container-fluid">
              <a class="navbar-brand" href="/"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                  
                  <li class="nav-item ">
                    <router-link to="/" class="nav-link text-hover"><span style="margin-left:1rem;color:black;">HOME</span></router-link>
                </li>
                            <li class="nav-item dropdown">
          <router-link to="/about" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style="color:#ec3d93;">
            <span style="margin-left:1.3rem;color:black;">ABOUT US</span>
          </router-link>
          <ul class="dropdown-menu">
            <li> <router-link to="/about" class="dropdown-item" style="color:black;" exact>OUR STORY</router-link> </li>
            <li><hr class="dropdown-divider"></li>
            <li> <router-link to="#fundraiser" class="dropdown-item" style="color:black;" exact>FUNDRAISER</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li> <router-link to="#careers" class="dropdown-item" style="color:black;" exact>CAREERS</router-link></li>
          </ul>
        </li>
                    <li class="nav-item ">
                        <router-link to="/bakery" class="nav-link text-hover"><span style="margin-left:1rem;color:black;">BAKERY</span></router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/cart" class="nav-link text-hover"><span style="margin-left:1rem;color:black;">CART</span></router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="nav-link text-hover"><span style="margin-left:1rem;color:black;">CONTACT</span></router-link>
                    </li>
                    
                    <li class="nav-item ">
                        <router-link to="/admin" class="nav-link text-hover"><span style="margin-left:1rem;color:black;" v-show="isAdmin">ADMIN</span></router-link>
                    </li>
                    
                    <li>
                      <router-link to="/login" class="nav-link text-hover"><span style="color:black;">LOGIN</span></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
    
</template>

<script>
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
    export default {
        computed: {
          user() {
            return this.$store.state.user ||
            cookies.get('theUser')
          },
          result() {
          return this.user?.result
        },
        isAdmin() {
          return this.result?.userRole?.toLowerCase() === "admin"
        },
        isUser() {
          return this.result?.userRole?.toLowerCase() === "user"
        },
        isAdminUser() {
          return this.result?.userRole?.toLowerCase() === "admin" || this.result?.userRole?.toLowerCase() === "user"
        }
        },
        methods: {
          logOut() {
            this.$store.dispatch("logOut")
          }
        }
    }
</script>

<style scoped>

i{
  font-size: 3rem;
}
.li{
  color:black;
}
.nav-item{
  color:#ec3d93;
}
i{
  color:black;
}

.text-hover {
    background-image: linear-gradient(
      to right,
      #ec3d93,
      #ec3d93 50%,
      #000 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
  }
  

  .text-hover:before{
    content: '';
    background:#ec3d93;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  .text-hover:hover {
   background-position: 0;
  }
  .text-hover:hover::before{
    width: 100%;
  }
</style>