import { createStore } from "vuex";

const store = createStore({
    state: {
        vraag: 0,
        antwoordVraag1: { waarde: "" },
    },
    mutations: {
        setAntwoordVraag1: (state, payload) => {
            state.antwoordVraag1.waarde = payload;
        },
    },
    getters: {
        getAntwoordVraag1: (state) => {state.antwoordVraag1.waarde;},
    },
});

export default store;

