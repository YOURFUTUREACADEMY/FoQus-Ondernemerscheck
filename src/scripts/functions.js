

// export function opslag(label, waarde) {
//       this.$store.commit('setAntwoord',{
//         vraag:this.vraag,
//         label:label,
//         waarde:waarde
//       })
//   } 
    

  // function save(storeAdress, name, label, value){
  //   this.$store.commit(storeAdress, {
  //     name: name,
  //     label: label,
  //     value: value 
  //   })

  // }

  
// function to get browser window inner size
export function getWindowSize(){
  // variable
  const windowSize={height:0, width:0}
  // get size
  windowSize.height = window.innerHeight;
  windowSize.width = window.innerWidth;
  return windowSize;
}

// function to element size
export function getElementSize(elementID){
  // variable
  const element = document.getElementById(elementID);
  const elementSize ={height:0, width:0}  
  //get size
  elementSize.width = element.offsetWidth;
  elementSize.height = element.offsetHeight;
  return elementSize;
}

// function to set element position
export function setElementPosition(elementID, top, left, unit){
  const element = document.getElementById(elementID);
  if(unit === undefined || unit === ""){
    element.top = top + "px";
    element.left = left + "px";
  }
  else
  {
    element.top = top + unit;
    element.left = left + unit;  
  }
}

// function to set element size
export function setElementSize(elementID, height, width, unit){
  const element = document.getElementById(elementID);
  if(unit === undefined || unit === ""){
    element.height = height + "px";
    element.width = width + "px";
  }
  else
  {
    element.height = height + unit;
    element.width = width + unit;  
  }
}

// POST data to zap
export async function sendToZap(url, data, options={methode:"POST"}){

  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // https://developer.mozilla.org/en-US/docs/Web/API/fetch

  const response = await fetch(url + "/?" + data,{options})
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

export function validateInput(input, msg){

  let inputOke = false;

  if(msg === undefined || msg === ""){
    msg = "please enter value";
  }

  if(input !== undefined && input !== "" && input !==  msg){
    inputOke = true
  }

  return inputOke;
}


export function getObjectData(object, property){

  const objectPropertie = object[property];

  const key = [];
  const value = [];
  let number = 0;

  for(property in objectPropertie){
    key[number] = property;
    value[number] = objectPropertie[property].score;
    number++;
  }
  
  return{ key, value}
// end getObjectData
}

