<template>
  <div>
    <h3 role="heading">"Hoeveel uur besteed jij per week aan je bedrijf?"</h3>
    <div>
      <input
        type="number"
        v-model="antwoord"
        @change="opslag(antwoord)"
      />
      <h3>uur</h3>
    </div>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      vraag: "vraag2",
    };
  },
  methods: {
    opslag(value) {
      this.$store.commit('setAntwoord',{vraag:this.vraag,payload:value});
    },
  },
};
</script>
