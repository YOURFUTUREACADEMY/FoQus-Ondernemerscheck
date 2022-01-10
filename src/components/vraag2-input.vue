<template>
  <h1 class="header text-center" role="heading">
    Hoeveel uur besteed jij per week aan je bedrijf?
  </h1>
  <div
    class="container-vragen d-flex justify-content-center align-items-center"
  >
    <div class="row form-group ">
      <div class="col-auto  ">
        <input
          id="aantalUren"
          class="form-control text-center "
          type="number"
          v-model="antwoord"
          @change="opslag('', antwoord)"
        />
      </div>
      <label class="col-auto col-form-label text-center " for="aantalUren">Uur</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      antwoord:40,
      vraag: "vraag2",
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
