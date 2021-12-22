

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

  
// function to get browser window inner size
export function getWindowSize(){
  // variable
  const windowSize={height:0, width:0}
  // get size
  windowSize.height = window.innerHeight;
  windowSize.width = window.innerWidth;
  return windowSize;
}

// function to element size
export function getElementSize(elementID){
  // variable
  const element = document.getElementById(elementID);
  const elementSize ={height:0, width:0}  
  //get size
  elementSize.width = element.offsetWidth;
  elementSize.height = element.offsetHeight;
  return elementSize;
}

// function to set element position
export function setElementPosition(elementID, top, left, unit){
  const element = document.getElementById(elementID);
  if(unit === undefined || unit === ""){
    element.top = top + "px";
    element.left = left + "px";
  }
  else
  {
    element.top = top + unit;
    element.left = left + unit;  
  }
}

// function to set element size
export function setElementSize(elementID, height, width, unit){
  const element = document.getElementById(elementID);
  if(unit === undefined || unit === ""){
    element.height = height + "px";
    element.width = width + "px";
  }
  else
  {
    element.height = height + unit;
    element.width = width + unit;  
  }
}




// /* Calculate and set size */
// function SetSize(IDtag = "Element ID", DB_size_json ="") {

// /*function variables */
// 		/* Varibles JSON */
// 		var size_data = DB_size_json[IDtag];
				
// 		/* varibles */
// 		var settings = size_data.settings[0],
// 			offset = size_data.offset[0],
// 			margin = size_data.margin[0];
			
			
// 			/* offset */
// 		var	Offset_width = offset.Offset_width,
// 			Offset_height = offset.Offset_height,
// 			Offset_left = offset.Offset_left,
			
// 			/* margin */ 
// 			margin_top =  margin.margin_top,
// 			margin_right =  margin.margin_right,
// 			margin_bottom =  margin.margin_bottom,
// 			margin_left =  margin.margin_left;
			
			
// 		getSize();


// 		var project_screensize = 300, /* to do input for this value */
// 			project_offset = project_screensize / window_width,
// 			width_modifier = Offset_width - project_offset;

// 		/* Iframe width */
// 		if (typeof (Offset_width) === "number"){
// 		var Iframe_width =  ((window_width / 100)* width_modifier) ;
// 		document.getElementById(IDtag).style.width = Iframe_width + "px";
// 		};
		
// 		/* Iframe margin left */
// 		var Iframe_marginLeft = 0;
		
		
// 		if (margin_left == "auto"){
// 			Iframe_marginLeft = ((window_width - Iframe_width) + Offset_left)*0.5; 
// 				if (Iframe_marginLeft < 0){
// 					Iframe_marginLeft = 0;
// 				}
// 			//document.getElementById(IDtag).style.marginLeft = Iframe_marginLeft + "px";	
// 			SetMargin(IDtag, "left", Iframe_marginLeft, "px")
// 			}
// 		else{
// 			SetMargin(IDtag, "left", margin_left, "%")
// 		};
		
	
// 		/* Iframe height */	
// 		if (Offset_height != "auto" & Offset_height != null || typeof (Offset_height) === "number"){
// 		var Iframe_height = ((window_height / 100)* Offset_height);
// 		document.getElementById(IDtag).style.height = Iframe_height + "px";
// 		};
	
// /* Object margin */
// SetMargin(IDtag, "top", margin_top, "%");
// SetMargin(IDtag, "right", margin_right, "%");	
// SetMargin(IDtag, "bottom", margin_bottom, "%");		

/* End Size function */		
// }

export function sendToZap(url, data, options={methode:"POST"}){

  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // https://developer.mozilla.org/en-US/docs/Web/API/fetch
  
  fetch(url + "/?" + data,{options})

}


export function getObjectData(object, property){

  const objectPropertie = object[property];

  const key = [];
  const value = [];
  let number = 0;

  for(property in objectPropertie){
    key[number] = property;
    value[number] = objectPropertie[property].score;
    number++;
  }
  
  return{ key, value}
// end getObjectData
}

