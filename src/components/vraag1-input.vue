<template>
  <div>
    <h3 role="heading">"Hoeveel mensen heeft je bedrijf in dienst? (Jijzelf telt ook)"</h3>
    <div>
      <h3>Aantal mensen in dienst:</h3>
      <input
        type="number"
        v-model="antwoordVraag1"
        @change="opslag('setAntwoordVraag1',antwoordVraag1)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "vraag1",
  data() {
    return {
      antwoordVraag1: this.$store.getters.getAntwoordVraag1,
    };
  },
  methods: {
    opslag(value1, value2) {
      this.$store.commit(value1, 
        value2,
      );
    },
  },
};
</script>
