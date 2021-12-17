<style type="text/css">
    svg{
        height: 50%;
        width: 50%;
    }
	.st0{fill:#05A039;stroke:#020203;stroke-width:1.0418;stroke-miterlimit:10;}
	.st1{fill:#E94E1B;stroke:#020203;stroke-width:1.877;stroke-miterlimit:10;}
	.st2{
        fill:#020203;
        stroke:#020203;
        stroke-width:1.5888;
        stroke-miterlimit:10;
        transition: 5s ease-out;
        transform-origin: 50.75% 76.1%;
        fill-rule: nonzero;
        }
	.st3{fill:#E52426;stroke:#020203;stroke-width:1.0326;stroke-miterlimit:10;}
	.st4{fill:#010202;stroke:#020203;stroke-width:1.8039;stroke-miterlimit:10;}
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
<svg 
    version="1.1" id="Laag_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 1190.55 841.89" style="enable-background:new 0 0 1190.55 841.89;" xml:space="preserve">
<path class="st0" d="M603.19,659.44l545.02,42.02c0,0,30.75-182.99-109.03-319.89L603.19,659.44z"/>
<path class="st1" d="M160.57,355.98L592.4,657.52L1029.98,371C1029.98,371,624.43-61.79,160.57,355.98z"/>
<polygon 
	class="st2" 
	points="807.43,150.9 575.02,626.42 620.53,643.71"
	v-bind:style="{
        transform: `rotate(${meter.pointerDeg}deg)`  
    }"
/>
<path class="st3" d="M150.52,362.86l434.84,297.52L48.07,679.19C48.07,679.19,50.94,506.48,150.52,362.86z"/>
<circle class="st4" cx="595.28" cy="637.06" r="35.48"/>
<circle class="st5" cx="595.28" cy="637.06" r="19.4"/>
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
