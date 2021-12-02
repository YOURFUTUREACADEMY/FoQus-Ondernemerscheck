<template>
  <h3 class="header" role="heading">Hoe gaat het met je omzet?</h3>
  
  <div class="container-vragen d-flex flex-column d-flex justify-content-center">
    <div class="me-2">
      <input
        class="radio-input form-check-input"
        type="radio"
        v-model="antwoord"
        @change='opslag(optie1.label,antwoord)'
        id="optie1"
        :value="optie1.value"
      />
      <label class="form-check-label label-radio ms-2" for="optie1">{{optie1.label}}</label>
    </div>

    <div class="me-2">
      <input
        class="radio-input form-check-input"
        type="radio"
        v-model="antwoord"
        @change='opslag(optie2.label,antwoord)'
        id="optie2"
        :value="optie2.value"
      />
      <label class="form-check-label label-radio ms-2" for="optie2">{{optie2.label}}</label>
    </div>

    <div class="me-2">
      <input
        class="radio-input form-check-input"
        type="radio"
        v-model="antwoord"
        @change='opslag(optie3.label,antwoord)'
        id="optie3"
        :value="optie3.value"
      />
      <label class="form-check-label label-radio ms-2" for="optie3">{{optie3.label}}</label>
    </div>

  </div>
</template>

<script>
export default {
  data() {    
    return {
      vraag: "vraag5",
      optie1: {label:"Stijgt",value:1},
      optie2: {label:"Blijft Gelijk",value:2},
      optie3: {label:"Daalt",value:3},
      antwoord: ``
    };
  },
  methods: {
    opslag(label, waarde) {
      this.$store.commit('setAntwoord',{
        vraag:this.vraag,
        label:label,
        waarde:waarde
      });
    },
  },
};
</script>
