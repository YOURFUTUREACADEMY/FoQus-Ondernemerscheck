
<template>
  <label for="slider">{{ label }}</label>
  <input
    v-model.number="value"
    type="range"
    
    id="slider"
    :min="min"
    :max="max"
    :step="step"
    :style="style"
    @change="emitValue" 
  />
</template>
<script>
export default {
  data() {
    return {
        value: 0     
    }
  },
  updated() {
    let sliderElement = document.getElementById('slider');
    console.log(sliderElement)
    let sliderStyle = window.getComputedStyle(sliderElement);
    console.log(sliderStyle);
    console.log(sliderElement.style)
    console.log(this.min, this.max, this.step, this.label)
  },
  props: { 
    min: Number, 
    max: Number, 
    step: Number,
    label: String,
    style: Object
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
