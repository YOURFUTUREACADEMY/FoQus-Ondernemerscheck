<!-- TO DO this page needs to be remove before final version -->
<template>
  <div>
    <main>
      <section class='text-score'>
        <p>{{this.$store.state.ANTWOORD}}</p>
        <h3>Vraag 1 Antwoord label: {{this.$store.getters.getAntwoord(`vraag1`).label}}</h3>
        <h3>Vraag 1 Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag1`).waarde}}</h3>
        <br>
        <h3>Vraag 2 Antwoord label: {{this.$store.getters.getAntwoord(`vraag2`).label}}</h3>
        <h3>Vraag 2 Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag2`).waarde}}</h3>
        <br>
        <h3>Vraag 3 Antwoord label: {{this.$store.getters.getAntwoord(`vraag3`).label}}</h3>
        <h3>Vraag 3 Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag3`).waarde}}</h3>
        <br>
        <h3>Vraag 4 Antwoord label: {{this.$store.getters.getAntwoord(`vraag4`).label}}</h3>
        <h3>Vraag 4 Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag4`).waarde}}</h3>
        <br>
        <h3>Vraag 5 Antwoord label: {{this.$store.getters.getAntwoord(`vraag5`).label}}</h3>
        <h3>Vraag 5 Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag5`).waarde}}</h3>
        <br>
        <h3>Vraag 6 Antwoord label: {{this.$store.getters.getAntwoord(`vraag6`).label}}</h3>
        <h3>Vraag 6 Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag6`).waarde}}</h3>
        <br>
        <h3>Vraag 7 Antwoord label: {{this.$store.getters.getAntwoord(`vraag7`).label}}</h3>
        <h3>Vraag 7 Antwoord waarde: {{this.$store.getters.getAntwoord(`vraag7`).waarde}}</h3>
        <br>
        <br>
         <!-- zie ..store/index.js voor opbouw RESULTAAT -->
        <p>{{resultaat}}</p>
        <br>
        <p>Score:{{this.$store.getters.getResultaat('score')}}</p>
        <p>Kleur:{{this.$store.getters.getResultaat('kleur')}}</p>
        <br>
        <h3>Vraag 1 </h3>
        <p>Totaal:{{this.$store.getters.getResultaat('vraag1')}}</p>
        <p>Opmerking:{{this.$store.getters.getResultaat('vraag1').opmerking}}</p>
        <p>Berekening:{{this.$store.getters.getResultaat('vraag1').berekening}}</p>
        <p>Totaal:{{this.$store.getters.getResultaat('vraag1').totaal}}</p>
        <p>Score:{{this.$store.getters.getResultaat('vraag1').score}}</p>

        <button class="btn" @click="$router.push('/testMenu')">
          Naar test menu 
        </button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "scorescherm",
  data() {
    return {
      resultaat:this.$store.getters.getFullResultaat(),
    }; //end return
  }, //end data
}; // end export
</script>
