<template>
  <h3 class="header" role="heading">Hoeveel plezier heb je in je werk op een schaal van 1 tot 10?</h3>
  <div class="container-vragen">
    <i class="fa fa-frown-o" aria-hidden="true"></i>
    <input
      type="range"
      min=1
      max=10
      v-model="value"
      @change='opslag("",value)'
    />
    <label>{{value}}</label>
    <i class="fa fa-smile-o" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vraag: "vraag7",
      value: 5,
    };
  },
 
  methods: {
    opslag(label, waarde) {
      this.$store.commit('setAntwoord',{
        vraag:this.vraag,
        label:label,
        waarde:waarde
      });
    },
  },
};
</script>
