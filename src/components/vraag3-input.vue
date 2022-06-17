<template>
  <h1 class="header text-center" role="heading">Welk percentage van de omzet draai jij bij je 3 belangrijkste klanten?</h1>
  <div class="container-vragen d-flex justify-content-center align-items-center">     
    <slider 
      :min='rangeMin'
      :max='rangeMax'
      :step='step'
      :width='sliderWidth'
      :label='rsLabel'
      @sliderChange='commitValue'
    />
  </div> 
</template>

<script>
import slider from '@/components/slider.vue'

export default {
  data() {
    return {
      vraag: "vraag3",
      rangeMin: 0,
      rangeMax: 100,
      step: 5,
      value: this.$store.getters.getAntwoord("vraag3").waarde,
      sliderWidth: 399,
      rsLabel:"Dit is een label.",
    };
  },
  components: {
    slider
  },
  methods: {    
    commitValue(v) {
      this.value = v;
      this.$store.commit('setAntwoord',{
        vraag:this.vraag,
        label:"",
        waarde:Number(this.value)
      });
      console.log(this.$store.getters.getAntwoord("vraag3"));
    },
  }
}
</script>
