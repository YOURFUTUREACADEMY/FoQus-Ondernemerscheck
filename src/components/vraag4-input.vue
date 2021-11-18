<template>
  <div>
    <h3 role="heading">"Hoe lang geleden heb je een nieuw product/model of nieuwe dienst gelanceerd"</h3>
    <div>
      <input
        type="radio"
        v-model="antwoordVraag4"
        @change="opslag('setAntwoordVraag4',antwoordVraag4)"
        id="vraag4a1"
        :value="vraag1"
      />
      <label for="vraag4a1">{{vraag1}}</label>
    </div>
    <div>
      <input
        type="radio"
        v-model="antwoordVraag4"
        @change="opslag('setAntwoordVraag4',antwoordVraag4)"
        id="vraag4a2"
        :value="vraag2"
      />
      <label for="vraag4a2">{{vraag2}}</label>
    </div>
    <div>
      <input
        type="radio"
        v-model="antwoordVraag4"
        @change="opslag('setAntwoordVraag4',antwoordVraag4)"
        id="vraag4a3"
        :value="vraag3"
      />
      <label for="vraag4a3">>{{vraag3}}</label>
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
      antwoordVraag4: this.$store.getters.getAntwoordVraag4,
    };
  },
  methods: {
    opslag(value1, value2) {
      this.$store.commit(value1,value2);
    },
  },
};
</script>
