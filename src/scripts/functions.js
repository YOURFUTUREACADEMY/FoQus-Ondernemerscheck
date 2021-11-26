 export function opslag(label, waarde) {
    this.$store.commit('setAntwoord',{
      vraag:this.vraag,
      label:label,
      waarde:waarde
    });
  }

