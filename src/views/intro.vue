<template>
  <div>
    <header role="banner">
      <img
        class="foqusLogo"
        src="../assets/images/logo-foqus-werkt-466x320.jpg"
        role="figure"
      />
    </header>

    <main>
      <section role="contentinfo">
        <h3 role="heading">Succesvol ondernemen is plezierig ondernemen.</h3>
        <h3>"Heb jij voldoende focus op succes? Test het zelf door 7 vragen te beantwoorden."</h3>
        <p>{{ this.$store.state.vraag }}/7</p>
        <div>
</div>

        <button class="volgendeBtn" @click="volgendePagina(0),$router.push('/vragen')">
          volgende
        </button>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: "intro",
  methods: {
    volgendePagina(type) {
      if (type < 7) {
        this.$store.state.vraag++;
      } else {
        alert("dit is het einde van de lijst!");
      }
    },
  },
};
</script>
