<template>
  <div>
    <h3 role="heading">"Hoe gaat het met je resultaat?"</h3>
    <div>
      <input
        type="radio"
        v-model="antwoord"
        @change="opslag(antwoord)"
        id="vraag1"
        :value="vraag1.value" 
      />
      <label for="vraag1">{{vraag1.label}}</label>
    </div>
    <div>
      <input
        type="radio"
        v-model="antwoord"
        @change="opslag(antwoord)"
        id="vraag2"
        :value="vraag2.value"
      />
      <label for="vraag2">{{vraag2.label}}</label>
    </div>
    <div>
      <input
        type="radio"
        v-model="antwoord"
        @change="opslag(antwoord)"
        id="vraag3"
        :value="vraag3.value"
      />
      <label for="vraag3">{{vraag3.label}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "vraag6",
  data() {
    
    return {
      vraag1: {label:"Stijgt",value:1},
      vraag2: {label:"Blijft Gelijk",value:2},
      vraag3: {label:"Daalt",value:3},
      antwoord: this.$store.getters.antwoordVraag6,
    };
  },
  methods: {
    opslag(value) {
      this.$store.commit('setAntwoordVraag6',value);
    },
  },
};
</script>