

// export function opslag(label, waarde) {
//       this.$store.commit('setAntwoord',{
//         vraag:this.vraag,
//         label:label,
//         waarde:waarde
//       })
//   } 
    

  // function save(storeAdress, name, label, value){
  //   this.$store.commit(storeAdress, {
  //     name: name,
  //     label: label,
  //     value: value 
  //   })

  // }

  // function that controles a analoge meter
  //
  // input
  //
  // scaleInput value - the value that the pointer will point to
  // valueMin - the minimum value of the meterdial
  // valueMax - the maximum value of the meterdial
  // degMax - the minimum amount of degrees the meter will have
  // degMix - the maximum value of degrees the meter will have
  // reverseDirection - invert degree output
  //
  // output
  //
  // meterOutput.pointerValue - the value the pointer will indicate
  // meterOutput.pointerDeg - the pointer position on the meter in degrees  
  // meterOutput.valueMin - the minimum value of the meterdial
  // meterOutput.valueMax - the maximum value of the meterdial
  // meterOutput.status - display status messages about the AnalogeMeter
  export function AnalogMeter(scaleInputValue, settings={valueMax : "", valueMin : 0, degMax : 180, degMin : 0, reverseDirection : false}){

    // output
    const meterOutput = {pointerValue:settings.valueMin, pointerDeg:settings.degMin, valueMin:settings.valueMin, valueMax:settings.valueMax,maxDeg:settings.degMax,degMax:settings.degMin ,status:""}    

    // check input
    if(settings.reverseDirection !== true && settings.reverseDirection !== false){
      settings.reverseDirection = false;
    }

    // status messages
    if( settings.valueMax === "" || settings.valueMax === undefined){
      meterOutput.status = "AnalogMeter: parameter fault - valueMax is undefined";
    }
    else if( settings.valueMin >= settings.valueMax){
      meterOutput.status = "AnalogMeter: parameter fault - valueMin is greater than or equal to valueMax";
    }
    else if( settings.degMin >= settings.degMax){
      meterOutput.status = "AnalogMeter: parameter fault - degMin is greater than or equal to degMax";
    }
    else{
    
      //calculate Dial parameters 
      const fsc_scaleDialValue = settings.valueMax - settings.valueMin;
      const fsc_scaleDialDeg = settings.degMax - settings.degMin;
      const fsc_DegToValue = fsc_scaleDialDeg / fsc_scaleDialValue;
      const fsc_valueMinCorrection = fsc_DegToValue * settings.valueMin;
      
      let fsl_pointerDeg = settings.degMin;


      meterOutput.pointerValue = scaleInputValue
      
      // pointer controle
      fsl_pointerDeg = fsc_DegToValue * scaleInputValue - fsc_valueMinCorrection;
      if( fsl_pointerDeg > settings.degMax){
        meterOutput.pointerDeg = settings.degMax;
        meterOutput.status = `AnalogMeter: warning - pointer exceeding maximum degree limit pointerDeg=${fsl_pointerDeg}, degMax=${settings.degMax}`;
      }  
      else if( fsl_pointerDeg < settings.degMin){
        meterOutput.pointerDeg = settings.degMin;
        meterOutput.status = `AnalogMeter: warning - pointer exceeding minimum degree limit pointerDeg=${fsl_pointerDeg}, degMin=${settings.degMin}`;
      }  
      else {
      // pointer direction;
        if(settings.reverseDirection) meterOutput.pointerDeg = (fsl_pointerDeg * -1);       
        else meterOutput.pointerDeg = fsl_pointerDeg;
      }
      // meter status oke
      meterOutput.status = `AnalogMeter: pointerDeg=${fsl_pointerDeg}, pointerValue=${scaleInputValue}`;
    
    }
    return meterOutput;
  }

  // export default AnalogMeter;