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
        <hr class="hr">
        <div class="container-score ">
          <h3 class="header-score">Jouw score is:{{score}}</h3>
          
          <div class="Score-bubble" :style="{ color:scoreCondition.visual.color }">
            <img class="Score-bubble-image" :src="scoreCondition.visual.image" role="figure" >
            <p>{{scoreCondition.visual.image}}</p>
          </div> 
          
          <div class="vl"></div>

          <blockquote class="text-score">
            Je hebt 7 vragen beantwoord die iets zeggen over hoe je 
            ervoor staat als ondernemer. De antwoorden zijn niet goed 
            of fout In combinatie hebben ze een signaalfunctie. Voor 
            jou is dat signaal {{signalWaarde}} 
          </blockquote> 
          
          <div class="Legenda">
              <div class="Legenda-bubble" :style="{ color:scoreCondition.visual.color }"></div>      
              <p class="text-score" >{{scoreCondition.visual.label}}</p>
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
      // status state -> conditie -> score, kleur , label , font awesome class 
      statusState:{
        slecht:{score:5, kleur:"rood",label:"Stop",image:"../assets/images/Bubble-rood.png"},
        gemiddeld:{score:10, kleur:"oranje",label:"Let op",image:"../assets/images/Bubble-oranje.png"},
        goed:{score:15, kleur:"groen",label:"Ga zo door",image:"../assets/images/Bubble-groen.png"}},
    }; //end return
  }, //end data
  computed:{
    scoreCondition(){
      let visual = {image:"",color:"",label:""}
      // zet conditie slecht
      if(this.score < this.statusState.slecht.score){
          visual.image = this.statusState.slecht.image
          visual.color = this.statusState.slecht.kleur
          visual.label = this.statusState.slecht.label
      }
      // zet conditie gemiddeld
      else if(this.score >= this.statusState.slecht.score && this.score < this.statusState.goed.score){
          visual.image = this.statusState.gemiddeld.image
          visual.color = this.statusState.gemiddeld.kleur
          visual.label = this.statusState.gemiddeld.label
      }
            // zet conditie gemiddelde
      else if(this.score >= this.statusState.goed.score){
          visual.image = this.statusState.goed.image
          visual.color = this.statusState.goed.kleur
          visual.label = this.statusState.goed.label
      }
      return{visual}
    }
  }
}; // end export
</script>
