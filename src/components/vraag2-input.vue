<template>
  <h1 class="header text-center" role="heading">
    Hoeveel uur besteed jij per week aan je bedrijf?
  </h1>
  <div
    class="container-vragen d-flex justify-content-center align-items-center"
  >
    <div class="row form-group justify-content-center">
      <div class="col-4">
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
      antwoord:this.$store.getters.getAntwoord("vraag2").waarde,
      vraag: "vraag2",
    };
  },
  watch:{
    antwoord: function(){
      if(this.antwoord < 1){
        this.antwoord = 1;
      }
    }
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
