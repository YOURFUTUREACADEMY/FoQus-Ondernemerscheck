<template>
  <div>
    <h3 role="heading">"Hoeveel uur besteed jij per week aan je bedrijf?"</h3>
    <div>
      <input
        type="number"
        v-model="antwoordVraag2"
        @change="opslag('setAntwoordVraag2',antwoordVraag2)"
      />
      <h3>uur</h3>
    </div>  
  </div>
</template>

<script>
export default {
  name: "vraag2",
  data() {
    return {
      antwoordVraag2: this.$store.getters.getAntwoordVraag2,
    };
  },
  methods: {
    opslag(value1, value2) {
      this.$store.commit(value1, value2);
    },
  },
};
</script>
