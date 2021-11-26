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
      <hr>
      <section class="contentinfo">
      
        <div class="container">
          <h3>Jouw score is:{{score}}</h3>
          
          <div class="Score-bubble">
            <i :class="scoreCondition.visual.fa" :style="{ color:'scoreCondition.visual.color' }" aria-hidden="true"></i>
          </div> 
          
          <div class="vl"></div>

          <blockquote>
            Je hebt 7 vragen beantwoord die iets zeggen over hoe je 
            ervoor staat als ondernemer. De antwoorden zijn niet goed 
            of fout In combinatie hebben ze een signaalfunctie. Voor 
            jou is dat signaal {{signalWaarde}} 
          </blockquote> 
          
          <div class="Legenda">
              <div class="Legenda-bubble" :style="{ color:'scoreCondition.visual.color' }"></div>      
              <p>{{scoreCondition.visual.label}}</p>
          </div> 

          <p>Ontvang direct het gehele reultaat als rapport in je mailbox.</p>

          <div class="input-naam">
            <label for="naam" >Naam </label>
            <input 
              type="text"
              id="naam"
              v:model="naam"
            >
          </div>

          <div class="input-email">
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
      score: 1,
      signalWaarde:"TO DO",
      naam:"TO DO",
      emailControle:"TO DO",
      // status state -> conditie -> score, kleur , label , font awesome class 
      statusState:{
        slecht:{score:5, kleur:"rood",label:"Stop",fa:"far fa-hand-paper"},
        gemiddeld:{score:10, kleur:"oranje",label:"Let op",fa:"fa fa-exclamation-triangle"},
        goed:{score:15, kleur:"groen",label:"Ga zo door",fa:"far fa-thumbs-up"}},
    }; //end return
  }, //end data
  computed:{
    scoreCondition(){
      let visual = {fa:"",color:"",label:""}
      // zet conditie slecht
      if(this.score < this.statusState.slecht.score){
          visual.fa = this.statusState.slecht.fa
          visual.color = this.statusState.slecht.kleur
          visual.label = this.statusState.slecht.label
      }
      // zet conditie gemiddeld
      else if(this.score >= this.statusState.slecht.score && this.score < this.statusState.goed.score){
          visual.fa = this.statusState.gemiddeld.fa
          visual.color = this.statusState.gemiddeld.kleur
          visual.label = this.statusState.gemiddeld.label
      }
            // zet conditie gemiddelde
      else if(this.score >= this.statusState.goed.score){
          visual.fa = this.statusState.goed.fa
          visual.color = this.statusState.goed.kleur
          visual.label = this.statusState.goed.label
      }
      return{visual}
    }
  }
}; // end export
</script>
