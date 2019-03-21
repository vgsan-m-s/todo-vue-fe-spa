<template>
  <div id="app">

    <div class="nav-div">
      <router-link to="/about">About</router-link>
    </div>
    <div class="bg-purple-light" style="height: calc(100vh - 71px)">
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        activeIndex: '1'
      };
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}

  .bg-purple-light {
    background: #e5e9f2;
  }  
  
  .nav-div {
    height: 20px; 
    padding: 20px;
    border-bottom: solid 1px rgb(166, 201, 236);
  }
</style>
