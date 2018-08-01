<template>
  <div>
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
  body{
    height: 3000px;
  }
</style>