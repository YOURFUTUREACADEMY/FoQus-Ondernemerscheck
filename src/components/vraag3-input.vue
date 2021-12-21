<template>
  <h1 class="header text-center" role="heading">Welk percentage van de omzet draai jij bij je 3 belangrijkste klanten?</h1>
<div class="container-vragen d-flex justify-content-center align-items-center">
     
     <div class="range-slider mt-5">
      <input
        class="rs-line" 
        type="range"
        :min='rangeMin'
        :max='rangeMax'
        step=5
        v-model="value"
        id="rs-line"
        @change='opslag("",value)'
      />
      <p id="rs-label" class="rs-label" draggable="false" :style="labelPos">{{value}}%</p> 
            <!-- <input
        class="rs-bullet" 
        type="range"
        :min='rangeMin'
        :max='rangeMax'
        step=5
        v-model="value"
        id="rs-bullet"
        @change='opslag("",value)'
      /> -->
      <span id="rs-bullet" class="rs-bullet" :style="{left:sliderPos}" @mousedown='bulletPos()' ></span>         
    </div>

</div>

 
</template>

<script>


// @mouseup='test()'


export default {
  data() {
    return {
      vraag: "vraag3",
      rangeMin:0,
      rangeMax: 100,
      value: 50,
      rsLine: "",
      rsBullet:"",
      rsLabel:"",
      // Label color in Min position
      rsLabelColorMin:"#08344D",
      // Label color in Max position
      rsLabelColorMax:"#FFFFFF",
      // offsetPos: switch position between min and normal
      rsLabelOffsetPos : 5,
      // offsetLabelMin: offset label from the left on minimum
      rsOffsetLabelMin : 5,
      // offsetLabel: offset label form the left normaly
      rsOffsetLabel : 7,
      // offsetLabelMax: offset label from the left on maximum
      rsOffsetLabelMax : 20,
    };
  },
  mounted(){
      this.rsLine = document.getElementById("rs-line");
      this.rsBullet = document.getElementById("rs-bullet");
      this.rsLabel = document.getElementById("rs-label");
  },
  methods: {
    opslag(label, waarde) {
      this.$store.commit('setAntwoord',{
        vraag:this.vraag,
        label:label,
        waarde:waarde
      });
    },

    test(){

      const bullet = document.getElementById("rs-bullet");

      let mouseX = 0;
      let mouseY = 0;

      function trackmouse(event){     
        mouseX = event.offsetX;
        mouseY = event.offsetY;
        console.log("x:" + mouseX)
        console.log("y:" + mouseY)
        
      }

      function getMousePos(){
        bullet.addEventListener('mousemove', trackmouse) 
      }

      function stopMousePos(){
        bullet.removeEventListener('mousemove', trackmouse) 
      }


    bullet.addEventListener('mousedown', getMousePos);

    window.addEventListener('mouseup', stopMousePos);

    },

    bulletPos(value){

      // this.value = value;
      let temp = value;
      
      const bullet = document.getElementById("rs-bullet");
      const line = document.getElementById("rs-line");
      const bulletStyle = window.getComputedStyle(bullet)

      console.log(bullet.offsetLeft+" bullet-left");
      console.log(bulletStyle.getPropertyValue('margin-left').match(/.*\d+/g)+" bullet-margin-left");
      console.log(bullet.offsetWidth)+" bullet-width";
      console.log(Number(bullet.offsetLeft) + Number(bulletStyle.getPropertyValue('margin-left').match(/.*\d+/g))+ Number(bullet.offsetWidth)+ "sum");
      console.log(line.offsetLeft+" line-left");

      
      function moveBullet(mouse){
        
        const bullet = document.getElementById("rs-bullet");  
        const bulletStyle = window.getComputedStyle(bullet);
        let bulletLeftPos = Number(bullet.offsetLeft);
        let bulletMarginLeft = Number(bulletStyle.getPropertyValue('margin-left').match(/.*\d+/g));
        let bulletWidth = Number(bullet.offsetWidth);
        let bulletCurrenPos = bulletLeftPos + bulletMarginLeft + bulletWidth;
        let bulletNewPos = mouse.x + bulletCurrenPos

        console.log("x:" + mouse.x)
        console.log("y:" + mouse.y)
        console.log("new pos:" + bulletNewPos)
      
        // bullet.style.left = bulletNewPos + "px";
      
      
      }
      

      function trackmouse(event){     
        
        const mouse = {x:0,y:0};
        
        mouse.x = event.offsetX;
        mouse.y = event.offsetY;
        
        moveBullet(mouse);


        return mouse;
        
      }





      function getMousePos(){
        bullet.addEventListener('mousemove', trackmouse)
      }

      function stopMousePos(){
        bullet.removeEventListener('mousemove', trackmouse) 
      }


    bullet.addEventListener('mousedown',getMousePos);
    
    // bullet.addEventListener('mousedown',function(){
    //   bullet.addEventListener('mousemove',function(event){
        
    //     let mouse = {x:0,y:0}

    //     mouse = trackmouse(event)
    //     console.log("x:" + mouse.x)
    //     console.log("y:" + mouse.y)
        
    //     })


    // });

    window.addEventListener('mouseup', stopMousePos);



    

    return temp;
    }
  },




  computed:{
    // controle slider bullet postion
    sliderPos(){
      let rangeSliderWidth = this.rsLine.offsetWidth;
      let newPos = this.value / this.rangeMax;
      newPos = newPos * rangeSliderWidth;
      return newPos + "px";     
    },

    // controle label position and color
    labelPos(){

      // offsetPos: switch position between min and normal
      let offsetPos = this.rsLabelOffsetPos;
      // offsetLabelMin: offset label from the left on minimum
      let offsetLabelMin = this.rsOffsetLabelMin;
      // offsetLabel: offset label form the left normaly
      let offsetLabel = this.rsOffsetLabel;
      // offsetLabelMax: offset label from the left on maximum
      let offsetLabelMax = this.rsOffsetLabelMax;

      let rangeSliderWidth = this.rsLine.offsetWidth;
      let rsLabelWidth = this.rsLabel.offsetWidth;
      let newPos = this.value / this.rangeMax;
      const style = {left:newPos,color:this.rsLabelColorMax}
      let minRange = this.rangeMin + offsetPos;

      // if slider is on min positon add value to keep it in the slider
      if(this.value <= minRange){
        newPos = (newPos * rangeSliderWidth) + (rsLabelWidth + offsetLabelMin);
        style.color = this.rsLabelColorMin;
      }
      // if slider is on inbetween positon sub value to keep it in the slider
      else if(this.value > minRange && this.value < this.rangeMax){
        newPos = (newPos * rangeSliderWidth) - (rsLabelWidth + offsetLabel);
        style.color = this.rsLabelColorMax;
      }
      // if slider is on max positon sub value to keep it in the slider
      else if(this.value >= this.rangeMax){
        newPos = (newPos * rangeSliderWidth) - (rsLabelWidth + offsetLabelMax);
        style.color = this.rsLabelColorMax;
      }

      style.left = newPos + "px"
     
      return style;     
    },
  }
};
</script>
