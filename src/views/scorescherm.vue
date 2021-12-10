<template>
  <main class="section-score">
    <hr class="hl py-2 mb-0" />
    <div class="d-flex flex-row">
      <div class="container-score w-100 mx-auto mb-0">
        <h3 class="header text-center-score">Jouw score is</h3>

        <div class="d-sm-flex flex-row mx-2 mx-sm-5 mt-2 justify-content-center">

          <AnalogVolMeter class="" :value='score' :settings='meterSettings'></AnalogVolMeter>

          <div class="vl mx-3 mt-1 floatL"></div>
          <blockquote class="text-score text-start mx-2">
            Je hebt 7 vragen beantwoord die iets zeggen over hoe je ervoor staat
            als ondernemer. De antwoorden zijn niet goed of fout In combinatie
            hebben ze een signaalfunctie. Voor jou is dat signaal
            {{ scoreCondition.visual.signaal }}.
          </blockquote>
        </div>

        <div class="legenda d-flex justify-content-center mt-3 mb-5">
          <div
            :class="
              scoreCondition.visual.class + ' legenda-bubble rounded-circle'
            "
          ></div>
          <p class="text-score mt-2 ms-2">{{ scoreCondition.visual.label }}</p>
        </div>


        <div class="d-flex justify-content-end row mx-2">
          <div class="col-sm-9">
        <p class="text-score">
          Ontvang direct het gehele resultaat als rapport in je mailbox.
        </p>
          <div class="form-group row mb-2">
            <label class=" col-4 col-form-label text-score" for="naam"
              >Naam:</label
            >
            <div class="col-auto">
              <input
                class="form-control"
                type="text"
                id="naam"
                v:model="naam"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-4 col-form-label text-score" for="emailControle"
              >Emailadres:</label
            >
            <div class="col-auto">
              <input
                class="form-control"
                type="email"
                name="emailControle"
                id="emailControle"
                v-model="emailControle"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
      <img
        class="foqusRaport position-absolute top-75 end-0"
        src="../assets/images/FoQus-Raport.png"
        role="figure"
        height="500"
        width="500"
      />
    </div>
    <p>{{score}}</p>
    <!-- TO DO Sectie hier onder verwijderen !! -->
    <section v-if='testMode' class="TO DO verwijderen">
    <br>
    <!-- TO DO storetest knop verwijderen -->
    <button  class="backBtn" @click="$router.push('/')">
          terug naar begin
        </button>
    <!-- TO DO storetest knop verwijderen -->
    <button class="volgendeBtn" @click="this.$router.push('/testMenu');">
          REMOVE: go to test menu
        </button> -->
    </section>
  </main>
</template>

<script>
// TO DO veranderen naar analog-VOL-meter
import AnalogVolMeter from "../components/analog-balance-meter";

export default {
  name: "scorescherm",
  data() {
    return {
      testMode: false,
      kleurCode: this.$store.getters.getResultaat('kleur'),
      score:this.$store.getters.getResultaat('score'),
      meterSettings: {
        adjustDeg: 0,
        manMode: false,
        manValue: 50,
        maxValue: 125,
        minValue: 5,
        maxDeg: 180,
        minDeg: 0,
      },
      naam: "", //"TO DO"
      emailControle: "", //"TO DO"
      // status state -> conditie -> kleurCode, class, label, image
      status: {
        slecht: {
          kleurCode: 25,
          class: "score-slecht",
          label: "Stop",
          signaal: "TO DO BLOKQUOTE SIGNAAL WAARDE SLECHT",
          image: "Bubble-rood.png",
        },
        gemiddeld: {
          kleurCode: 5,
          class: "score-matig",
          label: "Let op",
          signaal: "Probeer te verbeteren!",
          image: "Bubble-oranje.png",
        },
        goed: {
          kleurCode: 1,
          class: "score-goed",
          label: "Ga zo door",
          signaal: "TO DO BLOKQUOTE SIGNAAL WAARDE GROEN",
          image: "Bubble-groen.png",
        },
      },
    }; //end return
  }, //end data
  components: {
    AnalogVolMeter,
  },
  created(){
    if(this.kleurCode === undefined){
      this.$router.push('/')
    }
  },
  computed: {
    scoreCondition() {
      let visual = {
        image: "",
        class: "",
        signaal: "",
        label: "",
      };
      // zet conditie slecht
      if( this.kleurCode === this.status.slecht.kleurCode ){
        visual.image = this.status.slecht.image;
        visual.class = this.status.slecht.class;
        visual.label = this.status.slecht.label;
        visual.signaal = this.status.slecht.signaal;
      }
      // zet conditie gemiddeld
      else if( this.kleurCode === this.status.gemiddeld.kleurCode ){
        visual.image = this.status.gemiddeld.image;
        visual.class = this.status.gemiddeld.class;
        visual.label = this.status.gemiddeld.label;
        visual.signaal = this.status.gemiddeld.signaal;
      }
      // zet conditie gemiddelde
      else if( this.kleurCode === this.status.goed.kleurCode ) {
        visual.image = this.status.goed.image;
        visual.class = this.status.goed.class;
        visual.label = this.status.goed.label;
        visual.signaal = this.status.goed.signaal;
      }
      else{
        visual.image = this.status.slecht.image;
      }
      return { visual };
    },
  },
}; // end export
</script>
