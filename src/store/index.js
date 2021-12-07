import { createStore } from "vuex";

const store = createStore({
    state: {
        ANTWOORD: {
            vraag1:{label:'test',waarde:'123'},
            vraag2:{label:'',waarde:''},
            vraag3:{label:'',waarde:''},
            vraag4:{label:'',waarde:''},
            vraag5:{label:'',waarde:''},
            vraag6:{label:'',waarde:''},
            vraag7:{label:'',waarde:''},
        }
    },
    mutations: {
        setAntwoord: (state, mutation) => {
            state.ANTWOORD[mutation.vraag].label = mutation.label;
            state.ANTWOORD[mutation.vraag].waarde = mutation.waarde;
        },
    },
    getters: {
        getAntwoord: (state) => (vraag) => {return state.ANTWOORD[vraag];}
    },
});

export default store;

