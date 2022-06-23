
<template>  
  <div class="outer">    
    <div class="innerTop" :style="innerStyle">      
      <div class="bar" id="bar" :style="barStyle">
        <div id="labelOverFifty" class="valueLabel" :style="overStyle" v-if="halfway">{{ valueLabel }}</div>
      </div>
      <div id="labelUnderFifty" class="valueLabel" :style="underStyle" v-if="!halfway">{{ valueLabel }}</div>
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
      width: "400px",
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
        left: "0px",
        color: ""
      },
      overStyle: {
        color: ""
      },
      sliderStyle: {
        width: "520px"
      }    
    }
  },

  updated() {
    console.log("updated")
    this.changePos();
  },

  mounted() {  
    console.log("mounted")
    this.buildSlider();  
    this.changePos();
  },

  created() {
    // this.buildSlider();
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
      default: false
    },
    color: {       
      default: {
        primaryColor: "#08344d",
        secondaryColor: "#A6A6A6",
        labelInBarColor: "#FFFFFF" 
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
    percentage() {
      return 100 * this.currentStep / this.steps;
    },
    valueLabel() {
      if (this.showPercentage) {
        return `${this.percentage.toFixed(0)}%`; 
      } else {
        return this.value;
      }
    },
    halfway() {
      return this.value - this.min > (this.max -this.min ) / 2;  
    }
  },

  methods: {
    emitValue() {      
      this.$emit('sliderChange', this.value);
    },
    changePos() {
      const valueBar = document.querySelector("#bar");
      
      this.barStyle.width = `${this.percentage}%`;
      
      const computedBarStyle = window.getComputedStyle(valueBar);
      const pos = Number.parseInt(computedBarStyle.width);

      this.underStyle.left = `${pos + 2}px`;
      this.thumbStyle.left = `${pos - 8}px`;
      console.log(pos);
    },
    buildSlider() {
      this.setWidth();      
      this.value = this.startValue;      
      this.barStyle.backgroundColor = this.color.primaryColor;
      this.thumbStyle.borderBottomColor = this.color.primaryColor;
      this.innerStyle.backgroundColor = this.color.secondaryColor;
      this.overStyle.color = this.color.labelInBarColor;
      this.underStyle.color = this.color.primaryColor;
    },
    setWidth() {
      const container = document.querySelector(".outer");
      const containerStyles = window.getComputedStyle(container);
      this.width = Number.parseInt(containerStyles.width);
      this.steps = (this.max - this.min) / this.step;
      this.stepWidth = this.width / this.steps;
      this.sliderStyle.width = this.sliderWidthString;
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
  position: absolute;
  top:0;right:0;bottom:0;left:0;
}
.thumb {  
  position:absolute;
  width:0px;
  height:0px;
  border-left:8px solid #FFFFFF;
  border-right:8px solid #FFFFFF;
  border-bottom:16px solid;
}
.valueLabel {
  background: transparent;
  font-size: 18px;
}
#labelUnderFifty {
  position: absolute;
  color: #08344d;
}
#labelOverFifty {
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
