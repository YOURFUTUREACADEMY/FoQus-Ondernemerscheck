<template>
  <div>
    <h3 role="heading">"Welk percentage van de omzet draai jij bij je 3 belangrijkste klanten?"</h3>
    <input
      type="range"
      min=0
      max=100
      step=20
      v-model="value"
      @change="opslag(value)"
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
    };
  },
  methods: {
    opslag(value) {
      this.$store.commit('setAntwoordVraag3', value);
    },
  },
};
</script>
