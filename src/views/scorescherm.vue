<template>
	<main class="section-score">
		<hr class="hl py-2 mb-0" />
		<div class="d-flex">
			<div class="container-score">
				<h3 class="header text-center-score">Jouw score</h3>
				<div class="row mt-4">
					<div class="col-xxl-12">
						<section
							id="uitslag"
							class="
								row
								align-items-center
								d-flex
								flex-column
								justify-content-center
							"
						>
							<div
								class="
									col-md-6
									scoreMeterContainer
									d-flex
									justify-content-center
								"
							>
								<AnalogVolMeter
									class="meter"
									:value="score"
									:settings="meterSettings"
									v-on:meter="meterData"
								></AnalogVolMeter>
							</div>
							<div class="col-md-11 d-flex row justify-content-center">
								<p class="text-score">{{ scoreCondition.visual.signaal }}.</p>
							</div>
							<section id="emailForm" class="d-flex flex-column">
								<div class="scoreFlex">
									<form class="form-score">
										<div class="row mb-3 form-row">
											<label
												class="
													col-sm-3 col-form-label
													text-score
													d-flex
													justify-content-center
													justify-content-sm-center
													justify-content-lg-start
													justify-content-xl-start
												"
												for="naam"
												>Naam:</label
											>
											<div class="col-5 d-flex justify-content-center">
												<input
													class="form-control"
													type="text"
													id="naam"
													v-model="name"
												/>
											</div>
										</div>
										<div class="row mb-3 form-row">
											<label
												class="
													col-sm-3 col-form-label
													text-score
													d-flex
													justify-content-center
													justify-content-sm-center
													justify-content-lg-start
													justify-content-xl-start
												"
												for="email"
												>Emailadres:</label
											>
											<div class="col-5 d-flex justify-content-center">
												<input
													class="form-control"
													type="email"
													name="email"
													id="email"
													v-model="email"
												/>
											</div>
										</div>

										<div class="d-flex flex-column m-2">
											<button
												type="button"
												class="btn btn-primary adviesBtn"
												:class="sendButton"
												onSubmit="return false;"
												@mouseup="sendPDF()"
											>
												Ik ontvang graag het volledige rapport per mail
											</button>
										</div>
										<div class="text-danger">
											<p class="p-1 m-1">
												Natuurlijk wil je niet iedereen zomaar je naam en email
												adres geven. Dat snappen we. We zijn zelf ook
												ondernemers en wars van alle ongevraagde spam die we
												ontvangen. Wij gebruiken deze gegevens alleen om je jouw
												ondernemers-check <br />
												rapportage toe te kunnen sturen en indien nodig te
												voorzien van extra toelichting naar aanleiding van je
												uitkomsten. Voor verder contact laten we het initiatief
												aan jou, zoals wij vinden dat dat hoort. Verder
												gebruiken we de geanonimiseerde gegevens van door jouw
												ingevulde ondernemers-check voor analyse en
												onderzoeksdoeleinden en om onze dienstverlening te
												verbeteren.
											</p>
										</div>
									</form>
								</div>
							</section>
						</section>
					</div>
					<div class="col-sm-4 align-self-center">
						<img
							src="../assets/images/FoQus-Raport.png"
							class="img-fluid img-score foqusRaport"
						/>
					</div>
				</div>
			</div>
		</div>
		<!-- TO DO Sectie hier onder verwijderen !! -->
		<section v-if="testMode" class="TO DO verwijderen mt-5">
			<br />
			<!-- TO DO storetest knop verwijderen -->
			<button class="backBtn" @mouseup="$router.push('/')">
				terug naar begin
			</button>
			<!-- TO DO storetest knop verwijderen -->
			<button class="volgendeBtn" @mouseup="this.$router.push('/testMenu')">
				REMOVE: go to test menu
			</button>
		</section>
	</main>
</template>

<script>
import AnalogVolMeter from "../components/analog-vol-meter";
import { compose } from "../scripts/score.js";
import { sendToZap } from "../scripts/zapier.js";
import { scoreWaardes } from "../scripts/score.js";
import functions from "../scripts/functions.js";

require("@/styles/score.css");

export default {
	name: "scorescherm",
	data() {
		return {
			testMode: false,
			kleurCode: this.$store.getters.getResultaat("kleur"),
			score: this.$store.getters.getResultaat("score"),
			meter: "",
			meterSettings: {
				manMode: false,
				manValue: 50,
				valueMax: 100,
				valueMin: 5,
				degMax: 180,
				degMin: 0,
				degAdjust: 1,
				reverseDirection: true,
			},
			name: "",
			nameMissingMSG: "vul a.u.b uw naam in",
			nameOke: "",
			email: "",
			emailMissingMSG: "vul a.u.b uw email adres in, voorbeeld@mijndomein.nl",
			emailOke: "",
			// status state -> conditie -> kleurCode, class, label, image
			status: {
				slecht: {
					kleurCode: scoreWaardes.rood,
					class: "score-slecht",
					label: "Stop",
					signaal: `
          HET LIJKT HELAAS NIET ZO GOED TE GAAN \n \n
          Je hebt 7 vragen beantwoord die iets zeggen over hoe je ervoor staat als ondernemer. De antwoorden zijn niet goed of fout. In combinatie hebben ze wel een signaalfunctie. 
          Voor jou is dat signaal dat het noodzakelijk is om bij te sturen en gericht te verbeteren. En vooral heldere keuzes te maken om weer met plezier en succesvol te gaan ondernemen. 
          Op deze manier doorgaan lijkt riskant.`,
					image: "Bubble-rood.png",
				},
				gemiddeld: {
					kleurCode: scoreWaardes.oranje,
					class: "score-matig",
					label: "Let op",
					signaal: `
          ER IS AANDACHT NODIG \n \n
          Je hebt 7 vragen beantwoord die iets zeggen over hoe je ervoor staat als ondernemer. De antwoorden zijn niet goed of fout In combinatie hebben ze een signaalfunctie. 
          Voor jou is dat signaal dat er aandacht nodig is.`,
					image: "Bubble-oranje.png",
				},
				goed: {
					kleurCode: scoreWaardes.groen,
					class: "score-goed",
					label: "Ga zo door",
					signaal: `
          DAT ZIET ER GOED UIT \n \n
          Je hebt 7 vragen beantwoord die iets zeggen over hoe je ervoor staat als ondernemer. De antwoorden zijn niet goed of fout. In combinatie hebben ze wel een signaalfunctie. \n 
          Bij jou ziet het er ogenschijnlijk goed uit. Door te blijven focussen op de zaken die je succes en plezier brengen blijft het ondernemen leuk. Voorkom dat je verblind raakt door succes en blijf regelmatig kritisch kijken naar jezelf en je onderneming. Laat bijv. anderen eens meekijken om je te inspireren, zij zien vaak andere aspecten van je bedrijf.`,
					image: "Bubble-groen.png",
				},
			},
		}; //end return
	}, //end data
	components: {
		AnalogVolMeter,
	},
	created() {
		if (this.score == undefined) {
			this.$router.push("/");
		}
		if (this.$OTAP !== 3) {
			this.testMode = false;
		}
	},
	computed: {
		scoreCondition() {
			let visual = {
				image: "",
				class: "",
				signaal: "",
				label: "",
			};
			// zet conditie slecht
			if (this.kleurCode === this.status.slecht.kleurCode) {
				visual.image = this.status.slecht.image;
				visual.class = this.status.slecht.class;
				visual.label = this.status.slecht.label;
				visual.signaal = this.status.slecht.signaal;
			}
			// zet conditie gemiddeld
			else if (this.kleurCode === this.status.gemiddeld.kleurCode) {
				visual.image = this.status.gemiddeld.image;
				visual.class = this.status.gemiddeld.class;
				visual.label = this.status.gemiddeld.label;
				visual.signaal = this.status.gemiddeld.signaal;
			}
			// zet conditie gemiddelde
			else if (this.kleurCode === this.status.goed.kleurCode) {
				visual.image = this.status.goed.image;
				visual.class = this.status.goed.class;
				visual.label = this.status.goed.label;
				visual.signaal = this.status.goed.signaal;
			} else {
				visual.image = this.status.slecht.image;
			}
			return { visual };
		},
		// controle send button
		sendButton() {
			let className = "btnFormFault";
			// check if form is oke
			if (this.nameOke && this.emailOke) {
				className = "";
			}
			return className;
			// end send color button
		},
		// end computed
	},
	methods: {
		meterData(meter) {
			this.meter = meter;
		},
		async sendPDF() {
			// check invoer naam

			const borderColorFault = "#9e0000";
			const borderWidthFault = "3px";
			const borderColorGood = "#e7e6e6";
			const borderWidthGood = "1px";

			if (this.nameOke == false) {
				this.name = this.nameMissingMSG;
				document.getElementById("naam").style.borderColor = borderColorFault;
				document.getElementById("naam").style.borderWidth = borderWidthFault;
			} else {
				document.getElementById("naam").style.borderColor = borderColorGood;
				document.getElementById("naam").style.borderWidth = borderWidthGood;
			}
			// check invoer email
			if (this.emailOke == false) {
				this.email = this.emailMissingMSG;
				document.getElementById("email").style.borderColor = borderColorFault;
				document.getElementById("email").style.borderWidth = borderWidthFault;
			} else {
				document.getElementById("email").style.borderColor = borderColorGood;
				document.getElementById("email").style.borderWidth = borderWidthGood;
			}
			// validatie oke begin met data opbouw voor versturen
			if (this.nameOke && this.emailOke) {
				// build data
				let data = {
					eb: this.$OTAP,
					tb: 4,
					date: "",
					project: compose.rapport(this.$store.getters.getFullResultaat),
					naw: {},
				};

				// insert date
				const date = functions.date();
				data.date = date.full;

				// insert odd values
				data.project.score.visual = this.meter.pointerDeg.toFixed(2);

				// insert NAW data
				data.naw = { r: this.name, e: this.email };

				// maak JSON van data
				data = JSON.stringify(data);

				// verstuur data
				const response = await sendToZap(data);

				// controleer respone op succes
				if (response.status === "success") {
					this.name = "";
					this.email = "";
					this.$router.push("/outro");
				} else {
					alert(
						"Helaas is het niet gelukt om het rapport te verzenden probeer het nogmaals."
					);
				}
			}
			// end sendPDF function
		},
		// end methods
	},
	watch: {
		name: function () {
			const input = functions.validateInput(
				this.name,
				"string",
				this.nameMissingMSG
			);
			this.nameOke = input.valid;
		},
		email: function () {
			const input = functions.validateInput(
				this.email,
				"email",
				this.emailMissingMSG
			);
			this.emailOke = input.valid;
		},
	},
}; // end export
</script>
