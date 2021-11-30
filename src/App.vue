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

:root {
  --lichtBlauw: #D3F1F3;
  --donkerBlauw: #08344D;
  --lichtTurquoise: #1DBAC1;
  --donkerTurquoise: #1E8A8C;
  --oranje: #F6AF23;
  --grijs: #E7E6E6;
  --zwart: #030303ec;
}

body {
  color: var(--lichtBlauw);
  font-size: 13px;
  margin:0%;
}

.foqusLogo{
  height:10em;
}

.header {
  background-color: var(--donkerTurquoise);
  height: 5em;
  margin: 0%;
}

.container-vragen {
  background-color: var(--lichtTurquoise);
  margin: 0%;
  padding: 5% 0;
}


.container-progBarQ{
  background-color: var(--grijs);
}

.progBarQ{
  background-color: var(--donkerBlauw);
  text-align: right;
  height: 25px;
}

.container-btn{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: var(--donkerTurquoise);
  height: 20em;
  margin: 0%;
}

.btn{
  background-color: var(--oranje);
  color: var(--lichtBlauw);
}

#terugBtn{
 align-self: flex-start;
}


#volgendeBtn{
  align-self: flex-start;
}

/* CSS Score scherm */
.hr{
  background-color: var(--donkerTurquoise);
}

.section-score{
  background-color: var(--lichtTurquoise);
}

.container-score {
  background-color: var(--grijs);
  height: 15em;
}

.header-score{
  color: var(--oranje);
}

.text-score{
  color: var(--zwart)
}

</style>
