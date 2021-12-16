
<style type="text/css">
    svg {
        height: 10%;
        width: 10%;
    }
 
	.st0{fill:#E30613;stroke:#000000;stroke-miterlimit:10;}
	.st1{fill:#F9B233;stroke:#000000;stroke-miterlimit:10;}
	.st2{fill:#3AAA35;stroke:#000000;stroke-miterlimit:10;}
	.st3{fill:#EA5B0C;stroke:#000000;stroke-miterlimit:10;}
	.st4{fill:#95C11F;stroke:#000000;stroke-miterlimit:10;}
	.st5{
        stroke:#000000;
        stroke-width:0.5977;
        stroke-miterlimit:10;
        transition: 5s ease-out;
        transform-origin: 45.5% 64%;
        fill-rule: nonzero;
        }
	.st6{
        stroke:#000000;
        stroke-width:0.8263;
        stroke-miterlimit:10;
        }
	.st7{fill:#F6F6F6;stroke:#000000;stroke-width:0.5977;stroke-miterlimit:10;}
   
   @media screen and (max-width: 700px) {
        svg {
            width: 100%;
        }
        .st6 {
            top: -1.2em;
        }
    }
    
    @media screen and (max-width: 575px) {
        svg {
            width: 100%;
        }
        .st6 {
            top: -1.2em;
        }
    }
    
    @media screen and (max-width: 445px) {
        svg {
            width: 100%;
        }
        .st6 {
            top: -1.2em;
        }
    }
    
    @media screen and (max-width: 399px) {
        svg {
            width: 100%;
        }

        .st6 {
            top: -1.2em;
        }
    }
    
    @-moz-document url-prefix() {
        svg {
            width: 50%;
        }
    }
    
</style>

<template>
    <!-- <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" -->
  <svg
	version="1.1" 
	id="Laag_1" 
	xmlns="http://www.w3.org/2000/svg" 
	xmlns:xlink="http://www.w3.org/1999/xlink" 
	x="0px" 
	y="0px"
	viewBox="0 0 1190.55 841.89" 
	style="
        enable-background:new 0 0 1190.55 841.89;
        fill-rule: evenodd;
        clip-rule: evenodd;
        stroke-linejoin: round;
        stroke-miterlimit: 2;
    " 
	xml:space="preserve"
    xmlns:serif="http://www.serif.com/"
    >
    <g>
        <path class="st0" d="M368.1,425.35l160.26,111.54l-198.72,16.67C329.64,553.55,315.54,494.58,368.1,425.35z"/>
        <path class="st1" d="M479.03,356.12l60.26,167.18l53.85-167.18C593.13,356.12,553.39,334.32,479.03,356.12z"/>
        <path class="st2" d="M743.77,549.09l-194.76-13.86l162.22-115.98C711.23,419.26,753.52,462.72,743.77,549.09z"/>
        <path class="st3" d="M472.6,357.91l61.61,173.32L372.4,419.52C372.4,419.52,413.59,372.01,472.6,357.91z"/>
        <path class="st4" d="M600.88,357.27l-51.87,165.38l152.33-109.11C701.34,413.54,661.59,368.74,600.88,357.27z"/>
        <polygon 
            class="st5" 
            points="619.84,343.06 536.2,530.05 552.58,536.85"
            v-bind:style="{
                transform: `rotate(${meter.pointerDeg}deg)`
            } "

        />
        <circle class="st6" cx="542.84" cy="537.78" r="14.48"/>
        <circle class="st7" cx="542.84" cy="537.78" r="8.65"/>
    </g>
  </svg>
</template>

<script>
// imports
import { AnalogMeter } from "../scripts/functions.js"

export default {
  props:[`value`,"settings"],
  data() {
    return {
      meter: "no value", 
      meterSettings: {
        valueMax:this.settings.maxValue,
        valueMin:this.settings.minValue,
        degMax:this.settings.maxDeg,
        degMin:this.settings.minDeg,
        reverseDirection:this.settings.reverseDirection,
      },
    //end return
    };
  // end data
  },
  mounted(){
      this.runMeter() 
  },
  watch: {
      value: function(){
          let oldValue;
          if(this.value != oldValue && this.settings.manMode === false || this.settings.manValue != oldValue && this.settings.manMode === true){
              if(this.settings.manMode === true){
                this.runMeter(); 
                oldValue = this.settings.manValue;
              }
              else{
                this.runMeter();    
                oldValue = this.value; 
              }
          }
      // end watch function
      }
  },
  methods: {
    runMeter(){
        if(this.settings.manMode === true){
            this.meter = AnalogMeter(this.settings.manValue,this.meterSettings);
        }
        else{
            this.meter = AnalogMeter(this.value,this.meterSettings);
        }
        if(this.settings.reverseDirection)this.meter.pointerDeg = (this.meter.pointerDeg - (this.settings.maxDeg / 2) * -1) + this.settings.adjustDeg;  
        else this.meter.pointerDeg = (this.meter.pointerDeg - (this.settings.maxDeg / 2)) + this.settings.adjustDeg;            
        this.$emit('meter', this.meter);   
      }
  },
// end export  
};
</script>
