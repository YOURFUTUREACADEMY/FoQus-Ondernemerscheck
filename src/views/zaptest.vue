<!-- TO DO this page needs to be remove before final version -->
<template>
  <div>
    <main>
      <section class='text-score'>

        
        <label for="data">Data to send </label>
        <input type="text" id="data" v-model='inputText'>
        <p>{{inputText}}</p>
         <!-- zie ..store/index.js voor opbouw RESULTAAT -->
        <p>Rapportdata</p>
        <p>PDF JSON:{{PDF}}</p>
        <p>EXCEL string:{{excel}}</p>
        
        <button class="btn" @click="sendPDF()">
          Stuur PDF naar Zapier
        </button>
        <button class="btn" @click="sendExcel()">
          Stuur EXCEL naar Zapier
        </button>
        <button class="btn" @click="test()">
          Encode
        </button>
        <button class="btn" @click="$router.push('/testMenu')">
          Naar test menu 
        </button>
      </section>
    </main>
  </div>
</template>

<script>
import { sendToZap } from "../scripts/zapier.js";
import { compose } from "../scripts/score.js";
import functions from "../scripts/functions.js";
import config from "@/json/config.json";

export default {
  
  name: "scorescherm",
  data() {
    return {
      // URL TO PDF MONKEY https://hooks.zapier.com/hooks/catch/5974604/b1bqszh
      // URL OUTLOOK TO GMAIL https://hooks.zapier.com/hooks/catch/5974604/b1b8nyb
      name: "sean",
      email:"sean@yourfutureacademy.nl",
      zapCode: config.Zapier.Ont,
      inputText: "",
      resultaat:this.$store.getters.getFullResultaat,
      testRapport:{ 
          kleurWaarde: { groen: 1, oranje: 5, rood: 20 }, 
          kleurCode: 1, 
          score: { waarde: 5, visual: 53 }, 
          vragen: { 
            vr1Opm: 1, vr1Sco: 1, vr1Ber: 67, 
            vr2Opm: 1, vr2Sco: 1, vr2Ber: -41, 
            vr3Opm: 1, vr3Sco: 1, vr3Ber: 36.00, 
            vr4Opm: 1, vr4Sco: 1, 
            vr5Opm: 0, vr5Sco: 1, 
            vr6Opm: 1, vr6Sco: 1, 
            vr7Opm: 1, vr7Sco: 1 }, 
          conclusie: { Con1: 1, Con2: 1, Con3: 1, Con4: 1 } 
      },
      testExcel:{ 
        kleurWaarde: { 
          groen: 1, 
          oranje: 5, 
          rood: 20 }, 
      kleurCode: 5, 
      score: 43, 
      vragen: {
        vr1Sco: "", 
        vr1Val: 1, 
        vr2Sco: 1, 
        vr2Val: 40, 
        vr3Sco: 1, 
        vr3Val: 0, 
        vr4Sco: 20, 
        vr4Val: 3, 
        vr5Sco: 5, 
        vr5Val: 2, 
        vr6Sco: 1, 
        vr6Val: 1, 
        vr7Sco: 20, 
        vr7Val: 5 }, 
      conclusie: { 
        Con1: 1, 
        Con2: 1, 
        Con3: 1, 
        Con4: 1 }
      },
      options:{
        method:"POST",
        headers:{'Content-Type': 'text/plain'}
      },
      insertTestData: true
    }; //end return
  }, //end data
  computed:{
    PDF(){
        let data = compose.rapport(this.$store.getters.getFullResultaat);
        if(this.insertTestData){
          data = this.testRapport;
        }
      return data;
    },
    excel(){
        let data = compose.excel(this.$store.getters.getFullResultaat);
        if(this.insertTestData){
          data = this.testExcel;
        }
      return data;
    },
  },
  methods:{
    async sendPDF(){

        // create rapport data
        let data = {eb:this.$OTAP,tb:4,date:"",project:compose.rapport(this.$store.getters.getFullResultaat),naw:{}};
 
        // ONLY FOR TEST PURPOSES
        if(this.insertTestData){
          data.project = this.testRapport;
        }

        // insert date
        const date = functions.date();
        data.date = date.full;

        // insert odd values
        data.project.score.visual = 75;
                
        // insert NAW data
        data.naw = {r:this.name,e:this.email};
     
        // maak JSON van data
        data = JSON.stringify(data);

        // verstuur data
        const response = await sendToZap(data, this.options, this.zapCode);
        // const response = await sendToZap("bi3eowz", data);

        // controleer respone op succes
        if(response.status === 'success'){
          //do stuff if success
          console.log(`Send:${data}. To zapier:${config.OTAP.Value}. Response:${response}.`);
        }
        else{
          console.warn(`Failed to send:${data}. To zapier:${config.OTAP.Value}. Response:${response}.`);
        }
      },
    sendExcel(){

      // compose rapport data
      let data = {eb:this.$OTAP,tb:1,date:"",project:compose.excel(this.$store.getters.getFullResultaat),naw:{}};

      // ONLY FOR TEST PURPOSES
      if(this.insertTestData){
        data.project = this.testExcel;
      }

      // insert date
      const date = functions.date();
      data.date = date.full;    

      // maak JSON van data
      data = JSON.stringify(data);
      
      sendToZap(data, this.options, this.zapCode);
      console.log(`send:${data}`)
    }
  // end methods
  },
}; // end export
</script>
