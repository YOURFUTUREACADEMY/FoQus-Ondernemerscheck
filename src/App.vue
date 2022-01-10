<template>
  <div class="shadow p-5">
    <header role="banner">
      <img
        class="foqusLogo img-fluid mx-auto d-block"
        src="./assets/images/logo_ondernemerscheck.jpg"
        role="figure"
      />
    </header>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 75%;
}

:root {
  --wit: #ffffff;
  --lichtBlauw: #d3f1f3;
  --donkerBlauw: #08344d;
  --lichtTurquoise: #1dbac1;
  --donkerTurquoise: #1e8a8c;
  --oranje: #f6af23;
  --grijs: #e7e6e6;
  --donkerGrijs: #A6A6A6;
  --zwart: #030303ec;
  /* kleuren score bubbles */
  --scoreSlecht: #ff0000;
  --borderSlecht: #9e0000;
  --scoreMatig: #ed7d31;
  --borderMatig: #af5c23;
  --scoreGoed: #00b050;
  --borderGoed: #00843b;
}

body {
  color: var(--lichtBlauw);
  font-size: 13px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 800px;
}
main {
  max-width: 1320px;
}

.foqusLogo {
  height: 100px;
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
  /* padding: 5% 0; */
  font-size: 1.5rem;
}

.progress {
  height: 1.3rem;
  font-size: 1.15em;
}

.container-progBarQ {
  background-color: var(--grijs);
}

.progBarQ {
  background-color: var(--donkerGrijs);
  text-align: right;
}

.container-btn {
 /* padding-bottom: 0.25rem; */
}

.btn {
  background-color: var(--oranje);
  color: var(--lichtBlauw);
  width: 175px;
}

.btn:focus {
  box-shadow: none;
}

#terugBtn {
  align-self: flex-start;
}

#volgendeBtn {
  align-self: flex-start;
}

/* styling components vragen */

.number-input {
  height: 30px;
  width: 250px;
  border-color: var(--grijs);
}
.col-form-label,
.form-control-range,
.form-check-label {
  font-size: 1.5rem;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.form-check-input {
  margin-top: 0 !important;
  vertical-align: initial;
}

/* .range-input{
 width: 500px;
} */

/* range track/line */
.rs-line {
  width: 500px;
  height: 1.8rem;
  overflow: hidden;
  cursor: pointer;
  -webkit-appearance: none;
}

.rs-line::-webkit-slider-runnable-track {
  background-color: var(--grijs);
}

.rs-line::-webkit-slider-thumb {
  box-shadow: -55vw 0 0 55vw var(--donkerBlauw);
  height: 0px;
  width: 0px;
  -webkit-appearance: none;
  margin-top: 50px;
}

.rs-line::-moz-range-track {
  background-color: var(--grijs);
}

.rs-line::-moz-range-thumb {
  box-shadow: -55vw 0 0 55vw var(--donkerBlauw);
  height: 0px;
  width: 0px;
  -webkit-appearance: none;
  margin-top: 50px;
}

/* slider bullet/thumb */
/* .rs-bullet{
  width: 500px;
  height: 30px;
  overflow:hidden;
  cursor:pointer;
  -webkit-appearance: none;
}

.rs-bullet::-webkit-slider-thumb{
  height: px;
  width: 0px;
  -webkit-appearance: none;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid var(--donkerBlauw);
  margin-top: 50px;
  margin-left: 0px;
  margin-right: 0px;
}

.rs-bullet::-moz-range-thumb{
  height: 0px;
  width: 0px;
  -webkit-appearance: none;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid var(--donkerBlauw);
  margin-top: 50px;
} */

.rs-bullet {
  position: relative;
  transform-origin: center center;
  display: block;
  width: 0px;
  height: 0px;
  box-sizing: border-box;
    border-left: 7.5px solid transparent;
    border-right: 7.5px solid transparent;
    border-bottom: 15px solid var(--donkerBlauw);
    top: -48px;
    margin-left: -7.5px;
}

.rs-label {
  position: relative;
  transform-origin: center center;
  display: block;
  width: 20px;
  height: 20px;
  background: transparent;
  font-size: 1em;
  align-self: center;
  user-select: none;
  text-align: center;
  box-sizing: border-box;
  top: -41px;
  margin-left: -22px;
  color: var(--donkerBlauw);
}

.smilies {
font-size:30px;
}

/* CSS Score scherm */
/* horizontale lijn tussen section en container */
.hl {
  background-color: var(--donkerBlauw);
  opacity: 1;
}

/* verticale lijn tussen score bubble en block quote */
.vl {
  background-color: var(--donkerGrijs);
  height: 250px;
  /* height: 100%; */
  width: 2px;
}

.section-score {
  background-color: var(--wit);
  height: 575px;
}

.container-score {
  height: 550px;
}

.header-score {
  color: var(--oranje);
}

.score-bubble {
  border: 1px solid;
  height: 100px;
  width: 100px;
}

.score-slecht {
  background-color: var(--scoreSlecht);
  border-color: var(--borderSlecht);
}

.score-matig {
  background-color: var(--scoreMatig);
  border-color: var(--borderMatig);
}

.score-goed {
  background-color: var(--scoreGoed);
  border-color: var(--borderGoed);
}

.legenda-bubble {
  border: 1px solid;
  height: 25px;
  width: 25px;
}

.meter {
  background: transparent;
  margin-top: -25px;
  height: 35%;
  width: 35%;
}

.label-naw {
  margin-top: 12px;
  text-align: left;

  width: 75px;
}
.text-start {
  width: 50%;
}

.text-score {
  color: var(--zwart);
  font-weight: 500;
  font-size: 1.1rem;
}

.foqusRaport {
  display: block;
}

.vl {
  display: none;
}

/* screen size 600px */
@media only screen and (max-width: 600px) {
  .header {
    font-size: 1rem;
    padding: 0 5%;
  }

  .col-form-label,
  .form-control-range,
  .form-check-label {
    font-size: 1rem;
  }

 .rs-line {
    width: 125%;
  }

  .slider {
    width: 80%;
  }

  .vl {
    display: none;
  }

  .meter {
    background: transparent;
    margin: 0 7.5%;
    height: 85%;
    width: 85%;
  }

  .foqusRaport {
    display: none;
  }

  .section-score {
    height: 775px;
  }

  .container-score {
    height: 750px;
  }

  .floatL {
    float: left;
  }
  .text-start {
    width: 100% !important;
  }
}
</style>
