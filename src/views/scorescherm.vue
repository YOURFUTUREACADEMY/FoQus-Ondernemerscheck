<template>
  <main class="section-score">
    <hr class="hl py-2 mb-0" />
    <div class="d-flex">
      <div class="container-score ">
        <h3 class="header text-center-score">Jouw score</h3>
        <div class="row mt-4 ">
          <div class="col-xl-8 ">
            <section id="uitslag" class="row align-items-center ">
              <div class="col-sm-6">
                <AnalogVolMeter
                  class="meter"
                  :value="score"
                  :settings="meterSettings"
                  v-on:meter="meterData"
                ></AnalogVolMeter>
              </div>
              <div class="col-sm-6 d-flex justify-content-center">
                <p class="text-score ">
                  Je hebt 7 vragen beantwoord die iets zeggen over hoe je ervoor
                  staat als ondernemer. De antwoorden zijn niet goed of fout In
                  combinatie hebben ze een signaalfunctie. Voor jou is dat
                  signaal
                  {{ scoreCondition.visual.signaal }}.
                </p>
              </div>
            </section>

            <section id="emailForm" class="d-flex flex-column">
              <div class="scoreFlex">
                <form class="">
                  <div class="row mb-3">
                    <label class="col-sm-3 col-form-label text-score" for="naam"
                      >Naam:</label
                    >
                    <div class="col-xl-9">
                      <input
                        class="form-control"
                        type="text"
                        id="naam"
                        v-model="naam"
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label
                      class="col-sm-3 col-form-label text-score"
                      for="emailControle"
                      >Emailadres:</label
                    >
                    <div class="col-xl-9">
                      <input
                        class="form-control"
                        type="email"
                        name="emailControle"
                        id="emailControle"
                        v-model="emailControle"
                      />
                    </div>
                  </div>
                  <div class="d-flex flex-column align-items-xl-end">
                    <button 
                      type="submit" 
                      class="btn btn-primary adviesBtn" 
                      onSubmit="return false;" 
                      @click="sendEmail()" 
                      v-if="rapportVerzonden == false"
                      :style="{background:sendButton}"
                    >
                      Ik ontvang graag een persoonlijk advies
                    </button>
                    <p class="text-score" v-if="rapportVerzonden == true">Uw persoonlijk advies is verzonden</p>
                    <small class="text-danger"
                      >Ik ga akkoord met de ... voorwaarden</small
                    >
                  </div>
                </form>
              </div>
            </section>
          </div>
          <div class="col-sm-4 align-self-center">
            <img src="../assets/images/FoQus-Raport.png" class="img-fluid foqusRaport">
          </div>
        </div>
      </div>
    </div>
    <!-- TO DO Sectie hier onder verwijderen !! -->
    <section v-if="testMode" class="TO DO verwijderen mt-5">
      <br />
      <!-- TO DO storetest knop verwijderen -->
      <button class="backBtn" @click="$router.push('/')">
        terug naar begin
      </button>
      <!-- TO DO storetest knop verwijderen -->
      <button class="volgendeBtn" @click="this.$router.push('/testMenu')">
        REMOVE: go to test menu
      </button>
    </section>
  </main>
</template>

<script>
import AnalogVolMeter from "../components/analog-vol-meter";
import { composeRapport } from "../scripts/score.js";
import { sendToZap } from "../scripts/functions.js";

export default {
  name: "scorescherm",
  data() {
    return {
      testMode: false,
      rapportVerzonden: false,
      kleurCode: this.$store.getters.getResultaat("kleur"),
      score: this.$store.getters.getResultaat("score"),
      meter: "",
      meterSettings: {
        degAdjust: 0,
        manMode: false,
        manValue: 21,
        valueMax: 100,
        valueMin: 5,
        degMax: 186,
        degMin: 0,
        reverseDirection: true,
      },
      naam: "", 
      emailControle: "", 
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
  // update(){
  //   this.score=this.$store.getters.getResultaat('score');
  // },
  // mounted(){
  //     this.vr = document.getElementById("vr");
  // },
  created() {
    if (this.score === undefined) {
      this.$router.push("/");
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
      if (this.kleurCode === this.status.slecht.kleurCode) {
        visual.image = this.status.slecht.image;
        visual.class = this.status.slecht.class;
        visual.label = this.status.slecht.label;
        visual.signaal = this.status.slecht.signaal;
      }
      // zet conditie gemiddeld
      else if (this.kleurCode === this.status.gemiddeld.kleurCode) {
        visual.image = this.status.gemiddeld.image;
        visual.class = this.status.gemiddeld.class;
        visual.label = this.status.gemiddeld.label;
        visual.signaal = this.status.gemiddeld.signaal;
      }
      // zet conditie gemiddelde
      else if (this.kleurCode === this.status.goed.kleurCode) {
        visual.image = this.status.goed.image;
        visual.class = this.status.goed.class;
        visual.label = this.status.goed.label;
        visual.signaal = this.status.goed.signaal;
      } else {
        visual.image = this.status.slecht.image;
      }
      return { visual };
    },
    // controle send button
    sendButton(){
      let buttonColor = '#A6A6A6';
      // check invoer naam
      let naamOke = false;
      if(this.naam !== "" && this.naam !== undefined){
        naamOke = true;
      }
      // check invoer email
      let emailOke = false;
      if(this.emailControle !== "" && this.emailControle !== undefined){
        emailOke = true;
      }
      if(naamOke && emailOke){
        buttonColor = '#f6af23';
      }
      return buttonColor;
      // end send color button
    }
    // end computed
  },
  methods: {
    meterData(meter) {
      this.meter = meter;
    },
    sendEmail(){
      // check invoer naam
      let fetchStatus = "";
      let naamOke = false;
      if(this.naam !== "" && this.naam !== undefined){
        naamOke = true;
      }
      else{
        this.naam = "vul a.u.b uw naam in";
      }
      // check invoer email
      let emailOke = false;
      if(this.emailControle !== "" && this.emailControle !== undefined){
        emailOke = true;
      }
      else{
        this.emailControle = "vul a.u.b uw email adres in";
      }
      if(naamOke && emailOke){
        let data = composeRapport(this.$store.getters.getFullResultaat/*,"rapport"*/);
        
        // waarde voor objecten in pdf
        data.score.visual = this.meter.pointerDeg.toFixed(2);

        // maak JSON van data
        data = JSON.stringify(data);
        const url = "https://hooks.zapier.com/hooks/catch/5974604/b1bqszh"
        // maak diversen Querie strings met NAW gegevens
        data = "?rapport=" + data + "&recipient="+this.naam+"&email="+this.emailControle;
        // verstuur data
        fetchStatus = sendToZap(url, data);
        // TO DO CATCH PROMISE AND CHECK FOR SUCCES
          this.rapportVerzonden = true;
          this.naam = "";
          this.emailControle = "";
      }
    }

  // end methods
  },

}; // end export
</script>
