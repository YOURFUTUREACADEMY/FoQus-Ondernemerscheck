import { createStore } from "vuex";
import BROWSER from "./modules/browser.js"

const store = createStore({
    modules:{
        BROWSER
    },
    state: {
        ANTWOORD: {
            vraag1:{label:'',waarde:1},
            vraag2:{label:'',waarde:40},
            vraag3:{label:'',waarde:0},
            vraag4:{label:'0,5 - 1,5 jaar',waarde:''},
            vraag5:{label:'Blijft Gelijk',waarde:''},
            vraag6:{label:'Blijft Gelijk',waarde:''},
            vraag7:{label:'',waarde:0},
        },

        //============================================================================================
        //
        //      Opbouw RESULTAAT
        //
        //      RESULTAAT = {
        //          vraag1 : {opmerking : "", berekening : "", totaal : "", score : ""},
        //          vraag2 : {opmerking : "", berekening : "", totaal : "", score : ""},
        //          vraag3 : {opmerking : "", berekening : "", totaal : "", score : ""},
        //          vraag4 : {opmerking : "", berekening : "", totaal : "", score : ""},
        //          vraag5 : {opmerking : "", berekening : "", totaal : "", score : ""},
        //          vraag6 : {opmerking : "", berekening : "", totaal : "", score : ""},
        //          vraag7 : {opmerking : "", berekening : "", totaal : "", score : ""},
        //          kleur : "",
        //          score : 0,
        //          conclusie1 : {opmerking : "", kleur:"", score : ""},
        //          conclusie2 : {opmerking : "", kleur:"", score : ""}, 
        //          conclusie3 : {opmerking : "", kleur:"", score : ""}, 
        //          conclusie4 : {opmerking : "", kleur:"", score : ""}, 
        //
        //=============================================================================================
        
        RESULTAAT: {
        }
    },
    mutations: {
        setAntwoord: (state, mutation) => {
            state.ANTWOORD[mutation.vraag].label = mutation.label;
            state.ANTWOORD[mutation.vraag].waarde = mutation.waarde;
        },
        setResultaat: (state, mutation) => { state.RESULTAAT = mutation; },
    },
    getters: {
        getAntwoord: (state) => (vraag) => {return state.ANTWOORD[vraag];},
        getFullAntwoord: (state) => {return state.ANTWOORD},
        getResultaat: state => (slot) => {return state.RESULTAAT[slot];},
        getFullResultaat: (state) => {return state.RESULTAAT}
    },
});

export default store;

