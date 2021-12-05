

  // function opslag(label, waarde) {
  //     this.$store.commit('setAntwoord',{
  //       vraag:this.vraag,
  //       label:label,
  //       waarde:waarde
  //     })
  // } 
    

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
  // scaleMinValue - the minimum value of the meterdial
  // scaleMaxValue - the maximum value of the meterdial
  // scaleMinValue - the minimum amount of degrees the meter will have
  // scaleMaxValue - the maximum value of degrees the meter will have
  //
  // output
  //
  // meterOutput.pointerValue - the value the pointer will indicate
  // meterOutput.pointerDeg - the pointer position on the meter in degrees  
  // meterOutput.valueMin - the minimum value of the meterdial
  // meterOutput.valueMax - the maximum value of the meterdial
  // meterOutput.status - display status messages about the AnalogeMeter
  function AnalogMeter(scaleInputValue , scaleMaxValue, scaleMinValue = 0, scaleMaxDeg = 180, scaleMinDeg = 0){

    const meterOutput = {pointerValue:scaleMinValue, pointerDeg:scaleMinDeg, valueMin:scaleMinValue, valueMax:scaleMaxValue, status:""}

    // status messages
    if( scaleMinValue >= scaleMaxValue){
      meterOutput.status = "AnalogMeter: parameter fault - scaleMinValue is greater that or equal to scaleMaxValue";
    }
    else if( scaleMinDeg >= scaleMaxDeg){
      meterOutput.status = "AnalogMeter: parameter fault - scaleMinDeg is greater that or equal to scaleMaxDeg";
    }
    else{
    
      //calculate Dial parameters 
      const fsc_scaleDialValue = scaleMaxValue - scaleMinValue;
      const fsc_scaleDialDeg = scaleMaxDeg - scaleMinDeg;
      let fsl_pointerDeg = scaleMinDeg;

      meterOutput.pointerValue = scaleInputValue;
      
      // pointer controle
      fsl_pointerDeg = (fsc_scaleDialDeg/fsc_scaleDialValue ) * scaleInputValue;
      if( fsl_pointerDeg > scaleMaxDeg){
        meterOutput.pointerDeg = scaleMaxDeg;
        meterOutput.status = `AnalogMeter: warning - pointer exceeding maximum degree limit pointerDeg=${fsl_pointerDeg}, scaleMaxDeg=${scaleMaxDeg}`;
      }  
      else if( fsl_pointerDeg < scaleMinDeg){
        meterOutput.pointerDeg = scaleMinDeg;
        meterOutput.status = `AnalogMeter: warning - pointer exceeding minimum degree limit pointerDeg=${fsl_pointerDeg}, scaleMinDeg=${scaleMinDeg}`;
      }  
      else meterOutput.pointerDeg = fsl_pointerDeg;       
      
      // meter status oke
      meterOutput.status = `AnalogMeter: pointerDeg=${fsl_pointerDeg}, pointerValue=${scaleInputValue}`;
    
    }
    return meterOutput;
  }

  export default AnalogMeter;