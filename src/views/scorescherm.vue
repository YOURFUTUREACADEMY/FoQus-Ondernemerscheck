<template>
  <main class="section-score">
    <hr class="hl py-2 mb-0" />
    <div class="d-flex flex-row">
      <div class="container-score w-75 mx-auto mb-0">
        <h3 class="header text-center-score">Jouw score is</h3>

        <div class="d-sm-flex flex-row mx-2 mx-sm-5 mt-2 justify-content-center">
          <div
            :class="
              scoreCondition.visual.class + ' score-bubble rounded-circle d-flex justify-content-center floatL'
            "
          >
            <img
              class="score-bubble-image mt-1"
              :src="require('../assets/images/' + scoreCondition.visual.image)"
              role="figure"
              width="75"
              height="75"
            />
          </div>

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
// import opmerkigen from "../scripts/tempOpmerkingen.js"
// import berekening from "../scripts/score.js"

export default {
  name: "scorescherm",
  data() {
    return {
      tempResultaat: "",
      testMode: false,
      score: 5,
      naam: "", //"TO DO"
      emailControle: "", //"TO DO"
      // status state -> conditie -> score, class, label, image
      statusState: {
        slecht: {
          score: 5,
          class: "score-slecht",
          label: "Stop",
          signaal: "TO DO BLOKQUOTE SIGNAAL WAARDE SLECHT",
          image: "Bubble-rood.png",
        },
        gemiddeld: {
          score: 10,
          class: "score-matig",
          label: "Let op",
          signaal: "Probeer te verbeteren!",
          image: "Bubble-oranje.png",
        },
        goed: {
          score: 15,
          class: "score-goed",
          label: "Ga zo door",
          signaal: "TO DO BLOKQUOTE SIGNAAL WAARDE GROEN",
          image: "Bubble-groen.png",
        },
      },
    }; //end return
  }, //end data
  // mounted(){
  //     this.tempResultaat = berekening(opmerkigen, this.$store.state.ANTWOORD);
  // },
  computed: {
    scoreCondition() {
      let visual = {
        image: "",
        class: "",
        signaal: "",
        label: "",
      };
      // zet conditie slecht
      if (this.score < this.statusState.slecht.score) {
        visual.image = this.statusState.slecht.image;
        visual.class = this.statusState.slecht.class;
        visual.label = this.statusState.slecht.label;
        visual.signaal = this.statusState.slecht.signaal;
      }
      // zet conditie gemiddeld
      else if (
        this.score >= this.statusState.slecht.score &&
        this.score < this.statusState.goed.score
      ) {
        visual.image = this.statusState.gemiddeld.image;
        visual.class = this.statusState.gemiddeld.class;
        visual.label = this.statusState.gemiddeld.label;
        visual.signaal = this.statusState.gemiddeld.signaal;
      }
      // zet conditie gemiddelde
      else if (this.score >= this.statusState.goed.score) {
        visual.image = this.statusState.goed.image;
        visual.class = this.statusState.goed.class;
        visual.label = this.statusState.goed.label;
        visual.signaal = this.statusState.goed.signaal;
      }
      return { visual };
    },
  },
}; // end export
</script>
