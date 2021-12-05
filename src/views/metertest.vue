<template>
  <h1 class="header text-center" role="heading">Hoeveel uur besteed jij per week aan je bedrijf?</h1>
  <div class="container-vragen d-flex justify-content-center align-items-center">
    <div class="row form-group">
      <div class="col-auto">
        <input
          id="aantalUren"
          class="form-control"
          type="number"
          v-model="antwoord"
        /></div>
        <label class="col-auto col-form-label" for="aantalUren">{{wijzerStand}}°</label>
    </div> 
        
 </div>
  <AnalogMeter :value='antwoord' :settings='meterSettings'></AnalogMeter>
</template>

<script>
import AnalogMeter from "../components/analog-meter";

export default {
  data() {
    return {
      wijzerStand:"",
      antwoord:"",
      vraag: "vraag2",
      meterSettings: {
        manMode: false,
        manValue: 0,
        maxValue: 100,
        minValue: 0,
        maxDeg: 180,
        minDeg: 0,
      },
      // meterValueMan: 90,
      // meterValueAuto: 0,
    // einde return    
    };
  // einde data
  },
  components: {
   AnalogMeter,
  },
  methods:{
  }
// einde export  
};
</script>
