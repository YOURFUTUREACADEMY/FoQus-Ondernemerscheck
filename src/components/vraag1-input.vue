<template>
  <div>
    <h3 role="heading">"Hoeveel mensen heeft je bedrijf in dienst? (Jijzelf telt ook)"</h3>
    <div>
      <h3>Aantal mensen in dienst:</h3>
      <input
        type="number"
        v-model="antwoord"
        @change="opslag(antwoord)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vraag: "vraag1",
    };
  },
  methods: {
    opslag(value) {
      this.$store.commit('setAntwoord',{vraag:this.vraag,payload:value});
    },
  },
};
</script>
