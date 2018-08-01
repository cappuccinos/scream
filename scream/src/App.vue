<template>
  <div id="app">
    
    app根组件
  
  <ul>
    
            <router-link to="/pages/index" tag="li" activeClass="kerwinactive">index</router-link>

            <router-link to="/pages/cart" tag="li" activeClass="kerwinactive">cart</router-link>

            <router-link to="/pages/message" tag="li" activeClass="kerwinactive">message</router-link>

            <router-link to="/pages/mine" tag="li" activeClass="kerwinactive">mine</router-link>

            <router-link to="/login" tag="li" activeClass="kerwinactive">login</router-link>
        
            <router-link to="/register" tag="li" activeClass="kerwinactive">register</router-link>
          
            <router-link to="/pages/category" tag="li" activeClass="kerwinactive">login</router-link>
    
  </ul>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .kerwinactive{
    background: red;
  }
  ul,li{
    list-style: none;
  }

</style>