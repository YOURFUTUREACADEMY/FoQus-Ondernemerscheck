<template>
  <div>
    <h3 role="heading">"Hoe gaat het met je resultaat?"</h3>
    <div>
      <input
        type="radio"
        v-model="antwoordVraag1"
        @change="opslag('setAntwoordVraag1',antwoordVraag1)"
        id="vraag6a1"
        :value="vraag1"
      />
      <label for="vraag6a1">{{vraag1}}</label>
    </div>
    <div>
      <input
        type="radio"
        v-model="antwoordVraag1"
        @change="opslag('setAntwoordVraag1',antwoordVraag1)"
        id="vraag6a2"
        :value="vraag2"
      />
      <label for="vraag6a2">{{vraag2}}</label>
    </div>
    <div>
      <input
        type="radio"
        v-model="antwoordVraag1"
        @change="opslag('setAntwoordVraag1',antwoordVraag1)"
        id="vraag6a3"
        :value="vraag3"
      />
      <label for="vraag6a3">{{vraag3}}</label>
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
  //props:["vraag1","vraag2","vraag3"],
};
</script>