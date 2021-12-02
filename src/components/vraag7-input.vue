<template>
  <h3 class="header" role="heading">Hoeveel plezier heb je in je werk op een schaal van 1 tot 10?</h3>
  <div class="container-vragen">
    <div class="d-flex flew-column d-flex justify-content-center mt-5">
      <i class="fa fa-frown-o mt-2 me-3" aria-hidden="true"></i>
      <input
        class="range-input form-range w-25"
        type="range"
        min=1
        max=10
        v-model="value"
        @change='opslag("",value)'
      />
      <label class="form-label mt-1 mx-2">{{value}}</label>
      <i class="fa fa-smile-o mt-2 mx-3" aria-hidden="true"></i>
    </div>
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
