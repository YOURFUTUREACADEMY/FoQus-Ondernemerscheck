function validateInput(input, type='string', msg){

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

function date(setDate = null){

  const date = {full:null, day:null, month:null, year:null};

  let rawDate = null;

  if(setDate === null){
    rawDate = new Date()
  }
  else(
    rawDate = new Date(setDate)
  )

  date.day = rawDate.getDate();
  date.month = rawDate.getMonth() + 1;
  date.year = rawDate.getFullYear();
  date.full = `${date.day}-${date.month}-${date.year}`

  return date;
}

const functions = {
  date,
  validateInput
}

export default functions;