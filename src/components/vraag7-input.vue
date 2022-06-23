<template>
  <h1 class="header text-center" role="heading">Hoeveel plezier heb je in je werk op een schaal van 1 tot 10?</h1>
  <div class="container-vragen d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center container-slider">          
      <i class="fa fa-frown-o smilies" aria-hidden="true"></i>
      <slider
        class="cijferSlider"
        :min="rangeMin"
        :max="rangeMax"
        :step="step"
        :width="sliderWidth"
        :label='sliderLabel'
        :startValue='value'
        :color='sliderColor'
        @sliderChange='commitValue' 
      />
      <i class="fa fa-smile-o smilies " aria-hidden="true"></i> 
    </div>

  </div>
</template>

<script>
import slider from '@/components/slider.vue'

export default {
  data() {
    return {
      vraag: "vraag7",
      rangeMin: 0,
      rangeMax: 9,
      step: 1,
      sliderWidth: 500,
      value: this.$store.getters.getAntwoord("vraag7").waarde,
      sliderLabel: "",
      sliderColor: {
        primaryColor: "#08344d",
        secondaryColor: "#A6A6A6",
        labelInBarColor: "#FFFFFF" 
      }
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
      console.log(this.$store.getters.getAntwoord("vraag7"));
    },
  }  
};
</script>
