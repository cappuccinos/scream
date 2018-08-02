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
    height: 30000px;
    background:#eee;
  }
</style>