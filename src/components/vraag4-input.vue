<template>
  <div>
    <h3 role="heading">"Hoe lang geleden heb je een nieuw product/model of nieuwe dienst gelanceerd"</h3>
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
      <label for="vraag3">>{{vraag3.label}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "vraag4",
  data() {
    return {
      vraag1: {label:"<= 0,5 jaar",value:1},
      vraag2: {label:"0,5-1,5 jaar",value:2},
      vraag3: {label:"1,5 jaar",value:3},
      antwoord: this.$store.getters.antwoordVraag4,
    };
  },
  methods: {
    opslag(value) {
      this.$store.commit('setAntwoordVraag4',value);
    },
  },
};
</script>
