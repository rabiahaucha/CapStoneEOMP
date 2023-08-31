<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="image">
          <img src="https://i.postimg.cc/PxLW81Vt/giphy-1.gif" class="w-100 h-100" loading="lazy">
        </div>
      </div>
    </div>
<div>
 <h1 style="margin-top:4rem;color:black;  font-family: 'Roboto Condensed', sans-serif;">Our line up</h1>
     <p style="margin-top:1rem;color:black;">"Craving a little magic in your day? Step into a world of whimsy and flavor at Sweet Sprinkle Bakery! <br>Discover a symphony of doughnut creations that redefine deliciousness.Your taste adventure awaits – dive into the extraordinary and awaken your senses!"</p>
     <a class="btn" href="/bakery" role="button ">View Products</a>
</div>

<h1 style="margin-top:7rem;color:black;margin-bottom:2rem;"><span font size="7">Bakery</span></h1>
<div id="products">
  <div>
  <img src="https://i.postimg.cc/3JHS0jz8/Screenshot-2023-08-30-140337.png" class="w-100" style="width:15rem;height:15rem;" loading="lazy" alt="Strawberry Glazed">
  <h4>Strawberry Glazed</h4>
  </div>
  <div>
  <img src="https://i.postimg.cc/d0zmPwYs/Screenshot-2023-08-30-140343.png" class="w-100" style="width:15rem;height:15rem;" loading="lazy" alt="Carrot Cake">
  <h4>Carrot Cake</h4>
  </div>
  <div>
    <img src="https://i.postimg.cc/05GG3THv/Screenshot-2023-08-30-140350.png" class="w-100" style="width:15rem;height:15rem;" loading="lazy" alt=" Blueberry Old Fashioned ">
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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap');

#products {
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
  margin-top: 2rem;
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


