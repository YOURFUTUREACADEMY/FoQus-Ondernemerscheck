<template>
  <div>
    <h3 role="heading">Hoe lang geleden heb je een nieuw product/model of nieuwe dienst gelanceerd</h3>
    <div>
      <input
        type="radio"
        v-model="antwoord"
        @change="opslag(antwoord)"
        id="optie1"
        :value="optie1.value"
      />
      <label for="optie1">{{optie1.label}}</label>
    </div>
    <div>
      <input
        type="radio"
        v-model="antwoord"
        @change="opslag(antwoord)"
        id="optie2"
        :value="optie2.value"
      />
      <label for="optie2">{{optie2.label}}</label>
    </div>
    <div>
      <input
        type="radio"
        v-model="antwoord"
        @change="opslag(antwoord,'<= 0,5 jaar')"
        id="optie3"
        :value="optie3.value"
      />
      <label for="optie3">>{{optie3.label}}</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vraag: "vraag4",
      optie1: {label:"<= 0,5 jaar",value:1},
      optie2: {label:"0,5-1,5 jaar",value:2},
      optie3: {label:"1,5 jaar",value:3},
      antwoord:''
    };
  },
  methods: {
    opslag(value) {
      this.$store.commit('setAntwoord',{vraag:this.vraag,payload:value});
    },
  },
};
</script>
