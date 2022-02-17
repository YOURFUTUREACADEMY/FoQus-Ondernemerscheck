<template>
  <div>
    <main>
      <vraag1 v-if="activeStep == 1"></vraag1>
      <vraag2 v-if="activeStep == 2"></vraag2>
      <vraag3 v-if="activeStep == 3"></vraag3>
      <vraag4 v-if="activeStep == 4"></vraag4>
      <vraag5 v-if="activeStep == 5"></vraag5>
      <vraag6 v-if="activeStep == 6"></vraag6>
      <vraag7 v-if="activeStep == 7"></vraag7>

      <div class="container-progBarQ progress rounded-0">
        <div
          class="progBarQ progress-bar"
          :style="{ width: progBarwidth.width + '%' }"
          :aria-valuenow="progBarwidth.width"
          aria-valuemin="1"
          :aria-valuemax="vragen"
        >
          <p class="mx-auto mt-3">{{ activeStep }}/{{ vragen }}</p>
        </div>
      </div>

    <!-- Use showBackBtn to add / remove the back button -->
      <div class="container-btn d-flex justify-content-between bd-highlight py-3">
        <div class="bd-highlight">
          <button
            class="btn  btn-lg"
            id="terugBtn"
            @click="activeStep--"
            v-show="activeStep > 1 && showBackBtn === true"
          >
            terug
          </button>
        </div>

        <button
          class="btn btn-lg  ms-auto bd-highlight"
          id="volgendeBtn"
          @mouseup="nextStep()"
        >
          {{ switchLabelNxtBtn.label }}
        </button>
      </div>
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
import berekenUitslag from "../scripts/score.js";
import { compose } from "../scripts/score.js";
import functions from "../scripts/functions.js";
import config from "@/json/config.json";
import { sendToZap } from "../scripts/zapier.js";

require('@/styles/vragen.css')

export default {
  name: "vragen",
  data() {
    return {
      activeStep: 1,
      showBackBtn: true,
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
  // ga naar score scherm
  methods: {
    async nextStep(){
      // controleer store op invoer waarde
      let inputOke = functions.validateInput(this.$store.getters.getAntwoord(`vraag`+this.activeStep).waarde,"number");
      // console.log(inputOke.reason)
      if(inputOke.valid){
        console.log(this.activeStep)
        if(this.activeStep < this.vragen){
          this.activeStep++
        }
        else{
          // bereken de uitslag en ga naar scorescherm
          this.$store.commit("setResultaat", berekenUitslag(this.$store.getters.getFullAntwoord));
          // this.$router.push("/scorescherm");
          this.sendExcel();
        }
      }
    // einde nextStep
    },
    async sendExcel(){
      
      // compose rapport data
      let data = {eb:this.$OTAP,tb:1,date:"",project:compose.excel(this.$store.getters.getFullResultaat),naw:{}};
   
      // insert date
      const date = functions.date();
      data.date = date.full;    

      // maak JSON van data
      data = JSON.stringify(data);
      
      const response = await sendToZap(config.Zapier, data);   

      // controleer respone op succes
      if(response.status === 'success'){
        this.$router.push("/scorescherm");
      }
      else{
        console.warn("Failed to generate Excel")
      }
    // end sendExcel
    }
  // einde methods  
  },
  // wissel label op als het aantal vragen is bereikt
  computed: {
    switchLabelNxtBtn() {
      let label;
      if (this.activeStep < this.vragen) {
        label = "volgende";
      } else {
        label = "ga naar score";
      }
      return { label };
    },
    progBarwidth() {
      let width = Math.round((this.activeStep / this.vragen) * 100);
      return { width };
    },
    //end computed
  },
  //end export
};
</script>
