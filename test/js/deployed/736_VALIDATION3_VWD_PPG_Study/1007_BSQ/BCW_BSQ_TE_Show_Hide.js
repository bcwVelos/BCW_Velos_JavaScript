var rowTotal = 10;
var heading = fld10050_41551_44767_id;
var headingID = $j(heading).attr("id");
var toothExtractionComment = fld10050_41530_44746_id;
var toothExtractionCommentID = $j(toothExtractionComment).attr("id");
var toothExtractionAddComment = fld10050_41529_44745_id;
var toothExtractionAddCommentID = $j(toothExtractionAddComment).attr("id");
var toothExtractionSections = new Array(rowTotal);

toothExtractionSections[0] = {
	toothExtractionHeading: "fld10050_41551_44767_id",
	toothExtractionAge : "fld10050_41571_44787_span",
	toothExtractionWhatTeeth : "fld10050_41581_44797_span",
	toothExtractionTreatmentGiven : "fld10050_41561_44777_span",
	toothExtractionTreatmentPrevention : "fld10050_41541_44757_span",
	toothExtractionExcessBleeding : "fld10050_41591_44807_span",
	toothExtractionBleedingLength : "fld10050_41601_44817_span",
	toothExtractionBleedingTreatment : "fld10050_41621_44837_span",
	toothExtractionBleedingTreatmentGiven : "fld10050_41611_44827_span",
	addSectionBtn : "fld10050_41671_44887_id",
	delSectionBtn : "fld10050_41681_44897_id"
}

$j(document).ready(function() {
		
	// Get the Yes/No element names for the appropriate field
	var toothExtractionYes = document.getElementsByName("fld10050_41531_44747")[0];
	var toothExtractionNo = document.getElementsByName("fld10050_41531_44747")[1];
	
	// Hide the comments if primary question has answer of no
	if (!toothExtractionYes.checked) {
		$j("#" + headingID).hide();
		$j("#" + toothExtractionCommentID).hide();
		$j("#" + toothExtractionAddCommentID).hide();
		$j("#" + toothExtractionSections[0].addSectionBtn).closest("table").hide();
	}
	
	// Add an event listener to show the comment if Yes is clicked
	toothExtractionYes.addEventListener('click', function() {
		$j("#" + headingID).show();
		$j("#" + toothExtractionCommentID).show();
		$j("#" + toothExtractionAddCommentID).show();
		$j("#" + toothExtractionSections[0].addSectionBtn).closest("table").show();
	}, false);
	
	// Add an event listener to hide the comment if No is clicked
	toothExtractionNo.addEventListener('click', function() {
		$j("#" + headingID).hide();
		$j("#" + toothExtractionCommentID).hide();
		$j("#" + toothExtractionAddCommentID).hide();
		$j("#" + toothExtractionSections[0].addSectionBtn).closest("table").hide();
	}, false);
	
	for (var i = 1; i < toothExtractionSections.length; i++) {
		var str = "_";
		var field
		var fieldElements = [];
		var firstIncrement, secondIncrement;
	
		field = String(toothExtractionSections[i-1].toothExtractionHeading);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newHeadingField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);		
	
		field = String(toothExtractionSections[i-1].toothExtractionAge);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newAgeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);		
				
		field = String(toothExtractionSections[i-1].toothExtractionWhatTeeth);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newWhatTeethField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(toothExtractionSections[i-1].toothExtractionTreatmentGiven);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newTreatmentGivenField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(toothExtractionSections[i-1].toothExtractionTreatmentPrevention);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newTreatmentPreventionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(toothExtractionSections[i-1].toothExtractionExcessBleeding);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newExcessBleedingField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(toothExtractionSections[i-1].toothExtractionBleedingLength);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newBleedingLengthField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(toothExtractionSections[i-1].toothExtractionBleedingTreatment);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newBleedingTreatmentField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(toothExtractionSections[i-1].toothExtractionBleedingTreatmentGiven);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newBleedingTreatmentGivenField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(toothExtractionSections[i-1].addSectionBtn);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newAddSectionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(toothExtractionSections[i-1].delSectionBtn);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newDeleteSectionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		toothExtractionSections[i] = {
			toothExtractionHeading : String(newHeadingField),
			toothExtractionAge : String(newAgeField),
			toothExtractionWhatTeeth : String(newWhatTeethField),
			toothExtractionTreatmentGiven : String(newTreatmentGivenField),
			toothExtractionTreatmentPrevention : String(newTreatmentPreventionField),
			toothExtractionExcessBleeding : String(newExcessBleedingField),
			toothExtractionBleedingLength : String(newBleedingLengthField),
			toothExtractionBleedingTreatment : String(newBleedingTreatmentField),
			toothExtractionBleedingTreatmentGiven : String(newBleedingTreatmentGivenField),
			addSectionBtn : String(newAddSectionField),
			delSectionBtn : String(newDeleteSectionField)
		}
	}
	
		/** BEGIN TEST DATA  **/
//		$j("#" + toothExtractionSections[0].toothExtractionAge.substring(0, 20)).val("15");
//		$j("#" + toothExtractionSections[1].toothExtractionAge.substring(0, 20)).val("18");
		/** END TEST DATA  **/
			
		// hide the delete Button in the first section - it should never be seen
		$j("#" + toothExtractionSections[0].delSectionBtn).hide();
		
	    // Start the for loop in the second section because the first section
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {

			// when the form loads, check to see if there is data populated in the
			// rows.
			var a = toothExtractionSections[i].toothExtractionAge.indexOf("_span");
					
			//Check if the Type dropdown has an option selected OR
			//Check if the Brand Name has data in it
			//If either of these are True - assume that there are values for all columns and check the next row.
			if ($j("#" + toothExtractionSections[i].toothExtractionAge.substring(0, a)).val() != "")
			{
				//Hide the add button in the previous row. 
				$j("#" + toothExtractionSections[i-1].addSectionBtn).hide();
				$j("#" + toothExtractionSections[i-1].delSectionBtn).hide();
			
				if(i == 9){
					$j("#" + toothExtractionSections[i].addSectionBtn).hide();
				}
			
			} else {
				//There is no data in this row.
				//Make sure the add and delete buttons are shown for the previous row.
				$j("#" + toothExtractionSections[i-1].addSectionBtn).show();
				if((i-1) > 0){
					$j("#" + toothExtractionSections[i-1].delSectionBtn).show();
				}
			
				//Hide this section.
				$j("#" + toothExtractionSections[i].toothExtractionHeading).closest("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionAge).closest("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionWhatTeeth).closest("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionWhatTeeth).parents("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionTreatmentGiven).closest("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionTreatmentGiven).parents("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionTreatmentPrevention).closest("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionTreatmentPrevention).parents("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionExcessBleeding).closest("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionExcessBleeding).parents("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionBleedingLength).closest("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionBleedingTreatment).closest("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionBleedingTreatment).parents("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionBleedingTreatmentGiven).closest("table").hide();
				$j("#" + toothExtractionSections[i].toothExtractionBleedingTreatmentGiven).parents("table").hide();
				$j("#" + toothExtractionSections[i].addSectionBtn).closest("table").hide();
			}
		}

	
$j(".addBtnTE").click(function() {
	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");

	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = toothExtractionSections[i].addSectionBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < toothExtractionSections.length) {
				if(i != (toothExtractionSections.length-1)) {
					$j("#" + toothExtractionSections[i].delSectionBtn).hide();
				}
				$j("#" + toothExtractionSections[i].addSectionBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + toothExtractionSections[i+1].toothExtractionHeading).closest("table").show();
			$j("#" + toothExtractionSections[i+1].toothExtractionAge).closest("table").show();
			$j("#" + toothExtractionSections[i+1].toothExtractionWhatTeeth).closest("table").show();
			$j("#" + toothExtractionSections[i+1].toothExtractionWhatTeeth).parents("table").show();
			$j("#" + toothExtractionSections[i+1].toothExtractionTreatmentGiven).closest("table").show();
			$j("#" + toothExtractionSections[i+1].toothExtractionTreatmentGiven).parents("table").show();
//			$j("#" + toothExtractionSections[i+1].toothExtractionTreatmentPrevention).closest("table").show();
//			$j("#" + toothExtractionSections[i+1].toothExtractionTreatmentPrevention).parents("table").show();
			$j("#" + toothExtractionSections[i+1].toothExtractionExcessBleeding).closest("table").show();
			$j("#" + toothExtractionSections[i+1].toothExtractionExcessBleeding).parents("table").show();
//			$j("#" + toothExtractionSections[i+1].toothExtractionBleedingLength).closest("table").show();
//			$j("#" + toothExtractionSections[i+1].toothExtractionBleedingTreatment).closest("table").show();
//			$j("#" + toothExtractionSections[i+1].toothExtractionBleedingTreatment).parents("table").show();
//			$j("#" + toothExtractionSections[i+1].toothExtractionBleedingTreatmentGiven).closest("table").show();
//			$j("#" + toothExtractionSections[i+1].toothExtractionBleedingTreatmentGiven).parents("table").show();
			$j("#" + toothExtractionSections[i+1].addSectionBtn).closest("table").show();

		} 
			i++;
		
	}

});



$j(".deleteBtnTE").click(function() {
	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");

	var y;
	var i = 0;
	var listUncheck;

	while (!Boolean(y)) {
		var rowName = toothExtractionSections[i].delSectionBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			$j("#" + toothExtractionSections[i].toothExtractionHeading).closest("table").hide();
			
			var a = toothExtractionSections[i].toothExtractionAge.indexOf("_span");
			$j("#" + toothExtractionSections[i].toothExtractionAge.substring(0, a)).val("");
			$j("#" + toothExtractionSections[i].toothExtractionAge).closest("table").hide();

			var b = toothExtractionSections[i].toothExtractionWhatTeeth.indexOf("_span");
			listUncheck = document.getElementsByName(toothExtractionSections[i].toothExtractionWhatTeeth.substring(0, b));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + toothExtractionSections[i].toothExtractionWhatTeeth).closest("table").hide();
			$j("#" + toothExtractionSections[i].toothExtractionWhatTeeth).parents("table").hide();

			var c = toothExtractionSections[i].toothExtractionTreatmentGiven.indexOf("_span");
			listUncheck = document.getElementsByName(toothExtractionSections[i].toothExtractionTreatmentGiven.substring(0, c));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + toothExtractionSections[i].toothExtractionTreatmentGiven).closest("table").hide();
			$j("#" + toothExtractionSections[i].toothExtractionTreatmentGiven).parents("table").hide();

			var d = toothExtractionSections[i].toothExtractionTreatmentPrevention.indexOf("_span");
			listUncheck = document.getElementsByName(toothExtractionSections[i].toothExtractionTreatmentPrevention.substring(0, d));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + toothExtractionSections[i].toothExtractionTreatmentPrevention).closest("table").hide();
			$j("#" + toothExtractionSections[i].toothExtractionTreatmentPrevention).parents("table").hide();
			
			var e = toothExtractionSections[i].toothExtractionExcessBleeding.indexOf("_span");
			listUncheck = document.getElementsByName(toothExtractionSections[i].toothExtractionExcessBleeding.substring(0, e));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + toothExtractionSections[i].toothExtractionExcessBleeding).closest("table").hide();
			$j("#" + toothExtractionSections[i].toothExtractionExcessBleeding).parents("table").hide();
			
			var f = toothExtractionSections[i].toothExtractionBleedingLength.indexOf("_span");
			$j("#" + toothExtractionSections[i].toothExtractionBleedingLength.substring(0, f)).val("");
			$j("#" + toothExtractionSections[i].toothExtractionBleedingLength).closest("table").hide();
			
			var g = toothExtractionSections[i].toothExtractionBleedingTreatment.indexOf("_span");
			listUncheck = document.getElementsByName(toothExtractionSections[i].toothExtractionBleedingTreatment.substring(0, g));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + toothExtractionSections[i].toothExtractionBleedingTreatment).closest("table").hide();
			$j("#" + toothExtractionSections[i].toothExtractionBleedingTreatment).parents("table").hide();
			
			var h = toothExtractionSections[i].toothExtractionBleedingTreatmentGiven.indexOf("_span");
			listUncheck = document.getElementsByName(toothExtractionSections[i].toothExtractionBleedingTreatmentGiven.substring(0, h));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + toothExtractionSections[i].toothExtractionBleedingTreatmentGiven).closest("table").hide();
			$j("#" + toothExtractionSections[i].toothExtractionBleedingTreatmentGiven).parents("table").hide();
			
			$j("#" + toothExtractionSections[i].addSectionBtn).closest("table").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + toothExtractionSections[i-1].addSectionBtn).show();
			if((i-1) > 0) {
				$j("#" + toothExtractionSections[i-1].delSectionBtn).show();
			}
		}
			i++;
		
	}

});



var a;
var fieldID;

//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[1].toothExtractionTreatmentGiven.indexOf("_span");
fieldID = toothExtractionSections[1].toothExtractionTreatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + toothExtractionSections[1].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[1].toothExtractionTreatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[1].toothExtractionTreatmentPrevention).closest("table").show();
	$j("#" + toothExtractionSections[1].toothExtractionTreatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[1].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[1].toothExtractionTreatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[2].toothExtractionTreatmentGiven.indexOf("_span");
fieldID = toothExtractionSections[2].toothExtractionTreatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + toothExtractionSections[2].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[2].toothExtractionTreatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[2].toothExtractionTreatmentPrevention).closest("table").show();
	$j("#" + toothExtractionSections[2].toothExtractionTreatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[2].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[2].toothExtractionTreatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[3].toothExtractionTreatmentGiven.indexOf("_span");
fieldID = toothExtractionSections[3].toothExtractionTreatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + toothExtractionSections[3].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[3].toothExtractionTreatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[3].toothExtractionTreatmentPrevention).closest("table").show();
	$j("#" + toothExtractionSections[3].toothExtractionTreatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[3].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[3].toothExtractionTreatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[4].toothExtractionTreatmentGiven.indexOf("_span");
fieldID = toothExtractionSections[4].toothExtractionTreatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + toothExtractionSections[4].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[4].toothExtractionTreatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[4].toothExtractionTreatmentPrevention).closest("table").show();
	$j("#" + toothExtractionSections[4].toothExtractionTreatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[4].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[4].toothExtractionTreatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[5].toothExtractionTreatmentGiven.indexOf("_span");
fieldID = toothExtractionSections[5].toothExtractionTreatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + toothExtractionSections[5].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[5].toothExtractionTreatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[5].toothExtractionTreatmentPrevention).closest("table").show();
	$j("#" + toothExtractionSections[5].toothExtractionTreatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[5].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[5].toothExtractionTreatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[6].toothExtractionTreatmentGiven.indexOf("_span");
fieldID = toothExtractionSections[6].toothExtractionTreatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + toothExtractionSections[6].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[6].toothExtractionTreatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[6].toothExtractionTreatmentPrevention).closest("table").show();
	$j("#" + toothExtractionSections[6].toothExtractionTreatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[6].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[6].toothExtractionTreatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[7].toothExtractionTreatmentGiven.indexOf("_span");
fieldID = toothExtractionSections[7].toothExtractionTreatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + toothExtractionSections[7].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[7].toothExtractionTreatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[7].toothExtractionTreatmentPrevention).closest("table").show();
	$j("#" + toothExtractionSections[7].toothExtractionTreatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[7].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[7].toothExtractionTreatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[8].toothExtractionTreatmentGiven.indexOf("_span");
fieldID = toothExtractionSections[8].toothExtractionTreatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + toothExtractionSections[8].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[8].toothExtractionTreatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[8].toothExtractionTreatmentPrevention).closest("table").show();
	$j("#" + toothExtractionSections[8].toothExtractionTreatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[8].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[8].toothExtractionTreatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[9].toothExtractionTreatmentGiven.indexOf("_span");
fieldID = toothExtractionSections[9].toothExtractionTreatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + toothExtractionSections[9].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[9].toothExtractionTreatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[9].toothExtractionTreatmentPrevention).closest("table").show();
	$j("#" + toothExtractionSections[9].toothExtractionTreatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[9].toothExtractionTreatmentPrevention).closest("table").hide();
	$j("#" + toothExtractionSections[9].toothExtractionTreatmentPrevention).parents("table").hide();
}, false);




//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[1].toothExtractionExcessBleeding.indexOf("_span");
fieldID = toothExtractionSections[1].toothExtractionExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + toothExtractionSections[1].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[1].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[1].toothExtractionBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[1].toothExtractionBleedingLength).closest("table").show();
	$j("#" + toothExtractionSections[1].toothExtractionBleedingTreatment).closest("table").show();
	$j("#" + toothExtractionSections[1].toothExtractionBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[1].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[1].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[1].toothExtractionBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[2].toothExtractionExcessBleeding.indexOf("_span");
fieldID = toothExtractionSections[2].toothExtractionExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + toothExtractionSections[2].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[2].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[2].toothExtractionBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[2].toothExtractionBleedingLength).closest("table").show();
	$j("#" + toothExtractionSections[2].toothExtractionBleedingTreatment).closest("table").show();
	$j("#" + toothExtractionSections[2].toothExtractionBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[2].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[2].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[2].toothExtractionBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[3].toothExtractionExcessBleeding.indexOf("_span");
fieldID = toothExtractionSections[3].toothExtractionExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + toothExtractionSections[3].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[3].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[3].toothExtractionBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[3].toothExtractionBleedingLength).closest("table").show();
	$j("#" + toothExtractionSections[3].toothExtractionBleedingTreatment).closest("table").show();
	$j("#" + toothExtractionSections[3].toothExtractionBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[3].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[3].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[3].toothExtractionBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[4].toothExtractionExcessBleeding.indexOf("_span");
fieldID = toothExtractionSections[4].toothExtractionExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + toothExtractionSections[4].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[4].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[4].toothExtractionBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[4].toothExtractionBleedingLength).closest("table").show();
	$j("#" + toothExtractionSections[4].toothExtractionBleedingTreatment).closest("table").show();
	$j("#" + toothExtractionSections[4].toothExtractionBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[4].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[4].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[4].toothExtractionBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[5].toothExtractionExcessBleeding.indexOf("_span");
fieldID = toothExtractionSections[5].toothExtractionExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + toothExtractionSections[5].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[5].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[5].toothExtractionBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[5].toothExtractionBleedingLength).closest("table").show();
	$j("#" + toothExtractionSections[5].toothExtractionBleedingTreatment).closest("table").show();
	$j("#" + toothExtractionSections[5].toothExtractionBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[5].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[5].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[5].toothExtractionBleedingTreatment).parents("table").hide();
}, false);

//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[6].toothExtractionExcessBleeding.indexOf("_span");
fieldID = toothExtractionSections[6].toothExtractionExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + toothExtractionSections[6].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[6].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[6].toothExtractionBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[6].toothExtractionBleedingLength).closest("table").show();
	$j("#" + toothExtractionSections[6].toothExtractionBleedingTreatment).closest("table").show();
	$j("#" + toothExtractionSections[6].toothExtractionBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[6].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[6].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[6].toothExtractionBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[7].toothExtractionExcessBleeding.indexOf("_span");
fieldID = toothExtractionSections[7].toothExtractionExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + toothExtractionSections[7].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[7].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[7].toothExtractionBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[7].toothExtractionBleedingLength).closest("table").show();
	$j("#" + toothExtractionSections[7].toothExtractionBleedingTreatment).closest("table").show();
	$j("#" + toothExtractionSections[7].toothExtractionBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[7].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[7].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[7].toothExtractionBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[8].toothExtractionExcessBleeding.indexOf("_span");
fieldID = toothExtractionSections[8].toothExtractionExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + toothExtractionSections[8].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[8].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[8].toothExtractionBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[8].toothExtractionBleedingLength).closest("table").show();
	$j("#" + toothExtractionSections[8].toothExtractionBleedingTreatment).closest("table").show();
	$j("#" + toothExtractionSections[8].toothExtractionBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[8].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[8].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[8].toothExtractionBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[9].toothExtractionExcessBleeding.indexOf("_span");
fieldID = toothExtractionSections[9].toothExtractionExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + toothExtractionSections[9].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[9].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[9].toothExtractionBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[9].toothExtractionBleedingLength).closest("table").show();
	$j("#" + toothExtractionSections[9].toothExtractionBleedingTreatment).closest("table").show();
	$j("#" + toothExtractionSections[9].toothExtractionBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[9].toothExtractionBleedingLength).closest("table").hide();
	$j("#" + toothExtractionSections[9].toothExtractionBleedingTreatment).closest("table").hide();
	$j("#" + toothExtractionSections[9].toothExtractionBleedingTreatment).parents("table").hide();
}, false);




//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[1].toothExtractionBleedingTreatment.indexOf("_span");
fieldID = toothExtractionSections[1].toothExtractionBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + toothExtractionSections[1].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[1].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[1].toothExtractionBleedingTreatmentGiven).closest("table").show();
	$j("#" + toothExtractionSections[1].toothExtractionBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[1].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[1].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[2].toothExtractionBleedingTreatment.indexOf("_span");
fieldID = toothExtractionSections[2].toothExtractionBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + toothExtractionSections[2].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[2].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[2].toothExtractionBleedingTreatmentGiven).closest("table").show();
	$j("#" + toothExtractionSections[2].toothExtractionBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[2].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[2].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[3].toothExtractionBleedingTreatment.indexOf("_span");
fieldID = toothExtractionSections[3].toothExtractionBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + toothExtractionSections[3].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[3].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[3].toothExtractionBleedingTreatmentGiven).closest("table").show();
	$j("#" + toothExtractionSections[3].toothExtractionBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[3].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[3].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[4].toothExtractionBleedingTreatment.indexOf("_span");
fieldID = toothExtractionSections[4].toothExtractionBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + toothExtractionSections[4].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[4].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[4].toothExtractionBleedingTreatmentGiven).closest("table").show();
	$j("#" + toothExtractionSections[4].toothExtractionBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[4].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[4].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[5].toothExtractionBleedingTreatment.indexOf("_span");
fieldID = toothExtractionSections[5].toothExtractionBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + toothExtractionSections[5].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[5].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[5].toothExtractionBleedingTreatmentGiven).closest("table").show();
	$j("#" + toothExtractionSections[5].toothExtractionBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[5].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[5].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[6].toothExtractionBleedingTreatment.indexOf("_span");
fieldID = toothExtractionSections[6].toothExtractionBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + toothExtractionSections[6].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[6].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[6].toothExtractionBleedingTreatmentGiven).closest("table").show();
	$j("#" + toothExtractionSections[6].toothExtractionBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[6].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[6].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[7].toothExtractionBleedingTreatment.indexOf("_span");
fieldID = toothExtractionSections[7].toothExtractionBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + toothExtractionSections[7].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[7].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[7].toothExtractionBleedingTreatmentGiven).closest("table").show();
	$j("#" + toothExtractionSections[7].toothExtractionBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[7].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[7].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[8].toothExtractionBleedingTreatment.indexOf("_span");
fieldID = toothExtractionSections[8].toothExtractionBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + toothExtractionSections[8].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[8].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[8].toothExtractionBleedingTreatmentGiven).closest("table").show();
	$j("#" + toothExtractionSections[8].toothExtractionBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[8].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[8].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = toothExtractionSections[9].toothExtractionBleedingTreatment.indexOf("_span");
fieldID = toothExtractionSections[9].toothExtractionBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + toothExtractionSections[9].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[9].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + toothExtractionSections[9].toothExtractionBleedingTreatmentGiven).closest("table").show();
	$j("#" + toothExtractionSections[9].toothExtractionBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + toothExtractionSections[9].toothExtractionBleedingTreatmentGiven).closest("table").hide();
	$j("#" + toothExtractionSections[9].toothExtractionBleedingTreatmentGiven).parents("table").hide();
}, false);

});

