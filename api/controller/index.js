const express = require("express")
const bodyParser = require('body-parser')
const routes = express.Router()
const {users, products} = require('../model')


addToCart
(
userID, prodID, res
)
//User Router
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req,res)
})
routes.post('/user', bodyParser.json(),(req, res)=>{
       users.registerUser(req ,res)
})
routes.put('/user/:id', bodyParser.json(),()=>{
    users.updateUser(req, res)
})
routes.patch('/user/:id', bodyParser.json(),(req, res)=>{
    users.updateUser(req, res)
})
routes.delete('/user/:id',(req ,res)=>{
    users.deleteUser(req, res)
})
routes.post('/login', bodyParser.json(), (req, res)=>{
    users.login(req, res)
})


//Products Router


routes.get('/products', (req, res)=>{
    products.fetchProducts(req, res)
})
routes.get('/product/:id', (req, res)=>{
    products.fetchProduct(req,res)
})
routes.post('/product', bodyParser.json(),(req, res)=>{
    products.registerProduct(req ,res)
})
routes.put('/product/:id', bodyParser.json(),(req, res)=>{
    products.updateProduct(req, res)
})
routes.patch('/product/:id', bodyParser.json(),(req, res)=>{
    products.updateProduct(req, res)
})
routes.delete('/product/:id',(req ,res)=>{
    products.deleteProduct(req, res)
})
routes.get('/special', (req, res)=>{
    products.fetchSpecial(req, res)
})
routes.get('/glazed', (req, res)=>{
    products.fetchGlazed(req, res)
})
routes.get('/cake', (req, res)=>{
    products.fetchCake(req, res)
})
routes.get('/pocket', (req, res)=>{
    products.fetchPocket(req, res)
})
routes.get('/roll', (req, res)=>{
    products.fetchRoll(req, res)
})
routes.post("/cart/prodID", bodyParser.json(), (req, res)=>{
	const {userID, prodID} = req.body
	addToCart(userID,prodID, res)
})


module.exports = {
    express,
    routes
    
}