<template>
  <div>
    <p>Aantal mensen in dienst:</p>
    <input
      type="number"
      v-model="antwoordVraag1"
      @change="opslag('setAntwoordVraag1',antwoordVraag1)"
    />
  </div>
</template>

<script>
export default {
  name: "vraag123",
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
