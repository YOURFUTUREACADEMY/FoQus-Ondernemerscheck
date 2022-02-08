<template>
  <main class="section-score">
    <hr class="hl py-2 mb-0" />
    <div class="d-flex">
      <div class="container-score ">
        <h3 class="header text-center-score">Jouw score</h3>
        <div class="row mt-4 ">
          <div class="col-xxl-8 ">
            <section id="uitslag" class="row align-items-center ">
              <div class="col-md-6 scoreMeterContainer">
                <AnalogVolMeter
                  class="meter"
                  :value="score"
                  :settings="meterSettings"
                  v-on:meter="meterData"
                ></AnalogVolMeter>
              </div>
              <div class="col-md-6 d-flex row justify-content-center">
                <p class="text-score ">
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
                  <div class="d-flex flex-column">
                    <button 
                      type="button" 
                      class="btn btn-primary adviesBtn" 
                      :class="sendButton"
                      onSubmit="return false;" 
                      @mouseup="sendEmail()" 
                    >
                      Ik ontvang graag het volledige rapport per mail
                    </button>
                    <small class="text-danger"
                      >Natuurlijk wil je niet iedereen zomaar je naam en email adres geven. Dat snappen we. We zijn zelf ook ondernemers en wars<br>
                      van alle ongevraagde spam die we ontvangen. Wij gebruiken deze gegevens alleen om je jouw ondernemers-check <br>
                      rapportage toe te kunnen sturen en indien nodig te voorzien van extra toelichting naar aanleiding van je uitkomsten. <br>
                      Voor verder contact laten we het initiatief aan jou, zoals wij vinden dat dat hoort. Verder gebruiken we de geanonimiseerde <br>
                      gegevens van door jouw ingevulde ondernemers-check voor analyse en onderzoeksdoeleinden en om onze dienstverlening te verbeteren.</small
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
      <button class="backBtn" @mouseup="$router.push('/')">
        terug naar begin
      </button>
      <!-- TO DO storetest knop verwijderen -->
      <button class="volgendeBtn" @mouseup="this.$router.push('/testMenu')">
        REMOVE: go to test menu
      </button>
    </section>
  </main>
</template>

<script>
import AnalogVolMeter from "../components/analog-vol-meter";
import { composeRapport } from "../scripts/score.js";
import { sendToZap } from "../scripts/functions.js";
import { scoreWaardes } from "../scripts/score.js";
import { validateInput } from "../scripts/functions.js";

require('@/styles/score.css')

export default {
  name: "scorescherm",
  data() {
    return {
      testMode: false,
      kleurCode: this.$store.getters.getResultaat("kleur"),
      score: this.$store.getters.getResultaat("score"),
      meter: "",
      meterSettings: {
        manMode: false,
        manValue: 50,
        valueMax: 100,
        valueMin: 5,
        degMax: 180,
        degMin: 0,
        degAdjust: 1,
        reverseDirection: true,
      },
      naam: "", 
      naamMissingMSG: "vul a.u.b uw naam in",
      naamOke: "",
      emailControle: "", 
      emailMissingMSG: "vul a.u.b uw email adres in, voorbeeld@mijndomijn.nl",
      emailOke:"",
      // status state -> conditie -> kleurCode, class, label, image
      status: {
        slecht: {
          kleurCode: scoreWaardes.rood,
          class: "score-slecht",
          label: "Stop",
          signaal: `
          HET LIJKT HELAAS NIET ZO GOED TE GAAN \n \n
          Je hebt 7 vragen beantwoord die iets zeggen over hoe je ervoor staat als ondernemer. De antwoorden zijn niet goed of fout. In combinatie hebben ze wel een signaalfunctie. 
          Voor jou is dat signaal dat het noodzakelijk is om bij te sturen en gericht te verbeteren. En vooral heldere keuzes te maken om weer met plezier en succesvol te gaan ondernemen. 
          Op deze manier doorgaan lijkt riskant.`,
          image: "Bubble-rood.png",
        },
        gemiddeld: {
          kleurCode: scoreWaardes.oranje,
          class: "score-matig",
          label: "Let op",
          signaal: `
          ER IS AANDACHT NODIG \n \n
          Je hebt 7 vragen beantwoord die iets zeggen over hoe je ervoor staat als ondernemer. De antwoorden zijn niet goed of fout In combinatie hebben ze een signaalfunctie. 
          Voor jou is dat signaal dat er aandacht nodig is.`,
          image: "Bubble-oranje.png",
        },
        goed: {
          kleurCode: scoreWaardes.groen,
          class: "score-goed",
          label: "Ga zo door",
          signaal: `
          DAT ZIET ER GOED UIT \n \n
          Je hebt 7 vragen beantwoord die iets zeggen over hoe je ervoor staat als ondernemer. De antwoorden zijn niet goed of fout. In combinatie hebben ze wel een signaalfunctie. \n 
          Bij jou ziet het er ogenschijnlijk goed uit. Door te blijven focussen op de zaken die je succes en plezier brengen blijft het ondernemen leuk. Voorkom dat je verblind raakt door succes en blijf regelmatig kritisch kijken naar jezelf en je onderneming. Laat bijv. anderen eens meekijken om je te inspireren, zij zien vaak andere aspecten van je bedrijf.`,
          image: "Bubble-groen.png",
        },
      },
    }; //end return
  }, //end data
  components: {
    AnalogVolMeter,
  },
  created() {
    if (this.score == undefined) {
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
      let className = 'btnFormFault';
      // check if form is oke
      if(this.naamOke && this.emailOke){
        className = '';
      }
      return className;
      // end send color button
    }
    // end computed
  },
  methods: {
    meterData(meter) {
      this.meter = meter;
    },
    async sendEmail(){
      // check invoer naam

      const borderColorFault = "#9e0000";
      const borderWidthFault = "3px";
      const borderColorGood = "#e7e6e6";
      const borderWidthGood = "1px";

      if(this.naamOke == false){
        this.naam = this.naamMissingMSG;
        document.getElementById('naam').style.borderColor = borderColorFault;
        document.getElementById('naam').style.borderWidth = borderWidthFault;
      }
      else{
        document.getElementById('naam').style.borderColor = borderColorGood;
        document.getElementById('naam').style.borderWidth = borderWidthGood;
      }
      // check invoer email
      if(this.emailOke == false){
        this.emailControle = this.emailMissingMSG;
        document.getElementById('emailControle').style.borderColor = borderColorFault;
        document.getElementById('emailControle').style.borderWidth = borderWidthFault;
      }
      else{
        document.getElementById('emailControle').style.borderColor = borderColorGood;
        document.getElementById('emailControle').style.borderWidth = borderWidthGood;
      }
      // validatie oke begin met data opbouw voor versturen
      if(this.naamOke && this.emailOke){
        let data = composeRapport(this.$store.getters.getFullResultaat);
        
        // waarde voor objecten in pdf
        data.score.visual = this.meter.pointerDeg.toFixed(2);

        // maak JSON van data
        data = JSON.stringify(data);
        const url = "https://hooks.zapier.com/hooks/catch/5974604/b1bqszh"
        // maak diversen Querie strings met NAW gegevens
        data = "?rapport=" + data + "&recipient="+this.naam+"&email="+this.emailControle;
        
        // verstuur data
        const response = await sendToZap(url, data);

        // controleer respone op succes
        if(response.status === 'success'){
            this.naam = "";
            this.emailControle = "";
            // TO DO add outro view
            this.$router.push("/outro");
        }
      }
    // end sendEmail function
    }
  // end methods
  },
  watch:{
    naam: function(){
      const input = validateInput(this.naam,"string", this.naamMissingMSG)
      this.naamOke = input.valid;
    },
    emailControle: function(){
      const input =  validateInput(this.emailControle,"email", this.emailMissingMSG);
      this.emailOke = input.valid;
    },
  }
}; // end export
</script>
