<template>

  <h1 class="text-center " role="heading">Meter</h1>
    <input type="checkbox" id="metertype" name="metertype" v-model='meterSelector' value="false">
    <label class="text-score" for="metertype">Vol of Balance:{{meterTypeLabel}}</label>
    <div class="d-flex row">

      <div class="text-score d-flex justify-content-center">

        <p >Meter properties:</p>
        <div class="mx-3">
          <p>Min Deg:{{meterSettings.minDeg}}</p>
          <p>Max Deg:{{meterSettings.maxDeg}}</p>
          <p>Min Value:{{meterSettings.minValue}}</p>
          <p>Max Value:{{meterSettings.maxValue}}</p>
        </div>
        <div class="mx-3">
          <p>Man Mode:{{meterSettings.manMode}}</p>
          <p>Man Value:{{meterSettings.manValue}}</p>
          <p>Meter Adjustment Deg:{{meterSettings.adjustDeg}}</p>
        </div>
     
      <p class="text-score mx-3">Meter Function:</P>
        <div class="mx-3">
          <p>Status: {{meter.status}}</p>
          <p>Input value: {{meter.pointerValue}}</p>
          <p>Input lower value:{{meter.valueMin}}</p>
          <p>Input upper value:{{meter.valueMax}}</p>
          <p>Input min degree:{{meter.scaleMinDeg}}</p>
          <p>Input max degree:{{meter.scaleMaxDeg}}</p>
          <p>Output degree:{{meter.pointerDeg}}</p>
        </div>
      </div>  

      <div class="d-flex justify-content-center align-items-center">
        <div class="row form-group">
          <div class="col-auto">
            <input
              id="aantalUren"
              class="form-control"
              type="number"
              v-model="antwoord"
            /></div>
            <label class="col-auto col-form-label" for="aantalUren">{{(meter.pointerDeg)}}°</label>
           <p> {{(meter.pointerDeg * -1)}} </p>
        </div> 
    </div>
    
    <template v-if='meterSelector===false'>
      <AnalogBalanceMeter :value='antwoord' :settings='meterSettings' v-on:meter="meterData"></AnalogBalanceMeter>
    </template>
    <template v-if='meterSelector'>
      <AnalogVolMeter :value='antwoord' :settings='meterSettings' v-on:meter="meterData"></AnalogVolMeter>
    </template>

    <button class="btn" @click="$router.push('/testMenu')">
      Naar test menu 
    </button>
  </div>
</template>

<script>
import AnalogBalanceMeter from "../components/analog-balance-meter";
import AnalogVolMeter from "../components/analog-vol-meter";

export default {
  data() {
    return {
      meterSelector: false,
      meter: '',
      antwoord:50,
      vraag: "vraag2",
      meterSettings: {
        manMode: false,
        manValue: 50,
        valueMax: 100,
        valueMin: 0,
        degMax: 173,
        degMin: 0,
        degAdjust: 1,
        reverseDirection: false,
      },
    // einde return    
    };
  // einde data
  },
  components: {
   AnalogVolMeter,
   AnalogBalanceMeter,
  },
  computed:{
    meterTypeLabel(){
      let metertype;
      if(this.meterSelector){
        metertype = "Vol"
      }
      else{
        metertype = "Balance"
      }
      return metertype;
    }
  },
  methods:{
    meterData(meter){
      this.meter = meter
    }
  }
// einde export  
};
</script>
<style scoped>
  .rotated {
    width: 80px;
    height: 80px;
    background-color: pink;
  }
</style>