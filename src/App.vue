<template>
<div>
  <header role="banner">
      <img
        class="foqusLogo img-fluid mx-auto d-block"
        src="./assets/images/FoQus-Werkt.png"
        role="figure"
      />
    </header>
  <router-view/>
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --wit: #FFFFFF;
  --lichtBlauw: #D3F1F3;
  --donkerBlauw: #08344D;
  --lichtTurquoise: #1DBAC1;
  --donkerTurquoise: #1E8A8C;
  --oranje: #F6AF23;
  --grijs: #E7E6E6;
  --donkerGrijs: #cfcfcf;
  --zwart: #030303ec;
  /* kleuren score bubbles */
  --scoreSlecht: #FF0000;
  --borderSlecht: #9E0000;
  --scoreMatig: #ED7D31;
  --borderMatig: #AF5C23;
  --scoreGoed: #00B050;
  --borderGoed: #00843B;
}

body {
  color: var(--lichtBlauw);
  font-size: 13px;
  margin:0%;
  display:flex;
  justify-content: center;
}

main {
  max-width: 1320px;
}


.foqusLogo{
  height:100px;
}

.header {
  background-color: var(--donkerTurquoise);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0%;
  font-size: 2rem;
}


/* styling page vragen */
.container-vragen {
  background-color: var(--wit);
  color: var(--donkerBlauw);
  height: 300px;
  margin: 0%;
  padding: 5% 0;
  font-size: 1.5rem;
}

.progress{
  height: 2rem;
  font-size:1.5em;
}

.container-progBarQ{
  background-color: var(--grijs);
}

.progBarQ{
  background-color: var(--donkerBlauw);
  text-align: right;

}

.container-btn{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: var(--wit);
  height: 250px;
  margin: 0%;
}

.btn{
  background-color: var(--oranje);
  color: var(--lichtBlauw);
  width: 175px;
}

.btn:focus {
    box-shadow: none;
}

#terugBtn{
 align-self: flex-start;
}


#volgendeBtn{
  align-self: flex-start;
}


/* styling components vragen */

.number-input{
  height:30px;
  width: 250px;
  border-color: var(--grijs);
}
.col-form-label, .form-control-range, .form-check-label{
font-size: 1.5rem;
padding-top: 0 !important;
padding-bottom: 0 !important;
}

.form-check-input{
  margin-top: 0 !important;
  vertical-align: initial;}

.range-input{
 width: 500px;
}

/* CSS Score scherm */
/* horizontale lijn tussen section en container */
.hl{
  background-color: var(--donkerBlauw);
  opacity: 1;
}

/* verticale lijn tussen score bubble en block quote */
.vl{
  background-color: var(--donkerGrijs);
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

.score-slecht{
  background-color: var(--scoreSlecht);
  border-color: var(--borderSlecht);
}

.score-matig{
  background-color: var(--scoreMatig);
  border-color: var(--borderMatig);
}
  
.score-goed{
  background-color: var(--scoreGoed);
  border-color: var(--borderGoed);
}

.legenda-bubble{
  border: 1px solid;
  height: 25px;
  width: 25px;
}

.label-naw{
  margin-top:12px;
  text-align: left;
  
  width:75px;
}

.text-score{
  color: var(--zwart);
  font-weight: 500;  
      font-size: 1.1rem;
}

@media only screen and (max-width: 600px) {
  .header {
    font-size: 1.5rem;
    padding: 0 5%; 
  }

  .col-form-label, .form-control-range, .form-check-label {
  font-size: 1.25rem;
 }

  .range-input {
    width: 100%;
  }

  .slider {
    width:80%;
  }
}
  .foqusRaport {
    display: none;
  }



</style>
