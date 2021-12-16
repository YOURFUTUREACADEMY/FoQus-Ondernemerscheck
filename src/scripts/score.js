import opmerkingenData from "../data/opmerkingen.js"
  
const $opmerkingen = opmerkingenData;

// score waardes
const $groen = 1;
const $oranje = 5;
const $rood = 25;


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
  const conclusies = $opmerkingen.conclusies;

  // variable resultaat opbouw
  const resultaat = {
    vraag1 : {opmerking : "", berekening : "", totaal : "", score : ""},
    vraag2 : {opmerking : "", berekening : "", totaal : "", score : ""},
    vraag3 : {opmerking : "", berekening : "", totaal : "", score : ""},
    vraag4 : {opmerking : "", berekening : "", totaal : "", score : ""},
    vraag5 : {opmerking : "", berekening : "", totaal : "", score : ""},
    vraag6 : {opmerking : "", berekening : "", totaal : "", score : ""},
    vraag7 : {opmerking : "", berekening : "", totaal : "", score : ""},
    kleur : "",
    score : 0,
    conclusie1 : {opmerking : "", kleur:"", score : ""},
    conclusie2 : {opmerking : "", kleur:"", score : ""}, 
    conclusie3 : {opmerking : "", kleur:"", score : ""}, 
    conclusie4 : {opmerking : "", kleur:"", score : ""}, 
  }

  // score waardes
  const groen = $groen;
  const oranje = $oranje;
  const rood = $rood;

  // functie die numeral string converteerd naar een number
  function convertStrToNum(string){
    let value = Number(string.replace(".",""));
    return value;
  }

  // functie die numeral string invoegt in opmerking string
  function maakOpmerking(inputString, replaceString, newString){
    let opmerking = inputString.replace(replaceString, newString);
    return opmerking;
  }

  // statement vraag 1

  // bereken totaal
  const totaal = convertStrToNum(opmerking.vraag1.waarden[0]) + convertStrToNum(opmerking.vraag1.waarden[1]) + convertStrToNum(opmerking.vraag1.waarden[2]) + convertStrToNum(opmerking.vraag1.waarden[3]) + convertStrToNum(opmerking.vraag1.waarden[4]);
  resultaat.vraag1.totaal = totaal;

  if( vraag1.waarde <2  && vraag1.waarde !== ""){
    
    resultaat.vraag1.opmerking = maakOpmerking(opmerking.vraag1.zelfstandig,"!WAARDE!",opmerking.vraag1.waarden[0]);
    resultaat.vraag1.berekening = (convertStrToNum(opmerking.vraag1.waarden[0]) / totaal) * 100;
  }
  else if(vraag1.waarde >=2 && vraag1.waarde < 10 ){
    resultaat.vraag1.opmerking = maakOpmerking(opmerking.vraag1.omvang,"!WAARDE!",opmerking.vraag1.waarden[1]); 
    resultaat.vraag1.berekening = (convertStrToNum(opmerking.vraag1.waarden[1]) / totaal) * 100;
  }
  else if(vraag1.waarde >=10 && vraag1.waarde < 50 ){
    resultaat.vraag1.opmerking = maakOpmerking(opmerking.vraag1.omvang,"!WAARDE!",opmerking.vraag1.waarden[2]); 
    resultaat.vraag1.berekening = (convertStrToNum(opmerking.vraag1.waarden[2]) / totaal) * 100;
  }
  else if(vraag1.waarde >=50 && vraag1.waarde < 100 ){
    resultaat.vraag1.opmerking = maakOpmerking(opmerking.vraag1.omvang,"!WAARDE!",opmerking.vraag1.waarden[3])
    resultaat.vraag1.berekening = (convertStrToNum(opmerking.vraag1.waarden[3]) / totaal) * 100;
  }
  else if(vraag1.waarde >=100 && vraag1.waarde < 250 ){
    resultaat.vraag1.opmerking = maakOpmerking(opmerking.vraag1.omvang,"!WAARDE!",opmerking.vraag1.waarden[4]) 
    resultaat.vraag1.berekening = (convertStrToNum(opmerking.vraag1.waarden[4]) / totaal) * 100;
  }
  else if(vraag1.waarde >=250){
    resultaat.vraag1.opmerking = opmerking.vraag1.groot;
  }
  else{
    resultaat.vraag1.opmerking = "FOUT: WAARDE VRAAG 1 BUITEN BEREIK";
    resultaat.vraag1.totaal = 0;
  }

 
  // statement vraag 2
  if( vraag2.waarde < 55 && vraag2.waarde !== ""){
    resultaat.vraag2.opmerking = opmerking.vraag2.groen; 
    resultaat.vraag2.score = groen;
    resultaat.score = resultaat.score + groen; 
    
  }
  else if(vraag2.waarde >= 55 && vraag2.waarde <= 65 ){
    resultaat.vraag2.opmerking = opmerking.vraag2.oranje;
    resultaat.vraag2.score = oranje;
    resultaat.score = resultaat.score + oranje;
  }
  else if(vraag2.waarde > 65){
    resultaat.vraag2.opmerking = opmerking.vraag2.rood;
    resultaat.vraag2.score = rood;
    resultaat.score = resultaat.score + rood;
  }
  else{
    resultaat.vraag2.opmerking = "FOUT: WAARDE VRAAG 2 BUITEN BEREIK";
    resultaat.vraag2.berekening = 0;
  }


  // statement vraag 3
  resultaat.vraag3.totaal = 100;
  resultaat.vraag3.berekening = (vraag3.waarde/resultaat.vraag3.totaal) * 100;

  if( vraag3.waarde < 45 && vraag3.waarde !== ""){
    resultaat.vraag3.opmerking = opmerking.vraag3.groen;
    resultaat.vraag3.score = groen;
    resultaat.score = resultaat.score + groen; 
  }
  else if(vraag3.waarde >= 45 && vraag3.waarde <= 60 ){
    resultaat.vraag3.opmerking = opmerking.vraag3.oranje;
    resultaat.vraag3.score = oranje;
    resultaat.score = resultaat.score + oranje;
  }
  else if(vraag3.waarde > 60){
    resultaat.vraag3.opmerking = opmerking.vraag3.rood;
    resultaat.vraag3.score = rood;
    resultaat.score = resultaat.score + rood;
  }
  else{
    resultaat.vraag3.opmerking = "FOUT: WAARDE VRAAG 3 BUITEN BEREIK";
    resultaat.vraag3.berekening = 0;
  }


  // statement vraag 4
  if( vraag4.waarde == 1 && vraag4.waarde !== ""){
    resultaat.vraag4.opmerking = opmerking.vraag4.groen;
    resultaat.vraag4.score = groen;
    resultaat.score = resultaat.score + groen; 
  }
  else if(vraag4.waarde == 2 ){
    resultaat.vraag4.opmerking = opmerking.vraag4.oranje;
    resultaat.vraag4.score = oranje;
    resultaat.score = resultaat.score + oranje; 
  }
  else if(vraag4.waarde == 3 ){
    resultaat.vraag4.opmerking = opmerking.vraag4.rood;
    resultaat.vraag4.score = rood;
    resultaat.score = resultaat.score + rood; 
  }
  else{
    resultaat.vraag4.opmerking = "FOUT: WAARDE VRAAG 4 BUITEN BEREIK";
  }

  // statement vraag 5 & 6
  // 5 = 1 en 6 - 1 tot 3
  if( vraag5.waarde == 1 && vraag6.waarde == 1 && vraag5.waarde != "" && vraag6.waarde != ""){
    resultaat.vraag6.opmerking = opmerking.vraag6.groen.VenIVstijgen;
    resultaat.vraag5.score = groen;
    resultaat.vraag6.score = groen;
    resultaat.score = resultaat.score + groen; 
  }
  else if( vraag5.waarde == 1 && vraag6.waarde == 2 ){
    resultaat.vraag6.opmerking = opmerking.vraag6.oranje.VstijgtVIgelijk;
    resultaat.vraag5.score = oranje;
    resultaat.vraag6.score = oranje;
    resultaat.score = resultaat.score + oranje; 
  }
  else if( vraag5.waarde == 1 && vraag6.waarde == 3 ){
    resultaat.vraag6.opmerking = opmerking.vraag6.rood.VstijgtVIdaalt;
    resultaat.vraag5.score = rood;
    resultaat.vraag6.score = rood;
    resultaat.score = resultaat.score + rood; 
  }
  // 5 = 2 en 6 - 1 tot 3
  else if( vraag5.waarde == 2 && vraag6.waarde == 1 ){
    resultaat.vraag6.opmerking = opmerking.vraag6.groen.VgelijkVIstijgt;
    resultaat.vraag5.score = groen;
    resultaat.vraag6.score = groen;
    resultaat.score = resultaat.score + groen; 
  }
  else if( vraag5.waarde == 2 && vraag6.waarde == 2 ){
    resultaat.vraag6.opmerking = opmerking.vraag6.oranje.VenVIgelijk;
    resultaat.vraag5.score = oranje;
    resultaat.vraag6.score = oranje;
    resultaat.score = resultaat.score + oranje; 
  }
  else if( vraag5.waarde == 2 && vraag6.waarde == 3 ){
    resultaat.vraag6.opmerking = opmerking.vraag6.rood.VgelijkVIdaalt;
    resultaat.vraag5.score = rood;
    resultaat.vraag6.score = rood;
    resultaat.score = resultaat.score + rood; 
  }
  // 5 = 3 en 6 - 1 tot 3
  else if( vraag5.waarde == 3 && vraag6.waarde == 1 ){
    resultaat.vraag6.opmerking = opmerking.vraag6.oranje.VdaaltVIstijgt;
    resultaat.vraag5.score = oranje;
    resultaat.vraag6.score = oranje;
    resultaat.score = resultaat.score + oranje; 
  }
  else if( vraag5.waarde == 3 && vraag6.waarde == 2 ){
    resultaat.vraag6.opmerking = opmerking.vraag6.oranje.VdaaltVIgelijk;
    resultaat.vraag5.score = oranje;
    resultaat.vraag6.score = oranje;
    resultaat.score = resultaat.score + oranje; 
  }
  else if( vraag5.waarde == 3 && vraag6.waarde == 3 ){
    resultaat.vraag6.opmerking = opmerking.vraag6.rood.VenVIdalen;
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
  if( vraag7.waarde >= 8 && vraag7.waarde !== ""){
    resultaat.vraag7.opmerking = opmerking.vraag7.groen;
    resultaat.vraag7.score = groen;
    resultaat.score = resultaat.score + groen; 
  }
  else if(vraag7.waarde >= 6 && vraag7.waarde < 8 ){
    resultaat.vraag7.opmerking = opmerking.vraag7.oranje;
    resultaat.vraag7.score = oranje;
    resultaat.score = resultaat.score + oranje; 
  }
  else if(vraag7.waarde < 6 && vraag7.waarde > 0){
    resultaat.vraag7.opmerking = opmerking.vraag7.rood;
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
  if(resultaat.score > 0 && resultaat.score <= 17){
    resultaat.kleur = groen;
    statusConclusie = 1;
  }
  else if(resultaat.score > 17 && resultaat.score <= 85){
    resultaat.kleur = oranje;
    statusConclusie = 2;
  }
  else if(resultaat.score > 85){
    resultaat.kleur = rood;
    statusConclusie = 3;
  }
  else{
    resultaat.kleur = rood;
    resultaat.score = 125;
  }

  // conclusie 1: vraag 1,2,5 & 6
  if(vraag1.waarde  > 1 && vraag1.waarde <= 50 && vraag2.waarde  > 65){
    if(vraag5.waarde === 1 && vraag6.waarde === 1 || vraag6.waarde === 2){
      resultaat.conclusie1.opmerking = conclusies.conclusie1.oranje.Vstijgt;
      resultaat.conclusie1.score = oranje;
      resultaat.conclusie1.kleur = oranje;
      statusConclusie = 4;
    }
    else if(vraag5.waarde === 2 || vraag5.waarde === 3 && vraag6.waarde === 2 || vraag6.waarde === 3){
      resultaat.conclusie1.opmerking = conclusies.conclusie1.rood;
      resultaat.conclusie1.score = rood;
      resultaat.conclusie1.kleur = rood;
      statusConclusie = 5;
    }
    else if(vraag5.waarde === 2 || vraag5.waarde === 3 && vraag6.waarde === 1 ){
      resultaat.conclusie1.opmerking = conclusies.conclusie1.oranje.Vgelijk;
      resultaat.conclusie1.score = oranje;
      resultaat.conclusie1.kleur = oranje;
      statusConclusie = 6;
    }
  }

  // conclusie 2: vraag 4 & 6
  if(vraag4.waarde === 1){
    if(vraag5.waarde === 1 && vraag6.waarde !== 1){
      resultaat.conclusie2.opmerking = conclusies.conclusie2.VI;
      resultaat.conclusie2.score = oranje;
      resultaat.conclusie2.kleur = oranje;
      statusConclusie = 7;
    }
    if(vraag5.waarde !== 1 || vraag6.waarde !== 1){
      resultaat.conclusie2.opmerking = conclusies.conclusie2.VofVI;
      resultaat.conclusie2.score = oranje;
      resultaat.conclusie2.kleur = oranje;
      statusConclusie = 8;
    }
  }

  // conclusie 3: totaal | conclusie 1 en 2 zijn groen
  if(statusConclusie === 0){
    resultaat.conclusie3.opmerking = conclusies.conclusie3;
  }

  // conclusie 4 | vraag 1 > 2
  if(vraag1.waarde > 2){
    resultaat.conclusie4.opmerking = conclusies.conclusie4;
  }

  return resultaat;
    
// end function score
}

export default berekenUitslag;
//export default test;