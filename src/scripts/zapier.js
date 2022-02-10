
const $zapUrl = "https://hooks.zapier.com/hooks/catch/";


export function encode(object){
    return Object.keys(object)
        .map(
            key => 
                `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
        )
        .join('&');
}

// POST data to zap
export async function sendToZap(zapcode, data, options={method:"POST",headers:{'Content-Type': 'text/plain'}}){

    const response = await fetch(
        $zapUrl + zapcode + "/?", 
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