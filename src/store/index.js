import { createStore } from "vuex";

const store = createStore({
    state: {
        antwoordVraag1: { waarde: "" },
        antwoordVraag2: { waarde: "" },
        antwoordVraag3: { waarde: "" },
        antwoordVraag4: { waarde: "" },
        antwoordVraag5: { waarde: "" },
        antwoordVraag6: { waarde: "" },
        antwoordVraag7: { waarde: "" }
    },
    mutations: {
        setAntwoordVraag1: (state, payload) => {
            state.antwoordVraag1.waarde = payload;
        },
        setAntwoordVraag2: (state, payload) => {
            state.antwoordVraag2.waarde = payload;
        },
        setAntwoordVraag3: (state, payload) => {
            state.antwoordVraag3.waarde = payload;
        },
        setAntwoordVraag4: (state, payload) => {
            state.antwoordVraag4.waarde = payload;
        },
        setAntwoordVraag5: (state, payload) => {
            state.antwoordVraag5.waarde = payload;
        },
        setAntwoordVraag6: (state, payload) => {
            state.antwoordVraag6.waarde = payload;
        },
        setAntwoordVraag7: (state, payload) => {
            state.antwoordVraag7.waarde = payload;
        }
    },
    getters: {
        getAntwoordVraag1: (state) => {state.antwoordVraag1.waarde;},
        getAntwoordVraag2: (state) => {state.antwoordVraag2.waarde;},
        getAntwoordVraag3: (state) => {state.antwoordVraag3.waarde;},
        getAntwoordVraag4: (state) => {state.antwoordVraag4.waarde;},
        getAntwoordVraag5: (state) => {state.antwoordVraag5.waarde;},
        getAntwoordVraag6: (state) => {state.antwoordVraag6.waarde;},
        getAntwoordVraag7: (state) => {state.antwoordVraag7.waarde;}
    },
});

export default store;

