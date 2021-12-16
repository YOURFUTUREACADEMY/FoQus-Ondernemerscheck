

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


// var window_width = 0;
// var window_height = 0;



// function getSize(){
// 		window_width = window.innerWidth;
// 		window_height = window.innerHeight;
// }


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

// export default AnalogMeter;