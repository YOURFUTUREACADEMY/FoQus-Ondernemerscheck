<template>
  <h1 class="header text-center" role="heading">Hoeveel plezier heb je in je werk op een schaal van 1 tot 10?</h1>
 <div class="container-vragen d-flex justify-content-center align-items-center">
        <div class="form-group">
     <label class="form-control-range mx-2"> <i class="fa fa-frown-o " aria-hidden="true"></i></label>
      <input
        class="range-input form-control-range"
        type="range"
        min=1
        max=10
        v-model="value"
        @change='opslag("",value)'
      />
      <label class="form-control-range mx-2">{{value}} <i class="fa fa-smile-o " aria-hidden="true"></i></label>
      
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
