<template>
  <h3 class="header" role="heading">Hoeveel mensen heeft je bedrijf in dienst? (Jijzelf telt ook)</h3>
  <div class="container-vragen">
    <h3>Aantal mensen in dienst:</h3>
    <input
      type="number"
      v-model="antwoord"
      @change='opslag("", antwoord)'
    />
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
