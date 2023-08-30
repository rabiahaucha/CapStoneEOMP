<template>
  <div>
    <div class="container">
      <div>
        <div class="image">
          <img src="https://i.postimg.cc/PxLW81Vt/giphy-1.gif">
        </div>
      </div>
    </div>
<div>
 <h1 style="margin-top:3rem;color:black;">Our line up</h1>
     <p style="margin-top:1rem;color:black;">"Craving a little magic in your day? Step into a world of whimsy and flavor at Sweet Sprinkle Bakery! <br>Discover a symphony of doughnut creations that redefine deliciousness.Your taste adventure awaits – dive into the extraordinary and awaken your senses!"</p>
     <a class="btn" href="/products" role="button ">View Products</a>
</div>

<h1 style="margin-top:8rem;color:black;"><span font size="7">Bakery</span></h1>
<div id="productsjhvgcf">
  <div>
  <img src="https://i.postimg.cc/3JHS0jz8/Screenshot-2023-08-30-140337.png" style="width:15rem;height:15rem;" loading="lazy" alt="Strawberry Glazed">
  <h4>Strawberry Glazed</h4>
  </div>
  <div>
  <img src="https://i.postimg.cc/d0zmPwYs/Screenshot-2023-08-30-140343.png" style="width:15rem;height:15rem;" loading="lazy" alt="Carrot Cake">
  <h4>Carrot Cake</h4>
  </div>
  <div>
    <img src="https://i.postimg.cc/05GG3THv/Screenshot-2023-08-30-140350.png" style="width:15rem;height:15rem;" loading="lazy" alt=" Blueberry Old Fashioned ">
  <h4>Blueberry Old Fashioned</h4>
  </div>
  </div>
</div>


</template>

<script>
  export default {
    
  }
</script>

<style scoped>
#productsjhvgcf {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.image {
  width: 100vw;
  height: 72.1vh;
  background-color: #FFB5E8;
}

img {
  width: 90vh;
  height: 90vh;
  object-fit: contain;
}
p{
  margin-left:2rem;
  width: 90%;
  margin-top:1rem;
}
.btn {
  color: black ;
  background: #fcdfe4;
}
h4{
  color: black;
}

.btn:hover {
  color:#fcdfe4;
  background-color:black;
}

.cardss {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  
}

#imgss {
  width: 100%;
}

</style>


