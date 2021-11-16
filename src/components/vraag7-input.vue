<template>
  <div>
    <h3 role="heading">"Hoeveel plezier heb je in je werk op een schaal van 1 tot 10?"</h3>
    <p>icon :(</p>
    <input
      type="range"
      min=1
      max=10
      v-model="value"
      @change="opslag('setAntwoordVraag1',antwoordVraag1)"
    />
    <label>{{value}}</label>
    <p>icon :)</p>
  </div>
</template>

<script>
export default {
  name: "vraag7",
  data() {
    return {
      value:1,
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
