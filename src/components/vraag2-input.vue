<template>
  <div>
    <h3 role="heading">"Hoeveel uur besteed jij per week aan je bedrijf?"</h3>
    <div>
      <input
        type="number"
        v-model="antwoordVraag1"
        @change="opslag('setAntwoordVraag1',antwoordVraag1)"
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
