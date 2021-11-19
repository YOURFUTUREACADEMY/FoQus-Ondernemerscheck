<template>
  <div>
    <header role="banner">
      <img
        class="foqusLogo"
        src="../assets/images/FoQus-Werkt.jpg"
        role="figure"
      />
    </header>

    <main>
      <section class="contentinfo">
        <h3>Jouw score is:{{"TO DO score value"}}</h3>
        <div class="Score-bubble">
        </div>  
      </section>
      <section class="TO DO verwijderen">
        <h3>Antwoord vraag 1: {{this.$store.state.antwoordVraag1.waarde}}</h3>
        <h3>Antwoord vraag 2: {{this.$store.state.antwoordVraag2.waarde}}</h3>
        <h3>Antwoord vraag 3: {{this.$store.state.antwoordVraag3.waarde}}%</h3>
        <h3>Antwoord vraag 4: {{this.$store.state.antwoordVraag4.waarde}}</h3>
        <h3>Antwoord vraag 5: {{this.$store.state.antwoordVraag5.waarde}}</h3>
        <h3>Antwoord vraag 6: {{this.$store.state.antwoordVraag6.waarde}}</h3>
        <h3>Antwoord vraag 7: {{this.$store.state.antwoordVraag7.waarde}}</h3>
        <button class="backBtn" @click="$router.push('/')">
          terug naar begin
        </button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "scorescherm",
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
    };
  },
};
</script>
