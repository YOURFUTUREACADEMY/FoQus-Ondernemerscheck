<!-- TO DO this page needs to be remove before final version -->
<template>
  <div>
    <main>
      <section class="TO DO verwijderen">
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
        <button class="backBtn" @click="$router.push('/')">
          Naar begin
        </button>
        <button class="backBtn" @click="$router.push('/scorescherm')">
          Naar score 
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
    }; //end return
  }, //end data
}; // end export
</script>
