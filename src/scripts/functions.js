

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

export function validateInput(input, type='string', msg){

  const output = {valid:false,reason:''}

  // check input
  // return message
  if(msg === undefined || msg === ""){
    msg = "please enter value";
  }

  // type
  if(type === undefined || type === ""){
    if(type !== 'string' && type !== 'number' && type !== 'boolean' && type !== 'email'){
      type = 'string';
      output.reason = "type fault: parameter 2 is invalid, should be of type boolean, email, number or string.";
    }
  }

  // check input for value
  if(input !== undefined && input !== "" && input !==  msg){
    // if input is not of type email.
    if(type !== 'email'){
      if(type === typeof(input)){
        output.valid = true;
        output.reason = `input true, of type:${type}`;
      }
      else{
        output.reason = `input false, not of type:${type}, is ${typeof(input)}`;
      }
    }
    // if input is email
    else{
      // check if it a string
      if(typeof(input) === "string"){
        // check if the string contains a @
        const emailAddress = input.split("@");
        if(emailAddress.length == 2){
          const emailTag = emailAddress[0]
          // check size of emailTag ( everything before the @ )
          if(emailTag.length > 64){
            output.reason = `input false, local part of email is longer than 64 octets.`;
          } 
          // check the domain
          const domain = emailAddress[1].split(".");
          if(domain.length == 2){
            const hostName = domain[0]
            const hostExtension = domain[1]
            if(hostName.length >= 1 && hostExtension.length >= 2 ){
              output.valid = true;
              output.reason = `input true, of type:email`;
            }
            else if(hostExtension.length < 2){
              output.reason = `input false, domain extenion of email is to short should atleast be 2 didgits.`;
            }
          }
          else{
            output.reason = `input false, domain part of email is incomplete.`;
          }  
        }
        else{
          output.reason = `input false, did not find @ in input string.`;
        }   
      //end if its a string
      }
      // if the input for email is not a string
      else{
        output.reason = `input false, not of type:email, input is not of type string`;
      }
    }
  // end check input value
  }
  return output;
// end validate input 
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

