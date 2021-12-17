<style type="text/css">
    svg{
        height: 10%;
        width: 10%;
    }
    .st0{fill:#009F00;stroke:#000000;stroke-width:1.0642;stroke-miterlimit:10;}
	.st1{fill:#0CC200;stroke:#000000;stroke-width:1.0642;stroke-miterlimit:10;}
	.st2{fill:#FFFF3F;stroke:#000000;stroke-width:1.0695;stroke-miterlimit:10;}
	.st3{fill:#FF6A00;stroke:#000000;stroke-width:1.0642;stroke-miterlimit:10;}
    .st4{fill:#FF0012;stroke:#000000;stroke-width:1.0642;stroke-miterlimit:10;}
	.st5{ 
        stroke:#000000;
        stroke-width:0.8263;
        stroke-miterlimit:10;
        transition: 5s ease-out;
        transform-origin: 50.75% 76.1%;
        fill-rule: nonzero;
        }
	.st6{
      stroke:#000000;
        stroke-width:1.8039;
        stroke-miterlimit:10;
        }
	.st7{
		fill:#FFFFFF;
		stroke:#000000;
		stroke-width:1.5888;
		stroke-miterlimit:10;
		}
   
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
    <svg version="1.1" 
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
            <path class="st0" d="M611.41,650.17l548.22,43.59c0,0,30.93-189.81-109.67-331.82L611.41,650.17z"/>
            <path class="st1" d="M746.26,184.78L611.41,637.52l434.22-283.95C1045.63,353.56,940.15,232,746.26,184.78z"/>
            <path class="st2" d="M424.53,189.45l171.49,458.78l144.27-468.12C740.29,180.11,574.37,138.43,424.53,189.45z"/>
            <path class="st3" d="M140.49,351.43l452.38,304.96l-174.99-465.4C417.89,190.99,269.72,225.52,140.49,351.43z"/>
            <path class="st4" d="M576.92,656.39L24.1,693.76c0,0-21-206.01,113.19-335.2L576.92,656.39z"/>
            
            <polygon class="st5" points="819.35,144.7 586.94,620.23 632.46,637.52"
                v-bind:style="{
                transform: `rotate(${meter.pointerDeg}deg)`
            }"
            />
            <circle class="st6" cx="606.34" cy="642.77" r="35.48"/>
            <circle class="st7" cx="606.34" cy="642.77" r="19.4"/>
        </g>
    </svg>
</template>

<script>
// imports
import { midPointerMeter } from "../scripts/meter.js"

export default {
  props:[`value`,"settings"],
  data() {
    return {
			meter: "no value", 
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
        this.meter = midPointerMeter(this.value,this.settings)       
        this.$emit('meter', this.meter);   
      }
  },
// end export  
};
</script>
