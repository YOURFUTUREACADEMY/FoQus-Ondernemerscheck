// === !! DONT copy import to PDFmonkey.io template !! ===
import opmerkingen from "../js/opmerking.js"

const queryString= {
  "kleurWaarde":{"groen":1,"oranje":5,"rood":20},
  "kleurCode":5,
  "score":{
    "waarde":25,
    "visual":-90
  },
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
      "Con2":1,
      "Con3":1,
      "Con4":1
      }
  }

//======================== This data can be found in <script> below the HTML in PDFmonkey.io Template XXXXX ========================================

// === !! Switch queryString to $docPayload in PDFmonkey.io !! ===
// const queryString = $docPayload;

function displaySubject(targetElementID, insertedText){
    // check for section and display section
    if(document.querySelector("#sec-"+targetElementID) !== null){
      document.getElementById("sec-"+targetElementID).style.display = "block";
    }
    // diplay element and add text
    document.getElementById(targetElementID).innerText = insertedText;
    document.getElementById(targetElementID).style.display = "block";
}

function addClass(targetElementID, insertedClass){
  document.getElementById(targetElementID).className += insertedClass;
}

// meter svg graden
document.getElementById("arrow").style.transform = `rotate(${queryString.score.visual}deg)`;


// calculate score limits
const upperLimitGroen = (queryString.kleurWaarde.groen * 2) + (queryString.kleurWaarde.oranje * 2);
const upperLimitOranje = (queryString.kleurWaarde.oranje * 2) + (queryString.kleurWaarde.rood * 3);



document.getElementById('status').appendChild(document.createElement(`p`)).innerText = `Status:Score:${queryString.score.waarde}, Score ULG:${upperLimitGroen}, ULO:${upperLimitOranje}.`;

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
          // score - section colors & images
          if(queryString.vragen["vr"+number+"Sco"] === queryString.kleurWaarde.rood ){
            addClass('sec-vraag-'+number, " vraag-rood");
            document.getElementById(`vraag-${number}-svg-rd`).style.display = "block";
          }
          else if(queryString.vragen["vr"+number+"Sco"] === queryString.kleurWaarde.oranje ){
            addClass('sec-vraag-'+number, " vraag-oranje");
            document.getElementById(`vraag-${number}-svg-or`).style.display = "block";
          }
          else {
            addClass('sec-vraag-'+number, " vraag-groen");
            document.getElementById(`vraag-${number}-svg-gr`).style.display = "block";
          }
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
    if(number == 3){
      displaySubject('conclusie-A',opmerkingen.conclusies.conclusieAltijd);
      // conclusie += " "+ opmerkingen.conclusies.conclusieAltijd + "\n";
    }
    if(queryString.conclusie[property] > 0){
      displaySubject('conclusie-'+number,opmerkingen.conclusies['conclusie'+number][queryString.conclusie[property]]);
      // conclusie += " " + opmerkingen.conclusies['conclusie'+number][queryString.conclusie[property]] + " \n \n";         
    }
  number++;    
  }  
// end for loop conclusie   
}

displaySubject('conclusie-Out',opmerkingen.conclusies.conclusieOutro);
// conclusie += opmerkingen.conclusies.conclusieOutro;

//image conclusie groen
if(queryString.score.waarde < upperLimitGroen){
  document.getElementById(`conclusie-svg-gr`).style.display = "block";
}

//image conclusie oranje
if(queryString.score.waarde >= upperLimitGroen && queryString.score.waarde < upperLimitOranje){
  document.getElementById(`conclusie-svg-or`).style.display = "block";
}

//image conclusie rood
if(queryString.score.waarde >= upperLimitOranje){
  document.getElementById(`conclusie-svg-rd`).style.display = "block";
}


// conclusie closure
if(queryString.score.waarde > upperLimitGroen){
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

