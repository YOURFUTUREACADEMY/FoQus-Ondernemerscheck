<template>
  <div>
    <h3 role="heading">"Hoe gaat het met je resultaat?"</h3>
    <div>
      <input
        type="radio"
        v-model="antwoord"
        @change="opslag(antwoord)"
        id="vraag1"
        :value="vraag1"
      />
      <label for="vraag1">{{vraag1}}</label>
    </div>
    <div>
      <input
        type="radio"
        v-model="antwoord"
        @change="opslag(antwoord)"
        id="vraag2"
        :value="vraag2"
      />
      <label for="vraag2">{{vraag2}}</label>
    </div>
    <div>
      <input
        type="radio"
        v-model="antwoord"
        @change="opslag(antwoord)"
        id="vraag3"
        :value="vraag3"
      />
      <label for="vraag3">{{vraag3}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "vraag6",
  data() {
    
    return {
      vraag1: "Stijgt",
      vraag2: "Blijft Gelijk",
      vraag3: "Daalt",
    };
  },
  methods: {
    opslag(value) {
      this.$store.commit('setAntwoordVraag6',value);
    },
  },
};
</script>