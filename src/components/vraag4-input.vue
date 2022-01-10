<template>
  <h1 class="header text-center" role="heading">Hoe lang geleden heb je een nieuw product/model of nieuwe dienst gelanceerd?</h1>
 <div class="container-vragen d-flex justify-content-center align-items-center">
 <div>
    <div class="form-group">
      <input
        class="form-check-input"
        type="radio"
        v-model="antwoord"
        @change='opslag(optie1.label,antwoord)'
        id="optie1"
        :value="optie1.value"
      />
      <label class="form-check-label  ms-2" for="optie1">{{optie1.label}}</label>
    </div>

    <div class="form-group">
      <input
        class="form-check-input"
        type="radio"
        v-model="antwoord"
        @change='opslag(optie2.label,antwoord)'
        id="optie2"
        :value="optie2.value"
      />
      <label class="form-check-label label-radio ms-2" for="optie2">{{optie2.label}}</label>
    </div>

    <div class="form-group">
      <input
        class="form-check-input"
        type="radio"
        v-model="antwoord"
        @change='opslag(optie3.label,antwoord)'
        id="optie3"
        :value="optie3.value"
      />
      <label class="form-check-label label-radio ms-2" for="optie3">{{optie3.label}}</label>
    </div>
  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vraag: "vraag4",
      optie1: {label:"<= 0,5 jaar",value:1},
      optie2: {label:"0,5 - 1,5 jaar",value:2},
      optie3: {label:"1,5 jaar",value:3},
      antwoord:2
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

