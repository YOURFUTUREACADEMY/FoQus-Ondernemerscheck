<template>
  <div>
    <header role="banner">
      <img
        class="foqusLogo"
        src="../assets/images/FoQus-Werkt.png"
        role="figure"
      />
    </header>
    <main>
      <section role="contentinfo">
        <vraag1 v-if="activeStep == 1"></vraag1>
        <vraag2 v-if="activeStep == 2"></vraag2>
        <vraag3 v-if="activeStep == 3"></vraag3>
        <vraag4 v-if="activeStep == 4"></vraag4>
        <vraag5 v-if="activeStep == 5"></vraag5>
        <vraag6 v-if="activeStep == 6"></vraag6>
        <vraag7 v-if="activeStep == 7"></vraag7>
        <div>   
          <progress id="progBarQ" :value="activeStep" max="7"></progress>
          <label for="progBarQ"> {{ activeStep }}/7 </label>
        </div> 
        <!-- TO DO terug knop verwijderen --> 
        <button class="terugBtn" @click="activeStep--" v-show="activeStep > 0">
          terug
        </button>
        <button class="volgendeBtn" @click="activeStep++, goToResult(activeStep)">
          {{switchLabelNxtBtn.label}}
        </button>
        <!-- TO DO storetest knop verwijderen -->
        <br>
        <br>
        <button class="volgendeBtn" @click="this.$router.push('/storetest');">
          REMOVE: go to store test
        </button>
      </section>
    </main>
  </div>
</template>

<script>
import vraag1 from "../components/vraag1-input";
import vraag2 from "../components/vraag2-input";
import vraag3 from "../components/vraag3-input";
import vraag4 from "../components/vraag4-input";
import vraag5 from "../components/vraag5-input";
import vraag6 from "../components/vraag6-input";
import vraag7 from "../components/vraag7-input";

export default {
  name: "vragen",
  data() {
    return { 
      activeStep: 1,
      vragen: 7,
     //end return
    };
  //end data  
  },
  components: {
    vraag1,
    vraag2,
    vraag3,
    vraag4,
    vraag5,
    vraag6,
    vraag7,
  },
  methods:{
    goToResult(value){
      if(value > this.vragen){
        this.$router.push('/scorescherm');
      }
    }
  },

  computed:{
    switchLabelNxtBtn(){       
      let label;
      if(this.activeStep < this.vragen){
        label = "volgende";        
      }
      else{ 
        label = "ga naar score";
      }
      return{label}
    } 
  }
//end export
};
</script>
