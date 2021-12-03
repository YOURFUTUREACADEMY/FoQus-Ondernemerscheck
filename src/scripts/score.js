export default {
    data() {
      var valueV1= ["878.850","354.082","58.876","8.890","3.420"]
      return {
        OpmerkingenV1: [
          // Opmerking resultaat vraag 1.1 | <2
          `Jij valt onder de zelfstandigen, samen met ${valueV1[0]} anderen bedrijven in Nederland.`,
          // Opmerking resultaat vraag 1.2 tot 1.5 | >=2 tot <250 
          `Jouw bedrijf heeft dezelfde omvang als ${valueV1[4]} anderen bedrijven in Nederland.`,
          // Opmerking resultaat vraag 1.6 | >= 250
          `Jouw bedrijf is zo groot, dat we het statistisch niet eens meer weten. Goed bezig, denken we.`],
        OpmerkingenV2: [
          // Opmerking resultaat vraag 2.1 | <=55 | groen
          `Prima! Zeker als je bedenkt dat een ondernemer gemiddled 55 uur werkt.`,
          // Opmerking resultaat vraag 2.2 | 55-65 | oranje
          `Je werkt meer uren dan de gemiddlde ondernemer, die werkt 55 uur. Let op dat het niet structureel wordt!`,
          // Opmerking resultaat vraag 2.3 | >65 | rood
          `Je werkt (te) veel! Iets om bij stil te staan. Een ondernemer werkt gemiddeld 55 uur. Structueel teveel uren werken is een risico.`,
        ],
        OpmerkingenV3: [
          // Opmerking resultaat vraag 3.1 | <=45 | groen
          `Je hebt je omzet goed verspreid over meerdere klanten. Dat beperkt je risico wanneer er een klant wegvalt.`,
          // Opmerking resultaat vraag 3.2 | 45-60 | oranje
          `Je bent qua omzet afhankelijk van je 3 belangrijkste klanten. Realiseer jij je dat ?`,
          // Opmerking resultaat vraag 3.3 | >65 | rood
          `Je bent behoorlijk kwetsbaar. Je bent qua omzet sterk afhankelijk van 3 klanten. Wanneer er een wegvalt heeft dat grote impact!`,
        ],
        OpmerkingenV4: [
          // Opmerking resultaat vraag 4.1 | <= 0,5 jaar | groen
          `Als je in de markt wilt blijven meedoen bij de besten, moet je innoveren. Dat doe je goed!`,
          // Opmerking resultaat vraag 4.2 | 0,5 - 1,5 jaar | oranje
          `ls je in de markt wilt blijven meedoen moet je innoveren. Ook in jouw markt! Kun je frequenter innoveren?`,
          // Opmerking resultaat vraag 4.3 | >1,5 jaar | rood
          `Wil je mee blijven doen in de markt, dan wordt het wellicht tijd voor iets nieuws?! Dat doen andere succesvolle bedrijven ook.`,
        ],
        // Het resultaat van vraag 5 wordt verwerkt in vraag 6
        OpmerkingenV6: [
          // Opmerking resultaat vraag 6.1 | 5 stijgt AND 6 stijgt | groen
          `Je realiseert winstgevende groei. Dat is de ware kunst. Compliment!`,
          // Opmerking resultaat vraag 6.2 | 5 stijgt AND 6 blijft gelijk | oranje
          `Je omzet stijgt terwijl je resultaat gelijk blijft. Weet je waarom? Dit is een belangrijk signaal.`,
          // Opmerking resultaat vraag 6.3 | 5 stijgt AND 6 daalt | rood
          `Je omzet stijgt terwijl je resultaat daalt. Je loopt daarmee risico dat het probleem steeds groter wordt.`,
          // Opmerking resultaat vraag 6.4 | 5 blijft gelijk AND 6 stijgt | groen
          `Je omzet blijft gelijk terwijl je resultaat stijgt. Dat lijkt gunstig. Weet je waarom?`,
          // Opmerking resultaat vraag 6.5 | 5 blijft gelijk AND 6 blijft gelijk | oranje
          `Je omzet blijft gelijk, je resultaat ook. Het lijkt alsof je stil staat, weet je de reden?`,
          // Opmerking resultaat vraag 6.6 | 5 blijft gelijk AND 6 daalt | rood
          `Je omzet blijft gelijk terwijl je resultaat daalt. Dit houd je vaak niet lang vol en bijsturen is nodig.`,
          // Opmerking resultaat vraag 6.7 | 5 daalt AND 6 stijgt | oranje
          `Je omzet daalt terwijl je resultaat stijgt. Is dit een bewuste keuze?`,
          // Opmerking resultaat vraag 6.8 | 5 daalt AND 6 blijft gelijk | oranje
          `Je omzet daalt terwijl je resutaat gelijk blijft. Hoe zit het met je continuiteit, en je marktaandeel?`,
          // Opmerking resultaat vraag 6.9 | 5 daalt AND 6 daalt | rood
          `Je omzet daalt en je resultaat daalt. Wat is er aan de hand? Dit vraagt om directe actie om je continuiteit te waarborgen!`,
        ],
        OpmerkingenV7: [
          // Opmerking resultaat vraag 7.1 | >=8 | groen
          `Je vindt je werk erg leuk, en dat is fijn! Plezier vergroot vaak succes, en omgekeerd.`,
          // Opmerking resultaat vraag 7.2 | >=6 and <8 | oranje
          `Je vindt je werk niet erg leuk. Wordt het tijd voor iets anders, of je werk anders doen?`,
          // Opmerking resultaat vraag 7.3 | <6 | rood
          `Je hebt niet al te veel plezier in je werk. Is het tijd om wat veranderingen aan te brengen? Weinig plezier helpt niet bij succes.`,
        ],
        //Conclusie vragen 1,2,5 & 6
        ConclusieV1: [
          // Conclusie 1.0 | 1=2-50, 2 >65, 5 stijgt, 6 stijgt of gelijk | oranje
          `Het lijkt heel goed te gaan met je onderneming; kwetsbaar lijkt de afhankelijkheid van jou. Tijdelijk kan dit prima maar het moet niet te lang duren. Advies is om het werk anders proberen te organiseren en je organisatie verder te professionaliseren.`,
          // Conclusie 1.1 | 1= 2-50, 2 >65, 5 gelijk of dalend, 6 dalend of gelijk | rood
          `Je werkt zo hard dat dit risico's met zich meebrengt op vele vlakken. Dit is niet houdbaar voor langere tijd. Het is noodzaak om snel bij te sturen. Probeer met iemand die meer afstand van je bedrijf heeft kritisch naar je bedrijf te kijken om noodzakelijke keuzes goed te kunnen maken, en stuur dan bij!`,
          // Conclusie 1.1 | 1= 2-50, 2 >65, 5 gelijk of dalend, 6 stijgt | oranje
          `Je maakt scherpe keuzes die zorgen voor winstgevendheid. In de basis doe je dit goed. De vraag is of dit ook kan door minder hard of slimmer te werken, door zaken bijv. anders te organiseren. Langdurig teveel werken leidt tot risico's voor jezelf en je onderneming.`,
        ],
        //Conclusie vragen 4 & 6
        ConclusieV2: [
          // Conclusie 2.0 | 4 >0,5 AND 6 daalt of gelijk | oranje
          `Het lijkt dat je te weinig aan innovatie en verbetering doet. Kijk eens kritisch naar interne processen en marktontwikkelingen, en probeer je producten/diensten en interne processen aan te passen aan de snel veranderende marktomstandigheden en de technologische vooruitgang.`,
          // Conclusie 2.1 | 4 <0,5 AND 6 daalt of gelijk OF 5 daalt of gelijk | rood
          `Je doet aan innovatie en vernieuwing, maar dit lijkt nog onvoldoende effect te hebben op je omzet en resultaat. Stel jezelf daarom de vraag of je wel het juiste hebt ontwikkeld. Laat eens iemand op meer afstand van je organisatie meekijken, om op dit aspect conclusies te kunnen trekken en vervolgens scherpe keuzes te maken.`,
        ],
      }; //end return
    }, //end data
  }; // end export
  

function resultaatScore(opmerkingen){

// haal store op
const vraag1 = {
    label = this.$store.getters.getAntwoord(`vraag1`).label,
    waarde = this.$store.getters.getAntwoord(`vraag1`).waarde}

const vraag2 = {
  label = this.$store.getters.getAntwoord(`vraag2`).label,
  waarde = this.$store.getters.getAntwoord(`vraag2`).waarde}

const vraag3 = {
  label = this.$store.getters.getAntwoord(`vraag3`).label,
  waarde = this.$store.getters.getAntwoord(`vraag3`).waarde}

const vraag4 = {
  label = this.$store.getters.getAntwoord(`vraag4`).label,
  waarde = this.$store.getters.getAntwoord(`vraag4`).waarde}
    
const vraag5 = {
  label = this.$store.getters.getAntwoord(`vraag5`).label,
  waarde = this.$store.getters.getAntwoord(`vraag5`).waarde}

const vraag6 = {
  label = this.$store.getters.getAntwoord(`vraag6`).label,
  waarde = this.$store.getters.getAntwoord(`vraag6`).waarde}

const vraag7 = {
  label = this.$store.getters.getAntwoord(`vraag7`).label,
  waarde = this.$store.getters.getAntwoord(`vraag7`).waarde}    

// variable resultaat opbouw
const resultaat = {
  vraag1 = {opmerking = "", berekening = "", totaal = "", score = ""},
  vraag2 = {opmerking = "", berekening = "", totaal = "", score = ""},
  vraag3 = {opmerking = "", berekening = "", totaal = "", score = ""},
  vraag4 = {opmerking = "", berekening = "", totaal = "", score = ""},
  vraag5 = {opmerking = "", berekening = "", totaal = "", score = ""},
  vraag6 = {opmerking = "", berekening = "", totaal = "", score = ""},
  vraag7 = {opmerking = "", berekening = "", totaal = "", score = ""},
  conclusieKleur = "",
  conclusie1 = {opmerking = "", score = ""},
  conclusie2 = {opmerking = "", score = ""},
}

function convertStrToNum(string){
  let value = Number(string.replace(".",""));
  return value;
}

// score waardes
const groen = 1;
const oranje = 5;
const rood = 20;

// statement vraag 1

// bereken totaal
const totaal = convertStrToNum(valueV1[0]) + convertStrToNum(valueV1[1]) + convertStrToNum(valueV1[2]) + convertStrToNum(valueV1[3]) + convertStrToNum(valueV1[4]);
resultaat.vraag1.totaal = totaal;

if( vraag1.waarde <2 ){
  resultaat.vraag1.opmerking = opmerkingen.OpmerkingenV1[0].valueV1[0];
  resultaat.vraag1.berekening = (convertStrToNum(valueV1[0]) / totaal) * 100;
}
else if(vraag1.waarde >=2 && vraag1.waarde < 10 ){
  resultaat.vraag1.opmerking = opmerkingen.OpmerkingenV1[1].valueV1[1];
  resultaat.vraag1.berekening = (convertStrToNum(valueV1[1]) / totaal) * 100;
}
else if(vraag1.waarde >=10 && vraag1.waarde < 50 ){
  resultaat.vraag1.opmerking = opmerkingen.OpmerkingenV1[1].valueV1[2];
  resultaat.vraag1.berekening = (convertStrToNum(valueV1[2]) / totaal) * 100;
}
else if(vraag1.waarde >=50 && vraag1.waarde < 100 ){
  resultaat.vraag1.opmerking = opmerkingen.OpmerkingenV1[1].valueV1[3];
  resultaat.vraag1.berekening = (convertStrToNum(valueV1[3]) / totaal) * 100;
}
else if(vraag1.waarde >=100 && vraag1.waarde < 250 ){
  resultaat.vraag1.opmerking = opmerkingen.OpmerkingenV1[1].valueV1[4];
  resultaat.vraag1.berekening = (convertStrToNum(valueV1[4]) / totaal) * 100;
}
else if(vraag1.waarde >=250){
  resultaat.vraag1.opmerking = opmerkingen.OpmerkingenV1[2];
}
else{
  resultaat.vraag1.opmerking = "FOUT: WAARDE VRAAG 1 BUITEN BEREIK";
  resultaat.vraag1.totaal = 0;
}


// statement vraag 2

const scaleMax = 65;
const scaleMaxGraden = 180;
resultaat.vraag2.berekening = (scaleMaxGraden/scaleMax) * vraag2.waarde;

if( vraag2.waarde < 55 ){
  resultaat.vraag2.opmerking = opmerkingen.OpmerkingenV2[0]; 
  resultaat.vraag2.score = groen;
}
else if(vraag2.waarde >= 55 && vraag2.waarde < 65 ){
  resultaat.vraag2.opmerking = opmerkingen.OpmerkingenV2[1];
  resultaat.vraag2.score = oranje;
}
else if(vraag2.waarde > 65){
  resultaat.vraag2.opmerking = opmerkingen.OpmerkingenV2[2];
  resultaat.vraag2.score = rood;
}
else{
  resultaat.vraag2.opmerking = "FOUT: WAARDE VRAAG 2 BUITEN BEREIK";
  resultaat.vraag2.berekening = 0;
}


// statement vraag 3
resultaat.vraag3.totaal = 100;
resultaat.vraag3.berekening = (vraag3.waarde/resultaat.vraag3.totaal) * 100;

if( vraag3.waarde < 45 ){
  resultaat.vraag3.opmerking = opmerkingen.OpmerkingenV3[0];
  resultaat.vraag3.score = groen; 
}
else if(vraag3.waarde >= 45 && vraag3.waarde < 60 ){
  resultaat.vraag3.opmerking = opmerkingen.OpmerkingenV3[1];
  resultaat.vraag2.score = oranje;
}
else if(vraag3.waarde > 60){
  resultaat.vraag3.opmerking = opmerkingen.OpmerkingenV3[2];
  resultaat.vraag2.score = rood;
}
else{
  resultaat.vraag3.opmerking = "FOUT: WAARDE VRAAG 3 BUITEN BEREIK";
  resultaat.vraag3.berekening = 0;
}


// statement vraag 4
if( vraag4.waarde === 1 ){
  resultaat.vraag4.opmerking = opmerkingen.OpmerkingenV4[0];
  resultaat.vraag4.score = groen; 
}
else if(vraag4.waarde === 2 ){
  resultaat.vraag4.opmerking = opmerkingen.OpmerkingenV4[1];
  resultaat.vraag4.score = oranje; 
}
else if(vraag4.waarde === 3 ){
  resultaat.vraag4.opmerking = opmerkingen.OpmerkingenV4[2];
  resultaat.vraag4.score = rood; 
}
else{
  resultaat.vraag4 = "FOUT: WAARDE VRAAG 4 BUITEN BEREIK";
}

// statement vraag 5 & 6
// 5 = 1 en 6 - 1 tot 3
if( vraag5.waarde === 1 && vraag6.waarde === 1 ){
  resultaat.vraag6.opmerking = opmerkingen.OpmerkingenV6[0];
  resultaat.vraag6.score = groen; 
}
else if( vraag5.waarde === 1 && vraag6.waarde === 2 ){
  resultaat.vraag6.opmerking = opmerkingen.OpmerkingenV6[1];
  resultaat.vraag6.score = oranje; 
}
else if( vraag5.waarde === 1 && vraag6.waarde === 3 ){
  resultaat.vraag6.opmerking = opmerkingen.OpmerkingenV6[2];
  resultaat.vraag6.score = rood; 
}
// 5 = 2 en 6 - 1 tot 3
else if( vraag5.waarde === 2 && vraag6.waarde === 1 ){
  resultaat.vraag6.opmerking = opmerkingen.OpmerkingenV6[4];
  resultaat.vraag6.score = groen; 
}
else if( vraag5.waarde === 2 && vraag6.waarde === 2 ){
  resultaat.vraag6.opmerking = opmerkingen.OpmerkingenV6[5];
  resultaat.vraag6.score = oranje; 
}
else if( vraag5.waarde === 2 && vraag6.waarde === 3 ){
  resultaat.vraag6.opmerking = opmerkingen.OpmerkingenV6[6];
  resultaat.vraag6.score = rood; 
}
// 5 = 3 en 6 - 1 tot 3
else if( vraag5.waarde === 3 && vraag6.waarde === 1 ){
  resultaat.vraag6.opmerking = opmerkingen.OpmerkingenV6[7];
  resultaat.vraag6.score = oranje; 
}
else if( vraag5.waarde === 3 && vraag6.waarde === 2 ){
  resultaat.vraag6.opmerking = opmerkingen.OpmerkingenV6[8];
  resultaat.vraag6.score = oranje; 
}
else if( vraag5.waarde === 3 && vraag6.waarde === 3 ){
  resultaat.vraag6.opmerking = opmerkingen.OpmerkingenV6[9];
  resultaat.vraag6.score = rood; 
}
// fout vraag 5 of 6
else{
  if(vraag5.waarde > 3){
    resultaat.vraag5.opmerking = "FOUT: WAARDE VRAAG 5 BUITEN BEREIK";
  }
  else{
    resultaat.vraag6.opmerking = "FOUT: WAARDE VRAAG 6 BUITEN BEREIK";
  }
  resultaat.vraag5.score = 0;
}


// statement vraag 7
if( vraag7.waarde >= 8 ){
  resultaat.vraag7.opmerking = opmerkingen.OpmerkingenV7[0];
  resultaat.vraag7.score = groen; 
}
else if(vraag7.waarde >= 6 && vraag7.waarde < 8 ){
  resultaat.vraag7.opmerking = opmerkingen.OpmerkingenV7[1];
  resultaat.vraag7.score = oranje; 
}
else if(vraag7.waarde < 6 ){
  resultaat.vraag7.opmerking = opmerkingen.OpmerkingenV7[2];
  resultaat.vraag7.score = rood; 
}
else{
  resultaat.vraag7 = "FOUT: WAARDE VRAAG 7 BUITEN BEREIK";
}

// conclusie
// overal kleur
// bereken totaal score
const totaalScore = resultaat.vraag1.score + resultaat.vraag2.score + resultaat.vraag3.score + resultaat.vraag4.score + resultaat.vraag5.score + resultaat.vraag6.score;

if(totaalScore <= 17){
  resultaat.conclusieKleur = groen;
}
else if(totaalScore > 17 && totaalScore <= 85){
  resultaat.conclusieKleur = oranje;
}
else if(totaalScore > 85){
  resultaat.conclusieKleur = rood;
}
else{
  resultaat.conclusieKleur = 0;
}

// conclusie 1: vraag 1,2,5 & 6
if(vraag1.waarde  > 1 && vraag1.waarde <= 50 && vraag2.waarde  > 65){
  if(vraag5.waarde === 1 && vraag6.waarde === 1 || vraag6.waarde === 2){
    resultaat.conclusie1.opmerking = opmerkingen.ConclusieV1[0];
    resultaat.conclusie1.score = oranje;
  }
  else if(vraag5.waarde === 2 || vraag5.waarde === 3 && vraag6.waarde === 2 || vraag6.waarde === 3){
    resultaat.conclusie1.opmerking = opmerkingen.ConclusieV1[1];
    resultaat.conclusie1.score = rood;
  }
  else if(vraag5.waarde === 2 || vraag5.waarde === 3 && vraag6.waarde === 1 ){
    resultaat.conclusie1.opmerking = opmerkingen.ConclusieV1[2];
    resultaat.conclusie1.score = oranje;
  }
}

// conclusie 2: vraag 4 & 6



// end function score
}