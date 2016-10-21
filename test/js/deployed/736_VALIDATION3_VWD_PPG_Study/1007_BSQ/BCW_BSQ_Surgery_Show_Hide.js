var rowTotal = 10;
var surgeryheading = fld10050_41825_45041_id;
var surgeryheadingID = $j(surgeryheading).attr("id");
var surgeryComment = fld10050_41732_44948_id;
var surgeryCommentID = $j(surgeryComment).attr("id");
var surgerySections = new Array(rowTotal);

surgerySections[0] = {
	heading: "fld10050_41825_45041_id",
	age : "fld10050_41735_44951_span",
	surgeryType : "fld10050_41765_44981_span",
	surgeryTypeDescribe : "fld10050_41745_44961_span",
	treatmentGiven : "fld10050_41775_44991_span",
	treatmentPrevention : "fld10050_41785_45001_span",
	ExcessBleeding : "fld10050_41755_44971_span",
	ExcessiveBleedingTime : "fld10050_41795_45011_span",
	ExcessiveBleedingTreatment : "fld10050_41805_45021_span",
	ExcessiveBleedingTreatmentGiven : "fld10050_41815_45031_span",
	addSectionBtn : "fld10050_41885_45101_id",
	delSectionBtn : "fld10050_41895_45111_id"
}

$j(document).ready(function() {
	
	// Get the Yes/No element names for the appropriate field
	var surgeryYes = document.getElementsByName("fld10050_41730_44946")[0];
	var surgeryNo = document.getElementsByName("fld10050_41730_44946")[1];
	
	// Hide the comments if primary question has answer of no
	if (!surgeryYes.checked) {
		$j("#" + surgeryCommentID).hide();
		$j("#" + surgeryheadingID).hide();
		$j("#" + surgerySections[0].addSectionBtn).closest("table").hide();
	}
	
	// Add an event listener to show the comment if Yes is clicked
	surgeryYes.addEventListener('click', function() {
		$j("#" + surgeryCommentID).show();
		$j("#" + surgeryheadingID).show();
		$j("#" + surgerySections[0].addSectionBtn).closest("table").show();
	}, false);
	
	// Add an event listener to hide the comment if No is clicked
	surgeryNo.addEventListener('click', function() {
		$j("#" + surgeryCommentID).hide();
		$j("#" + surgeryheadingID).hide();
		$j("#" + surgerySections[0].addSectionBtn).closest("table").hide();
	}, false);
	
	for (var i = 1; i < surgerySections.length; i++) {
		var str = "_";
		var field
		var fieldElements = [];
		var firstIncrement, secondIncrement;
	
		field = String(surgerySections[i-1].heading);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newHeadingField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);	
	
		field = String(surgerySections[i-1].age);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newAgeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);		
				
		field = String(surgerySections[i-1].surgeryType);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newSurgeryTypeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(surgerySections[i-1].surgeryTypeDescribe);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newSurgeryTypeDescribeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(surgerySections[i-1].treatmentGiven);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newTreatmentGivenField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(surgerySections[i-1].treatmentPrevention);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newTreatmentPreventionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(surgerySections[i-1].ExcessBleeding);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newExcessiveBleedingField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(surgerySections[i-1].ExcessiveBleedingTime);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newExcessiveBleedingTimeField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(surgerySections[i-1].ExcessiveBleedingTreatment);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newExcessiveBleedingTreatmentField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(surgerySections[i-1].ExcessiveBleedingTreatmentGiven);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newExcessiveBleedingTreatmentGivenField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(surgerySections[i-1].addSectionBtn);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newAddSectionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
		
		field = String(surgerySections[i-1].delSectionBtn);
		fieldElements = field.split("_");
		firstIncrement = Number(fieldElements[1]) + 1;
		secondIncrement = Number(fieldElements[2]) + 1;
		var newDeleteSectionField = fieldElements[0].concat(str,firstIncrement,str,secondIncrement,str,fieldElements[3]);
				
		surgerySections[i] = {
				heading : String(newHeadingField),
				age : String(newAgeField),
				surgeryType : String(newSurgeryTypeField),
				surgeryTypeDescribe : String(newSurgeryTypeDescribeField),
				treatmentGiven : String(newTreatmentGivenField),
				treatmentPrevention : String(newTreatmentPreventionField),
				ExcessBleeding : String(newExcessiveBleedingField),
				ExcessiveBleedingTime : String(newExcessiveBleedingTimeField),
				ExcessiveBleedingTreatment : newExcessiveBleedingTreatmentField,
				ExcessiveBleedingTreatmentGiven : String(newExcessiveBleedingTreatmentGivenField),
				addSectionBtn : String(newAddSectionField),
				delSectionBtn : String(newDeleteSectionField)
		}
	}
	
		/** BEGIN TEST DATA  **/

//		$j("#" + surgerySections[0].age.substring(0, 20)).val("15");
//		$j("#" + surgerySections[1].age.substring(0, 20)).val("18");
		/** END TEST DATA  **/
			
		// hide the delete Button in the first section - it should never be seen
		$j("#" + surgerySections[0].delSectionBtn).hide();
		
	    // Start the for loop in the second section because the first section
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {

			// when the form loads, check to see if there is data populated in the
			// rows.
			var a = surgerySections[i].age.indexOf("_span");
					
			//Check if the Type dropdown has an option selected OR
			//Check if the Brand Name has data in it
			//If either of these are True - assume that there are values for all columns and check the next row.
			if ($j("#" + surgerySections[i].age.substring(0, a)).val() != "")
			{
				//Hide the add button in the previous row. 
				$j("#" + surgerySections[i-1].addSectionBtn).hide();
				$j("#" + surgerySections[i-1].delSectionBtn).hide();
			
				if(i == 9){
					$j("#" + surgerySections[i].addSectionBtn).hide();
				}
			
			} else {
				//There is no data in this row.
				//Make sure the add and delete buttons are shown for the previous row.
				$j("#" + surgerySections[i-1].addSectionBtn).show();
				if((i-1) > 0){
					$j("#" + surgerySections[i-1].delSectionBtn).show();
				}
			
				//Hide this section.
				$j("#" + surgerySections[i].heading).closest("table").hide();
				$j("#" + surgerySections[i].age).closest("table").hide();
				$j("#" + surgerySections[i].surgeryType).closest("table").hide();
				$j("#" + surgerySections[i].surgeryType).parents("table").hide();
				$j("#" + surgerySections[i].surgeryTypeDescribe).closest("table").hide();
				$j("#" + surgerySections[i].treatmentGiven).closest("table").hide();
				$j("#" + surgerySections[i].treatmentGiven).parents("table").hide();
				$j("#" + surgerySections[i].treatmentPrevention).closest("table").hide();
				$j("#" + surgerySections[i].treatmentPrevention).parents("table").hide();
				$j("#" + surgerySections[i].ExcessBleeding).closest("table").hide();
				$j("#" + surgerySections[i].ExcessBleeding).parents("table").hide();
				$j("#" + surgerySections[i].ExcessiveBleedingTime).closest("table").hide();
				$j("#" + surgerySections[i].ExcessiveBleedingTime).parents("table").hide();
				$j("#" + surgerySections[i].ExcessiveBleedingTreatment).closest("table").hide();
				$j("#" + surgerySections[i].ExcessiveBleedingTreatment).parents("table").hide();
				$j("#" + surgerySections[i].ExcessiveBleedingTreatmentGiven).closest("table").hide();
				$j("#" + surgerySections[i].ExcessiveBleedingTreatmentGiven).parents("table").hide();
				$j("#" + surgerySections[i].addSectionBtn).closest("table").hide();
			}
		}
	
$j(".addBtnSurgery").click(function() {
	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");

	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = surgerySections[i].addSectionBtn;
		if (rowName === labelId) {
			x = "True";
			//Hide the delete and add buttons in this row
			if(i < surgerySections.length) {
				if(i != (surgerySections.length-1)) {
					$j("#" + surgerySections[i].delSectionBtn).hide();
				}
				$j("#" + surgerySections[i].addSectionBtn).hide();

			}
					
			//Show all values in row where the add button was selected
			$j("#" + surgerySections[i+1].heading).closest("table").show();
			$j("#" + surgerySections[i+1].age).closest("table").show();
			$j("#" + surgerySections[i+1].surgeryType).closest("table").show();
			$j("#" + surgerySections[i+1].surgeryType).parents("table").show();
//			$j("#" + surgerySections[i+1].surgeryTypeDescribe).closest("table").show();
			$j("#" + surgerySections[i+1].treatmentGiven).closest("table").show();
			$j("#" + surgerySections[i+1].treatmentGiven).parents("table").show();
//			$j("#" + surgerySections[i+1].treatmentPrevention).closest("table").show();
//			$j("#" + surgerySections[i+1].treatmentPrevention).parents("table").show();
			$j("#" + surgerySections[i+1].ExcessBleeding).closest("table").show();
			$j("#" + surgerySections[i+1].ExcessBleeding).parents("table").show();
//			$j("#" + surgerySections[i+1].ExcessiveBleedingTime).closest("table").show();
//			$j("#" + surgerySections[i+1].ExcessiveBleedingTime).parents("table").show();
//			$j("#" + surgerySections[i+1].ExcessiveBleedingTreatment).closest("table").show();
//			$j("#" + surgerySections[i+1].ExcessiveBleedingTreatment).parents("table").show();
//			$j("#" + surgerySections[i+1].ExcessiveBleedingTreatmentGiven).closest("table").show();
//			$j("#" + surgerySections[i+1].ExcessiveBleedingTreatmentGiven).parents("table").show();
			$j("#" + surgerySections[i+1].addSectionBtn).closest("table").show();

		} 
			i++;
		
	}

});



$j(".deleteBtnSurgery").click(function() {
	var parentLabelElement = $j(this).parent("label");
	var labelId = $j(parentLabelElement).attr("id");

	var y;
	var i = 0;
	var listUncheck;

	while (!Boolean(y)) {
		var rowName = surgerySections[i].delSectionBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			$j("#" + surgerySections[i].heading).closest("table").hide();
			
			var a = surgerySections[i].age.indexOf("_span");
			$j("#" + surgerySections[i].age.substring(0, a)).val("");
			$j("#" + surgerySections[i].age).closest("table").hide();

			var b = surgerySections[i].surgeryType.indexOf("_span");
			listUncheck = document.getElementsByName(surgerySections[i].surgeryType.substring(0, b));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + surgerySections[i].surgeryType).closest("table").hide();
			$j("#" + surgerySections[i].surgeryType).parents("table").hide();
			
			var c = surgerySections[i].surgeryTypeDescribe.indexOf("_span");
			$j("#" + surgerySections[i].surgeryTypeDescribe.substring(0, c)).val("");
			$j("#" + surgerySections[i].surgeryTypeDescribe).closest("table").hide();

			var d = surgerySections[i].treatmentGiven.indexOf("_span");
			listUncheck = document.getElementsByName(surgerySections[i].treatmentGiven.substring(0, d));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + surgerySections[i].treatmentGiven).closest("table").hide();
			$j("#" + surgerySections[i].treatmentGiven).parents("table").hide();

			var e = surgerySections[i].treatmentPrevention.indexOf("_span");
			listUncheck = document.getElementsByName(surgerySections[i].treatmentPrevention.substring(0, e));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + surgerySections[i].treatmentPrevention).closest("table").hide();
			$j("#" + surgerySections[i].treatmentPrevention).parents("table").hide();

			var f = surgerySections[i].ExcessBleeding.indexOf("_span");
			listUncheck = document.getElementsByName(surgerySections[i].ExcessBleeding.substring(0, f));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + surgerySections[i].ExcessBleeding).closest("table").hide();
			$j("#" + surgerySections[i].ExcessBleeding).parents("table").hide();
			
			var g = surgerySections[i].ExcessiveBleedingTime.indexOf("_span");
			listUncheck = document.getElementsByName(surgerySections[i].ExcessiveBleedingTime.substring(0, g));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + surgerySections[i].ExcessiveBleedingTime).closest("table").hide();
			$j("#" + surgerySections[i].ExcessiveBleedingTime).parents("table").hide();
			
			var h = surgerySections[i].ExcessiveBleedingTreatment.indexOf("_span");
			listUncheck = document.getElementsByName(surgerySections[i].ExcessiveBleedingTreatment.substring(0, h));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + surgerySections[i].ExcessiveBleedingTreatment).closest("table").hide();
			$j("#" + surgerySections[i].ExcessiveBleedingTreatment).parents("table").hide();
			
			var l = surgerySections[i].ExcessiveBleedingTreatmentGiven.indexOf("_span");
			listUncheck = document.getElementsByName(surgerySections[i].ExcessiveBleedingTreatmentGiven.substring(0, l));
			for (var j = 0; j < listUncheck.length; j++)
				listUncheck[j].checked = false;
			$j("#" + surgerySections[i].ExcessiveBleedingTreatmentGiven).closest("table").hide();
			$j("#" + surgerySections[i].ExcessiveBleedingTreatmentGiven).parents("table").hide();

			$j("#" + surgerySections[i].addSectionBtn).closest("table").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + surgerySections[i-1].addSectionBtn).show();
			if((i-1) > 0) {
				$j("#" + surgerySections[i-1].delSectionBtn).show();
			}
		}
			i++;
		
	}

});

var a;
var fieldID;

//Get the Yes/No element names for the appropriate field
a = surgerySections[1].surgeryType.indexOf("_span");
fieldID = surgerySections[1].surgeryType.substring(0, a);
var surgeryTypeOtherDescribe = document.getElementsByName(fieldID)[6];
var surgeryTypeOther0 = document.getElementsByName(fieldID)[0];
var surgeryTypeOther1 = document.getElementsByName(fieldID)[1];
var surgeryTypeOther2 = document.getElementsByName(fieldID)[2];
var surgeryTypeOther3 = document.getElementsByName(fieldID)[3];
var surgeryTypeOther4 = document.getElementsByName(fieldID)[4];
var surgeryTypeOther5 = document.getElementsByName(fieldID)[5];

// Hide the comments if primary question has answer of no
if (!surgeryTypeOtherDescribe.checked) {
	$j("#" + surgerySections[1].surgeryTypeDescribe).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
surgeryTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + surgerySections[1].surgeryTypeDescribe).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
surgeryTypeOther0.addEventListener('click', function() {
	$j("#" + surgerySections[1].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther1.addEventListener('click', function() {
	$j("#" + surgerySections[1].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther2.addEventListener('click', function() {
	$j("#" + surgerySections[1].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther3.addEventListener('click', function() {
	$j("#" + surgerySections[1].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther4.addEventListener('click', function() {
	$j("#" + surgerySections[1].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther5.addEventListener('click', function() {
	$j("#" + surgerySections[1].surgeryTypeDescribe).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[2].surgeryType.indexOf("_span");
fieldID = surgerySections[2].surgeryType.substring(0, a);
var surgeryTypeOtherDescribe = document.getElementsByName(fieldID)[6];
var surgeryTypeOther0 = document.getElementsByName(fieldID)[0];
var surgeryTypeOther1 = document.getElementsByName(fieldID)[1];
var surgeryTypeOther2 = document.getElementsByName(fieldID)[2];
var surgeryTypeOther3 = document.getElementsByName(fieldID)[3];
var surgeryTypeOther4 = document.getElementsByName(fieldID)[4];
var surgeryTypeOther5 = document.getElementsByName(fieldID)[5];

// Hide the comments if primary question has answer of no
if (!surgeryTypeOtherDescribe.checked) {
	$j("#" + surgerySections[2].surgeryTypeDescribe).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
surgeryTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + surgerySections[2].surgeryTypeDescribe).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
surgeryTypeOther0.addEventListener('click', function() {
	$j("#" + surgerySections[2].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther1.addEventListener('click', function() {
	$j("#" + surgerySections[2].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther2.addEventListener('click', function() {
	$j("#" + surgerySections[2].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther3.addEventListener('click', function() {
	$j("#" + surgerySections[2].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther4.addEventListener('click', function() {
	$j("#" + surgerySections[2].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther5.addEventListener('click', function() {
	$j("#" + surgerySections[2].surgeryTypeDescribe).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[3].surgeryType.indexOf("_span");
fieldID = surgerySections[3].surgeryType.substring(0, a);
var surgeryTypeOtherDescribe = document.getElementsByName(fieldID)[6];
var surgeryTypeOther0 = document.getElementsByName(fieldID)[0];
var surgeryTypeOther1 = document.getElementsByName(fieldID)[1];
var surgeryTypeOther2 = document.getElementsByName(fieldID)[2];
var surgeryTypeOther3 = document.getElementsByName(fieldID)[3];
var surgeryTypeOther4 = document.getElementsByName(fieldID)[4];
var surgeryTypeOther5 = document.getElementsByName(fieldID)[5];

// Hide the comments if primary question has answer of no
if (!surgeryTypeOtherDescribe.checked) {
	$j("#" + surgerySections[3].surgeryTypeDescribe).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
surgeryTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + surgerySections[3].surgeryTypeDescribe).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
surgeryTypeOther0.addEventListener('click', function() {
	$j("#" + surgerySections[3].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther1.addEventListener('click', function() {
	$j("#" + surgerySections[3].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther2.addEventListener('click', function() {
	$j("#" + surgerySections[3].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther3.addEventListener('click', function() {
	$j("#" + surgerySections[3].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther4.addEventListener('click', function() {
	$j("#" + surgerySections[3].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther5.addEventListener('click', function() {
	$j("#" + surgerySections[3].surgeryTypeDescribe).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[4].surgeryType.indexOf("_span");
fieldID = surgerySections[4].surgeryType.substring(0, a);
var surgeryTypeOtherDescribe = document.getElementsByName(fieldID)[6];
var surgeryTypeOther0 = document.getElementsByName(fieldID)[0];
var surgeryTypeOther1 = document.getElementsByName(fieldID)[1];
var surgeryTypeOther2 = document.getElementsByName(fieldID)[2];
var surgeryTypeOther3 = document.getElementsByName(fieldID)[3];
var surgeryTypeOther4 = document.getElementsByName(fieldID)[4];
var surgeryTypeOther5 = document.getElementsByName(fieldID)[5];

// Hide the comments if primary question has answer of no
if (!surgeryTypeOtherDescribe.checked) {
	$j("#" + surgerySections[4].surgeryTypeDescribe).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
surgeryTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + surgerySections[4].surgeryTypeDescribe).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
surgeryTypeOther0.addEventListener('click', function() {
	$j("#" + surgerySections[4].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther1.addEventListener('click', function() {
	$j("#" + surgerySections[4].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther2.addEventListener('click', function() {
	$j("#" + surgerySections[4].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther3.addEventListener('click', function() {
	$j("#" + surgerySections[4].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther4.addEventListener('click', function() {
	$j("#" + surgerySections[4].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther5.addEventListener('click', function() {
	$j("#" + surgerySections[4].surgeryTypeDescribe).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[5].surgeryType.indexOf("_span");
fieldID = surgerySections[5].surgeryType.substring(0, a);
var surgeryTypeOtherDescribe = document.getElementsByName(fieldID)[6];
var surgeryTypeOther0 = document.getElementsByName(fieldID)[0];
var surgeryTypeOther1 = document.getElementsByName(fieldID)[1];
var surgeryTypeOther2 = document.getElementsByName(fieldID)[2];
var surgeryTypeOther3 = document.getElementsByName(fieldID)[3];
var surgeryTypeOther4 = document.getElementsByName(fieldID)[4];
var surgeryTypeOther5 = document.getElementsByName(fieldID)[5];

// Hide the comments if primary question has answer of no
if (!surgeryTypeOtherDescribe.checked) {
	$j("#" + surgerySections[5].surgeryTypeDescribe).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
surgeryTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + surgerySections[5].surgeryTypeDescribe).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
surgeryTypeOther0.addEventListener('click', function() {
	$j("#" + surgerySections[5].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther1.addEventListener('click', function() {
	$j("#" + surgerySections[5].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther2.addEventListener('click', function() {
	$j("#" + surgerySections[5].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther3.addEventListener('click', function() {
	$j("#" + surgerySections[5].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther4.addEventListener('click', function() {
	$j("#" + surgerySections[5].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther5.addEventListener('click', function() {
	$j("#" + surgerySections[5].surgeryTypeDescribe).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[6].surgeryType.indexOf("_span");
fieldID = surgerySections[6].surgeryType.substring(0, a);
var surgeryTypeOtherDescribe = document.getElementsByName(fieldID)[6];
var surgeryTypeOther0 = document.getElementsByName(fieldID)[0];
var surgeryTypeOther1 = document.getElementsByName(fieldID)[1];
var surgeryTypeOther2 = document.getElementsByName(fieldID)[2];
var surgeryTypeOther3 = document.getElementsByName(fieldID)[3];
var surgeryTypeOther4 = document.getElementsByName(fieldID)[4];
var surgeryTypeOther5 = document.getElementsByName(fieldID)[5];

// Hide the comments if primary question has answer of no
if (!surgeryTypeOtherDescribe.checked) {
	$j("#" + surgerySections[6].surgeryTypeDescribe).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
surgeryTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + surgerySections[6].surgeryTypeDescribe).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
surgeryTypeOther0.addEventListener('click', function() {
	$j("#" + surgerySections[6].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther1.addEventListener('click', function() {
	$j("#" + surgerySections[6].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther2.addEventListener('click', function() {
	$j("#" + surgerySections[6].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther3.addEventListener('click', function() {
	$j("#" + surgerySections[6].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther4.addEventListener('click', function() {
	$j("#" + surgerySections[6].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther5.addEventListener('click', function() {
	$j("#" + surgerySections[6].surgeryTypeDescribe).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[7].surgeryType.indexOf("_span");
fieldID = surgerySections[7].surgeryType.substring(0, a);
var surgeryTypeOtherDescribe = document.getElementsByName(fieldID)[6];
var surgeryTypeOther0 = document.getElementsByName(fieldID)[0];
var surgeryTypeOther1 = document.getElementsByName(fieldID)[1];
var surgeryTypeOther2 = document.getElementsByName(fieldID)[2];
var surgeryTypeOther3 = document.getElementsByName(fieldID)[3];
var surgeryTypeOther4 = document.getElementsByName(fieldID)[4];
var surgeryTypeOther5 = document.getElementsByName(fieldID)[5];

// Hide the comments if primary question has answer of no
if (!surgeryTypeOtherDescribe.checked) {
	$j("#" + surgerySections[7].surgeryTypeDescribe).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
surgeryTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + surgerySections[7].surgeryTypeDescribe).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
surgeryTypeOther0.addEventListener('click', function() {
	$j("#" + surgerySections[7].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther1.addEventListener('click', function() {
	$j("#" + surgerySections[7].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther2.addEventListener('click', function() {
	$j("#" + surgerySections[7].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther3.addEventListener('click', function() {
	$j("#" + surgerySections[7].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther4.addEventListener('click', function() {
	$j("#" + surgerySections[7].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther5.addEventListener('click', function() {
	$j("#" + surgerySections[7].surgeryTypeDescribe).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[8].surgeryType.indexOf("_span");
fieldID = surgerySections[8].surgeryType.substring(0, a);
var surgeryTypeOtherDescribe = document.getElementsByName(fieldID)[6];
var surgeryTypeOther0 = document.getElementsByName(fieldID)[0];
var surgeryTypeOther1 = document.getElementsByName(fieldID)[1];
var surgeryTypeOther2 = document.getElementsByName(fieldID)[2];
var surgeryTypeOther3 = document.getElementsByName(fieldID)[3];
var surgeryTypeOther4 = document.getElementsByName(fieldID)[4];
var surgeryTypeOther5 = document.getElementsByName(fieldID)[5];

// Hide the comments if primary question has answer of no
if (!surgeryTypeOtherDescribe.checked) {
	$j("#" + surgerySections[8].surgeryTypeDescribe).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
surgeryTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + surgerySections[8].surgeryTypeDescribe).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
surgeryTypeOther0.addEventListener('click', function() {
	$j("#" + surgerySections[8].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther1.addEventListener('click', function() {
	$j("#" + surgerySections[8].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther2.addEventListener('click', function() {
	$j("#" + surgerySections[8].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther3.addEventListener('click', function() {
	$j("#" + surgerySections[8].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther4.addEventListener('click', function() {
	$j("#" + surgerySections[8].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther5.addEventListener('click', function() {
	$j("#" + surgerySections[8].surgeryTypeDescribe).closest("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[9].surgeryType.indexOf("_span");
fieldID = surgerySections[9].surgeryType.substring(0, a);
var surgeryTypeOtherDescribe = document.getElementsByName(fieldID)[6];
var surgeryTypeOther0 = document.getElementsByName(fieldID)[0];
var surgeryTypeOther1 = document.getElementsByName(fieldID)[1];
var surgeryTypeOther2 = document.getElementsByName(fieldID)[2];
var surgeryTypeOther3 = document.getElementsByName(fieldID)[3];
var surgeryTypeOther4 = document.getElementsByName(fieldID)[4];
var surgeryTypeOther5 = document.getElementsByName(fieldID)[5];

// Hide the comments if primary question has answer of no
if (!surgeryTypeOtherDescribe.checked) {
	$j("#" + surgerySections[9].surgeryTypeDescribe).closest("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
surgeryTypeOtherDescribe.addEventListener('click', function() {
	$j("#" + surgerySections[9].surgeryTypeDescribe).closest("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
surgeryTypeOther0.addEventListener('click', function() {
	$j("#" + surgerySections[9].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther1.addEventListener('click', function() {
	$j("#" + surgerySections[9].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther2.addEventListener('click', function() {
	$j("#" + surgerySections[9].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther3.addEventListener('click', function() {
	$j("#" + surgerySections[9].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther4.addEventListener('click', function() {
	$j("#" + surgerySections[9].surgeryTypeDescribe).closest("table").hide();
}, false);
surgeryTypeOther5.addEventListener('click', function() {
	$j("#" + surgerySections[9].surgeryTypeDescribe).closest("table").hide();
}, false);




//Get the Yes/No element names for the appropriate field
a = surgerySections[1].treatmentGiven.indexOf("_span");
fieldID = surgerySections[1].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + surgerySections[1].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[1].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + surgerySections[1].treatmentPrevention).closest("table").show();
	$j("#" + surgerySections[1].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + surgerySections[1].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[1].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[2].treatmentGiven.indexOf("_span");
fieldID = surgerySections[2].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + surgerySections[2].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[2].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + surgerySections[2].treatmentPrevention).closest("table").show();
	$j("#" + surgerySections[2].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + surgerySections[2].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[2].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[3].treatmentGiven.indexOf("_span");
fieldID = surgerySections[3].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + surgerySections[3].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[3].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + surgerySections[3].treatmentPrevention).closest("table").show();
	$j("#" + surgerySections[3].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + surgerySections[3].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[3].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[4].treatmentGiven.indexOf("_span");
fieldID = surgerySections[4].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + surgerySections[4].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[4].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + surgerySections[4].treatmentPrevention).closest("table").show();
	$j("#" + surgerySections[4].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + surgerySections[4].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[4].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[5].treatmentGiven.indexOf("_span");
fieldID = surgerySections[5].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + surgerySections[5].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[5].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + surgerySections[5].treatmentPrevention).closest("table").show();
	$j("#" + surgerySections[5].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + surgerySections[5].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[5].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[6].treatmentGiven.indexOf("_span");
fieldID = surgerySections[6].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + surgerySections[6].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[6].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + surgerySections[6].treatmentPrevention).closest("table").show();
	$j("#" + surgerySections[6].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + surgerySections[6].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[6].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[7].treatmentGiven.indexOf("_span");
fieldID = surgerySections[7].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + surgerySections[7].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[7].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + surgerySections[7].treatmentPrevention).closest("table").show();
	$j("#" + surgerySections[7].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + surgerySections[7].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[7].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[8].treatmentGiven.indexOf("_span");
fieldID = surgerySections[8].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + surgerySections[8].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[8].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + surgerySections[8].treatmentPrevention).closest("table").show();
	$j("#" + surgerySections[8].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + surgerySections[8].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[8].treatmentPrevention).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[9].treatmentGiven.indexOf("_span");
fieldID = surgerySections[9].treatmentGiven.substring(0, a);
var treatmentPreventionYes = document.getElementsByName(fieldID)[0];
var treatmentPreventionNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!treatmentPreventionYes.checked) {
	$j("#" + surgerySections[9].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[9].treatmentPrevention).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
treatmentPreventionYes.addEventListener('click', function() {
	$j("#" + surgerySections[9].treatmentPrevention).closest("table").show();
	$j("#" + surgerySections[9].treatmentPrevention).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
treatmentPreventionNo.addEventListener('click', function() {
	$j("#" + surgerySections[9].treatmentPrevention).closest("table").hide();
	$j("#" + surgerySections[9].treatmentPrevention).parents("table").hide();
}, false);




//Get the Yes/No element names for the appropriate field
a = surgerySections[1].ExcessBleeding.indexOf("_span");
fieldID = surgerySections[1].ExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + surgerySections[1].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[1].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[1].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[1].ExcessiveBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + surgerySections[1].ExcessiveBleedingTime).closest("table").show();
	$j("#" + surgerySections[1].ExcessiveBleedingTime).parents("table").show();
	$j("#" + surgerySections[1].ExcessiveBleedingTreatment).closest("table").show();
	$j("#" + surgerySections[1].ExcessiveBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + surgerySections[1].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[1].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[1].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[1].ExcessiveBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[2].ExcessBleeding.indexOf("_span");
fieldID = surgerySections[2].ExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + surgerySections[2].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[2].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[2].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[2].ExcessiveBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + surgerySections[2].ExcessiveBleedingTime).closest("table").show();
	$j("#" + surgerySections[2].ExcessiveBleedingTime).parents("table").show();
	$j("#" + surgerySections[2].ExcessiveBleedingTreatment).closest("table").show();
	$j("#" + surgerySections[2].ExcessiveBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + surgerySections[2].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[2].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[2].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[2].ExcessiveBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[3].ExcessBleeding.indexOf("_span");
fieldID = surgerySections[3].ExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + surgerySections[3].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[3].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[3].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[3].ExcessiveBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + surgerySections[3].ExcessiveBleedingTime).closest("table").show();
	$j("#" + surgerySections[3].ExcessiveBleedingTime).parents("table").show();
	$j("#" + surgerySections[3].ExcessiveBleedingTreatment).closest("table").show();
	$j("#" + surgerySections[3].ExcessiveBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + surgerySections[3].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[3].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[3].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[3].ExcessiveBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[4].ExcessBleeding.indexOf("_span");
fieldID = surgerySections[4].ExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + surgerySections[4].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[4].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[4].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[4].ExcessiveBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + surgerySections[4].ExcessiveBleedingTime).closest("table").show();
	$j("#" + surgerySections[4].ExcessiveBleedingTime).parents("table").show();
	$j("#" + surgerySections[4].ExcessiveBleedingTreatment).closest("table").show();
	$j("#" + surgerySections[4].ExcessiveBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + surgerySections[4].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[4].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[4].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[4].ExcessiveBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[5].ExcessBleeding.indexOf("_span");
fieldID = surgerySections[5].ExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + surgerySections[5].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[5].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[5].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[5].ExcessiveBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + surgerySections[5].ExcessiveBleedingTime).closest("table").show();
	$j("#" + surgerySections[5].ExcessiveBleedingTime).parents("table").show();
	$j("#" + surgerySections[5].ExcessiveBleedingTreatment).closest("table").show();
	$j("#" + surgerySections[5].ExcessiveBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + surgerySections[5].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[5].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[5].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[5].ExcessiveBleedingTreatment).parents("table").hide();
}, false);

//Get the Yes/No element names for the appropriate field
a = surgerySections[6].ExcessBleeding.indexOf("_span");
fieldID = surgerySections[6].ExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + surgerySections[6].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[6].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[6].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[6].ExcessiveBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + surgerySections[6].ExcessiveBleedingTime).closest("table").show();
	$j("#" + surgerySections[6].ExcessiveBleedingTime).parents("table").show();
	$j("#" + surgerySections[6].ExcessiveBleedingTreatment).closest("table").show();
	$j("#" + surgerySections[6].ExcessiveBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + surgerySections[6].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[6].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[6].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[6].ExcessiveBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[7].ExcessBleeding.indexOf("_span");
fieldID = surgerySections[7].ExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + surgerySections[7].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[7].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[7].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[7].ExcessiveBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + surgerySections[7].ExcessiveBleedingTime).closest("table").show();
	$j("#" + surgerySections[7].ExcessiveBleedingTime).parents("table").show();
	$j("#" + surgerySections[7].ExcessiveBleedingTreatment).closest("table").show();
	$j("#" + surgerySections[7].ExcessiveBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + surgerySections[7].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[7].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[7].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[7].ExcessiveBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[8].ExcessBleeding.indexOf("_span");
fieldID = surgerySections[8].ExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + surgerySections[8].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[8].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[8].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[8].ExcessiveBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + surgerySections[8].ExcessiveBleedingTime).closest("table").show();
	$j("#" + surgerySections[8].ExcessiveBleedingTime).parents("table").show();
	$j("#" + surgerySections[8].ExcessiveBleedingTreatment).closest("table").show();
	$j("#" + surgerySections[8].ExcessiveBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + surgerySections[8].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[8].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[8].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[8].ExcessiveBleedingTreatment).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[9].ExcessBleeding.indexOf("_span");
fieldID = surgerySections[9].ExcessBleeding.substring(0, a);
var excessiveBleedingYes = document.getElementsByName(fieldID)[0];
var excessiveBleedingNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!excessiveBleedingYes.checked) {
	$j("#" + surgerySections[9].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[9].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[9].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[9].ExcessiveBleedingTreatment).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
excessiveBleedingYes.addEventListener('click', function() {
	$j("#" + surgerySections[9].ExcessiveBleedingTime).closest("table").show();
	$j("#" + surgerySections[9].ExcessiveBleedingTime).parents("table").show();
	$j("#" + surgerySections[9].ExcessiveBleedingTreatment).closest("table").show();
	$j("#" + surgerySections[9].ExcessiveBleedingTreatment).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
excessiveBleedingNo.addEventListener('click', function() {
	$j("#" + surgerySections[9].ExcessiveBleedingTime).closest("table").hide();
	$j("#" + surgerySections[9].ExcessiveBleedingTime).parents("table").hide();
	$j("#" + surgerySections[9].ExcessiveBleedingTreatment).closest("table").hide();
	$j("#" + surgerySections[9].ExcessiveBleedingTreatment).parents("table").hide();
}, false);




//Get the Yes/No element names for the appropriate field
a = surgerySections[1].ExcessiveBleedingTreatment.indexOf("_span");
fieldID = surgerySections[1].ExcessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + surgerySections[1].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[1].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + surgerySections[1].ExcessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + surgerySections[1].ExcessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + surgerySections[1].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[1].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[2].ExcessiveBleedingTreatment.indexOf("_span");
fieldID = surgerySections[2].ExcessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + surgerySections[2].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[2].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + surgerySections[2].ExcessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + surgerySections[2].ExcessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + surgerySections[2].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[2].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[3].ExcessiveBleedingTreatment.indexOf("_span");
fieldID = surgerySections[3].ExcessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + surgerySections[3].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[3].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + surgerySections[3].ExcessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + surgerySections[3].ExcessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + surgerySections[3].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[3].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[4].ExcessiveBleedingTreatment.indexOf("_span");
fieldID = surgerySections[4].ExcessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + surgerySections[4].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[4].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + surgerySections[4].ExcessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + surgerySections[4].ExcessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + surgerySections[4].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[4].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[5].ExcessiveBleedingTreatment.indexOf("_span");
fieldID = surgerySections[5].ExcessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + surgerySections[5].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[5].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + surgerySections[5].ExcessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + surgerySections[5].ExcessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + surgerySections[5].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[5].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[6].ExcessiveBleedingTreatment.indexOf("_span");
fieldID = surgerySections[6].ExcessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + surgerySections[6].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[6].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + surgerySections[6].ExcessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + surgerySections[6].ExcessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + surgerySections[6].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[6].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[7].ExcessiveBleedingTreatment.indexOf("_span");
fieldID = surgerySections[7].ExcessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + surgerySections[7].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[7].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + surgerySections[7].ExcessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + surgerySections[7].ExcessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + surgerySections[7].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[7].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[8].ExcessiveBleedingTreatment.indexOf("_span");
fieldID = surgerySections[8].ExcessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + surgerySections[8].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[8].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + surgerySections[8].ExcessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + surgerySections[8].ExcessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + surgerySections[8].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[8].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}, false);


//Get the Yes/No element names for the appropriate field
a = surgerySections[9].ExcessiveBleedingTreatment.indexOf("_span");
fieldID = surgerySections[9].ExcessiveBleedingTreatment.substring(0, a);
var bleedingTreatmentYes = document.getElementsByName(fieldID)[0];
var bleedingTreatmentNo = document.getElementsByName(fieldID)[1];

// Hide the comments if primary question has answer of no
if (!bleedingTreatmentYes.checked) {
	$j("#" + surgerySections[9].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[9].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}

// Add an event listener to show the comment if Yes is clicked
bleedingTreatmentYes.addEventListener('click', function() {
	$j("#" + surgerySections[9].ExcessiveBleedingTreatmentGiven).closest("table").show();
	$j("#" + surgerySections[9].ExcessiveBleedingTreatmentGiven).parents("table").show();
}, false);

// Add an event listener to hide the comment if No is clicked
bleedingTreatmentNo.addEventListener('click', function() {
	$j("#" + surgerySections[9].ExcessiveBleedingTreatmentGiven).closest("table").hide();
	$j("#" + surgerySections[9].ExcessiveBleedingTreatmentGiven).parents("table").hide();
}, false);

});

