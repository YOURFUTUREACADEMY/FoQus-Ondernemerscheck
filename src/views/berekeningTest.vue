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
</template>

<script>
// import opmerkigen from "../scripts/tempOpmerkingen.js"
// import berekening from "../scripts/score.js"

export default {
  name: "scorescherm",
  data() {
    return {
      tempResultaat: "",
      testMode: true,
      score: 5,
      naam: "", //"TO DO"
      emailControle: "", //"TO DO"
      // status state -> conditie -> score, class, label, image
      statusState: {
        slecht: {
          score: 5,
          class: "score-slecht",
          label: "Stop",
          signaal: "TO DO BLOKQUOTE SIGNAAL WAARDE SLECHT",
          image: "Bubble-rood.png",
        },
        gemiddeld: {
          score: 10,
          class: "score-matig",
          label: "Let op",
          signaal: "Probeer te verbeteren!",
          image: "Bubble-oranje.png",
        },
        goed: {
          score: 15,
          class: "score-goed",
          label: "Ga zo door",
          signaal: "TO DO BLOKQUOTE SIGNAAL WAARDE GROEN",
          image: "Bubble-groen.png",
        },
      },
    }; //end return
  }, //end data
  // mounted(){
  //     this.tempResultaat = berekening(opmerkigen, this.$store.state.ANTWOORD);
  // },
}; // end export
</script>
