<template>
  <h1 class="header text-center" role="heading">Hoeveel plezier heb je in je werk op een schaal van 1 tot 10?</h1>
 <div class="container-vragen d-flex justify-content-center align-items-center">
      <i class="fa fa-frown-o mx-2 smilies" aria-hidden="true"></i>
      <div class="range-slider mt-5">  
        <input
          class="rs-line"
          type="range"
          :min='rangeMin'
          :max='rangeMax'
          v-model="value"
          id="rs-line"
          @change='runOpslag("",value)'
        />
        <p id="rs-label" class="rs-label" draggable="false" :style="labelPos">{{(COM_valueLabel)}}</p> 
        <span id="rs-bullet" class="rs-bullet" :style="{left:sliderPos}"></span>      
      </div>
      <i class="fa fa-smile-o mx-2 smilies" aria-hidden="true"></i> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      vraag: "vraag7",
      rangeMin: 0,
      rangeMax: 9,
      value: 5,
      rsLine: "",
      rsBullet:"",
      rsLabel:"",
      // Label color in Min position
      rsLabelColorMin:"#08344D",
      // Label color in Max position
      rsLabelColorMax:"#FFFFFF",
      // offsetPos: switch position between min and normal
      rsLabelOffsetPos : 0,
      // offsetLabelMin: offset label from the left on minimum
      rsOffsetLabelMin : 5,
      // offsetLabel: offset label form the left normaly
      rsOffsetLabel : 0,
      // offsetLabelMax: offset label from the left on maximum
      rsOffsetLabelMax : 0,
    };
  },
  mounted(){
      this.rsLine = document.getElementById("rs-line");
      this.rsBullet = document.getElementById("rs-bullet");
      this.rsLabel = document.getElementById("rs-label");
  },
  methods: {

    opslag(label, waarde) {
      this.$store.commit('setAntwoord',{
        vraag:this.vraag,
        label:label,
        waarde:waarde
      });
    },
    runOpslag(label, waarde){
      waarde = Number(waarde) + 1;
      this.opslag(label, waarde);
    },
  },
  
  computed:{
    // controle slider bullet postion
    sliderPos(){
      let rangeSliderWidth = this.rsLine.offsetWidth;
      let newPos = this.value / this.rangeMax;
      newPos = newPos * rangeSliderWidth;
      return newPos + "px";     
    },

    // controle label position and color
    labelPos(){

      // offsetPos: switch position between min and normal
      let offsetPos = this.rsLabelOffsetPos;
      // offsetLabelMin: offset label from the left on minimum
      let offsetLabelMin = this.rsOffsetLabelMin;
      // offsetLabel: offset label form the left normaly
      let offsetLabel = this.rsOffsetLabel;
      // offsetLabelMax: offset label from the left on maximum
      let offsetLabelMax = this.rsOffsetLabelMax;

      let rangeSliderWidth = this.rsLine.offsetWidth;
      let rsLabelWidth = this.rsLabel.offsetWidth;
      let newPos = this.value / this.rangeMax;
      const style = {left:newPos,color:this.rsLabelColorMax}
      let minRange = this.rangeMin + offsetPos;

      // if slider is on min positon add value to keep it in the slider
      if(this.value <= minRange){
        newPos = (newPos * rangeSliderWidth) + (rsLabelWidth + offsetLabelMin);
        style.color = this.rsLabelColorMin;
      }
      // if slider is on inbetween positon sub value to keep it in the slider
      else if(this.value > minRange && this.value < this.rangeMax){
        newPos = (newPos * rangeSliderWidth) - (rsLabelWidth + offsetLabel);
        style.color = this.rsLabelColorMax;
      }
      // if slider is on max positon sub value to keep it in the slider
      else if(this.value >= this.rangeMax){
        newPos = (newPos * rangeSliderWidth) - (rsLabelWidth + offsetLabelMax);
        style.color = this.rsLabelColorMax;
      }

      style.left = newPos + "px"
     
      return style;     
    },
    COM_valueLabel(){
      let value = Number(this.value) + 1;    
      return value;
    },
  }
};
</script>
