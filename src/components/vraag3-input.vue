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
    <label>{{value}}%</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vraag: "vraag3",
      value: 50,
    };
  },
  methods: {
    opslag(value) {
      this.$store.commit('setAntwoord',{vraag:this.vraag,payload:value});
    },
  },
};
</script>
