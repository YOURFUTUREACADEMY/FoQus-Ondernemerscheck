
<template>
  <label for="slider">{{ label }}</label>
  <div class="outer" :style="containerStyle">    
    <div class="innerTop" :style="innerStyle">      
      <div class="bar" :style="barStyle">
        <div id="labelOverFifty" class="valueLabel" v-if="halfWay">{{ valueLabel }}</div>
      </div>
      <div id="labelUnderFifty" class="valueLabel" :style="underStyle" v-if="!halfWay">{{ valueLabel }}</div>
    </div>
    <div class="thumb" :style="thumbStyle"></div>
    <input
      v-model.number="value"
      type="range"
      class="slider"
      id="slider"
      :min="min"
      :max="max"
      :step="step"
      :style="sliderStyle"
      @input="changePos"
      @change="emitValue" 
    >
    <div class="sideCover" id="leftCover"></div>
    <div class="sideCover" id="rightCover"></div>    
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
      innerStyle: {
        backgroundColor: "#A6A6A6"        
      },        
      barStyle: {
        width: "0%",
        backgroundColor: "#08344d"
      }, 
      thumbStyle: {          
        top: "25px",
        right: "0px",
        bottom: "0px",
        left: "-10px",
        borderBottomColor: "#08344d"
      },
      underStyle: {
        top: "0px",
        left: "0px"
      },
      sliderStyle: {
        width: "520px"
      }    
    }
  },

  updated() {
  },

  created() {
    this.buildSlider();
    this.changePos();
    console.log(`steps: ${this.steps}\nstepWidth: ${this.stepWidth}`);
  },

  props: { 
    min: {
      type: Number,
      default: 0
    }, 
    max: {
      type: Number,
      default: 100
    }, 
    step: {
      type: Number,
      default: 1
    },
    width: {
      type: Number,
      default: 500
    },
    startValue: {
      type: Number,
      default: 0
    },
    border: {
      type: Boolean,
      default: false
    },
    showPercentage: {
      type: Boolean,
      default: true
    },
    color: {
      
      default: {
        primaryColor: "#08344d",
        secondaryColor: "#A6A6A6",
        textOnForegroundColor: "#FFFFFF" 
      }
    },
    label: String,    
  },

  computed: {
    widthString() {
      return `${this.width}px`;
    },
    currentStep() {
      return (this.value - this.min) / this.step;
    },
    sliderWidthString() {
      return `${this.width + 20}px`
    },
    valueLabel() {
      if (this.showPercentage) {
        return `${((this.currentStep / this.steps) * 100).toFixed(0)}%`; 
      } else {
        return this.value;
      }
    },
    halfWay() {
      return (this.value - this.min) > ((this.max -this.min )/ 2 ) 
    }
  },

  methods: {
    emitValue() {      
      this.$emit('sliderChange', this.value);
    },
    changePos() {
      this.underStyle.left = `${this.currentStep * this.stepWidth + 2}px`;
      this.thumbStyle.left = `${this.currentStep * this.stepWidth - 8}px`;
      this.barStyle.width = `${(this.currentStep / this.steps) * 100}%`;      
      console.log(this.barStyle.width);
      console.log(this.value);
    },
    buildSlider() {
      this.steps = (this.max - this.min) / this.step;
      this.stepWidth = this.width / this.steps;
      this.containerStyle.width = this.widthString;
      this.sliderStyle.width = this.sliderWidthString;
      this.value = this.startValue;
    }
  },

  emits: ['sliderChange'],   
}
</script>

<style scoped>
.outer {
  position:relative;  
  height:35px;
}
.innerTop {
  position:absolute;
  top:0;right:0;bottom:0;left:0;
  height:25px;
  background-color:white; 
  border: none; 
}
.sideCover {
  height: 25px;
  width: 10px;
  background-color: transparent;
}
#leftCover {
  position: absolute;
  top:0;left:-10px;
}
#rightCover {
  position: absolute;
  top:0;right:-10px;
}
.bar {
  background-color: green;
  position: absolute;
  top:0;right:0;bottom:0;left:0;
}
.thumb {  
  position:absolute;
  width:0px;
  height:0px;
  border-left:8px solid white;
  border-right:8px solid white;
  border-bottom:16px solid green;
}
.valueLabel {
  background: transparent;
  font-size: 16px;
}
#labelUnderFifty {
  position: absolute;
  color: #08344d;
}
#labelOverFifty {
  color: #e7e6e6;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 2px; 
}
.slider {
  position:absolute;
  top:0;right:0;bottom:0;left:-10px;
  -webkit-appearance: none;
  height:25px;
  opacity:0;
}
.slider:focus {
  outline: none;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance:none;
  height:40px;
  width:16px;
  cursor:pointer;
  margin-top:0;
  margin-bottom: -20px;
}
</style>
