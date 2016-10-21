var rowTotal = 10;
var deliveryHeading = fld10050_42047_45263_id;
var deliveryHeadingID = $j(deliveryHeading).attr("id");
var deliveryComment = fld10050_41954_45170_id;
var deliveryCommentID = $j(deliveryComment).attr("id");
var deliverySections = new Array(rowTotal);

deliverySections[0] = {
	heading: "fld10050_42047_45263_id",
	age : "fld10050_41957_45173_span",
	deliveryType : "fld10050_42017_45233_span",
	treatmentGiven : "fld10050_42027_45243_span",
	treatmentPrevention : "fld10050_42037_45253_span",
	excessiveBleeding : "fld10050_41987_45203_span",
	excessiveBleedingTime : "fld10050_41997_45213_span",
	excessiveBleedingTreatment : "fld10050_41967_45183_span",
	excessiveBleedingTreatmentGiven : "fld10050_41977_45193_span",
	excessiveBleedingHospital : "fld10050_42007_45223_span",
	addSectionBtn : "fld10050_42107_45323_id",
	delSectionBtn : "fld10050_42117_45333_id"
}

$j(document).ready(function() {
		
	// Get the Yes/No element names for the appropriate field
	var deliveryYes = document.getElementsByName("fld10050_41952_45168")[0];
	var deliveryNo = document.getElementsByName("fld10050_41952_45168")[1];
	
	// Hide the comments if primary question has answer of no
	if (!deliveryYes.checked) {
		$j("#" + deliveryCommentID).hide();
		$j("#" + deliveryHeadingID).hide();
		$j("#" + deliverySections[0].addSectionBtn).closest("table").hide();
	}
	
	// Add an event listener to show the comment if Yes is clicked
	deliveryYes.addEventListener('click', function() {
		$j("#" + deliveryCommentID).show();
		$j("#" + deliveryHeadingID).show();
		$j("#" + deliverySections[0].addSectionBtn).closest("table").show();
	}, false);
	
	// Add an event listener to hide the comment if No is clicked
	deliveryNo.addEventListener('click', function() {
		$j("#" + deliveryCommentID).hide();
		$j("#" + deliveryHeadingID).hide();
		$j("#" + deliverySections[0].addSectionBtn).closest("table").hide();
	}, false);
	
	for (var i = 1; i < deliverySections.length; i++) {
		var str = "_";
		var field
		var fieldElements = [];
		var firstIncrement, secondIncrement;
		
		field = String(deliverySections[i-1].heading);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newHeadingField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);		
	
		field = String(deliverySections[i-1].age);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newAgeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);		
				
		field = String(deliverySections[i-1].deliveryType);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newDeliveryTypeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(deliverySections[i-1].treatmentGiven);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newTreatmentGivenField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(deliverySections[i-1].treatmentPrevention);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newTreatmentPreventionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(deliverySections[i-1].excessiveBleeding);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newexcessiveBleedingField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(deliverySections[i-1].excessiveBleedingTime);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newexcessiveBleedingTimeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(deliverySections[i-1].excessiveBleedingTreatment);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newexcessiveBleedingTreatmentField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(deliverySections[i-1].excessiveBleedingTreatmentGiven);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newexcessiveBleedingTreatmentGivenField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(deliverySections[i-1].excessiveBleedingHospital);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newexcessiveBleedingHospital = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(deliverySections[i-1].addSectionBtn);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newAddSectionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(deliverySections[i-1].delSectionBtn);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newDeleteSectionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
				
		deliverySections[i] = {
				heading : String(newHeadingField),
				age : String(newAgeField),
				deliveryType : String(newDeliveryTypeField),
				treatmentGiven : String(newTreatmentGivenField),
				treatmentPrevention : String(newTreatmentPreventionField),
				excessiveBleeding : String(newexcessiveBleedingField),
				excessiveBleedingTime : String(newexcessiveBleedingTimeField),
				excessiveBleedingTreatment : newexcessiveBleedingTreatmentField,
				excessiveBleedingTreatmentGiven : String(newexcessiveBleedingTreatmentGivenField),
				excessiveBleedingHospital : String(newexcessiveBleedingHospital),
				addSectionBtn : String(newAddSectionField),
				delSectionBtn : String(newDeleteSectionField)
		}
	}
	
		/** BEGIN TEST DATA  **/

//		$j("#" + deliverySections[0].age.substring(0, 20)).val("15");
//		$j("#" + deliverySections[1].age.substring(0, 20)).val("18");
		/** END TEST DATA  **/
			
		// hide the delete Button in the first section - it should never be seen
		$j("#" + deliverySections[0].delSectionBtn).hide();
		
	    // Start the for loop in the second section because the first section
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {

			// when the form loads, check to see if there is data populated in the
			// rows.
			var a = deliverySections[i].age.indexOf("_span");
					
			//Check if the Type dropdown has an option selected OR
			//Check if the Brand Name has data in it
			//If either of these are True - assume that there are values for all columns and check the next row.
			if ($j("#" + deliverySections[i].age.substring(0, a)).val() != "")
			{
				//Hide the add button in the previous row. 
				$j("#" + deliverySections[i-1].addSectionBtn).hide();
				$j("#" + deliverySections[i-1].delSectionBtn).hide();
			
				if(i == 9){
					$j("#" + deliverySections[i].addSectionBtn).hide();
				}
			
			} else {
				//There is no data in this row.
				//Make sure the add and delete buttons are shown for the previous row.
				$j("#" + deliverySections[i-1].addSectionBtn).show();
				if((i-1) > 0){
					$j("#" + deliverySections[i-1].delSectionBtn).show();
			}
			
				//Hide this section.
				$j("#" + deliverySections[i].heading).closest("table").hide();
				$j("#" + deliverySections[i].age).closest("table").hide();
				$j("#" + deliverySections[i].deliveryType).closest("table").hide();
				$j("#" + deliverySections[i].deliveryType).parents("table").hide();
				$j("#" + deliverySections[i].treatmentGiven).closest("table").hide();
				$j("#" + deliverySections[i].treatmentGiven).parents("table").hide();
				$j("#" + deliverySections[i].treatmentPrevention).closest("table").hide();
				$j("#" + deliverySections[i].treatmentPrevention).parents("table").hide();
				$j("#" + deliverySections[i].excessiveBleeding).closest("table").hide();
				$j("#" + deliverySections[i].excessiveBleeding).parents("table").hide();
				$j("#" + deliverySections[i].excessiveBleedingTime).closest("table").hide();
				$j("#" + deliverySections[i].excessiveBleedingTime).parents("table").hide();
				$j("#" + deliverySections[i].excessiveBleedingTreatment).closest("table").hide();
				$j("#" + deliverySections[i].excessiveBleedingTreatment).parents("table").hide();
				$j("#" + deliverySections[i].excessiveBleedingTreatmentGiven).closest("table").hide();
				$j("#" + deliverySections[i].excessiveBleedingTreatmentGiven).parents("table").hide();
				$j("#" + deliverySections[i].excessiveBleedingHospital).closest("table").hide();
				$j("#" + deliverySections[i].excessiveBleedingHospital).parents("table").hide();
				$j("#" + deliverySections[i].addSectionBtn).closest("table").hide();
			}
		}
	
$j(".addBtnDelivery").click(function() {
	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");

	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = deliverySections[i].addSectionBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < deliverySections.length) {
				if(i != (deliverySections.length-1)) {
					$j("#" + deliverySections[i].delSectionBtn).hide();
				}
				$j("#" + deliverySections[i].addSectionBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + deliverySections[i+1].heading).closest("table").show();
			$j("#" + deliverySections[i+1].age).closest("table").show();
			$j("#" + deliverySections[i+1].deliveryType).closest("table").show();
			$j("#" + deliverySections[i+1].deliveryType).parents("table").show();
			$j("#" + deliverySections[i+1].treatmentGiven).closest("table").show();
			$j("#" + deliverySections[i+1].treatmentGiven).parents("table").show();
//			$j("#" + deliverySections[i+1].treatmentPrevention).closest("table").show();
//			$j("#" + deliverySections[i+1].treatmentPrevention).parents("table").show();
			$j("#" + deliverySections[i+1].excessiveBleeding).closest("table").show();
			$j("#" + deliverySections[i+1].excessiveBleeding).parents("table").show();
//			$j("#" + deliverySections[i+1].excessiveBleedingTime).closest("table").show();
//			$j("#" + deliverySections[i+1].excessiveBleedingTime).parents("table").show();
			$j("#" + deliverySections[i+1].excessiveBleedingTreatment).closest("table").show();
			$j("#" + deliverySections[i+1].excessiveBleedingTreatment).parents("table").show();
//			$j("#" + deliverySections[i+1].excessiveBleedingTreatmentGiven).closest("table").show();
//			$j("#" + deliverySections[i+1].excessiveBleedingTreatmentGiven).parents("table").show();
//			$j("#" + deliverySections[i+1].excessiveBleedingHospital).closest("table").show();
//			$j("#" + deliverySections[i+1].excessiveBleedingHospital).parents("table").show();
			$j("#" + deliverySections[i+1].addSectionBtn).closest("table").show();

		} 
			i++;
		
	}

});



$j(".deleteBtnDelivery").click(function() {
	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");

	var y;
	var i = 0;
	var listUncheck;

	while (!Boolean(y)) {
		var rowName = deliverySections[i].delSectionBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			$j("#" + deliverySections[i].heading).closest("table").hide();
			
			var a = deliverySections[i].age.indexOf("_span");
			$j("#" + deliverySections[i].age.substring(0, a)).val("");
			$j("#" + deliverySections[i].age).closest("table").hide();

			var b = deliverySections[i].deliveryType.indexOf("_span");
			listUncheck = document.getElementsByName(deliverySections[i].deliveryType.substring(0, b));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + deliverySections[i].deliveryType).closest("table").hide();
			$j("#" + deliverySections[i].deliveryType).parents("table").hide();

			var c = deliverySections[i].treatmentGiven.indexOf("_span");
			listUncheck = document.getElementsByName(deliverySections[i].treatmentGiven.substring(0, c));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + deliverySections[i].treatmentGiven).closest("table").hide();
			$j("#" + deliverySections[i].treatmentGiven).parents("table").hide();

			var d = deliverySections[i].treatmentPrevention.indexOf("_span");
			listUncheck = document.getElementsByName(deliverySections[i].treatmentPrevention.substring(0, d));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + deliverySections[i].treatmentPrevention).closest("table").hide();
			$j("#" + deliverySections[i].treatmentPrevention).parents("table").hide();

			var e = deliverySections[i].excessiveBleeding.indexOf("_span");
			listUncheck = document.getElementsByName(deliverySections[i].excessiveBleeding.substring(0, e));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + deliverySections[i].excessiveBleeding).closest("table").hide();
			$j("#" + deliverySections[i].excessiveBleeding).parents("table").hide();
			
			var f = deliverySections[i].excessiveBleedingTime.indexOf("_span");
			listUncheck = document.getElementsByName(deliverySections[i].excessiveBleedingTime.substring(0, f));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + deliverySections[i].excessiveBleedingTime).closest("table").hide();
			$j("#" + deliverySections[i].excessiveBleedingTime).parents("table").hide();
			
			var g = deliverySections[i].excessiveBleedingTreatment.indexOf("_span");
			listUncheck = document.getElementsByName(deliverySections[i].excessiveBleedingTreatment.substring(0, g));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + deliverySections[i].excessiveBleedingTreatment).closest("table").hide();
			$j("#" + deliverySections[i].excessiveBleedingTreatment).parents("table").hide();
			
			var h = deliverySections[i].excessiveBleedingTreatmentGiven.indexOf("_span");
			listUncheck = document.getElementsByName(deliverySections[i].excessiveBleedingTreatmentGiven.substring(0, h));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + deliverySections[i].excessiveBleedingTreatmentGiven).closest("table").hide();
			$j("#" + deliverySections[i].excessiveBleedingTreatmentGiven).parents("table").hide();
			
			var j = deliverySections[i].excessiveBleedingHospital.indexOf("_span");
			listUncheck = document.getElementsByName(deliverySections[i].excessiveBleedingHospital.substring(0, j));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + deliverySections[i].excessiveBleedingHospital).closest("table").hide();
			$j("#" + deliverySections[i].excessiveBleedingHospital).parents("table").hide();

			$j("#" + deliverySections[i].addSectionBtn).closest("table").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + deliverySections[i-1].addSectionBtn).show();
			if((i-1) > 0) {
				$j("#" + deliverySections[i-1].delSectionBtn).show();
			}
		}
			i++;
		
	}

});



//Get the Yes/No element names for the appropriate field
a = deliverySections[1].treatmentGiven.indexOf("_span");
fieldID = deliverySections[1].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + deliverySections[1].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[1].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + deliverySections[1].treatmentPrevention).closest("table").show();
	$j("#" + deliverySections[1].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + deliverySections[1].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[1].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[2].treatmentGiven.indexOf("_span");
fieldID = deliverySections[2].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + deliverySections[2].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[2].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + deliverySections[2].treatmentPrevention).closest("table").show();
	$j("#" + deliverySections[2].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + deliverySections[2].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[2].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[3].treatmentGiven.indexOf("_span");
fieldID = deliverySections[3].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + deliverySections[3].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[3].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + deliverySections[3].treatmentPrevention).closest("table").show();
	$j("#" + deliverySections[3].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + deliverySections[3].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[3].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[4].treatmentGiven.indexOf("_span");
fieldID = deliverySections[4].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + deliverySections[4].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[4].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + deliverySections[4].treatmentPrevention).closest("table").show();
	$j("#" + deliverySections[4].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + deliverySections[4].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[4].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[5].treatmentGiven.indexOf("_span");
fieldID = deliverySections[5].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + deliverySections[5].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[5].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + deliverySections[5].treatmentPrevention).closest("table").show();
	$j("#" + deliverySections[5].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + deliverySections[5].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[5].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[6].treatmentGiven.indexOf("_span");
fieldID = deliverySections[6].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + deliverySections[6].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[6].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + deliverySections[6].treatmentPrevention).closest("table").show();
	$j("#" + deliverySections[6].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + deliverySections[6].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[6].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[7].treatmentGiven.indexOf("_span");
fieldID = deliverySections[7].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + deliverySections[7].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[7].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + deliverySections[7].treatmentPrevention).closest("table").show();
	$j("#" + deliverySections[7].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + deliverySections[7].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[7].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[8].treatmentGiven.indexOf("_span");
fieldID = deliverySections[8].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + deliverySections[8].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[8].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + deliverySections[8].treatmentPrevention).closest("table").show();
	$j("#" + deliverySections[8].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + deliverySections[8].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[8].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[9].treatmentGiven.indexOf("_span");
fieldID = deliverySections[9].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + deliverySections[9].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[9].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + deliverySections[9].treatmentPrevention).closest("table").show();
	$j("#" + deliverySections[9].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + deliverySections[9].treatmentPrevention).closest("table").hide();
	$j("#" + deliverySections[9].treatmentPrevention).parents("table").hide();
}, false);




//Get the Yes/No element names for the appropriate field
a = deliverySections[1].excessiveBleeding.indexOf("_span");
fieldID = deliverySections[1].excessiveBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + deliverySections[1].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[1].excessiveBleedingTime).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + deliverySections[1].excessiveBleedingTime).closest("table").show();
	$j("#" + deliverySections[1].excessiveBleedingTime).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + deliverySections[1].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[1].excessiveBleedingTime).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[2].excessiveBleeding.indexOf("_span");
fieldID = deliverySections[2].excessiveBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + deliverySections[2].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[2].excessiveBleedingTime).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + deliverySections[2].excessiveBleedingTime).closest("table").show();
	$j("#" + deliverySections[2].excessiveBleedingTime).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + deliverySections[2].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[2].excessiveBleedingTime).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[3].excessiveBleeding.indexOf("_span");
fieldID = deliverySections[3].excessiveBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + deliverySections[3].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[3].excessiveBleedingTime).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + deliverySections[3].excessiveBleedingTime).closest("table").show();
	$j("#" + deliverySections[3].excessiveBleedingTime).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + deliverySections[3].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[3].excessiveBleedingTime).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[4].excessiveBleeding.indexOf("_span");
fieldID = deliverySections[4].excessiveBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + deliverySections[4].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[4].excessiveBleedingTime).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + deliverySections[4].excessiveBleedingTime).closest("table").show();
	$j("#" + deliverySections[4].excessiveBleedingTime).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + deliverySections[4].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[4].excessiveBleedingTime).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[5].excessiveBleeding.indexOf("_span");
fieldID = deliverySections[5].excessiveBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + deliverySections[5].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[5].excessiveBleedingTime).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + deliverySections[5].excessiveBleedingTime).closest("table").show();
	$j("#" + deliverySections[5].excessiveBleedingTime).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + deliverySections[5].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[5].excessiveBleedingTime).parents("table").hide();
}, false);

//Get the Yes/No element names for the appropriate field
a = deliverySections[6].excessiveBleeding.indexOf("_span");
fieldID = deliverySections[6].excessiveBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + deliverySections[6].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[6].excessiveBleedingTime).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + deliverySections[6].excessiveBleedingTime).closest("table").show();
	$j("#" + deliverySections[6].excessiveBleedingTime).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + deliverySections[6].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[6].excessiveBleedingTime).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[7].excessiveBleeding.indexOf("_span");
fieldID = deliverySections[7].excessiveBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + deliverySections[7].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[7].excessiveBleedingTime).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + deliverySections[7].excessiveBleedingTime).closest("table").show();
	$j("#" + deliverySections[7].excessiveBleedingTime).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + deliverySections[7].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[7].excessiveBleedingTime).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[8].excessiveBleeding.indexOf("_span");
fieldID = deliverySections[8].excessiveBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + deliverySections[8].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[8].excessiveBleedingTime).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + deliverySections[8].excessiveBleedingTime).closest("table").show();
	$j("#" + deliverySections[8].excessiveBleedingTime).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + deliverySections[8].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[8].excessiveBleedingTime).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[9].excessiveBleeding.indexOf("_span");
fieldID = deliverySections[9].excessiveBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + deliverySections[9].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[9].excessiveBleedingTime).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + deliverySections[9].excessiveBleedingTime).closest("table").show();
	$j("#" + deliverySections[9].excessiveBleedingTime).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + deliverySections[9].excessiveBleedingTime).closest("table").hide();
	$j("#" + deliverySections[9].excessiveBleedingTime).parents("table").hide();
}, false);




//Get the Yes/No element names for the appropriate field
a = deliverySections[1].excessiveBleedingTreatment.indexOf("_span");
fieldID = deliverySections[1].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + deliverySections[1].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[1].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[1].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[1].excessiveBleedingHospital).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + deliverySections[1].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + deliverySections[1].excessiveBleedingTreatmentGiven).parents("table").show();
	$j("#" + deliverySections[1].excessiveBleedingHospital).closest("table").show();
	$j("#" + deliverySections[1].excessiveBleedingHospital).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + deliverySections[1].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[1].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[1].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[1].excessiveBleedingHospital).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[2].excessiveBleedingTreatment.indexOf("_span");
fieldID = deliverySections[2].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + deliverySections[2].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[2].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[2].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[2].excessiveBleedingHospital).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + deliverySections[2].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + deliverySections[2].excessiveBleedingTreatmentGiven).parents("table").show();
	$j("#" + deliverySections[2].excessiveBleedingHospital).closest("table").show();
	$j("#" + deliverySections[2].excessiveBleedingHospital).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + deliverySections[2].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[2].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[2].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[2].excessiveBleedingHospital).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[3].excessiveBleedingTreatment.indexOf("_span");
fieldID = deliverySections[3].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + deliverySections[3].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[3].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[3].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[3].excessiveBleedingHospital).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + deliverySections[3].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + deliverySections[3].excessiveBleedingTreatmentGiven).parents("table").show();
	$j("#" + deliverySections[3].excessiveBleedingHospital).closest("table").show();
	$j("#" + deliverySections[3].excessiveBleedingHospital).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + deliverySections[3].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[3].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[3].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[3].excessiveBleedingHospital).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[4].excessiveBleedingTreatment.indexOf("_span");
fieldID = deliverySections[4].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + deliverySections[4].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[4].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[4].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[4].excessiveBleedingHospital).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + deliverySections[4].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + deliverySections[4].excessiveBleedingTreatmentGiven).parents("table").show();
	$j("#" + deliverySections[4].excessiveBleedingHospital).closest("table").show();
	$j("#" + deliverySections[4].excessiveBleedingHospital).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + deliverySections[4].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[4].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[4].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[4].excessiveBleedingHospital).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[5].excessiveBleedingTreatment.indexOf("_span");
fieldID = deliverySections[5].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + deliverySections[5].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[5].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[5].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[5].excessiveBleedingHospital).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + deliverySections[5].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + deliverySections[5].excessiveBleedingTreatmentGiven).parents("table").show();
	$j("#" + deliverySections[5].excessiveBleedingHospital).closest("table").show();
	$j("#" + deliverySections[5].excessiveBleedingHospital).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + deliverySections[5].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[5].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[5].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[5].excessiveBleedingHospital).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[6].excessiveBleedingTreatment.indexOf("_span");
fieldID = deliverySections[6].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + deliverySections[6].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[6].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[6].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[6].excessiveBleedingHospital).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + deliverySections[6].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + deliverySections[6].excessiveBleedingTreatmentGiven).parents("table").show();
	$j("#" + deliverySections[6].excessiveBleedingHospital).closest("table").show();
	$j("#" + deliverySections[6].excessiveBleedingHospital).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + deliverySections[6].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[6].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[6].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[6].excessiveBleedingHospital).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[7].excessiveBleedingTreatment.indexOf("_span");
fieldID = deliverySections[7].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + deliverySections[7].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[7].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[7].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[7].excessiveBleedingHospital).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + deliverySections[7].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + deliverySections[7].excessiveBleedingTreatmentGiven).parents("table").show();
	$j("#" + deliverySections[7].excessiveBleedingHospital).closest("table").show();
	$j("#" + deliverySections[7].excessiveBleedingHospital).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + deliverySections[7].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[7].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[7].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[7].excessiveBleedingHospital).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[8].excessiveBleedingTreatment.indexOf("_span");
fieldID = deliverySections[8].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + deliverySections[8].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[8].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[8].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[8].excessiveBleedingHospital).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + deliverySections[8].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + deliverySections[8].excessiveBleedingTreatmentGiven).parents("table").show();
	$j("#" + deliverySections[8].excessiveBleedingHospital).closest("table").show();
	$j("#" + deliverySections[8].excessiveBleedingHospital).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + deliverySections[8].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[8].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[8].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[8].excessiveBleedingHospital).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = deliverySections[9].excessiveBleedingTreatment.indexOf("_span");
fieldID = deliverySections[9].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + deliverySections[9].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[9].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[9].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[9].excessiveBleedingHospital).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + deliverySections[9].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + deliverySections[9].excessiveBleedingTreatmentGiven).parents("table").show();
	$j("#" + deliverySections[9].excessiveBleedingHospital).closest("table").show();
	$j("#" + deliverySections[9].excessiveBleedingHospital).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + deliverySections[9].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + deliverySections[9].excessiveBleedingTreatmentGiven).parents("table").hide();
	$j("#" + deliverySections[9].excessiveBleedingHospital).closest("table").hide();
	$j("#" + deliverySections[9].excessiveBleedingHospital).parents("table").hide();
}, false);

});

