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
  --donkerGrijs: #e7e6e69a;
  --zwart: #030303ec;
}

body {
  color: var(--lichtBlauw);
  font-size: 13px;
  margin:0%;
}

.foqusLogo{
  height:100px;
}

.header {
  background-color: var(--donkerTurquoise);
  height: 100px;
  padding: 2% 0;
  margin: 0%;
}

.container-vragen {
  background-color: var(--lichtTurquoise);
  height: 300px;
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
  height: 250px;
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
/* horizontale lijn tussen section en container */
.hl{
  background-color: var(--donkerBlauw);
}

/* verticale lijn tussen score bubble en block quote */
.vl{
  /* background-color: var(--donkerGrijs); */
  background-color: rgb(161, 159, 159); /* <----- TO DO Variable zie regel 90 */
  height: 90px;
  width: 2px;
}

.section-score{
  background-color: var(--donkerTurquoise);
  height: 525px;
}

.container-score {
  background-color: var(--grijs);
  height: 500px;
}

.header-score{
  color: var(--oranje);
}

.score-bubble{
  border: 1px solid;
  height: 100px;
  width: 100px; 
}

.legenda-bubble{
  border: 1px solid;
  height: 25px;
  width: 25px;
}

.text-score{
  color: var(--zwart)
}

</style>
