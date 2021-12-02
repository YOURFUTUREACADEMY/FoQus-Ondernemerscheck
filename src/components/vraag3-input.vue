<template>
  <h3 class="header" role="heading">Welk percentage van de omzet draai jij bij je 3 belangrijkste klanten?</h3>
  <div class="container-vragen">
    <div class="d-flex flew-column d-flex justify-content-center mt-5">
      <input
        class="range-input form-range w-25"
        type="range"
        min=0
        max=100
        step=20
        v-model="value"
        @change='opslag("",value)'
      />
      <label class="form-label mt-1 mx-2">{{value}}%</label>
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
