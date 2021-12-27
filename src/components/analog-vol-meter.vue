<style scoped type="text/css">
    svg{
        height: 100%;
        width: 100%;
    }
	.st0{fill:#05A039;stroke:#020203;stroke-width:1.0203;stroke-miterlimit:10;}
	.st1{fill:#E52426;stroke:#020203;stroke-width:1.0653;stroke-miterlimit:10;}
	.st2{fill:#E94E1B;stroke:#020203;stroke-width:1.857;stroke-miterlimit:10;}
	.st3{fill:#010202;stroke:#020203;stroke-width:1.8039;stroke-miterlimit:10;}
	.st4{
		fill:#020203;
		stroke:#020203;
		stroke-width:1.5888;
		stroke-miterlimit:10;
		transition: 5s ease-out;
        transform-origin: 50% 76.5%;
        fill-rule: nonzero;
		}
	.st5{fill:#FFFFFF;}
   
   @media screen and (max-width: 700px) {
        svg {
            width: 100%;
        }
        .st5 {
            top: -1.2em;
        }
    }
    
    @media screen and (max-width: 575px) {
        svg {
            width: 100%;
        }
        .st5 {
            top: -1.2em;
        }
    }
    
    @media screen and (max-width: 445px) {
        svg {
            width: 100%;
        }
        .st5 {
            top: -1.2em;
        }
    }
    
    @media screen and (max-width: 399px) {
        svg {
            width: 100%;
        }

        .st5 {
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
            <path class="st0" d="M614.68,665.95l522.81,42.02c0,0,29.5-182.99-104.59-319.89L614.68,665.95z"/>
            <path class="st1" d="M575.88,669.57l-539.25,38.4c0,0-20.48-211.66,110.41-344.39L575.88,669.57z"/>
            <path class="st2" d="M160.57,355.15L592.4,650.31l437.58-280.45C1029.98,369.86,624.43-53.76,160.57,355.15z"/>
            <circle class="st3" cx="595.28" cy="643.71" r="35.48"/>
            <polygon class="st4" 
            points="807.43,150.9 575.02,626.42 620.53,643.71"
                v-bind:style="{
                transform: `rotate(${meter.pointerDeg}deg)`
            }"	
            />
            <circle class="st5" cx="595.28" cy="643.71" r="19.4"/>
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
