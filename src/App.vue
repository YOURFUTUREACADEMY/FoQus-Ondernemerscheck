<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  color:#D3F1F3;
  font-size: 13px;
  margin:0%;
}

.foqusLogo{
  height:10em;
}

.header {
  background-color: #1E8A8C;
  height: 5em;
  margin: 0%;
}

.container-vragen {
  background-color: #1DBAC1;
  height: 15em;
  margin: 0%;
}

.container-progBarQ{
  background-color: #E7E6E6;
}

.progBarQ{
  background-color: #08344D;
  text-align: right;
  height: 25px;
}

.container-btn{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #1E8A8C;
  height: 20em;
  margin: 0%;
}

.btn{
  background-color: #F6AF23;
  color:#D3F1F3;
}

#terugBtn{
 align-self: flex-start;
}

#volgendeBtn{
  align-self: flex-start;
}
</style>
