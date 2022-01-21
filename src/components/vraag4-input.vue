<template>
  <h1 class="header text-center" role="heading">Hoe lang geleden heb je een nieuw product/model of nieuwe dienst gelanceerd?</h1>
 <div class="container-vragen d-flex justify-content-center align-items-center">
 <div>
    <div class="form-group mb-4">
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

    <div class="form-group mb-4">
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

    <div class="form-group mb-4">
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
      optie1: {label:"Afgelopen half jaar",value:1},
      optie2: {label:"Afgelopen 2 jaar",value:2},
      optie3: {label:"Langer dan 2 jaar geleden",value:3},
      antwoord:""
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

