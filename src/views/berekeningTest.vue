<!-- TO DO this page needs to be remove before final version -->
<template>
  <h1 class="header text-center" role="heading">Berekening Test</h1>
  <div>
    <main class='text-score'>
      <section class="TO DO verwijderen">
        
        <div>
          <h2>Vraag 1</h2>
          <p>Antwoord label: {{this.$store.getters.getAntwoord(`vraag1`).label}}</p>
          <p>Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag1`).waarde}}</p>
          <p>Opmerking: {{berekening.vraag1.opmerking}}</p>
          <p>berekening: {{berekening.vraag1.berekening}} %</p> 
          <p>totaal: {{berekening.vraag1.totaal}}</p>
          <p>score: {{berekening.vraag1.score}}</p>
        </div>

        <div>
          <h2>Vraag 2</h2>
          <p>Antwoord label: {{this.$store.getters.getAntwoord(`vraag2`).label}}</p>
          <p>Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag2`).waarde}}</p>
          <p>Opmerking: {{berekening.vraag2.opmerking}}</p>
          <p>berekening: {{berekening.vraag2.berekening}}</p> 
          <p>totaal: {{berekening.vraag2.totaal}}</p>
          <p>score: {{berekening.vraag2.score}}</p>
        </div>

        <div>
          <h2>Vraag 3</h2>
          <p>Antwoord label: {{this.$store.getters.getAntwoord(`vraag3`).label}}</p>
          <p>Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag3`).waarde}}</p>
          <p>Opmerking: {{berekening.vraag3.opmerking}}</p>
          <p>berekening: {{berekening.vraag3.berekening}} %</p> 
          <p>totaal: {{berekening.vraag3.totaal}}</p>
          <p>score: {{berekening.vraag3.score}}</p>
        </div>

        <div>
          <h2>Vraag 4</h2>
          <p>Antwoord label: {{this.$store.getters.getAntwoord(`vraag4`).label}}</p>
          <p>Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag4`).waarde}}</p>
          <p>Opmerking: {{berekening.vraag4.opmerking}}</p>
          <p>berekening: {{berekening.vraag4.berekening}}</p> 
          <p>totaal: {{berekening.vraag4.totaal}}</p>
          <p>score: {{berekening.vraag4.score}}</p>
        </div>

        <div>
          <h2>Vraag 5</h2>
          <p>Antwoord label: {{this.$store.getters.getAntwoord(`vraag5`).label}}</p>
          <p>Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag5`).waarde}}</p>
          <p>Opmerking: {{berekening.vraag5.opmerking}}</p>
          <p>berekening: {{berekening.vraag5.berekening}}</p> 
          <p>totaal: {{berekening.vraag5.totaal}}</p>
          <p>score: {{berekening.vraag5.score}}</p>
        </div>

        <div>
          <h2>Vraag 6</h2>
          <p>Antwoord label: {{this.$store.getters.getAntwoord(`vraag6`).label}}</p>
          <p>Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag6`).waarde}}</p>
          <p>Opmerking: {{berekening.vraag6.opmerking}}</p>
          <p>berekening: {{berekening.vraag6.berekening}}</p> 
          <p>totaal: {{berekening.vraag6.totaal}}</p>
          <p>score: {{berekening.vraag6.score}}</p>
        </div>

        <div>
          <h2>Vraag 7</h2>
          <p>Antwoord label: {{this.$store.getters.getAntwoord(`vraag7`).label}}</p>
          <p>Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag7`).waarde}}</p>
          <p>Opmerking: {{berekening.vraag7.opmerking}}</p>
          <p>berekening: {{berekening.vraag7.berekening}}</p> 
          <p>totaal: {{berekening.vraag7.totaal}}</p>
          <p>score: {{berekening.vraag7.score}}</p>
        </div>

        <div>
          <h2>Totaal</h2>
          <p>v2: {{berekening.vraag2.score}}</p>
          <p>v3: {{berekening.vraag3.score}}</p>
          <p>v4: {{berekening.vraag4.score}}</p>
          <p>v5: {{berekening.vraag5.score}}</p>
          <p>v6: {{berekening.vraag6.score}}</p>
          <p>v7: {{berekening.vraag7.score}}</p>
          <p>score: {{berekening.score}}</p>
        </div>

        <div>
          <h2>Conclusies</h2>
          <p>Score: {{berekening.score}}</p>
          <p>Kleur: {{berekening.kleur}}</p>
          <h2>Conlusie 1</h2>
          <p>Opmerking: {{berekening.conclusie1.opmerking}}</p>
          <p>Kleur: {{berekening.conclusie1.kleur}}</p>
          <p>Score: {{berekening.conclusie1.score}}</p>
          <h2>Conlusie 2</h2>
          <p>Opmerking: {{berekening.conclusie2.opmerking}}</p>
          <p>Kleur: {{berekening.conclusie2.kleur}}</p>
          <p>Score: {{berekening.conclusie2.score}}</p>
          <h2>Conlusie 3</h2>
          <p>Opmerking: {{berekening.conclusie3.opmerking}}</p>
          <p>Kleur: {{berekening.conclusie3.kleur}}</p>
          <p>Score: {{berekening.conclusie3.score}}</p>
          <h2>Conlusie 4</h2>
          <p>Opmerking: {{berekening.conclusie4.opmerking}}</p>
          <p>Kleur: {{berekening.conclusie4.kleur}}</p>
          <p>Score: {{berekening.conclusie4.score}}</p>
        </div>



        <!--<p>{{berekening}}</p>--> 
      </section>
      <button class="btn" @click="$router.push('/testMenu')">
          Naar test menu 
      </button>
    </main>
  </div>

</template>

<script>
import berekenUitslag from "../scripts/score.js"

export default {
  name: "scorescherm",
  data() {
    return {
      //storeDataVragen: this.$store.state.ANTWOORD,

      
    }; //end return
  }, //end data
  computed:{
    berekening(){
      let uitslag = berekenUitslag(this.$store.state.ANTWOORD);
      return uitslag;
    }
  },
}; // end export
</script>
