<template>
  <div>
    <h3 role="heading">"Welk percentage van de omzet draai jij bij je 3 belangrijkste klanten?"</h3>
    <input
      type="range"
      min=0
      max=100
      step=20
      v-model="value"
      @change="opslag('setAntwoordVraag1',antwoordVraag1)"
    />
    <label>{{value }}%</label>
  </div>
</template>

<script>
export default {
  name: "vraag3",
  data() {
    return {
      value: 0,
      antwoordVraag1: this.$store.getters.getAntwoordVraag1,
    };
  },
  methods: {
    opslag(value1, value2) {
      this.$store.commit(value1, {
        waarde: value2,
      });
    },
  },
};
</script>
