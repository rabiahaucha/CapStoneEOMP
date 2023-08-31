<template>
    <div>
  <footer class="site-footer" style="margin-top:2rem;">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify">
            "Welcome to the whimsical world of <i> Sweet Sprinkle Bakery</i>, where sugar and imagination blend to create confectionery wonders that dance on your taste buds. Our oven whispers secrets to the dough, crafting cupcakes and pastries that sparkle with delight. Savor each bite and indulge in a symphony of flavors, as we sprinkle a little magic into every treat we lovingly create.</p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Categories</h6>
          <ul class="footer-links">
            <li><a href="">Cake</a></li>
            <li><a href="">Special</a></li>
            <li><a href="">Pocket</a></li>
            <li><a href="">Glazed</a></li>
            <li><a href="">Roll</a></li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/">Home</router-link></li>
         </ul>
        </div>
      </div>
      <hr>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
       <a href="#">Rabia Haucha</a> .
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">

              <li><a class="github" href="https://github.com/dashboard"><i class="bi bi-github"></i></a></li>
              <li><a class="linkedin" href="https://www.linkedin.com/in/rabia-ramadhani-haucha-94a119284/"><i class="bi bi-linkedin"></i></a></li>   
            </ul>
          </div>
      </div>
    </div>
</footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.site-footer
{
  background-color:
  #ec3d93;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:black;
}
.site-footer hr
{
  border-top-color:black;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:white;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:black;
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:white;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:black;
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:black;
  color:white;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  
  background-color:white;
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.github:hover
{
  background-color:white;
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
</style>