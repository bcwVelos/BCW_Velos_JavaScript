var rowTotal = 10;
var hemarthrosisHeading = fld10050_42247_45463_id;
var hemarthrosisHeadingID = $j(hemarthrosisHeading).attr("id");
var hemarthrosisComment = fld10050_42242_45458_id;
var hemarthrosisCommentID = $j(hemarthrosisComment).attr("id");
var hemarthrosisSections = new Array(rowTotal);

hemarthrosisSections[0] = {
	heading: "fld10050_42247_45463_id",
	age : "fld10050_42257_45473_span",
	bleedingType : "fld10050_42287_45503_span",
	bleedingTypeOther : "fld10050_42317_45533_span",
	location : "fld10050_42297_45513_span",
	excessiveBleedingTreatment : "fld10050_42267_45483_span",
	excessiveBleedingTreatmentGiven : "fld10050_42277_45493_span",
	addSectionBtn : "fld10050_42347_45563_id",
	delSectionBtn : "fld10050_42357_45573_id"
}

$j(document).ready(function() {
	
	// Get the Yes/No element names for the appropriate field
	var hemarthrosisYes = document.getElementsByName("fld10050_42243_45459")[0];
	var hemarthrosisNo = document.getElementsByName("fld10050_42243_45459")[1];
	
	// Hide the comments if primary question has answer of no
	if(!hemarthrosisYes.checked) {
		$j("#" + hemarthrosisCommentID).hide();
		$j("#" + hemarthrosisHeadingID).hide();
		$j("#" + hemarthrosisSections[0].addSectionBtn).closest("table").hide();
	}
	
	// Add an event listener to show the comment if Yes is clicked
	hemarthrosisYes.addEventListener('click', function() {
		$j("#" + hemarthrosisCommentID).show();
		$j("#" + hemarthrosisHeadingID).show();
		$j("#" + hemarthrosisSections[0].addSectionBtn).closest("table").show();
	}, false);
	
	// Add an event listener to hide the comment if No is clicked
	hemarthrosisNo.addEventListener('click', function() {
		$j("#" + hemarthrosisCommentID).hide();
		$j("#" + hemarthrosisHeadingID).hide();
		$j("#" + hemarthrosisSections[0].addSectionBtn).closest("table").hide();
	}, false);
	
	for (var i = 1; i < hemarthrosisSections.length; i++) {
		var str = "_";
		var field
		var fieldElements = [];
		var firstIncrement, secondIncrement;
	
		field = String(hemarthrosisSections[i-1].heading);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newHeadingField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);	
	
		field = String(hemarthrosisSections[i-1].age);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newAgeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);		
				
		field = String(hemarthrosisSections[i-1].bleedingType);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newBleedingTypeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(hemarthrosisSections[i-1].bleedingTypeOther);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newBleedingTypeOtherField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(hemarthrosisSections[i-1].location);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newLocationField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(hemarthrosisSections[i-1].excessiveBleedingTreatment);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newExcessiveBleedingTreatmentField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(hemarthrosisSections[i-1].excessiveBleedingTreatmentGiven);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newExcessiveBleedingTreatmentGivenField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(hemarthrosisSections[i-1].addSectionBtn);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newAddSectionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(hemarthrosisSections[i-1].delSectionBtn);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newDeleteSectionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
				
		hemarthrosisSections[i] = {
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

//		$j("#" + hemarthrosisSections[0].age.substring(0, 20)).val("15");
//		$j("#" + hemarthrosisSections[1].age.substring(0, 20)).val("18");
		/** END TEST DATA  **/
			
		// hide the delete Button in the first section - it should never be seen
		$j("#" + hemarthrosisSections[0].delSectionBtn).hide();
		
	    // Start the for loop in the second section because the first section
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {

			// when the form loads, check to see if there is data populated in the
			// rows.
			var a = hemarthrosisSections[i].age.indexOf("_span");
					
			//Check if the Type dropdown has an option selected OR
			//Check if the Brand Name has data in it
			//If either of these are True - assume that there are values for all columns and check the next row.
			if ($j("#" + hemarthrosisSections[i].age.substring(0, a)).val() != "")
			{
				//Hide the add button in the previous row. 
				$j("#" + hemarthrosisSections[i-1].addSectionBtn).hide();
				$j("#" + hemarthrosisSections[i-1].delSectionBtn).hide();
			
				if(i == 9){
					$j("#" + hemarthrosisSections[i].addSectionBtn).hide();
				}
			
			} else {
				//There is no data in this row.
				//Make sure the add and delete buttons are shown for the previous row.
				$j("#" + hemarthrosisSections[i-1].addSectionBtn).show();
				if((i-1) > 0){
					$j("#" + hemarthrosisSections[i-1].delSectionBtn).show();
				}
			
				//Hide this section.
				$j("#" + hemarthrosisSections[i].heading).closest("table").hide();
				$j("#" + hemarthrosisSections[i].age).closest("table").hide();
				$j("#" + hemarthrosisSections[i].bleedingType).closest("table").hide();
				$j("#" + hemarthrosisSections[i].bleedingType).parents("table").hide();
				$j("#" + hemarthrosisSections[i].bleedingTypeOther).closest("table").hide();
				$j("#" + hemarthrosisSections[i].location).closest("table").hide();
				$j("#" + hemarthrosisSections[i].location).parents("table").hide();
				$j("#" + hemarthrosisSections[i].excessiveBleedingTreatment).closest("table").hide();
				$j("#" + hemarthrosisSections[i].excessiveBleedingTreatment).parents("table").hide();
				$j("#" + hemarthrosisSections[i].excessiveBleedingTreatmentGiven).closest("table").hide();
				$j("#" + hemarthrosisSections[i].excessiveBleedingTreatmentGiven).parents("table").hide();
				$j("#" + hemarthrosisSections[i].addSectionBtn).closest("table").hide();
			}
		}
	
$j(".addBtnHemarthrosis").click(function() {
	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");

	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = hemarthrosisSections[i].addSectionBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < hemarthrosisSections.length) {
				if(i != (hemarthrosisSections.length-1)) {
					$j("#" + hemarthrosisSections[i].delSectionBtn).hide();
				}
				$j("#" + hemarthrosisSections[i].addSectionBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + hemarthrosisSections[i+1].heading).closest("table").show();
			$j("#" + hemarthrosisSections[i+1].age).closest("table").show();
			$j("#" + hemarthrosisSections[i+1].bleedingType).closest("table").show();
			$j("#" + hemarthrosisSections[i+1].bleedingType).parents("table").show();
//			$j("#" + hemarthrosisSections[i+1].bleedingTypeOther).closest("table").show();
			$j("#" + hemarthrosisSections[i+1].location).closest("table").show();
			$j("#" + hemarthrosisSections[i+1].location).parents("table").show();
			$j("#" + hemarthrosisSections[i+1].excessiveBleedingTreatment).closest("table").show();
			$j("#" + hemarthrosisSections[i+1].excessiveBleedingTreatment).parents("table").show();
//			$j("#" + hemarthrosisSections[i+1].excessiveBleedingTreatmentGiven).closest("table").show();
//			$j("#" + hemarthrosisSections[i+1].excessiveBleedingTreatmentGiven).parents("table").show();
			$j("#" + hemarthrosisSections[i+1].addSectionBtn).closest("table").show();

		} 
			i++;
		
	}

});



$j(".deleteBtnHemarthrosis").click(function() {
	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");

	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = hemarthrosisSections[i].delSectionBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			$j("#" + hemarthrosisSections[i].heading).closest("table").hide();
			
			var a = hemarthrosisSections[i].age.indexOf("_span");
			$j("#" + hemarthrosisSections[i].age.substring(0, a)).val("");
			$j("#" + hemarthrosisSections[i].age).closest("table").hide();
			
			var b = hemarthrosisSections[i].bleedingType.indexOf("_span");
			listUncheck = document.getElementsByName(hemarthrosisSections[i].bleedingType.substring(0, b));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + hemarthrosisSections[i].bleedingType).closest("table").hide();
			$j("#" + hemarthrosisSections[i].bleedingType).parents("table").hide();
			
			var c = hemarthrosisSections[i].bleedingTypeOther.indexOf("_span");
			$j("#" + hemarthrosisSections[i].bleedingTypeOther.substring(0, c)).val("");
			$j("#" + hemarthrosisSections[i].bleedingTypeOther).closest("table").hide();
			
			var d = hemarthrosisSections[i].location.indexOf("_span");
			listUncheck = document.getElementsByName(hemarthrosisSections[i].location.substring(0, d));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + hemarthrosisSections[i].location).closest("table").hide();
			$j("#" + hemarthrosisSections[i].location).parents("table").hide();

			var e = hemarthrosisSections[i].excessiveBleedingTreatment.indexOf("_span");
			listUncheck = document.getElementsByName(hemarthrosisSections[i].excessiveBleedingTreatment.substring(0, e));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + hemarthrosisSections[i].excessiveBleedingTreatment).closest("table").hide();
			$j("#" + hemarthrosisSections[i].excessiveBleedingTreatment).parents("table").hide();
			
			var f = hemarthrosisSections[i].excessiveBleedingTreatmentGiven.indexOf("_span");
			listUncheck = document.getElementsByName(hemarthrosisSections[i].excessiveBleedingTreatmentGiven.substring(0, f));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + hemarthrosisSections[i].excessiveBleedingTreatmentGiven).closest("table").hide();
			$j("#" + hemarthrosisSections[i].excessiveBleedingTreatmentGiven).parents("table").hide();
			$j("#" + hemarthrosisSections[i].addSectionBtn).closest("table").hide();
			
			$j("#" + hemarthrosisSections[i].addSectionBtn).closest("table").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + hemarthrosisSections[i-1].addSectionBtn).show();
			if((i-1) > 0) {
				$j("#" + hemarthrosisSections[i-1].delSectionBtn).show();
			}
		}
			i++;
		
	}

});


var a;
var fieldID;

//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[1].bleedingType.indexOf("_span");
fieldID = hemarthrosisSections[1].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hemarthrosisSections[1].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[1].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[1].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[1].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[2].bleedingType.indexOf("_span");
fieldID = hemarthrosisSections[2].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hemarthrosisSections[2].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[2].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[2].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[2].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[3].bleedingType.indexOf("_span");
fieldID = hemarthrosisSections[3].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hemarthrosisSections[3].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[3].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[3].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[3].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[4].bleedingType.indexOf("_span");
fieldID = hemarthrosisSections[4].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hemarthrosisSections[4].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[4].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[4].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[4].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[5].bleedingType.indexOf("_span");
fieldID = hemarthrosisSections[5].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hemarthrosisSections[5].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[5].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[5].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[5].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[6].bleedingType.indexOf("_span");
fieldID = hemarthrosisSections[6].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hemarthrosisSections[6].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[6].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[6].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[6].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[7].bleedingType.indexOf("_span");
fieldID = hemarthrosisSections[7].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hemarthrosisSections[7].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[7].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[7].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[7].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[8].bleedingType.indexOf("_span");
fieldID = hemarthrosisSections[8].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hemarthrosisSections[8].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[8].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[8].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[8].bleedingTypeOther).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[9].bleedingType.indexOf("_span");
fieldID = hemarthrosisSections[9].bleedingType.substring(0, a);
var bleedingTypeOtherDescribe = document.getElementsByName(fieldID)[2];
var bleedingTypeOther0 = document.getElementsByName(fieldID)[0];
var bleedingTypeOther1 = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTypeOtherDescribe.checked) {
	$j("#" + hemarthrosisSections[9].bleedingTypeOther).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[9].bleedingTypeOther).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTypeOther0.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[9].bleedingTypeOther).closest("table").hide();
}, false);
bleedingTypeOther1.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[9].bleedingTypeOther).closest("table").hide();
}, false);




//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[1].excessiveBleedingTreatment.indexOf("_span");
fieldID = hemarthrosisSections[1].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hemarthrosisSections[1].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[1].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[1].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hemarthrosisSections[1].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[1].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[1].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[2].excessiveBleedingTreatment.indexOf("_span");
fieldID = hemarthrosisSections[2].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hemarthrosisSections[2].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[2].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[2].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hemarthrosisSections[2].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[2].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[2].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[3].excessiveBleedingTreatment.indexOf("_span");
fieldID = hemarthrosisSections[3].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hemarthrosisSections[3].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[3].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[3].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hemarthrosisSections[3].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[3].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[3].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[4].excessiveBleedingTreatment.indexOf("_span");
fieldID = hemarthrosisSections[4].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hemarthrosisSections[4].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[4].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[4].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hemarthrosisSections[4].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[4].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[4].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[5].excessiveBleedingTreatment.indexOf("_span");
fieldID = hemarthrosisSections[5].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hemarthrosisSections[5].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[5].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[5].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hemarthrosisSections[5].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[5].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[5].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[6].excessiveBleedingTreatment.indexOf("_span");
fieldID = hemarthrosisSections[6].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hemarthrosisSections[6].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[6].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[6].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hemarthrosisSections[6].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[6].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[6].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[7].excessiveBleedingTreatment.indexOf("_span");
fieldID = hemarthrosisSections[7].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hemarthrosisSections[7].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[7].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[7].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hemarthrosisSections[7].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[7].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[7].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[8].excessiveBleedingTreatment.indexOf("_span");
fieldID = hemarthrosisSections[8].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hemarthrosisSections[8].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[8].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[8].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hemarthrosisSections[8].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[8].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[8].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = hemarthrosisSections[9].excessiveBleedingTreatment.indexOf("_span");
fieldID = hemarthrosisSections[9].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + hemarthrosisSections[9].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[9].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[9].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + hemarthrosisSections[9].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + hemarthrosisSections[9].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + hemarthrosisSections[9].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


});

