<template>
  <div>
    <h3 role="heading">"Hoe lang geleden heb je een nieuw product/model of nieuwe dienst gelanceerd"</h3>
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
      <label for="vraag3">>{{vraag3}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "vraag4",
  data() {
    return {
      vraag1: "<= 0,5 jaar",
      vraag2: "0,5-1,5 jaar",
      vraag3: "1,5 jaar",
    };
  },
  methods: {
    opslag(value) {
      this.$store.commit('setAntwoordVraag4',value);
    },
  },
};
</script>
