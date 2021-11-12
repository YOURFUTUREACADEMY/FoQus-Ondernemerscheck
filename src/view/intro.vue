<template>
  <div>
    <header role="banner">
      <img
        class="foqusLogo"
        src="../assets/images/logo-foqus-werkt-466x320.jpg"
        role="figure"
      />
      <h3 role="heading">Succesvol ondernemen is plezierig ondernemen.</h3>
    </header>
    <main>
      <section role="contentinfo">
        <h3 role="heading">
          {{ vragen[step] }}
        </h3>
        <vraag123 v-if="step > 0 && step < 4"></vraag123>
        <p>{{ step }}/7</p>
        <button class="volgendeBtn" @click="volgendePagina(step)">
          volgende
        </button>
      </section>
    </main>
  </div>
</template>

<script>
import vraag123 from "../components/vragen123-input";
export default {
  name: "intro",
  data() {
    return {
      antwoord: [],
      vragen: [
        "Heb jij voldoende focus op succes? Test het zelf door 7 vragen te beantwoorden.",
        "Hoeveel mensen heeft je bedrijf in dienst? (Jijzelf telt ook)",
        "Hoeveel uur besteed jij per week aan je bedrijf?",
        "Welk percentage van de omzet draai jij bij je 3 belangrijkste klanten?",
        "Hoe lang geleden heb je een nieuw product/model of nieuwe dienst gelanceerd",
        "Hoe gaat het met je omzet?",
        "Hoe gaat het met je resultaat?",
        "Hoeveel plezier heb je in je werk op een schaal van 1 tot 10?",
      ],
      step: 0,
    };
  },
  components: {
    vraag123,
  },
  methods: {
    volgendePagina(type) {
      if (type < 7) {
        this.step++;
      } else {
        alert("dit is het einde van de lijst!");
      }
    },
  },
};
</script>
