var rowTotal = 10;
var cnsHeading = fld10050_42161_45377_id;
var cnsHeadingID = $j(cnsHeading).attr("id");
var cnsComment = fld10050_42157_45373_id;
var cnsCommentID = $j(cnsComment).attr("id");
var cnsSections = new Array(rowTotal);

cnsSections[0] = {
	heading : "fld10050_42161_45377_id",
	age : "fld10050_42181_45397_span",
	excessiveBleedingTreatment : "fld10050_42191_45407_span",
	excessiveBleedingTreatmentGiven : "fld10050_42171_45387_span",
	addSectionBtn : "fld10050_42211_45427_id",
	delSectionBtn : "fld10050_42221_45437_id"
}

$j(document).ready(function() {
	
	// Get the Yes/No element names for the appropriate field
	var cnsYes = document.getElementsByName("fld10050_42158_45374")[0];
	var cnsNo = document.getElementsByName("fld10050_42158_45374")[1];
	
	// Hide the comments if primary question has answer of no
	if(!cnsYes.checked) {
		$j("#" + cnsCommentID).hide();
		$j("#" + cnsHeadingID).hide();
		$j("#" + cnsSections[0].addSectionBtn).closest("table").hide();
	}
	
	// Add an event listener to show the comment if Yes is clicked
	cnsYes.addEventListener('click', function() {
		$j("#" + cnsCommentID).show();
		$j("#" + cnsHeadingID).show();
		$j("#" + cnsSections[0].addSectionBtn).closest("table").show();
	}, false);
	
	// Add an event listener to hide the comment if No is clicked
	cnsNo.addEventListener('click', function() {
		$j("#" + cnsCommentID).hide();
		$j("#" + cnsHeadingID).hide();
		$j("#" + cnsSections[0].addSectionBtn).closest("table").hide();
	}, false);
	
	for (var i = 1; i < cnsSections.length; i++) {
		var str = "_";
		var field
		var fieldElements = [];
		var firstIncrement, secondIncrement;
	
		field = String(cnsSections[i-1].heading);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newHeadingField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
	
		field = String(cnsSections[i-1].age);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newAgeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(cnsSections[i-1].excessiveBleedingTreatment);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newExcessiveBleedingTreatmentField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(cnsSections[i-1].excessiveBleedingTreatmentGiven);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newExcessiveBleedingTreatmentGivenField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(cnsSections[i-1].addSectionBtn);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newAddSectionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(cnsSections[i-1].delSectionBtn);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newDeleteSectionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
				
		cnsSections[i] = {
				heading : String(newHeadingField),
				age : String(newAgeField),
				excessiveBleedingTreatment : newExcessiveBleedingTreatmentField,
				excessiveBleedingTreatmentGiven : String(newExcessiveBleedingTreatmentGivenField),
				addSectionBtn : String(newAddSectionField),
				delSectionBtn : String(newDeleteSectionField)
		}
	}
	
		/** BEGIN TEST DATA  **/

//		$j("#" + cnsSections[0].age.substring(0, 20)).val("15");
//		$j("#" + cnsSections[1].age.substring(0, 20)).val("18");
		/** END TEST DATA  **/
			
		// hide the delete Button in the first section - it should never be seen
		$j("#" + cnsSections[0].delSectionBtn).hide();
		
	    // Start the for loop in the second section because the first section
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {

			$j("#" + cnsSections[i].delSectionBtn).hide();
			// when the form loads, check to see if there is data populated in the
			// rows.
			var a = cnsSections[i].age.indexOf("_span");
					
			//Check if the Type dropdown has an option selected OR
			//Check if the Brand Name has data in it
			//If either of these are True - assume that there are values for all columns and check the next row.
			if ($j("#" + cnsSections[i].age.substring(0, a)).val() != "")
			{
				//Hide the add button in the previous row. 
				$j("#" + cnsSections[i-1].addSectionBtn).hide();
				$j("#" + cnsSections[i-1].delSectionBtn).hide();
			
				if(i == 9){
					$j("#" + cnsSections[i].addSectionBtn).hide();
				}
			
			} else {
				//There is no data in this row.
				//Make sure the add and delete buttons are shown for the previous row.
				$j("#" + cnsSections[i-1].addSectionBtn).show();
				if((i-1) > 0){
					$j("#" + cnsSections[i-1].delSectionBtn).show();
				}
			
				//Hide this section.
				$j("#" + cnsSections[i].heading).closest("table").hide();
				$j("#" + cnsSections[i].age).closest("table").hide();
				$j("#" + cnsSections[i].excessiveBleedingTreatment).closest("table").hide();
				$j("#" + cnsSections[i].excessiveBleedingTreatment).parents("table").hide();
				$j("#" + cnsSections[i].excessiveBleedingTreatmentGiven).closest("table").hide();
				$j("#" + cnsSections[i].excessiveBleedingTreatmentGiven).parents("table").hide();
				$j("#" + cnsSections[i].addSectionBtn).closest("table").hide();
			}
		}
	
$j(".addBtnCNS").click(function() {
	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");

	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = cnsSections[i].addSectionBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < cnsSections.length) {
				if(i != (cnsSections.length-1)) {
					$j("#" + cnsSections[i].delSectionBtn).hide();
				}
				$j("#" + cnsSections[i].addSectionBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + cnsSections[i+1].heading).closest("table").show();
			$j("#" + cnsSections[i+1].age).closest("table").show();
			$j("#" + cnsSections[i+1].excessiveBleedingTreatment).closest("table").show();
			$j("#" + cnsSections[i+1].excessiveBleedingTreatment).parents("table").show();
//			$j("#" + cnsSections[i+1].excessiveBleedingTreatmentGiven).closest("table").show();
//			$j("#" + cnsSections[i+1].excessiveBleedingTreatmentGiven).parents("table").show();
			$j("#" + cnsSections[i+1].addSectionBtn).closest("table").show();

		} 
			i++;
		
	}

});



$j(".deleteBtnCNS").click(function() {
	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");

	var y;
	var i = 0;
	var listUncheck;

	while (!Boolean(y)) {
		var rowName = cnsSections[i].delSectionBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			$j("#" + cnsSections[i].heading).closest("table").hide();
			
			var a = cnsSections[i].age.indexOf("_span");
			$j("#" + cnsSections[i].age.substring(0, a)).val("");
			$j("#" + cnsSections[i].age).closest("table").hide();
			
			var b = cnsSections[i].excessiveBleedingTreatment.indexOf("_span");
			listUncheck = document.getElementsByName(cnsSections[i].excessiveBleedingTreatment.substring(0, b));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + cnsSections[i].excessiveBleedingTreatment).closest("table").hide();
			$j("#" + cnsSections[i].excessiveBleedingTreatment).parents("table").hide();
			
			var c = cnsSections[i].excessiveBleedingTreatmentGiven.indexOf("_span");
			listUncheck = document.getElementsByName(cnsSections[i].excessiveBleedingTreatmentGiven.substring(0, c));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + cnsSections[i].excessiveBleedingTreatmentGiven).closest("table").hide();
			$j("#" + cnsSections[i].excessiveBleedingTreatmentGiven).parents("table").hide();

			$j("#" + cnsSections[i].addSectionBtn).closest("table").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + cnsSections[i-1].addSectionBtn).show();
			if((i-1) > 0) {
				$j("#" + cnsSections[i-1].delSectionBtn).show();
			}
		}
			i++;
		
	}

});


//Get the Yes/No element names for the appropriate field
a = cnsSections[1].excessiveBleedingTreatment.indexOf("_span");
fieldID = cnsSections[1].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + cnsSections[1].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[1].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + cnsSections[1].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + cnsSections[1].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + cnsSections[1].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[1].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = cnsSections[2].excessiveBleedingTreatment.indexOf("_span");
fieldID = cnsSections[2].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + cnsSections[2].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[2].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + cnsSections[2].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + cnsSections[2].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + cnsSections[2].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[2].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = cnsSections[3].excessiveBleedingTreatment.indexOf("_span");
fieldID = cnsSections[3].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + cnsSections[3].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[3].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + cnsSections[3].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + cnsSections[3].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + cnsSections[3].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[3].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = cnsSections[4].excessiveBleedingTreatment.indexOf("_span");
fieldID = cnsSections[4].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + cnsSections[4].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[4].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + cnsSections[4].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + cnsSections[4].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + cnsSections[4].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[4].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = cnsSections[5].excessiveBleedingTreatment.indexOf("_span");
fieldID = cnsSections[5].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + cnsSections[5].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[5].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + cnsSections[5].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + cnsSections[5].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + cnsSections[5].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[5].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = cnsSections[6].excessiveBleedingTreatment.indexOf("_span");
fieldID = cnsSections[6].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + cnsSections[6].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[6].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + cnsSections[6].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + cnsSections[6].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + cnsSections[6].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[6].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = cnsSections[7].excessiveBleedingTreatment.indexOf("_span");
fieldID = cnsSections[7].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + cnsSections[7].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[7].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + cnsSections[7].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + cnsSections[7].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + cnsSections[7].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[7].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = cnsSections[8].excessiveBleedingTreatment.indexOf("_span");
fieldID = cnsSections[8].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + cnsSections[8].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[8].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + cnsSections[8].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + cnsSections[8].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + cnsSections[8].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[8].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = cnsSections[9].excessiveBleedingTreatment.indexOf("_span");
fieldID = cnsSections[9].excessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + cnsSections[9].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[9].excessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + cnsSections[9].excessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + cnsSections[9].excessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + cnsSections[9].excessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + cnsSections[9].excessiveBleedingTreatmentGiven).parents("table").hide();
}, false);

});

