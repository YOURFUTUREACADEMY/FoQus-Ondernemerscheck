
<template>
  <label for="slider">{{ label }}</label>
  <div class="outer" :style="containerStyle">    
    <div class="innerTop"><div class="bar" :style="barStyle"></div></div>
    <div class="thumb" :style="thumbStyle"></div>
    <input
      v-model.number="value"
      type="range"
      class="slider"
      id="slider"
      :min="min"
      :max="max"
      :step="step"
      @input="changePos"
      @change="emitValue" 
    >    
  </div> 
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      steps: 100,
      stepWidth: 25,
      containerStyle: {
        width: "500px"
      },        
      barStyle: {
        width: "0%"
      }, 
      thumbStyle: {          
        top: "25px",
        right: "0px",
        bottom: "0px",
        left: "-10px"
      }    
    }
  },
  updated() {
  },
  created() {
    this.steps = (this.max - this.min) / this.step;
    this.stepWidth = this.width / this.steps;
    this.containerStyle.width = this.widthString;
    console.log(`steps: ${this.steps}\nstepWidth: ${this.stepWidth}`);
  },
  props: { 
    min: Number, 
    max: Number, 
    step: Number,
    width: Number,
    label: String,    
  },
  computed: {
    widthString() {
      return `${this.width}px`;
    },
    currentStep() {
      return (this.value - this.min) / this.step;
    }
  },
  methods: {
    emitValue() {      
      this.$emit('sliderChange', this.value);
    },
    changePos() {
      this.thumbStyle.left = `${this.currentStep * this.stepWidth - 10}px`;
      this.barStyle.width = `${(this.currentStep / this.steps) * 100}%`;
      console.log(this.barStyle.width);
      console.log(this.value);
    }
  },
  emits: ['sliderChange'],   
}
</script>

<style scoped>
.outer {
  position:relative;  
  height:35px;
  margin:0;
  padding:0;
  border:0;
}
.innerTop {
  position:absolute;
  top:0;right:0;bottom:0;left:0;
  height:25px;
  background-color:white; 
  border:2px solid green;
  margin:0;
  padding:0; 
}
.bar {
  background-color: green;
  position: absolute;
  top:0;right:0;bottom:0;left:0;
  margin:0;
  border:0;
  border:0;
}
.thumb {  
  position:absolute;
  width:0px;
  height:0px;
  border-left:10px solid white;
  border-right:10px solid white;
  border-bottom:10px solid green;
}
.slider {
  position:absolute;
  top:0;right:0;bottom:0;left:0;
  -webkit-appearance: none;
  height:35px;
  width:100%;
  opacity:0;
}
input[type=range]:focus {
  outline: none;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance:none;
  height:35px;
  width:25px;
  cursor:pointer;
  margin-top:0;
}
</style>
