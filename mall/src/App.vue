<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
     this.$api.get('/topics', null, r => {
       console.log(r)
      })
11 }
}
</script>

<style lang="scss">
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,html{
  padding:0;
  margin:0;
  line-height: 20px;
  font-size:14px;
}
h1, h2,h3 {
  font-weight: normal;
  margin:0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p{
  margin:0;
}
a{
  text-decoration: none;
}
</style>
