
import Vue from 'vue'
import Router from 'vue-router'

import index from "../components/index"
import category from "../components/category"
import register from "../components/register"
import login from "../components/login"
import cart from "../components/cart"
import message from "../components/message"
import mine from "../components/mine"
import recommend from "../components/index_components/recommend"
import view from "../components/view"

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
      {
  		
  		path:"/pages/index",
  		component:index

      },
      {
  		
  		path:"/pages/category",
  		component:category

      },
      {
  		
  		path:"/register",
  		component:register

      },
      {
  		
  		path:"/login",
  		component:login

      },
      {
  		
  		path:"/pages/cart",
  		component:cart

      },
      {
  		
  		path:"/pages/message",
  		component:message
      
      },
      {
      
      path:"/pages/recommend",
      component:recommend
      
      },
      {
  		
  		path:"/pages/mine",
  		component:mine

      },
      {
      
      path:"/search/view",
      component:view

      },
      {
      	path:"*",
      	redirect:"/pages/index"
      }
      
  ]
})