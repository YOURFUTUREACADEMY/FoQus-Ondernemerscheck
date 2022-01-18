//======================== Deze data staat in <script> boven de HTML in PDFmonkey.io Template XXXXXX ========================================
// data van de opmerkingen die getoond worden.
const opmerkingen = {

  //resultaat vragen
  vragen:{
    vraag1:{
      // Waarden die gebruikt worden voor de berekeningen en in de opmerkingen worden geplaatst
      waarden:["878.850","354.082","58.876","5.890","3.420"],
      opmerkingen:[
          // [0]: Placeholder voor logica
          'vraag 1 waarde is 0',
          // [1]: Opmerking resultaat vraag 1.0 | <2 | !WAARDE! wordt vervangen met een waarden
          `Jij valt onder de zelfstandigen, samen met 878.850 anderen bedrijven in Nederland.`,
          // [2]: Opmerking resultaat vraag 1.1 | >=2 tot <250 | !WAARDE! wordt vervangen met een waarden
          `Jouw bedrijf heeft dezelfde omvang als 354.082 anderen bedrijven in Nederland.`,
          // [3]: Opmerking resultaat vraag 1.2 | >=2 tot <250 | !WAARDE! wordt vervangen met een waarden
          `Jouw bedrijf heeft dezelfde omvang als 58.876 anderen bedrijven in Nederland.`,
          // [4]: Opmerking resultaat vraag 1.3 | >=2 tot <250 | !WAARDE! wordt vervangen met een waarden
          `Jouw bedrijf heeft dezelfde omvang als 5.890 anderen bedrijven in Nederland.`,
          // [5]: Opmerking resultaat vraag 1.4 | >=2 tot <250 | !WAARDE! wordt vervangen met een waarden
          `Jouw bedrijf heeft dezelfde omvang als 3.420 anderen bedrijven in Nederland.`,
          // [6]: Opmerking resultaat vraag 1.5 | >= 250
          `Jouw bedrijf is zo groot, dat we het statistisch niet eens meer weten. Goed bezig, denken we.`
      ]
    },
    vraag2:{
      opmerkingen:[  
      // [0]: Placeholder voor logica
      'vraag 2 waarde is 0',
      // [1]: Opmerking resultaat vraag 2.0 | <=55 | groen 
      `Prima! Zeker als je bedenkt dat een ondernemer gemiddled 55 uur werkt.`,
      // [2]: Opmerking resultaat vraag 2.1 | 55-65 | oranje
      `Je werkt meer uren dan de gemiddlde ondernemer, die werkt 55 uur. Let op dat het niet structureel wordt!`,
      // [3]: Opmerking resultaat vraag 2.2 | >65 | rood
      `Je werkt (te) veel! Iets om bij stil te staan. Een ondernemer werkt gemiddeld 55 uur. Structueel teveel uren werken is een risico.`
      ]
    },
    vraag3:{
      opmerkingen:[ 
      // [0]: Placeholder voor logica
      'vraag 3 waarde is 0',
      // [1]: Opmerking resultaat vraag 3.0 | <=45 | groen
      `Je hebt je omzet goed verspreid over meerdere klanten. Dat beperkt je risico wanneer er een klant wegvalt.`,
      // [2]: Opmerking resultaat vraag 3.1 | 45-60 | oranje
      `Je bent qua omzet afhankelijk van je 3 belangrijkste klanten. Realiseer jij je dat ?`,
      // [3]: Opmerking resultaat vraag 3.2 | >65 | rood
      `Je bent behoorlijk kwetsbaar. Je bent qua omzet sterk afhankelijk van 3 klanten. Wanneer er een wegvalt heeft dat grote impact!`
      ]
    },
    vraag4:{
      opmerkingen:[   
      // [0]: Placeholder voor logica
      'vraag 4 waarde is 0',
      // [1]: Opmerking resultaat vraag 4.0 | <= 0,5 jaar | groen
      `Als je in de markt wilt blijven meedoen bij de besten, moet je innoveren. Dat doe je goed!`,
      // [2]: Opmerking resultaat vraag 4.1 | 0,5 - 1,5 jaar | oranje
      `ls je in de markt wilt blijven meedoen moet je innoveren. Ook in jouw markt! Kun je frequenter innoveren?`,
      // [3]: Opmerking resultaat vraag 4.2 | >1,5 jaar | rood
      `Wil je mee blijven doen in de markt, dan wordt het wellicht tijd voor iets nieuws?! Dat doen andere succesvolle bedrijven ook.`
      ]
    },
    // Het resultaat van vraag 5 wordt verwerkt in vraag 6
    vraag5:{
      opmerkingen:[ 
      // [0]: Placeholder voor logica
      'vraag 5 waarde is 0',
      // [1]: Opmerking resultaat vraag 5.0 | zie vraag 6 | groen
      "n.v.t", 
      // [2]: Opmerking resultaat vraag 5.1 | zie vraag 6 | oranje
      "n.v.t",
      // [3]: Opmerking resultaat vraag 5.2 | zie vraag 6 | rood
      "n.v.t"
      ]
    },
    // Het resultaat van vraag 5 wordt verwerkt in vraag 6
    vraag6:{
      opmerkingen:[ 
      // [0]: Placeholder voor logica
      'vraag 6 groen waarde is 0',
      // [1]: Opmerking resultaat vraag 6.0 | 5 stijgt AND 6 stijgt | groen
      "Je realiseert winstgevende groei. Dat is de ware kunst. Compliment!",
      // [2]: Opmerking resultaat vraag 6.1 | 5 stijgt AND 6 blijft gelijk | oranje
      "Je omzet stijgt terwijl je resultaat gelijk blijft. Weet je waarom? Dit is een belangrijk signaal.",
      // [3]: Opmerking resultaat vraag 6.2 | 5 stijgt AND 6 daalt | rood
      "Je omzet stijgt terwijl je resultaat daalt. Je loopt daarmee risico dat het probleem steeds groter wordt.",
      // [4]: Opmerking resultaat vraag 6.3 | 5 blijft gelijk AND 6 stijgt | groen
      "Je omzet blijft gelijk terwijl je resultaat stijgt. Dat lijkt gunstig. Weet je waarom?",
      // [5]: Opmerking resultaat vraag 6.4 | 5 blijft gelijk AND 6 blijft gelijk | oranje
      "Je omzet blijft gelijk, je resultaat ook. Het lijkt alsof je stil staat, weet je de reden?",
      // [6]: Opmerking resultaat vraag 6.5 | 5 blijft gelijk AND 6 daalt | rood
      "Je omzet blijft gelijk terwijl je resultaat daalt. Dit houd je vaak niet lang vol en bijsturen is nodig.",
      // [7]: Opmerking resultaat vraag 6.6 | 5 daalt AND 6 stijgt | oranje
      "Je omzet daalt terwijl je resultaat stijgt. Is dit een bewuste keuze?",
      // [8]: Opmerking resultaat vraag 6.7 | 5 daalt AND 6 blijft gelijk | oranje
      "Je omzet daalt terwijl je resutaat gelijk blijft. Hoe zit het met je continuiteit, en je marktaandeel?",
      // [9]: Opmerking resultaat vraag 6.8 | 5 daalt AND 6 daalt | rood
      "Je omzet daalt en je resultaat daalt. Wat is er aan de hand? Dit vraagt om directe actie om je continuiteit te waarborgen!"
      ]
    },
    vraag7:{
      opmerkingen:[
      // Placeholder voor logica
      'vraag 7 waarde is 0',
      // [0]: Opmerking resultaat vraag 7.1 | >=8 | groen
      `Je vindt je werk erg leuk, en dat is fijn! Plezier vergroot vaak succes, en omgekeerd.`, 
      // [1]: Opmerking resultaat vraag 7.2 | >=6 and <8 | oranje
      `Je vindt je werk niet erg leuk. Wordt het tijd voor iets anders, of je werk anders doen?`,
      // [2]: Opmerking resultaat vraag 7.3 | <6 | rood
      `Je hebt niet al te veel plezier in je werk. Is het tijd om wat veranderingen aan te brengen? Weinig plezier helpt niet bij succes.`
      ]
    },
  // einde vragen
  },
  conclusies:{
    //Conclusie vragen 1,2,5 & 6
    conclusie1:[
      // [0]: Placeholder voor logica
      'conclusie 1 waarde is 0',
      // [1]: Conclusie 1.0 | 1=2-50, 2 >65, 5 stijgt, 6 stijgt of gelijk | oranje
      `Het lijkt heel goed te gaan met je onderneming; kwetsbaar lijkt de afhankelijkheid van jou. Tijdelijk kan dit prima maar het moet niet te lang duren. Advies is om het werk anders proberen te organiseren en je organisatie verder te professionaliseren.`,
      // [2]: Conclusie 1.1 | 1= 2-50, 2 >65, 5 gelijk of dalend, 6 stijgt | oranje
      `Je maakt scherpe keuzes die zorgen voor winstgevendheid. In de basis doe je dit goed. De vraag is of dit ook kan door minder hard of slimmer te werken, door zaken bijv. anders te organiseren. Langdurig teveel werken leidt tot risico's voor jezelf en je onderneming.`,
      // [3]: Conclusie 1.2 | 1= 2-50, 2 >65, 5 gelijk of dalend, 6 dalend of gelijk | rood
      `Je werkt zo hard dat dit risico's met zich meebrengt op vele vlakken. Dit is niet houdbaar voor langere tijd. Het is noodzaak om snel bij te sturen. Probeer met iemand die meer afstand van je bedrijf heeft kritisch naar je bedrijf te kijken om noodzakelijke keuzes goed te kunnen maken, en stuur dan bij!`
    ],
    //Conclusie vragen 4 & 6
    conclusie2:[
      // [0]: Placeholder voor logica
      'conclusie 2 waarde is 0',
      // [1]: Conclusie 2.0 | 4 >0,5 AND 6 daalt of gelijk | oranje
      `Het lijkt dat je te weinig aan innovatie en verbetering doet. Kijk eens kritisch naar interne processen en marktontwikkelingen, en probeer je producten/diensten en interne processen aan te passen aan de snel veranderende marktomstandigheden en de technologische vooruitgang.`,
      // [2]: Conclusie 2.1 | 4 <0,5 AND 6 daalt of gelijk OF 5 daalt of gelijk | oranje
      `Je doet aan innovatie en vernieuwing, maar dit lijkt nog onvoldoende effect te hebben op je omzet en resultaat. Stel jezelf daarom de vraag of je wel het juiste hebt ontwikkeld. Laat eens iemand op meer afstand van je organisatie meekijken, om op dit aspect conclusies te kunnen trekken en vervolgens scherpe keuzes te maken.`
    ],
    //Conclusie Totaal
    conclusie3:[
      // [0]: Placeholder voor logica
      'conclusie 3 waarde is 0',
      // [1]: Als conclusie 3.0 | conclusie 1 & 2 groen zijn  
      "Ook wanneer er niet direct een probleem is, is het goed om regelmatig en blijvend kritisch te kijken naar je organisatie. Om de juiste richting voor de toekomst te kiezen of om de gekozen richting te checken en waar nodig bij te sturen. Vernieuw sowieso je middellange termijnplanning om de 2-3 jaren. Dat houd je alert en fris. En spar met anderen (vooral ook buiten de branche, of een goede mentor) om scherp te blijven. De snelheid waarmee bijv. de Coronacrisis recent de wereld veranderde is daar een goed voorbeeld van."
    ],
    conclusie4:[
      // [0]: Placeholder voor logica
      'conclusie 4 waarde is 0',
      // [1]: Conclusie 4.0 | als vraag 1 > 2 
      "Als je hulp nodig hebt om betrokken kritisch en ook objectief met je mee te kijken, zodat je de juiste beslissingen kan nemen om succesvol te blijven ondernemen, zijn wij er voor je. Dat is ons vak, en we zijn er goed in. Neem daarom contact op voor een -online- kennismakingsgesprek en deel je ideëen eens met ons."
    ],
    conclusieAltijd:
      `Tegenwoordig hebben we allemaal de neiging om altijd ‘aan’ te staan. Altijd maar doorgaan en liefst op 110% lijkt voor velen de weg naar succes. 
      Zeker ondernemers hebben hier een handje van en werken gemiddeld 55 (!) uur per week in hun bedrijf, waar in loondienst 36 uur de norm voor voltijds werken is. Ondernemers raken ook niet direct gestrest van hard werken. 
      Maar als het dan even wat minder gaat zijn ondernemers veelal geneigd juist nog meer uren te maken, vaak ten koste van plezier en daarmee succes. 
      
      De meest succesvolle ondernemers werken echter niet harder, maar slimmer. Ze maken bijv. scherpe keuzes om werkzaamheden niet (meer) of niet (meer) zelf te doen. 
      Ze kiezen ervoor om naast hard te werken ook net zo hard te ontspannen (work hard, play hard) om de batterij weer op te laden. Om die balans te bereiken moet je die keuzes wel maken. Maak jij hierin al de juiste keuzes? Of kun je hier nog meer uithalen om meer succes en plezier te behalen? 
      
      Kijk maar eens hoe bijvoorbeeld topsporters dat doen. 
      Jouw werk is toch ook topsport?!
      Topsporters doen het ook niet alleen en verzamelen een team van begeleiders, coaches en specialisten om zich heen om succesvol te worden, en dat te blijven.
      Een valkuil voor veel ondernemers is dat ze alles vaak zelf willen oplossen, of zelf doen. Dat lukt tot op zekere hoogte wel maar staat een echte topprestatie meestal in de weg, of je brandt halverwege af door gebrek aan plezier en succes. 
      Een goed team om je heen en begeleiding vragen, of eens sparren is daarom geen zwakte maar juist een kracht!`,
    conclusieEinde:'Op naar meer plezier en succes, en meer topprestaties. Wat zou jij graag realiseren?'  
  // einde conlusies  
  }
// einde opmerkingen  
}

export default opmerkingen;