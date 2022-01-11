<template>
  <main class="section-score">
    <hr class="hl py-2 mb-0" />
    <div class="d-flex">
      <div class="container-score ">
        <h3 class="header text-center-score">Jouw score</h3>
        <div class="row mt-4 ">
          <div class="col-sm-8 ">
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
              <form class="">
                <div class="row mb-3">
                  <label class="col-sm-3 col-form-label text-score" for="naam"
                    >Naam:</label
                  >
                  <div class="col-sm-9">
                    <input
                      class="form-control"
                      type="text"
                      id="naam"
                      v:model="naam"
                    />
                  </div>
                </div>
                <div class="row mb-3">
                  <label
                    class="col-sm-3 col-form-label text-score"
                    for="emailControle"
                    >Emailadres:</label
                  >
                  <div class="col-sm-9">
                    <input
                      class="form-control"
                      type="email"
                      name="emailControle"
                      id="emailControle"
                      v-model="emailControle"
                    />
                  </div>
                </div>
                <div class="d-flex flex-column align-items-md-end">
                  <button type="submit" class="btn btn-primary w-75">
                    Ik ontvang graag een persoonlijk advies
                  </button>
                  <small class="text-danger"
                    >Ik ga akkoord met de ... voorwaarden</small
                  >
                </div>
              </form>
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
      <p class="text-score">{{ score }}</p>
      <p class="text-score">Status: {{ meter.status }}</p>

      <tabel class="text-score mt-3">
        <tr>
          <td>Vraag1:</td>
          <td>{{ this.$store.getters.getAntwoord(`vraag1`).waarde }}</td>
        </tr>
        <tr>
          <td>Vraag2:</td>
          <td>{{ this.$store.getters.getAntwoord(`vraag2`).waarde }}</td>
        </tr>
        <tr>
          <td>Vraag3:</td>
          <td>{{ this.$store.getters.getAntwoord(`vraag3`).waarde }}</td>
        </tr>
        <tr>
          <td>Vraag4:</td>
          <td>{{ this.$store.getters.getAntwoord(`vraag4`).label }}</td>
        </tr>
        <tr>
          <td>Vraag5:</td>
          <td>{{ this.$store.getters.getAntwoord(`vraag5`).label }}</td>
        </tr>
        <tr>
          <td>Vraag6:</td>
          <td>{{ this.$store.getters.getAntwoord(`vraag6`).label }}</td>
        </tr>
        <tr>
          <td>Vraag7:</td>
          <td>{{ this.$store.getters.getAntwoord(`vraag7`).waarde }}</td>
        </tr>
      </tabel>
    </section>
  </main>
</template>

<script>
import AnalogVolMeter from "../components/analog-vol-meter";
// import { getWindowSize} from "../scripts/functions.js";

// let windowSize;

// function onResize(){
//   windowSize = getWindowSize();
// }

// window.addEventListener("resize",onResize);

export default {
  name: "scorescherm",
  data() {
    return {
      testMode: false,
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
  // update(){
  //   this.score=this.$store.getters.getResultaat('score');
  // },
  // mounted(){
  //     this.vr = document.getElementById("vr");
  // },
  created() {
    if (this.kleurCode === undefined) {
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
    // end computed
  },
  methods: {
    meterData(meter) {
      this.meter = meter;
    },
  },
}; // end export
</script>
