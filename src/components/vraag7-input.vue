<template>
  <div>
    <h3 role="heading">Hoeveel plezier heb je in je werk op een schaal van 1 tot 10?</h3>
    <i class="fa fa-frown-o" style="color:black" aria-hidden="true"></i>
    <input
      type="range"
      min=1
      max=10
      v-model="value"
      @change="opslag(value)"
    />
    <label>{{value}}</label>
    <i class="fa fa-smile-o" style="color:black" aria-hidden="true"></i>
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
    opslag(value) {
      this.$store.commit('setAntwoord',{vraag:this.vraag,payload:value});
    },
  },
};
</script>
