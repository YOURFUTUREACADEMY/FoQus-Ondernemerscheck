import opmerkingenData from "../data/opmerkingen.js"
import { midPointerMeter } from "../scripts/meter.js";
  
const $opmerkingen = opmerkingenData;

// score waardes
const $groen = 1; // 1
const $oranje = 5; // 5
const $rood = 20; // 25

export const scoreWaardes = {
  groen:$groen,
  oranje:$oranje,
  rood:$rood
}



function berekenUitslag(vragen){

  // haal store op
  const vraag1 = {
      label : vragen.vraag1.label,
      waarde : vragen.vraag1.waarde
   }

  const vraag2 = {
    label : vragen.vraag2.label,
    waarde : vragen.vraag2.waarde}

  const vraag3 = {
    label : vragen.vraag3.label,
    waarde : vragen.vraag3.waarde}

  const vraag4 = {
    label : vragen.vraag4.label,
    waarde : vragen.vraag4.waarde}
      
  const vraag5 = {
    label : vragen.vraag5.label,
    waarde : vragen.vraag5.waarde}

  const vraag6 = {
    label : vragen.vraag6.label,
    waarde : vragen.vraag6.waarde}

  const vraag7 = {
    label : vragen.vraag7.label,
    waarde : vragen.vraag7.waarde}

  // haal opmerkingen vragen
  const opmerking = $opmerkingen.vragen;
  

  // haal opmerkingen conclusies
  // const conclusies = $opmerkingen.conclusies;

  // variable resultaat opbouw
  const resultaat = {
    vraag1 : {opmerking : 0, berekening : "", totaal : "", score : "", waarde : vragen.vraag1.waarde},
    vraag2 : {opmerking : 0, berekening : "", totaal : "", score : "", waarde : vragen.vraag2.waarde},
    vraag3 : {opmerking : 0, berekening : "", totaal : "", score : "", waarde : vragen.vraag3.waarde},
    vraag4 : {opmerking : 0, berekening : "", totaal : "", score : "", waarde : vragen.vraag4.waarde},
    vraag5 : {opmerking : 0, berekening : "", totaal : "", score : "", waarde : vragen.vraag5.waarde},
    vraag6 : {opmerking : 0, berekening : "", totaal : "", score : "", waarde : vragen.vraag6.waarde},
    vraag7 : {opmerking : 0, berekening : "", totaal : "", score : "", waarde : vragen.vraag7.waarde},
    kleur : "",
    score : 0,
    conclusie1 : {opmerking : 0, kleur:"", score : "", nr: "n.v.t"},
    conclusie2 : {opmerking : 0, kleur:"", score : "", nr: "n.v.t"}, 
    conclusie3 : {opmerking : 0, kleur:"", score : "", nr: "n.v.t"}, 
    conclusie4 : {opmerking : 0, kleur:"", score : "", nr: "n.v.t"}, 
  }

  // score waardes
  const groen = $groen;
  const oranje = $oranje;
  const rood = $rood;


  // statement vraag 1

  // bereken totaal
  const totaal = Number(opmerking.vraag1.waarden[0]) + Number(opmerking.vraag1.waarden[1]) + Number(opmerking.vraag1.waarden[2]) + Number(opmerking.vraag1.waarden[3]) + Number(opmerking.vraag1.waarden[4]);
  
  if(vraag1.waarde !== "" && vraag1.waarde !== undefined){ 
    // resultaat.vraag1.score = Number(vraag1.waarde)}
    resultaat.vraag1.score = ""}
  // vraag 1.1  
  if( vraag1.waarde <2  && vraag1.waarde !== ""){   
    resultaat.vraag1.opmerking = 1;
    resultaat.vraag1.berekening = (opmerking.vraag1.waarden[0] / totaal) * 100;
  }
  // vraag 1.2
  else if(vraag1.waarde >=2 && vraag1.waarde < 10 ){
    resultaat.vraag1.opmerking = 2; 
    resultaat.vraag1.berekening = (opmerking.vraag1.waarden[1] / totaal) * 100;
  }
  // vraag 1.3
  else if(vraag1.waarde >=10 && vraag1.waarde < 50 ){
    resultaat.vraag1.opmerking = 3; 
    resultaat.vraag1.berekening = (opmerking.vraag1.waarden[2] / totaal) * 100;
  }
  // vraag 1.4
  else if(vraag1.waarde >=50 && vraag1.waarde < 100 ){
    resultaat.vraag1.opmerking = 4
    resultaat.vraag1.berekening = (opmerking.vraag1.waarden[3] / totaal) * 100;
  }
  // vraag 1.5
  else if(vraag1.waarde >=100 && vraag1.waarde < 250 ){
    resultaat.vraag1.opmerking = 5 
    resultaat.vraag1.berekening = (opmerking.vraag1.waarden[4] / totaal) * 100;
  }
  // vraag 1.6
  else if(vraag1.waarde >=250){
    resultaat.vraag1.opmerking = 6;
  }
  else{
    resultaat.vraag1.opmerking = "FOUT: WAARDE VRAAG 1 BUITEN BEREIK";
    resultaat.vraag1.totaal = 0;
  }

  
  // statement vraag 2

// parameters meter
const meterSettings= {
  manMode: false,
  manValue: 50,
  valueMax: 80,
  valueMin: 10,
  degMax: 180,
  degMin: 0,
  degAdjust: 1,
  reverseDirection: true,
};


// vraag 2 visual meter
resultaat.vraag2.berekening = midPointerMeter(vraag2.waarde, meterSettings).pointerDeg;

  // vraag 2.1
  if( vraag2.waarde < 55 && vraag2.waarde !== ""){
    resultaat.vraag2.opmerking = 1; 
    resultaat.vraag2.score = groen;
    resultaat.score = resultaat.score + groen; 
    
  }
  // vraag 2.2
  else if(vraag2.waarde >= 55 && vraag2.waarde <= 65 ){
    resultaat.vraag2.opmerking = 2;
    resultaat.vraag2.score = oranje;
    resultaat.score = resultaat.score + oranje;
  }
  // vraag 2.3
  else if(vraag2.waarde > 65){
    resultaat.vraag2.opmerking = 3;
    resultaat.vraag2.score = rood;
    resultaat.score = resultaat.score + rood;
  }
  else{
    resultaat.vraag2.opmerking = "FOUT: WAARDE VRAAG 2 BUITEN BEREIK";
    resultaat.vraag2.berekening = 0;
  }


  // statement vraag 3
  resultaat.vraag3.totaal = 360;
  resultaat.vraag3.berekening = (resultaat.vraag3.totaal / 100 ) * vraag3.waarde;
  
  // vraag 3.1
  if( vraag3.waarde < 45 && vraag3.waarde !== ""){
    resultaat.vraag3.opmerking = 1;
    resultaat.vraag3.score = groen;
    resultaat.score = resultaat.score + groen; 
  }
  // vraag 3.2
  else if(vraag3.waarde >= 45 && vraag3.waarde <= 60 ){
    resultaat.vraag3.opmerking = 2;
    resultaat.vraag3.score = oranje;
    resultaat.score = resultaat.score + oranje;
  }
  // vraag 3.3
  else if(vraag3.waarde > 60){
    resultaat.vraag3.opmerking = 3;
    resultaat.vraag3.score = rood;
    resultaat.score = resultaat.score + rood;
  }
  else{
    resultaat.vraag3.opmerking = "FOUT: WAARDE VRAAG 3 BUITEN BEREIK";
    resultaat.vraag3.berekening = 0;
  }


  // statement vraag 4
  // vraag 4.1
  if( vraag4.waarde == 1 && vraag4.waarde !== ""){
    resultaat.vraag4.opmerking = 1;
    resultaat.vraag4.score = groen;
    resultaat.score = resultaat.score + groen; 
  }
  // vraag 4.2
  else if(vraag4.waarde == 2 ){
    resultaat.vraag4.opmerking = 2;
    resultaat.vraag4.score = oranje;
    resultaat.score = resultaat.score + oranje; 
  }
  // vraag 4.3
  else if(vraag4.waarde == 3 ){
    resultaat.vraag4.opmerking = 3;
    resultaat.vraag4.score = rood;
    resultaat.score = resultaat.score + rood; 
  }
  else{
    resultaat.vraag4.opmerking = "FOUT: WAARDE VRAAG 4 BUITEN BEREIK";
  }


  // statement vraag 5 & 6
  // 5 = 1 en 6 - 1 tot 3
  // vraag 6.1 | 5 stijgt AND 6 stijgt | groenvraag 6.1
  if( vraag5.waarde == 1 && vraag6.waarde == 1 && vraag5.waarde != "" && vraag6.waarde != ""){
    resultaat.vraag6.opmerking = 1;
    resultaat.vraag5.score = groen;
    resultaat.vraag6.score = groen;
    resultaat.score = resultaat.score + groen; 
  }
  // vraag 6.2 | 5 stijgt AND 6 blijft gelijk | oranje
  else if( vraag5.waarde == 1 && vraag6.waarde == 2 ){
    resultaat.vraag6.opmerking = 2;
    resultaat.vraag5.score = groen;
    resultaat.vraag6.score = oranje;
    resultaat.score = resultaat.score + oranje; 
  }
  // vraag 6.3 | 5 stijgt AND 6 daalt | rood
  else if( vraag5.waarde == 1 && vraag6.waarde == 3 ){
    resultaat.vraag6.opmerking = 3;
    resultaat.vraag5.score = groen;
    resultaat.vraag6.score = rood;
    resultaat.score = resultaat.score + rood; 
  }
  // vraag 6.4 | 5 blijft gelijk AND 6 stijgt | groen
  else if( vraag5.waarde == 2 && vraag6.waarde == 1 ){
    resultaat.vraag6.opmerking = 4;
    resultaat.vraag5.score = oranje;
    resultaat.vraag6.score = groen;
    resultaat.score = resultaat.score + groen; 
  }
  // vraag 6.5 | 5 blijft gelijk AND 6 blijft gelijk | oranje
  else if( vraag5.waarde == 2 && vraag6.waarde == 2 ){
    resultaat.vraag6.opmerking = 5;
    resultaat.vraag5.score = oranje;
    resultaat.vraag6.score = oranje;
    resultaat.score = resultaat.score + oranje; 
  }
  // vraag 6.6 | 5 blijft gelijk AND 6 daalt | rood
  else if( vraag5.waarde == 2 && vraag6.waarde == 3 ){
    resultaat.vraag6.opmerking = 6;
    resultaat.vraag5.score = oranje;
    resultaat.vraag6.score = rood;
    resultaat.score = resultaat.score + rood; 
  }
  // vraag 6.7 | 5 daalt AND 6 stijgt | oranje
  else if( vraag5.waarde == 3 && vraag6.waarde == 1 ){
    resultaat.vraag6.opmerking = 7;
    resultaat.vraag5.score = rood;
    resultaat.vraag6.score = oranje;
    resultaat.score = resultaat.score + oranje; 
  }
  // vraag 6.8 | 5 daalt AND 6 blijft gelijk | oranje
  else if( vraag5.waarde == 3 && vraag6.waarde == 2 ){
    resultaat.vraag6.opmerking = 8;
    resultaat.vraag5.score = rood;
    resultaat.vraag6.score = oranje;
    resultaat.score = resultaat.score + oranje; 
  }
  // vraag 6.9 | 5 daalt AND 6 daalt | rood
  else if( vraag5.waarde == 3 && vraag6.waarde == 3 ){
    resultaat.vraag6.opmerking = 9;
    resultaat.vraag5.score = rood;
    resultaat.vraag6.score = rood;
    resultaat.score = resultaat.score + rood; 
  }
  // fout vraag 5 of 6
  else{
    if(vraag5.waarde == "" || vraag5.waarde < 1 || vraag5.waarde > 3){
      resultaat.vraag5.opmerking = "FOUT: WAARDE VRAAG 5 BUITEN BEREIK";
    }
    if(vraag6.waarde == "" || vraag6.waarde < 1 || vraag6.waarde > 3){
      resultaat.vraag6.opmerking = "FOUT: WAARDE VRAAG 6 BUITEN BEREIK";
    }
  }
 
  // statement vraag 7
  // vraag 7.1
  if( vraag7.waarde >= 8){
    resultaat.vraag7.opmerking = 1;
    resultaat.vraag7.score = groen;
    resultaat.score = resultaat.score + groen; 
  }
  // vraag 7.2
  else if(vraag7.waarde >= 6 && vraag7.waarde < 8 ){
    resultaat.vraag7.opmerking = 2;
    resultaat.vraag7.score = oranje;
    resultaat.score = resultaat.score + oranje; 
  }
  // vraag 7.3
  else if(vraag7.waarde < 6 && vraag7.waarde >= 0){
    resultaat.vraag7.opmerking = 3;
    resultaat.vraag7.score = rood;
    resultaat.score = resultaat.score + rood; 
  }
  else{
    resultaat.vraag7.opmerking = "FOUT: WAARDE VRAAG 7 BUITEN BEREIK";
  }

  // conclusie

  // als statusConclusie === 0 dan: toon conclusie3 
  let statusConclusie = 0;


  // overal kleur 
  // orgineel 0 & 17
  if(resultaat.score > 0 && resultaat.score <= (2 * groen) + (3 * oranje)){
    resultaat.kleur = groen;
    // statusConclusie = 1;
  }
  // orgineel 17 & 85 
  else if(resultaat.score > (2 * groen) + (3 * oranje) && resultaat.score <= (2 * groen) + (3 * rood)){
    resultaat.kleur = oranje;
    // statusConclusie = 2;
  }
  // orgineel 85
  else if(resultaat.score > (2 * groen) + (3 * rood)){
    resultaat.kleur = rood;
    // statusConclusie = 3;
  }
  else{
    // orgineel 125
    resultaat.kleur = rood;
    resultaat.score = 100;
  }

  // conclusie 1: vraag 1,2,5 & 6
  if(vraag1.waarde  > 1 && vraag1.waarde <= 50 && vraag2.waarde  > 65){
    // Conclusie 1.1 | 1=2-50, 2 >65, 5 stijgt, 6 stijgt of gelijk | oranje
    if(vraag5.waarde === 1 && vraag6.waarde === 1 || vraag6.waarde === 2){
      resultaat.conclusie1.opmerking = 1;
      resultaat.conclusie1.score = oranje;
      resultaat.conclusie1.kleur = oranje;
      resultaat.conclusie1.nr = 1;
      statusConclusie = 4;
    }
    // Conclusie 1.2 | 1= 2-50, 2 >65, 5 gelijk of dalend, 6 stijgt | oranje
    else if(vraag5.waarde === 2 || vraag5.waarde === 3 && vraag6.waarde === 2 || vraag6.waarde === 3){
      resultaat.conclusie1.opmerking = 2;
      resultaat.conclusie1.score = rood;
      resultaat.conclusie1.kleur = rood;
      resultaat.conclusie1.nr = 2;
      statusConclusie = 5;
    }
    // Conclusie 1.3 | 1= 2-50, 2 >65, 5 gelijk of dalend, 6 dalend of gelijk | rood
    else if(vraag5.waarde === 2 || vraag5.waarde === 3 && vraag6.waarde === 1 ){
      resultaat.conclusie1.opmerking = 3;
      resultaat.conclusie1.score = oranje;
      resultaat.conclusie1.kleur = oranje;
      resultaat.conclusie1.nr = 3;
      statusConclusie = 6;
    }
  }

  // conclusie 2: vraag 4 & 6
  if(vraag4.waarde > 1){
    // Conclusie 2.1 | 4 >0,5 AND 6 daalt of gelijk | oranje
    if(vraag6.waarde > 1){
      resultaat.conclusie2.opmerking = 1;
      resultaat.conclusie2.score = oranje;
      resultaat.conclusie2.kleur = oranje;
      resultaat.conclusie2.nr = 1;
      statusConclusie = 7;
    }
  }  
  // Conclusie 2.2 | 4 <0,5 AND 6 daalt of gelijk OF 5 daalt of gelijk | oranje
  else if(vraag5.waarde !== 1 || vraag6.waarde !== 1){
      resultaat.conclusie2.opmerking = 2;
      resultaat.conclusie2.score = oranje;
      resultaat.conclusie2.kleur = oranje;
      resultaat.conclusie2.nr = 2;
      statusConclusie = 8; 
  }

  // conclusie 3.1: totaal | conclusie 1 en 2 zijn groen
  if(statusConclusie === 0){
    resultaat.conclusie3.opmerking = 1;
    resultaat.conclusie3.nr = 1;
  }

  // conclusie 4.1 | vraag 1 > 2
  if(vraag1.waarde > 2){
    resultaat.conclusie4.opmerking = 1;
    resultaat.conclusie4.nr = 1;
  }

  return resultaat;
    
// end function score
}

export default berekenUitslag;

// functie die resultaat data omzet naar JSON string t.b.v Zapier & PDF Monkey
export function composeRapport(resultData, /*querystring*/){

  let rapportData = "";
  const kleurWaarde = {groen:$groen,oranje:$oranje,rood:$rood};
 
  rapportData = {
    kleurWaarde:kleurWaarde,
    kleurCode:resultData.kleur,
    score:{
      waarde:resultData.score,
      visual:0},
    vragen:{},
    conclusie:{}
  };
 
  let key = ["vraag","conclusie"];
   
  let formatedBerekening = 0;
  let number = 1; 

  // haal vraag data
  for(let property in resultData){
    if(property === key[0]+number){
      rapportData.vragen["vr"+number+"Opm"] = resultData[property].opmerking;
      rapportData.vragen["vr"+number+"Sco"] = resultData[property].score;
      if(resultData[property].berekening !== ""){
        formatedBerekening = resultData[property].berekening;
        rapportData.vragen["vr"+number+"Ber"] = Number(formatedBerekening).toFixed(2);
      }
    number++; 
    }
  }

  number=1;
  // haal conclusie data
  for(let property in resultData){
    if(property === key[1]+number){
      rapportData.conclusie["Con"+number] = resultData[property].opmerking;
      number++;  
    }     
  }

  return rapportData;
// end function composeRapport  
}


// functie die resultaat data omzet naar URL string t.b.v Zapier & Excel
export function composeExcel(resultData){

  let excelData = "";

  const kleurWaarde = {groen:$groen,oranje:$oranje,rood:$rood};
 
  excelData = {
    kleurWaarde:kleurWaarde,
    kleurCode:resultData.kleur,
    score:resultData.score,
    vragen:{},
    conclusie:{}
  };
   
  let key = ["vraag","conclusie"]
  let number = 1;  
  
  // haal & bouw vraag data
  // haal vraag data
  for(let property in resultData){
    if(property === key[0]+number){
      excelData.vragen["vr"+number+"Sco"] = resultData[property].score;
      excelData.vragen["vr"+number+"Val"] = resultData[property].waarde;
      number++; 
    }
  }

  number=1;
  // haal conclusie data
  for(let property in resultData){
    if(property === key[1]+number){
      excelData.conclusie["Con"+number] = resultData[property].opmerking;
      number++;  
    }     
  }

  return excelData; 
// end function composeRapport  
}

export const compose = {
  rapport:composeRapport,
  excel:composeExcel
}
