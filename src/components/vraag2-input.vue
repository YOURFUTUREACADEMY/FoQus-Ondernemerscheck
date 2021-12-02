<template>
  <h3 class="header" role="heading">Hoeveel uur besteed jij per week aan je bedrijf?</h3>
  <div class="container-vragen input-group d-flex flex-row d-flex justify-content-center d-flex align-items-center">
    <input
      class="number-input"
      type="number"
      v-model="antwoord"
      @change='opslag("",antwoord)'
    />
    <h3 class="mt-1 mx-3">uur</h3>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      antwoord:"",
      vraag: "vraag2",
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
