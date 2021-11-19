<template>
  <div>
    <header role="banner">
      <img
        class="foqusLogo"
        src="../assets/images/FoQus-Werkt.jpg"
        role="figure"
      />
    </header>

    <main>
      <section role="contentinfo">
        <h3>Antwoord vraag 1: {{this.$store.state.antwoordVraag1.waarde}}</h3>
        <h3>Antwoord vraag 2: {{this.$store.state.antwoordVraag2.waarde}}</h3>
        <h3>Antwoord vraag 3: {{this.$store.state.antwoordVraag3.waarde}}%</h3>
        <h3>Antwoord vraag 4: {{this.$store.state.antwoordVraag4.waarde}}</h3>
        <h3>Antwoord vraag 5: {{this.$store.state.antwoordVraag5.waarde}}</h3>
        <h3>Antwoord vraag 6: {{this.$store.state.antwoordVraag6.waarde}}</h3>
        <h3>Antwoord vraag 7: {{this.$store.state.antwoordVraag7.waarde}}</h3>
        <button class="backBtn" @click="$router.push('/')">
          terug naar begin
        </button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "resultaat",
  
};
</script>
