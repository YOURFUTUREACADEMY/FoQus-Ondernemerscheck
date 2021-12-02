<template>
  <h1 class="header text-center" role="heading">Welk percentage van de omzet draai jij bij je 3 belangrijkste klanten?</h1>
<div class="container-vragen d-flex justify-content-center align-items-center">
     <div class="form-group">
      <input
        class="range-input form-control-range" type="range"
        min=0
        max=100
        step=20
        v-model="value"
        id="rangeInput"
        @change='opslag("",value)'
      />
      <label for="rangeInput" class="form-control-range">{{value}}%</label>
    </div>

</div>

 
</template>

<script>
export default {
  data() {
    return {
      vraag: "vraag3",
      value: 50,
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
