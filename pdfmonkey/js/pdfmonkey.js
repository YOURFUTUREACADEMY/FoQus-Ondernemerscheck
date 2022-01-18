// === !! DONT copy import to PDFmonkey.io template !! ===
import opmerkingen from "../js/opmerking.js"

/* example queryString: {
    "kleurWaarde":{"groen":1,"oranje":5,"rood":20},
    "kleurCode":5,
    "score":21,
    "vragen":{
        "vr1Opm":1,
        "vr1Sco":1,
        "vr1Ber":"67.55",
        "vr2Opm":1,
        "vr2Sco":1,
        "vr3Opm":2,
        "vr3Sco":5,
        "vr3Ber":"50.00",
        "vr4Opm":2,
        "vr4Sco":5,
        "vr5Opm":0,
        "vr5Sco":5,
        "vr6Opm":5,
        "vr6Sco":5,
        "vr7Opm":2,
        "vr7Sco":5
        },
    "conclusie":{
        "Con1":0,
        "Con2":2,
        "Con3":0,
        "Con4":0
        }
    }
*/

const queryString= {
  "kleurWaarde":{"groen":1,"oranje":5,"rood":20},
  "kleurCode":5,
  "score":21,
  "vragen":{
      "vr1Opm":1,
      "vr1Sco":1,
      "vr1Ber":"67.55",
      "vr2Opm":1,
      "vr2Sco":1,
      "vr3Opm":2,
      "vr3Sco":5,
      "vr3Ber":"50.00",
      "vr4Opm":2,
      "vr4Sco":5,
      "vr5Opm":0,
      "vr5Sco":5,
      "vr6Opm":5,
      "vr6Sco":5,
      "vr7Opm":2,
      "vr7Sco":5
      },
  "conclusie":{
      "Con1":1,
      "Con2":2,
      "Con3":1,
      "Con4":1
      }
  }

//======================== This data can be found in <script> below the HTML in PDFmonkey.io Template XXXXX ========================================
function displaySubject(targetElementID, insertedText){
    document.getElementById(targetElementID).innerText = insertedText;
    if(document.querySelector("#sec-"+targetElementID) !== null){
      document.getElementById("sec-"+targetElementID).style.display = "block";
      document.getElementById(targetElementID).style.display = "block";
    }
}

function addClass(targetElementID, insertedClass){
  document.getElementById(targetElementID).className += insertedClass;
}

// === !! Switch queryString to $docPayload in PDFmonkey.io !! ===
// const queryString = $docPayload;

// calculate score limits
const upperLimitGroen = (queryString.kleurWaarde.groen * 2) + (queryString.kleurWaarde.oranje * 2);
const upperLimitOranje = (queryString.kleurWaarde.oranje * 2) + (queryString.kleurWaarde.rood * 3);



document.getElementById('status').appendChild(document.createElement(`p`)).innerText = `Status:Score ULG:${upperLimitGroen}, ULO:${upperLimitOranje}.`;

// loop that gets the data from the query string and inserts the text from opmerking into vraag-n elements
let number = 1;
for(let property in queryString.vragen){ 
  if(property === "vr"+number+"Opm"){
      // check if query string vraag refers to a opmerking
      if(queryString.vragen[property] > 0){   
        // check if the section element exist if not skip insert
        if(document.querySelector("#sec-vraag-"+number) === null ){
          document.getElementById('status').appendChild(document.createElement(`p`)).innerText = `Error: Have query for subject:vraag${number}, only Element ID sec-vraag-${number} not found in HTML.`;
        }
        // check if the p element exist if not skip insert
        else if(document.querySelector("#vraag-"+number) === null){
          document.getElementById('status').appendChild(document.createElement(`p`)).innerText = `Error: Have query for subject:vraag${number}, only Element ID vraag-${number} not found in HTML.`;
        }
        // if all exist insert text and display = block
        else{
          displaySubject('vraag-'+number, opmerkingen.vragen['vraag'+number].opmerkingen[queryString.vragen[property]]);
          // section colors
          if(queryString.vragen["vr"+number+"Sco"] === queryString.kleurWaarde.rood )addClass('sec-vraag-'+number, " vraag-rood");
          else if(queryString.vragen["vr"+number+"Sco"] === queryString.kleurWaarde.oranje )addClass('sec-vraag-'+number, " vraag-oranje");
          else addClass('sec-vraag-'+number, " vraag-groen");
        }  
      }     
    number++;     
  } 
// end for loop vragen    
}

// loop that gets the data from the query string and inserts the text from opmerking into the conclusie element
let conclusie = "";
number = 1;
for(let property in queryString.conclusie){
  if(property === "Con"+number){
      if(queryString.conclusie[property] > 0){
          conclusie += " "+ opmerkingen.conclusies['conclusie'+number][queryString.conclusie[property]];
      }
  number++;    
  }  
// end for loop conclusie   
}

// conclusie closure
if(queryString.score > upperLimitGroen){
  displaySubject('contact', "Neem contact op voor een Afspraak.");
  // conclusie += "\n Neem contact op voor een Afspraak.";
}

// check if the section element exist if not skip insert
if(document.querySelector("#sec-conclusie") === null ){
  document.getElementById('status').appendChild(document.createElement(`p`)).innerText = `Error: Have query for subject:conclusie, only Element ID sec-conclusie not found in HTML.`;
}
// check if the p element exist if not skip insert
else if(document.querySelector("#conclusie") === null){
  document.getElementById('status').appendChild(document.createElement(`p`)).innerText = `Error: Have query for subject:conclusie, only Element ID conclusie not found in HTML.`;
}
else{
  // if all exist insert and there is text to insert, insert text and display = block
  if(conclusie !== ""){
    displaySubject('conclusie', conclusie);
  }
}

