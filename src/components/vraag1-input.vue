<template>

  <h1 class="header text-center" role="heading">Hoeveel mensen heeft je bedrijf in dienst? <br> (Jijzelf telt ook mee)</h1>
  <div class="container-vragen d-flex justify-content-center align-items-center">
  <div class="row form-group">
    <label for="aantalMensen" class="col-auto col-form-label">Aantal mensen in dienst:</label>
    <div class="col-auto">
    <input
      id="aantalMensen"
      class="form-control"
      type="number"
      v-model="antwoord"
      @change='opslag("", antwoord)'
    
    />
    </div>
  </div>

 
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      antwoord:"",
      vraag: "vraag1",      
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
