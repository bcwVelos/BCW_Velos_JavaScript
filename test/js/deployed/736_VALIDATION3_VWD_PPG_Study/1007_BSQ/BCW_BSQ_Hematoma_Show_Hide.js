var rowTotal = 10;
var hematomaHeading = fld10050_42373_45589_id;
var hematomaHeadingID = $j(hematomaHeading).attr("id");
var hematomaComment = fld10050_42368_45584_id;
var hematomaCommentID = $j(hematomaComment).attr("id");
var hematomaSections = new Array(rowTotal);

hematomaSections[0] = {
	heading: "fld10050_42373_45589_id",
	age : "fld10050_42423_45639_span",
	bleedingType : "fld10050_42393_45609_span",
	bleedingTypeOther : "fld10050_42433_45649_span",
	location : "fld10050_42403_45619_span",
	excessiveBleedingTreatment : "fld10050_42413_45629_span",
	excessiveBleedingTreatmentGiven : "fld10050_42383_45599_span",
	addSectionBtn : "fld10050_42463_45679_id",
	delSectionBtn : "fld10050_42473_45689_id"
}

$j(document).ready(function() {
		
	// Get the Yes/No element names for the appropriate field
	var hematomaYes = document.getElementsByName("fld10050_42369_45585")[0];
	var hematomaNo = document.getElementsByName("fld10050_42369_45585")[1];
	
	// Hide the comments if primary question has answer of no
	if(!hematomaYes.checked) {
		$j("#" + hematomaCommentID).hide();
		$j("#" + hematomaHeadingID).hide();
		$j("#" + hematomaSections[0].addSectionBtn).closest("table").hide();
	}
	
	// Add an event listener to show the comment if Yes is clicked
	hematomaYes.addEventListener('click', function() {
		$j("#" + hematomaCommentID).show();
		$j("#" + hematomaHeadingID).show();
		$j("#" + hematomaSections[0].addSectionBtn).closest("table").show();
	}, false);
	
	// Add an event listener to hide the comment if No is clicked
	hematomaNo.addEventListener('click', function() {
		$j("#" + hematomaCommentID).hide();
		$j("#" + hematomaHeadingID).hide();
		$j("#" + hematomaSections[0].addSectionBtn).closest("table").hide();
	}, false);
	
	for (var i = 1; i < hematomaSections.length; i++) {
		var str = "_";
		var field
		var fieldElements = [];
		var firstIncrement, secondIncrement;
	
		field = String(hematomaSections[i-1].heading);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newHeadingField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);		
	
		field = String(hematomaSections[i-1].age);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newAgeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);		
				
		field = String(hematomaSections[i-1].bleedingType);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newBleedingTypeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(hematomaSections[i-1].bleedingTypeOther);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newBleedingTypeOtherField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(hematomaSections[i-1].location);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newLocationField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(hematomaSections[i-1].excessiveBleedingTreatment);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newExcessiveBleedingTreatmentField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(hematomaSections[i-1].excessiveBleedingTreatmentGiven);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newExcessiveBleedingTreatmentGivenField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(hematomaSections[i-1].addSectionBtn);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newAddSectionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(hematomaSections[i-1].delSectionBtn);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newDeleteSectionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
				
		hematomaSections[i] = {
				heading: String(newHeadingField),
				age : String(newAgeField),
				bleedingType : String(newBleedingTypeField),
				bleedingTypeOther : String(newBleedingTypeOtherField),
				location : String(newLocationField),
				excessiveBleedingTreatment : newExcessiveBleedingTreatmentField,
				excessiveBleedingTreatmentGiven : String(newExcessiveBleedingTreatmentGivenField),
				addSectionBtn : String(newAddSectionField),
				delSectionBtn : String(newDeleteSectionField)
		}
	}
	
		/** BEGIN TEST DATA  **/

//		$j("#" + hematomaSections[0].age.substring(0, 20)).val("15");
//		$j("#" + hematomaSections[1].age.substring(0, 20)).val("18");
		/** END TEST DATA  **/
			
		// hide the delete Button in the first section - it should never be seen
		$j("#" + hematomaSections[0].delSectionBtn).hide();
		
	    // Start the for loop in the second section because the first section
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {

			// when the form loads, check to see if there is data populated in the
			// rows.
			var a = hematomaSections[i].age.indexOf("_span");
					
			//Check if the Type dropdown has an option selected OR
			//Check if the Brand Name has data in it
			//If either of these are True - assume that there are values for all columns and check the next row.
			if ($j("#" + hematomaSections[i].age.substring(0, a)).val() != "")
			{
				//Hide the add button in the previous row. 
				$j("#" + hematomaSections[i-1].addSectionBtn).hide();
				$j("#" + hematomaSections[i-1].delSectionBtn).hide();
			
				if(i == 9){
					$j("#" + hematomaSections[i].addSectionBtn).hide();
				}
			
			} else {
				//There is no data in this row.
				//Make sure the add and delete buttons are shown for the previous row.
				$j("#" + hematomaSections[i-1].addSectionBtn).show();
				if((i-1) > 0){
					$j("#" + hematomaSections[i-1].delSectionBtn).show();
				}
			
				//Hide this section.
				$j("#" + hematomaSections[i].heading).closest("table").hide();
				$j("#" + hematomaSections[i].age).closest("table").hide();
				$j("#" + hematomaSections[i].bleedingType).closest("table").hide();
				$j("#" + hematomaSections[i].bleedingType).parents("table").hide();
				$j("#" + hematomaSections[i].bleedingTypeOther).closest("table").hide();
				$j("#" + hematomaSections[i].location).closest("table").hide();
				$j("#" + hematomaSections[i].location).parents("table").hide();
				$j("#" + hematomaSections[i].excessiveBleedingTreatment).closest("table").hide();
				$j("#" + hematomaSections[i].excessiveBleedingTreatment).parents("table").hide();
				$j("#" + hematomaSections[i].excessiveBleedingTreatmentGiven).closest("table").hide();
				$j("#" + hematomaSections[i].excessiveBleedingTreatmentGiven).parents("table").hide();
				$j("#" + hematomaSections[i].addSectionBtn).closest("table").hide();
			}
		}
	
$j(".addBtnHematoma").click(function() {
	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");

	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = hematomaSections[i].addSectionBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < hematomaSections.length) {
				if(i != (hematomaSections.length-1)) {
					$j("#" + hematomaSections[i].delSectionBtn).hide();
				}
				$j("#" + hematomaSections[i].addSectionBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + hematomaSections[i+1].heading).closest("table").show();
			$j("#" + hematomaSections[i+1].age).closest("table").show();
			$j("#" + hematomaSections[i+1].bleedingType).closest("table").show();
			$j("#" + hematomaSections[i+1].bleedingType).parents("table").show();
//			$j("#" + hematomaSections[i+1].bleedingTypeOther).closest("table").show();
			$j("#" + hematomaSections[i+1].location).closest("table").show();
			$j("#" + hematomaSections[i+1].location).parents("table").show();
			$j("#" + hematomaSections[i+1].excessiveBleedingTreatment).closest("table").show();
			$j("#" + hematomaSections[i+1].excessiveBleedingTreatment).parents("table").show();
//			$j("#" + hematomaSections[i+1].excessiveBleedingTreatmentGiven).closest("table").show();
//			$j("#" + hematomaSections[i+1].excessiveBleedingTreatmentGiven).parents("table").show();
			$j("#" + hematomaSections[i+1].addSectionBtn).closest("table").show();

		} 
			i++;
		
	}

});



$j(".deleteBtnHematoma").click(function() {
	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");

	var y;
	var i = 0;
	var listUncheck;

	while (!Boolean(y)) {
		var rowName = hematomaSections[i].delSectionBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			$j("#" + hematomaSections[i].heading).closest("table").hide();
			
			var a = hematomaSections[i].age.indexOf("_span");
			$j("#" + hematomaSections[i].age.substring(0, a)).val("");
			$j("#" + hematomaSections[i].age).closest("table").hide();
			
			var b = hematomaSections[i].bleedingType.indexOf("_span");
			listUncheck = document.getElementsByName(hematomaSections[i].bleedingType.substring(0, b));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + hematomaSections[i].bleedingType).closest("table").hide();
			$j("#" + hematomaSections[i].bleedingType).parents("table").hide();
			
			var c = hematomaSections[i].bleedingTypeOther.indexOf("_span");
			$j("#" + hematomaSections[i].bleedingTypeOther.substring(0, c)).val("");
			$j("#" + hematomaSections[i].bleedingTypeOther).closest("table").hide();
			
			var d = hematomaSections[i].location.indexOf("_span");
			listUncheck = document.getElementsByName(hematomaSections[i].location.substring(0, d));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + hematomaSections[i].location).closest("table").hide();
			$j("#" + hematomaSections[i].location).parents("table").hide();

			var e = hematomaSections[i].excessiveBleedingTreatment.indexOf("_span");
			listUncheck = document.getElementsByName(hematomaSections[i].excessiveBleedingTreatment.substring(0, e));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + hematomaSections[i].excessiveBleedingTreatment).closest("table").hide();
			$j("#" + hematomaSections[i].excessiveBleedingTreatment).parents("table").hide();
			
			var f = hematomaSections[i].excessiveBleedingTreatmentGiven.indexOf("_span");
			listUncheck = document.getElementsByName(hematomaSections[i].excessiveBleedingTreatmentGiven.substring(0, f));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + hematomaSections[i].excessiveBleedingTreatmentGiven).closest("table").hide();
			$j("#" + hematomaSections[i].excessiveBleedingTreatmentGiven).parents("table").hide();
			$j("#" + hematomaSections[i].addSectionBtn).closest("table").hide();
			
			$j("#" + hematomaSections[i].addSectionBtn).closest("table").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + hematomaSections[i-1].addSectionBtn).show();
			if((i-1) > 0) {
				$j("#" + hematomaSections[i-1].delSectionBtn).show();
			}
		}
			i++;
		
	}

});


var a;
var fieldID;

//Get the Yes/No element names for the appropriate field
a = hematomaSections[1].bleedingType.indexOf("_span");
fieldID = hematomaSections[1].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hematomaSections[1].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hematomaSections[1].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hematomaSections[1].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hematomaSections[1].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[2].bleedingType.indexOf("_span");
fieldID = hematomaSections[2].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hematomaSections[2].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hematomaSections[2].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hematomaSections[2].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hematomaSections[2].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[3].bleedingType.indexOf("_span");
fieldID = hematomaSections[3].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hematomaSections[3].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hematomaSections[3].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hematomaSections[3].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hematomaSections[3].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[4].bleedingType.indexOf("_span");
fieldID = hematomaSections[4].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hematomaSections[4].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hematomaSections[4].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hematomaSections[4].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hematomaSections[4].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[5].bleedingType.indexOf("_span");
fieldID = hematomaSections[5].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hematomaSections[5].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hematomaSections[5].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hematomaSections[5].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hematomaSections[5].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[6].bleedingType.indexOf("_span");
fieldID = hematomaSections[6].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hematomaSections[6].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hematomaSections[6].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hematomaSections[6].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hematomaSections[6].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[7].bleedingType.indexOf("_span");
fieldID = hematomaSections[7].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hematomaSections[7].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hematomaSections[7].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hematomaSections[7].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hematomaSections[7].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[8].bleedingType.indexOf("_span");
fieldID = hematomaSections[8].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hematomaSections[8].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hematomaSections[8].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hematomaSections[8].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hematomaSections[8].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[9].bleedingType.indexOf("_span");
fieldID = hematomaSections[9].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hematomaSections[9].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hematomaSections[9].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hematomaSections[9].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hematomaSections[9].bleedingTypeOther).closest("table").hide();
}, false);




//Get the Yes/No element names for the appropriate field
a = hematomaSections[1].excessiveBleedingTreatment.indexOf("_span");
fieldID = hematomaSections[1].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hematomaSections[1].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[1].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hematomaSections[1].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hematomaSections[1].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hematomaSections[1].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[1].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[2].excessiveBleedingTreatment.indexOf("_span");
fieldID = hematomaSections[2].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hematomaSections[2].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[2].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hematomaSections[2].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hematomaSections[2].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hematomaSections[2].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[2].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[3].excessiveBleedingTreatment.indexOf("_span");
fieldID = hematomaSections[3].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hematomaSections[3].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[3].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hematomaSections[3].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hematomaSections[3].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hematomaSections[3].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[3].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[4].excessiveBleedingTreatment.indexOf("_span");
fieldID = hematomaSections[4].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hematomaSections[4].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[4].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hematomaSections[4].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hematomaSections[4].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hematomaSections[4].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[4].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[5].excessiveBleedingTreatment.indexOf("_span");
fieldID = hematomaSections[5].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hematomaSections[5].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[5].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hematomaSections[5].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hematomaSections[5].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hematomaSections[5].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[5].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[6].excessiveBleedingTreatment.indexOf("_span");
fieldID = hematomaSections[6].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hematomaSections[6].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[6].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hematomaSections[6].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hematomaSections[6].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hematomaSections[6].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[6].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[7].excessiveBleedingTreatment.indexOf("_span");
fieldID = hematomaSections[7].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hematomaSections[7].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[7].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hematomaSections[7].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hematomaSections[7].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hematomaSections[7].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[7].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[8].excessiveBleedingTreatment.indexOf("_span");
fieldID = hematomaSections[8].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hematomaSections[8].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[8].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hematomaSections[8].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hematomaSections[8].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hematomaSections[8].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[8].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hematomaSections[9].excessiveBleedingTreatment.indexOf("_span");
fieldID = hematomaSections[9].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hematomaSections[9].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[9].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hematomaSections[9].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hematomaSections[9].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hematomaSections[9].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hematomaSections[9].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);

});

