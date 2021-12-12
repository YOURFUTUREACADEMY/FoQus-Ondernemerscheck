<template>

  <h1 class="header text-center" role="heading">Balance Meter</h1>
    <div class="d-flex row">
      <div class="text-score d-flex justify-content-center">
        <p class="text-score">Meter properties:</p>
        <div class="mx-3">
          <p>Min Deg:{{meterSettings.minDeg}}</p>
          <p>Max Deg:{{meterSettings.maxDeg}}</p>
          <p>Min Value:{{meterSettings.minValue}}</p>
          <p>Max Value:{{meterSettings.maxValue}}</p>
        </div>
        <div>
          <p>Man Mode:{{meterSettings.manMode}}</p>
          <p>Man Value:{{meterSettings.manValue}}</p>
          <p>Meter Adjustment Deg:{{meterSettings.adjustDeg}}</p>
        </div>
      </div>  
      <div class="container-vragen d-flex justify-content-center align-items-center">
        <div class="row form-group">
          <div class="col-auto">
            <input
              id="aantalUren"
              class="form-control"
              type="number"
              v-model="antwoord"
            /></div>
            <label class="col-auto col-form-label" for="aantalUren">{{meter.pointerDeg}}°</label>
        </div> 
    </div>
    
    <AnalogMeter :value='antwoord' :settings='meterSettings' v-on:meter="meterData"></AnalogMeter>

    <button class="btn" @click="$router.push('/testMenu')">
      Naar test menu 
    </button>
  </div>
</template>

<script>
import AnalogMeter from "../components/analog-vol-meter";

export default {
  data() {
    return {
      meter: '',
      antwoord:50,
      vraag: "vraag2",
      meterSettings: {
        adjustDeg: 0,
        manMode: false,
        manValue: 50,
        maxValue: 125,
        minValue: 25,
        maxDeg: 180,
        minDeg: 0,
      },
    // einde return    
    };
  // einde data
  },
  components: {
   AnalogMeter,
  },
  methods:{
    meterData(meter){
      this.meter = meter
    }
  }
// einde export  
};
</script>
