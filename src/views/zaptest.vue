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
        <p>JSON:{{test}}</p>
        <p>string:{{excel}}</p>
        
        <button class="btn" @click="send()">
          Stuur naar Zapier
        </button>
        <button class="btn" @click="$router.push('/testMenu')">
          Naar test menu 
        </button>
      </section>
    </main>
  </div>
</template>

<script>
import { sendToZap } from "../scripts/functions.js";
import { composeRapport } from "../scripts/score.js";
import { composeExcel } from "../scripts/score.js";
export default {
  
  name: "scorescherm",
  data() {
    return {
      // URL TO PDF MONKEY https://hooks.zapier.com/hooks/catch/5974604/b1bqszh
      // URL OUTLOOK TO GMAIL https://hooks.zapier.com/hooks/catch/5974604/b1b8nyb
      testEmail:"sean@yourfutureacademy.nl",
      url: "https://hooks.zapier.com/hooks/catch/5974604/b1bqszh",
      inputText: "",
      data: "", 
      resultaat:this.$store.getters.getFullResultaat,
    }; //end return
  }, //end data
  computed:{
    dataToSend(){
        let data = composeRapport(this.resultaat);
      return data;
    },
    excel(){
      let data = composeExcel(this.resultaat, 'excel');
      return data;
    },
    test(){
      let object = composeRapport(this.resultaat, "rapport");
      // object = JSON.stringify(object);

      return object;
    }
  },
  methods:{
    send(){
      this.data = composeRapport(this.resultaat, "rapport");
      let recipient = "sean";
      let email = this.testEmail;
      this.data = '?'+this.data+"&recipient="+recipient+"&email="+email;
      sendToZap(this.url, this.data);
      console.log(`send:${this.data} to ${this.url}`)
    }
  }
}; // end export
</script>
