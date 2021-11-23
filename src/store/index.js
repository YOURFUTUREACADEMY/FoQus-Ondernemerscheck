import { createStore } from "vuex";

const store = createStore({
    state: {
        antwoord: {
            vraag1:'',
            vraag2:'',
            vraag3:'',
            vraag4:'',
            vraag5:'',
            vraag6:'',
            vraag7:'',
        }
    },
    mutations: {
        setAntwoord: (state, mutation) => {
            state.antwoord[mutation.vraag] = mutation.payload;
        },
    },
    getters: {
        getAntwoord: (state) => (vraag) => {return state.antwoord[vraag];}
    },
});

export default store;

