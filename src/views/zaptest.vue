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
        <button class="btn" @click="send2()">
          Send from Home
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
      // URL TEMP TO TEST https://hooks.zapier.com/hooks/catch/5974604/b9ie9xh
      url: "https://hooks.zapier.com/hooks/catch/5974604/b1bqszh",
      url2: "https://hooks.zapier.com/hooks/catch/5974604/b9ie9xh",
      inputText: "",
      data: "", 
      resultaat:this.$store.getters.getFullResultaat,
    }; //end return
  }, //end data
  computed:{
    dataToSend(){
        let data = composeRapport(this.resultaat, 'rapport');
      return data;
    },
    excel(){
      let data = composeExcel(this.resultaat, 'excel');
      return data;
    }
  },
  methods:{

    send(){

      this.data = composeRapport(this.resultaat, 'rapport');

      sendToZap(this.url, this.data);
      // sendToZap(this.url, this.data + this.inputText);
      // console.log(`send:${this.data + this.inputText} to ${this.url}`)
      console.log(`send:${this.data} to ${this.url}`)
    },
    send2(){

      this.data = composeRapport(this.resultaat, 'rapport');

      sendToZap(this.url2, this.data);
      // sendToZap(this.url, this.data + this.inputText);
      // console.log(`send:${this.data + this.inputText} to ${this.url}`)
      console.log(`send:${this.data} to ${this.url2}`)
    }

  }
}; // end export
</script>
