<template>
  <div class="container-fluid">
    <div class="container">
<span><h1 data-text="WELCOME TO SWEET SPRINKLE BAKERY" style="text-align:center;margin-left:20rem;">WELCOME TO 
   SWEET SPRINKLE BAKERY</h1></span>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="image" style="width: 100%">
          <img src="https://i.postimg.cc/PxLW81Vt/giphy-1.gif" class="w-100 h-100" loading="lazy">
        </div>
      </div>
    </div>
    
<div>
 <h2 style="margin-top:5rem;color:black;  font-family: 'Roboto Condensed', sans-serif;">Our line up</h2>
     <p style="margin-top:1rem;color:black;">"Craving a little magic in your day? Step into a world of whimsy and flavor at Sweet Sprinkle Bakery! <br>Discover a symphony of doughnut creations that redefine deliciousness.Your taste adventure awaits – dive into the extraordinary and awaken your senses!"</p>
     <a class="btn" href="/bakery" role="button ">View Products</a>
</div>

<h2 style="margin-top:7rem;color:black;margin-bottom:2rem;"><span font size="7">Bakery</span></h2>
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
body {
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
	align-content: center;
	height: 100vh;
	
}

h1 {
	position: absolute;
	text-transform: uppercase;
	font-size: 2rem;
	margin: 0;
	padding: 0;
	align-self: center;
	letter-spacing: 0.3rem;
	font-family: monospace;
  color: transparent;
  
}

h1:before {
	content: attr(data-text);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	color: #000;
	overflow: hidden;
	border-right: 1px solid #000;
	animation: type 10s steps(30) infinite;
	white-space: nowrap;
}

@keyframes type {
	0% {
		width: 0;
	}
	
	50% {
		width: 100%;
	}
	100% {
		width: 0;
	}
}

@media only screen and (max-width: 1199px){
  .container {
    margin-left:-20rem;
    overflow: hidden;
  }

  h1:before {
    left: 20%;
  }
}
@media only screen and (max-width: 991px){
.container {
  margin-left:-20rem;
  overflow: hidden;

}

  

h1{
  font-size: 20px;
  display:grid;
}

h1:before {
	left: 50%;
}

@media only screen and (max-width: 800px){
  h1:before {
    left: 30%;
  }
}


@media only screen and (max-width: 700px){
  h1 {
    font-size: 12px;
  }
}

@media only screen and (max-width: 600px){
  h1 {
    font-size: 12px;
  }
  h1:before {
    left: 28%;
  }
}
@media only screen and (max-width: 500px){
  h1 {
    font-size: 12px;
  }
  h1:before {
    left: 15%;
  }
}

@media only screen and (max-width: 450px){
  h1 {
    font-size: 12px;
  }
  h1:before {
    left: 8%;
  }

  @media only screen and (max-width: 360px){
    h1 {
      font-size: 8px;
    }
    h1:before {
      left: 0%;
    }

}
}
}


</style>


