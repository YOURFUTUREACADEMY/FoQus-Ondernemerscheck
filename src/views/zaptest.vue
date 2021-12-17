<!-- TO DO this page needs to be remove before final version -->
<template>
  <div>
    <main>
      <section class='text-score'>
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
        <button class="btn" @click="$router.push('/zaptest')">
          Naar zappier
        </button>
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
