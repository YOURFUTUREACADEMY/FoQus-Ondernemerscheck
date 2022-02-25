
//voorbeeld zapier object 
// let data = {eb:this.$OTAP,tb:4,date:"",project:{},naw:{}}

import config from "@/json/config.json";

const zapUrl = "https://hooks.zapier.com/hooks/catch";


export function encode(object){
    return Object.keys(object)
        .map(
            key => 
                `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
        )
        .join('&');
}

// POST data to zap
export async function sendToZap(data, options={method:"POST",headers:{'Content-Type': 'text/plain'}},zapcode=undefined){

    let zap = zapcode;
    // get zap
    if(zapcode === undefined){
      if(config.OTAP.Value === 0){
        zap = config.Zapier.Pro;
      }
      else if(config.OTAP.Value === 1){
        zap = config.Zapier.Acc;
      }
      else if(config.OTAP.Value === 2){
        zap = config.Zapier.Tes;
      }
      else if(config.OTAP.Value === 3){
        zap = config.Zapier.Ont;
      }
    }

    const response = await fetch(
        `${zapUrl}/${config.ID}/${zap}/?`, 
        {
            method:options.method,
            headers:options.headers,
            body: data
        },
    )

    const responseJson = await response.json();
    if(responseJson.status === 'success'){
      return responseJson;
    }
    else{
      alert("Helaas is het niet gelukt om de aanvraag te verzenden probeer het nogmaals.");
    }
  }
  
// OLD POST data to zap thenable methode
export function OLDsendToZap(url, data, options={methode:"POST"}){

  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // https://developer.mozilla.org/en-US/docs/Web/API/fetch

  var promise = fetch(url + "/?" + data,{options})
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch((error) => {
      alert("Helaas is het niet gelukt om de aanvraag te verzenden probeer het nogmaals.");
      return error;
  });
  
    return promise;
}