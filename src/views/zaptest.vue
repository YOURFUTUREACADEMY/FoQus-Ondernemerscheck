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
        <p>JSON:{{dataToSend}}</p>
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
import { sendToZap } from "../scripts/functions.js"
import { composeRapport } from "../scripts/score.js";
import { composeExcel } from "../scripts/score.js";
export default {
  
  name: "scorescherm",
  data() {
    return {
      // URL TO PDF MONKEY https://hooks.zapier.com/hooks/catch/5974604/b1bqszh
      // URL OUTLOOK TO GMAIL https://hooks.zapier.com/hooks/catch/5974604/b1b8nyb
      url: "https://hooks.zapier.com/hooks/catch/5974604/b1bqszh",
      inputText: "",
      data: "rapport=", 
      resultaat:this.$store.getters.getFullResultaat,
    }; //end return
  }, //end data
  computed:{
    dataToSend(){
        let data = composeRapport(this.resultaat);
      return data;
    },
    excel(){
      let data = composeExcel(this.resultaat);
      return data;
    }
  },
  methods:{

    send(){

      const test = {waarde:"test1",waarde2:"test2"}

      sendToZap(this.url, this.data + test);
      // sendToZap(this.url, this.data + this.inputText);
      console.log(`send:${this.data + this.inputText} to ${this.url}`)
      console.log(`send:${this.data + test} to ${this.url}`)
    }

  }
}; // end export
</script>
