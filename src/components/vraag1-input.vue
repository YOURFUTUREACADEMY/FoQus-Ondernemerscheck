<template>
  <h1 class="header text-center" role="heading">
    Hoeveel mensen heeft je bedrijf in dienst? <br />
    Jij zelf telt ook mee
  </h1>
  <div
    class="container-vragen d-flex justify-content-center align-items-center"
  >
    <div class="row form-group justify-content-center align-items-center">
      <label for="aantalMensen" class="col-auto col-form-label"
        >Aantal mensen in dienst:</label
      >
      <div class="col-auto w-25">
        <input
          id="aantalMensen"
          class="form-control text-center"
          type="number"
          v-model="antwoord"
          @change="opslag('', antwoord)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      antwoord: 1,
      vraag: "vraag1",
    };
  },
  methods: {
    opslag(label, waarde) {
      this.$store.commit("setAntwoord", {
        vraag: this.vraag,
        label: label,
        waarde: waarde,
      });
    },
  },
};
</script>
