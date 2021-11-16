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
        <vraag1 v-if="this.$store.state.vraag == 1"></vraag1>
        <vraag2 v-if="this.$store.state.vraag == 2"></vraag2>
        <vraag3 v-if="this.$store.state.vraag == 3"></vraag3>
        <vraag4 v-if="this.$store.state.vraag == 4"></vraag4>
        <vraag5 v-if="this.$store.state.vraag == 5"></vraag5>
        <vraag6 v-if="this.$store.state.vraag == 6"></vraag6>
        <vraag7 v-if="this.$store.state.vraag == 7"></vraag7>
        <p>{{ this.$store.state.vraag }}/7</p>
        <button class="volgendeBtn" @click="volgendePagina(this.$store.state.vraag)">
          volgende
        </button>
      </section>
    </main>
  </div>
</template>

<script>
import vraag1 from "../components/vraag1-input";
import vraag2 from "../components/vraag2-input";
import vraag3 from "../components/vraag3-input";
import vraag4 from "../components/vraag4-input";
import vraag5 from "../components/vraag5-input";
import vraag6 from "../components/vraag6-input";
import vraag7 from "../components/vraag7-input";

export default {
  name: "intro",
  data() {
    return { };
  },
  components: {
    vraag1,
    vraag2,
    vraag3,
    vraag4,
    vraag5,
    vraag6,
    vraag7,
  },
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
