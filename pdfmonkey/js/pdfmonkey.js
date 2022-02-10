// === !! DONT copy import to PDFmonkey.io template !! ===
import opmerkingen from "../js/opmerking.js"

const queryString= {
  "kleurWaarde":{"groen":1,"oranje":5,"rood":20},
  "kleurCode":5,
  "score":{
    "waarde":25,
    "visual":75.6
  },
  "vragen":{
      "vr1Opm":1,
      "vr1Sco":1,
      "vr1Ber":"90",
      "vr2Opm":1,
      "vr2Sco":1,
      "vr2Ber":"45.00",
      "vr3Opm":2,
      "vr3Sco":5,
      "vr3Ber":"165.00",
      "vr4Opm":1,
      "vr4Sco":20,
      "vr5Opm":0,
      "vr5Sco":20,
      "vr6Opm":4,
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



// calculate score limits
const upperLimitGroen = (queryString.kleurWaarde.groen * 2) + (queryString.kleurWaarde.oranje * 2);
const upperLimitOranje = (queryString.kleurWaarde.oranje * 2) + (queryString.kleurWaarde.rood * 3);

// set g,o,r for svg vraag 5 & 6
// vraag 5
let vraag5leter = "";
if(queryString.vragen.vr5Sco === queryString.kleurWaarde.rood){
  vraag5leter = "r";
};
if(queryString.vragen.vr5Sco === queryString.kleurWaarde.oranje){
  vraag5leter = "o";
};
if(queryString.vragen.vr5Sco === queryString.kleurWaarde.groen){
  vraag5leter = "g";
};

// vraag 6
let vraag6leter = "";
if(queryString.vragen.vr6Sco === queryString.kleurWaarde.rood){
  vraag6leter = "r";
};
if(queryString.vragen.vr6Sco === queryString.kleurWaarde.oranje){
    vraag6leter = "o";
};
if(queryString.vragen.vr6Sco === queryString.kleurWaarde.groen){
    vraag6leter = "g";
};


document.getElementById('status').appendChild(document.createElement(`p`)).innerText = `Status:Score:${queryString.score.waarde}, Score ULG:${upperLimitGroen}, ULO:${upperLimitOranje}.`;

// loop that gets the data from the query string and inserts the text from opmerking into vraag-n elements
let number = 1;
let vrElementNotExist = false;
for(let property in queryString.vragen){ 
  if(property === "vr"+number+"Opm"){
    vrElementNotExist = false;
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
          if(document.querySelector(`#vraag-${number}-svg-rd`) != null){
            document.getElementById(`vraag-${number}-svg-rd`).style.display = "block";
          }
          else{
            vrElementNotExist = true;
          }          
        }
        else if(queryString.vragen["vr"+number+"Sco"] === queryString.kleurWaarde.oranje ){
          addClass('sec-vraag-'+number, " vraag-oranje");
          if(document.querySelector(`#vraag-${number}-svg-or`) != null){
            document.getElementById(`vraag-${number}-svg-or`).style.display = "block";
          }
          else{
            vrElementNotExist = true;
          }
        }
        else {
          addClass('sec-vraag-'+number, " vraag-groen");
          if(document.querySelector(`#vraag-${number}-svg-gr`) != null){
            document.getElementById(`vraag-${number}-svg-gr`).style.display = "block";
          } 
          else{
            vrElementNotExist = true;
          }
        }
        //vraag 5 & 6 svg en border kleur
        if(vrElementNotExist){
          // svg
          if(document.querySelector(`#vraag-${number}-svg-5${vraag5leter}6${vraag6leter}`) != null){
            document.getElementById(`vraag-${number}-svg-5${vraag5leter}6${vraag6leter}`).style.display = "block";
            // border
            if(queryString.vragen["vr"+number+"Opm"] === 3 || queryString.vragen["vr"+number+"Opm"] === 6 || queryString.vragen["vr"+number+"Opm"] === 9){
              addClass('sec-vraag-'+number, " vraag-rood");
            }
            else if(queryString.vragen["vr"+number+"Opm"] === 2 || queryString.vragen["vr"+number+"Opm"] === 5 || queryString.vragen["vr"+number+"Opm"] === 7 || queryString.vragen["vr"+number+"Opm"] === 8){
              addClass('sec-vraag-'+number, " vraag-oranje");
            }
            else{
              addClass('sec-vraag-'+number, " vraag-groen");
            }
          }
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

// Dynamic objects

// meter svg graden
document.getElementById("score-arrow").style.transform = `rotate(${queryString.score.visual}deg)`;



//c-diagram vraag 1
// diagram positions
const vr1Dia = document.querySelector(".c-diagram-vraag-1");
// const vr1DiaDeg1 = Number(queryString.vragen.vr1Ber);
const vr1DiaDeg1 = 67;
const vr1DiaDeg2 = vr1DiaDeg1 + 27;
const vr1DiaDeg3 = vr1DiaDeg2 + 4.5;
vr1Dia.style.setProperty('--degVraag1-1', `${ vr1DiaDeg1 * 3.6 }deg`);
vr1Dia.style.setProperty('--degVraag1-2', `${ vr1DiaDeg2 * 3.6 }deg`);
vr1Dia.style.setProperty('--degVraag1-3', `${ vr1DiaDeg3 * 3.6 }deg`);
// diagram label
if(queryString.vragen.vr1Opm == 1){
  document.querySelector(".c-diagram-vraag-1-label-1").style.display = "block";
}
if(queryString.vragen.vr1Opm == 2){
  document.querySelector(".c-diagram-vraag-1-label-2").style.display = "block";
}
if(queryString.vragen.vr1Opm == 3){
  document.querySelector(".c-diagram-vraag-1-label-3").style.display = "block";
}

// vraag 2 meter svg graden
document.getElementById("vraag-2-arrow").style.transform = `rotate(${queryString.vragen.vr2Ber}deg)`;

//c-diagram vraag site 3 / PDF 6 - omzet
const vr3Dia = document.querySelector(".c-diagram-vraag-3");
vr3Dia.style.setProperty('--degVraag3', `${queryString.vragen.vr3Ber}deg`);

// poition label
const vr3DiaLabel = document.querySelector(".c-diagram-vraag-3-label");
vr3DiaLabel.style.transform = `rotate(${(Number(queryString.vragen.vr3Ber) /2 )+90 }deg) translateX(-50px)`;

// position text in label
const vr3DiaText = document.querySelector(".c-diagram-vraag-3-label p");
vr3DiaText.style.transform = `rotate(${((Number(queryString.vragen.vr3Ber) /2 )+90) *-1 }deg) translateX(75px)`;

// zet graden om naar waarde label
vr3DiaText.innerText = `${Math.round(queryString.vragen.vr3Ber / 3.6)}%`;
