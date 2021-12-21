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

   
    </main>
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
        @click="activeStep++, goToResult(activeStep)"
      >
        {{ switchLabelNxtBtn.label }}
      </button>
    </div>
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
    goToResult(value) {
      if (value > this.vragen) {
        let uitslag = berekenUitslag(this.$store.state.ANTWOORD);
        this.$store.commit("setResultaat", uitslag);
        this.$router.push("/scorescherm");
      }
    },
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
