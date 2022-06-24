
<template>  
  <div class="outer">    
    <div class="innerTop" :style="innerStyle">      
      <div class="bar" id="bar" :style="barStyle">
        <div id="labelOverFifty" class="valueLabel" :style="overStyle">{{ valueLabel }}</div>
      </div>
      <div id="labelUnderFifty" class="valueLabel" :style="underStyle">{{ valueLabel }}</div>
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
      width: "400px",
      togglePoint: 0,
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
        color: "",
        opacity: 1
      },
      overStyle: {
        color: "",
        opacity: 0
      },
      sliderStyle: {
        width: "520px"
      }    
    }
  },

  updated() {
    this.changePos();
    this.setTogglePoint();
  },

  mounted() {  
    console.log("mounted")
    window.addEventListener('resize', this.setWidth);
    this.buildSlider();  
    this.changePos();
  },
  
  unmounted() {
    window.removeEventListener('resize', this.setWidth);
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
    toggleHalfway: {
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
    stepWidth() {
      return this.width / this.steps;
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
    position() {
      return this.currentStep * this.stepWidth;
    },    
  },

  methods: {
    emitValue() {      
      this.$emit('sliderChange', this.value);
    },
    changePos() {      
      this.barStyle.width = `${this.position}px`;
      this.underStyle.left = `${this.position + 2}px`;
      this.thumbStyle.left = `${this.position - 8}px`;
      console.log(this.togglePoint)
      if (Number.parseInt(this.barStyle.width) > this.togglePoint) {
        this.overStyle.opacity = 1;
        this.underStyle.opacity = 0;
      } else {
        this.overStyle.opacity = 0;
        this.underStyle.opacity = 1;
      }
    },
    buildSlider() {
      this.setWidth();      
      this.value = this.startValue < this.min ? this.min : (this.startValue > this.max ? this.max : this.startValue);
      console.log(this.value)      
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
      this.sliderStyle.width = this.sliderWidthString;
      this.setTogglePoint();       
    },
    setTogglePoint() {
      if (this.toggleHalfway) {
        this.togglePoint = Number.parseInt(this.width / 2);
      } else {
        const label = document.querySelector("#labelUnderFifty");
        if (label) {
          console.log("label bestaat")
          const labelStyle = window.getComputedStyle(label);
          this.togglePoint = Number.parseInt(labelStyle.width);
        } else {
          this.togglePoint = 0;
        } 
      }
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
  width:20px;
  cursor:pointer;
  margin-top:0;
  margin-bottom: -25px;
}
.slider::-moz-range-thumb {
  height:40px;
  width:20px;
  cursor:pointer;
  margin-top:0;
  margin-bottom: -25px;
}
</style>
