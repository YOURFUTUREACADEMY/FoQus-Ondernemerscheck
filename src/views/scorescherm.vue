<template>
  <div>
    <header role="banner">
      <img
        class="foqusLogo"
        src="../assets/images/FoQus-Werkt.png"
        role="figure"
      >
    </header>

    <main>
      
      <section class="section-score" role="contentinfo">
        <hr class="hl py-2 mb-0">
        <div class="container-score w-75 mx-auto">
          <h3 class="header-score">Jouw score is:{{score}}</h3>
          
          <div class= "d-flex flex-row mx-5">
            <div class="score-bubble rounded-circle" :style="{ background:scoreCondition.visual.color, borderColor:scoreCondition.visual.borderColor }">     
              <img class="score-bubble-image" :src="require('../assets/images/'+scoreCondition.visual.image)" role="figure" width="75" height="75" >
            </div> 
            
            <div class="vl mx-3 mt-1"></div>

            <blockquote class="text-score text-start w-50 mt-2 mx-2">
              Je hebt 7 vragen beantwoord die iets zeggen over hoe je 
              ervoor staat als ondernemer. De antwoorden zijn niet goed 
              of fout In combinatie hebben ze een signaalfunctie. Voor 
              jou is dat signaal {{signalWaarde}} 
            </blockquote> 
          </div>
          
          <div class="legenda d-flex justify-content-center mt-3 mb-5">
              <div class="legenda-bubble rounded-circle" :style="{background:scoreCondition.visual.color, borderColor:scoreCondition.visual.borderColor }"></div>      
              <p class="text-score mt-2 ms-2" >{{scoreCondition.visual.label}}</p>
          </div> 

          <p class="text-score" >Ontvang direct het gehele reultaat als rapport in je mailbox.</p>

          <div class="input-naam text-score">
            <label for="naam" >Naam </label>
            <input 
              type="text"
              id="naam"
              v:model="naam"
            >
          </div>

          <div class="input-email text-score">
            <label for="emailControle" >Emailadres </label>
            <input 
              type="email"
              name="emailControle"
              id="emailControle"
              v-model="emailControle"
            >
          </div>

          <img
            class="foqusRaport"
            src="../assets/images/FoQus-Raport.png"
            role="figure"
            height="500"
            width="500"
          />
        </div>
      </section>

      <!-- TO DO Sectie hier onder verwijderen !! -->
      <section class="TO DO verwijderen">
        <!-- TO DO storetest knop verwijderen -->
        <button class="backBtn" @click="$router.push('/')">
          terug naar begin
        </button>
        <!-- TO DO storetest knop verwijderen -->
        <button class="volgendeBtn" @click="this.$router.push('/storetest');">
          REMOVE: go to store test
        </button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "scorescherm",
  data() {
    return {
      score: 120,
      signalWaarde:"TO DO",
      naam:"TO DO",
      emailControle:"TO DO",
      // status state -> conditie -> score, border kleur, kleur , label , font awesome class 
      statusState:{
        slecht:{score:5, borderKleur:"#9E0000", kleur:"#FF0000",label:"Stop",image:"Bubble-rood.png"},
        gemiddeld:{score:10, borderKleur:"#AF5C23", kleur:"#ED7D31",label:"Let op",image:"Bubble-oranje.png"},
        goed:{score:15, borderKleur:"#00843B", kleur:"#00B050",label:"Ga zo door",image:"Bubble-groen.png"}},
    }; //end return
  }, //end data
  computed:{
    scoreCondition(){
      let visual = {image:"",borderColor:"",color:"",label:""}
      // zet conditie slecht
      if(this.score < this.statusState.slecht.score){
          visual.image = this.statusState.slecht.image
          visual.borderColor = this.statusState.slecht.borderKleur
          visual.color = this.statusState.slecht.kleur
          visual.label = this.statusState.slecht.label
      }
      // zet conditie gemiddeld
      else if(this.score >= this.statusState.slecht.score && this.score < this.statusState.goed.score){
          visual.image = this.statusState.gemiddeld.image
          visual.borderColor = this.statusState.gemiddeld.borderKleur
          visual.color = this.statusState.gemiddeld.kleur
          visual.label = this.statusState.gemiddeld.label
      }
            // zet conditie gemiddelde
      else if(this.score >= this.statusState.goed.score){
          visual.image = this.statusState.goed.image
          visual.borderColor = this.statusState.goed.borderKleur
          visual.color = this.statusState.goed.kleur
          visual.label = this.statusState.goed.label
      }
      return{visual}
    }
  }
}; // end export
</script>
