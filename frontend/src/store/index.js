import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'
import sweet from 'sweetalert'
import AuthenticateUser from '@/services/AuthenticateUser'
import router from '@/router'
const donutUrl ="https://capstone-pllo.onrender.com/"
const { cookies } = useCookies()
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    filtername: null,
    filtercategory: null,
    addContent: null,
    addUsers: null,
    setUpdateProd: null,
    products:[],
    cart:[]
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    filtername(state, filtername) {
      state.filtername = filtername
    },
    filtercategory(state, filtercategory) {
      state.filtercategory = filtercategory
    },
    addContent(state, data) {
      state.addContent = data
    },
    addUsers(state, data) {
      state.addUsers = data
    },
    setDeleteP(state, data){
      state.products = data
    },
    setDeleteU(state, data){
      state.users = data
    },
    setUpdateProd(state, data){
      state.product = data
    },
    setUpdateUser(state, data){
      state.user = data
    },
    setSpecial(state, data){
      state.products = data
    },
    setGlazed(state, data){
      state.products = data
    },
    setRoll(state, data){
      state.products = data
    },
    setCake(state, data){
      state.products = data
    },
    setPocket(state, data){
      state.products = data
    },
    addToCart(state,product){
      state.cart.push(product)
    }

  },
  actions: {
    async fetchUsers(context) {
      try{
        const {data} = await axios.get(`${donutUrl}users`)
        context.commit("setUsers", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async fetchProducts(context) {
      try{
        const {data} = await axios.get(`${donutUrl}products`)
        context.commit("setProducts", data.results)
        console.log(data.results);
      }catch(e){
        console.log(e)
      }
    },
    async fetchProduct(context, prodID) {
      try{
        const {data} = await axios.get(`${donutUrl}product/${prodID}`)
        context.commit("setProduct", data.results)
        console.log(data.results);
      }catch(e){
        console.log(e)
      }
    },
    async filtercategory(context) {
      try{
        const {data} = await axios.get(`${donutUrl}filterCategory`)
        context.commit("filtercategory", data.results)
        console.log(data.results);
      }catch(e){
        console.log(e)
      }
    },
    async addProduct(context, prodData){
      try {
        const response = await axios.post(`${donutUrl}product`, prodData)
        context.commit('addContent', response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async addUser(context, userData){
      try {
        const response = await axios.post(`${donutUrl}user`, userData)
        context.commit('addUsers', response.data)
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUserFUNC(context, userID){
      try {
        const response = await axios.delete(`${donutUrl}user/${userID}`)
        context.commit('setDeleteU', response)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProductFUNC(context, prodID){
      try {
        const response = await axios.delete(`${donutUrl}product/${prodID}`)
        context.commit('setDeleteP', response)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    async editProduct(context, edtProduct){
      try {
        const response = await axios.patch(`${donutUrl}product/${edtProduct.prodID}`, edtProduct)
        context.commit('setUpdateProd', response.data)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    async editUser(context, edtUser){
      try {
        const response = await axios.patch(`${donutUrl}user/${edtUser.userID}`, edtUser)
        context.commit('serUpdateUser', response.data)
        location.reload()
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSpecial(context) {
      try{
        const {data} = await axios.get(`${donutUrl}special`)
        context.commit("setSpecial", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async fetchGlazed(context) {
      try{
        const {data} = await axios.get(`${donutUrl}glazed`)
        context.commit("setGlazed", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async fetchRoll(context) {
      try{
        const {data} = await axios.get(`${donutUrl}roll`)
        context.commit("setRoll", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async fetchCake(context) {
      try{
        const {data} = await axios.get(`${donutUrl}cake`)
        context.commit("setCake", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async fetchPocket(context) {
      try{
        const {data} = await axios.get(`${donutUrl}pocket`)
        context.commit("setPocket", data.results)
      }catch(e){
        console.log(e)
      }
    },
    async register(context, logs) {
      try {
        const {msg}  = (await axios.post
          (`${donutUrl}user`, logs)).data
          if (msg) {
            sweet({
              title: "Registration",
              text: msg,
              icon: "success",
              timer: 2000,
            });
            context.dispatch("fetchUsers");
            location.reload()
          } else {
            sweet({
              title: "Error",
              text: msg,
              icon: "error",
              timer: 2000,
            });
          }
        } catch (e) {
          context.commit("setMsg", "An error has occured");
        }
  },
    async login(context, payload) {
      try {
        const { msg, token, result } = (await axios.post(`${donutUrl}login`, payload)).data
        console.log(token, result, msg)
        if(result && token) {
          localStorage.setItem("myData", JSON.stringify(result))
          localStorage.setItem("token", token)
          context.commit("setUser", {result, msg});
          cookies.set("theUser", {token, msg, result})
          AuthenticateUser.applyToken(token)
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000
          })
          router.push({name: 'home'})
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 2000
          })
        }
      } catch (e) {
        context.commit((e), "An error has occurred")
      }
    },
    async logOut(context) {
      context.commit("setUser")
      cookies.remove("theUser")
      location.reload()
    },
    async addToCart(context){
context.commit('addToCart, product')
    }
  },  
  modules: {
  }
})

