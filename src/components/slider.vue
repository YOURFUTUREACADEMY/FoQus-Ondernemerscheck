
<template>
  <label for="slider">{{ label }}</label>
  <div class="outer">
    <input
      v-model.number="value"
      type="range"
      class="slider"
      id="slider"
      :min="min"
      :max="max"
      :step="step"
      :style="style"
      @change="emitValue" 
    >
    <div class="inner"><div class="bar"></div></div>    
  </div> 
</template>
<script>
export default {
  data() {
    return {
        value: 0,
        style: {
          
        }     
    }
  },
  updated() {
    let sliderElement = document.querySelector(".slider::-webkit-slider-thumb")
    console.log(sliderElement)
    // let sliderStyle = window.getComputedStyle(sliderElement);
    // console.log(sliderStyle);
    // console.log(sliderElement.style)
    console.log(this.min, this.max, this.step, this.label)
  },
  props: { 
    min: Number, 
    max: Number, 
    step: Number,
    label: String,    
  },
  methods: {
    emitValue() {
      console.log(this.value)
      this.$emit('sliderChange', this.value)
    }
  },
  emits: ['sliderChange'],   
}
</script>
<style scoped>
.outer {
  position:relative;
  background-color: #000000;
  height:50px;
  width:100%;
}
.inner {
  position: absolute;
  top:0;right:0;bottom:0;left:0;
  height:25px;
  background-color: aqua;
  display: block;
}

.bar {
  background-color: beige;
  position: absolute;
  top:0;right:0;bottom:0;left:0;
  width:50%;
  display: block;
}


input[type=range] {
  position:absolute;
  top:0;right:0;bottom:0;left:0;
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  height: 50px;
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  border-color: transparent;
  color: transparent;
  opacity: 0.5;
}


input[type=range]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type=range]::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent; 
  border-color: transparent;
  color: transparent;
}



input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  opacity: 1;
  border: 1px solid #000000;
  height: 50px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
}


</style>
