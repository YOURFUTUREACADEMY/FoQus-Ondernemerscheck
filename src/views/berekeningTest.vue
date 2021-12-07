<!-- TO DO this page needs to be remove before final version -->
<template>
  <h1 class="header text-center" role="heading">Berekening Test</h1>
  <div>
    <main>
      <section class="TO DO verwijderen">
        
        <h3>Vraag 1 Antwoord label: {{this.$store.getters.getAntwoord(`vraag1`).label}}</h3>
        <h3>Vraag 1 Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag1`).waarde}}</h3>
        <button class="btn" @click="$router.push('/testMenu')">
          Naar test menu 
        </button>
      </section>
    </main>
  </div>
  <p>{{storeDataVragen}}</p>
  <p>{{tempResultaat}}</p>
</template>

<script>
import opmerkingen from "../scripts/tempOpmerkingen.js"
import berekening from "../scripts/score.js"

export default {
  name: "scorescherm",
  data() {
    return {
      storeDataVragen: this.$store.state.ANTWOORD,
      tempResultaat: "",
    }; //end return
  }, //end data
  mounted(){
      this.tempResultaat = berekening(opmerkingen, this.storeDataVragen);
      //this.tempResultaat = berekening(this.storeDataVragen);
  },
}; // end export
</script>
