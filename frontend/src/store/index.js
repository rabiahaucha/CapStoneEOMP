import { createStore } from 'vuex'
import axios from 'axios'
const donutUrl ="https://capstone-pllo.onrender.com/"
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
    setUpdateProd: null
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
    async editProduct(context, prodData){
      try {
        const response = await axios.patch(`${donutUrl}product/${prodData}`)
        context.commit('setUpdateProd', response.data)
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

  },  
  modules: {
  }
})

