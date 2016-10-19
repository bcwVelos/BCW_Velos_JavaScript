var medicationRows = [];

medicationRows[0] = {
	type : "fld10050_56157_59430_span",
	brandName : "fld10050_56187_59460_span",
	genericName : "fld10050_56197_59470_span",
	ndcType : "fld10050_56177_59450_span",
	pharmClass : "fld10050_56207_59480_span",
	addRowBtn : "fld10050_56167_59440_id",
	delRowBtn : "fld10050_56217_59490_id"

}

medicationRows[1] = {
	type : "fld10050_56158_59431_span",
	brandName : "fld10050_56188_59461_span",
	genericName : "fld10050_56198_59471_span",
	ndcType : "fld10050_56178_59451_span",
	pharmClass : "fld10050_56208_59481_span",
	addRowBtn : "fld10050_56168_59441_id",
	delRowBtn : "fld10050_56218_59491_id"

}
medicationRows[2] = {
	type : "fld10050_56159_59432_span",
	brandName : "fld10050_56189_59462_span",
	genericName : "fld10050_56199_59472_span",
	ndcType : "fld10050_56179_59452_span",
	pharmClass : "fld10050_56209_59482_span",
	addRowBtn : "fld10050_56169_59442_id",
	delRowBtn : "fld10050_56219_59492_id"

}
medicationRows[3] = {
	type : "fld10050_56160_59433_span",
	brandName : "fld10050_56190_59463_span",
	genericName : "fld10050_56200_59473_span",
	ndcType : "fld10050_56180_59453_span",
	pharmClass : "fld10050_56210_59483_span",
	addRowBtn : "fld10050_56170_59443_id",
	delRowBtn : "fld10050_56220_59493_id"

}
medicationRows[4] = {
	type : "fld10050_56161_59434_span",
	brandName : "fld10050_56191_59464_span",
	genericName : "fld10050_56201_59474_span",
	ndcType : "fld10050_56181_59454_span",
	pharmClass : "fld10050_56211_59484_span",
	addRowBtn : "fld10050_56171_59444_id",
	delRowBtn : "fld10050_56221_59494_id"

}
medicationRows[5] = {
	type : "fld10050_56162_59435_span",
	brandName : "fld10050_56192_59465_span",
	genericName : "fld10050_56202_59475_span",
	ndcType : "fld10050_56182_59455_span",
	pharmClass : "fld10050_56212_59485_span",
	addRowBtn : "fld10050_56172_59445_id",
	delRowBtn : "fld10050_56222_59495_id"

}
medicationRows[6] = {
	type : "fld10050_56163_59436_span",
	brandName : "fld10050_56193_59466_span",
	genericName : "fld10050_56203_59476_span",
	ndcType : "fld10050_56183_59456_span",
	pharmClass : "fld10050_56213_59486_span",
	addRowBtn : "fld10050_56173_59446_id",
	delRowBtn : "fld10050_56223_59496_id"

}
medicationRows[7] = {
	type : "fld10050_56164_59437_span",
	brandName : "fld10050_56194_59467_span",
	genericName : "fld10050_56204_59477_span",
	ndcType : "fld10050_56184_59457_span",
	pharmClass : "fld10050_56214_59487_span",
	addRowBtn : "fld10050_56174_59447_id",
	delRowBtn : "fld10050_56224_59497_id"

}
medicationRows[8] = {
	type : "fld10050_56165_59438_span",
	brandName : "fld10050_56195_59468_span",
	genericName : "fld10050_56205_59478_span",
	ndcType : "fld10050_56185_59458_span",
	pharmClass : "fld10050_56215_59488_span",
	addRowBtn : "fld10050_56175_59448_id",
	delRowBtn : "fld10050_56225_59498_id"

}
medicationRows[9] = {
	type : "fld10050_56166_59439_span",
	brandName : "fld10050_56196_59469_span",
	genericName : "fld10050_56206_59479_span",
	ndcType : "fld10050_56186_59459_span",
	pharmClass : "fld10050_56216_59489_span",
	addRowBtn : "fld10050_56176_59449_id",
	delRowBtn : "fld10050_56226_59499_id"

}

$j(document).ready(function() {

		//hide the comments label- never want to see it
		$j('td:contains("Comments")').hide();
	
		//Check to see how many medications are available for the page
		var rowTotal = medicationRows.length;
	
		// hide the delete Button in the first row - it should never be seen
		$j("#" + medicationRows[0].delRowBtn).hide();


	    // Start the for loop in the second row (array # 1) because the first row
	    // will always display.
		for ( var i = 1; i < rowTotal; i++) {
			
		// when the form loads, check to see if there is data populated in the
		// rows.
		var a = medicationRows[i].type.indexOf("_span");
		var b = medicationRows[i].brandName.indexOf("_span");
		
		//Check if the Type dropdown has an option selected OR
		//Check if the Brand Name has data in it
		//If either of these are True - assume that there are values for all columns and check the next row.
		if ($j("#" + medicationRows[i].type.substring(0, a) + " option:selected").text() != "Select an Option" ||
		$j("#" + medicationRows[i].brandName.substring(0, b)).val() != "")
		{
			//Hide the add button in the previous row. 
			$j("#" + medicationRows[i-1].addRowBtn).hide();
			$j("#" + medicationRows[i-1].delRowBtn).hide();
			
			if(i == 9){
				$j("#" + medicationRows[i].addRowBtn).hide();
			}
			
		} else {
			//There is no data in this row.
			//Make sure the add and delete buttons are shown for the previous row.
			$j("#" + medicationRows[i-1].addRowBtn).show();
			if((i-1) > 0){
				$j("#" + medicationRows[i-1].delRowBtn).show();
			}
			
			//Hide this row.
			$j("#" + medicationRows[i].type).closest("tr").hide();
			
		}
	}

		
$j(".addBtn").click(function(event) {
	
	var parentLabel = $j(this).parent("label");
	var labelId = $j(parentLabel).attr("id");

	var x;
	var i = 0;

	while (!Boolean(x)) {
		var rowName = medicationRows[i].addRowBtn;
		if (rowName === labelId) {

			x = "True";
			//Hide the delete and add buttons in this row
			if(i < medicationRows.length) {
				if(i != (medicationRows.length-1)) {
					$j("#" + medicationRows[i].delRowBtn).hide();
				}
				$j("#" + medicationRows[i].addRowBtn).hide();

			}
			
			//Show all values in row where the add button was selected
			$j("#" + medicationRows[i+1].type).closest("tr").show();
			$j("#" + medicationRows[i+1].type).show();
			$j("#" + medicationRows[i+1].type).siblings().show();
			$j("#" + medicationRows[i+1].brandName).show();
			$j("#" + medicationRows[i+1].genericName).show();
			$j("#" + medicationRows[i+1].ndcType).show();
			$j("#" + medicationRows[i+1].pharmClass).show();

			if((i+1) === (medicationRows.length -1)) {
				$j("#" + medicationRows[i+1].addRowBtn).hide();
			}

		} 

		i++;
		
	}

});

$j(".deleteBtn").click(function() {

	var parentLabel = $j(this).parent("label");
	var labelId = $j(parentLabel).attr("id");

	var y;
	var i = 0;

	while (!Boolean(y)) {
		var rowName = medicationRows[i].delRowBtn;
		if (rowName === labelId) {
			y = "True";

			//Remove values from current row and hide the row
			var a = medicationRows[i].type.indexOf("_span");
			$j("#" + medicationRows[i].type.substring(0, a)).val("");
			$j("#" + medicationRows[i].type).hide();
			$j("#" + medicationRows[i].type).siblings().hide();

			var b = medicationRows[i].brandName.indexOf("_span");
			$j("#" + medicationRows[i].brandName.substring(0, b)).val("");
			$j("#" + medicationRows[i].brandName).hide();

			var d = medicationRows[i].genericName.indexOf("_span");
			$j("#" + medicationRows[i].genericName.substring(0, d)).val("");
			$j("#" + medicationRows[i].genericName).hide();

			var e = medicationRows[i].ndcType.indexOf("_span");
			$j("#" + medicationRows[i].ndcType.substring(0, e)).val("");
			$j("#" + medicationRows[i].ndcType).hide();

			var f = medicationRows[i].pharmClass.indexOf("_span");
			$j("#" + medicationRows[i].pharmClass.substring(0, f)).val("");
			$j("#" + medicationRows[i].pharmClass).hide();

			$j("#" + medicationRows[i].type).closest("tr").hide();
			
			//show the Add and Delete Button on the previous row
			$j("#" + medicationRows[i-1].addRowBtn).show();
			if((i-1) > 0) {
				$j("#" + medicationRows[i-1].delRowBtn).show();
			}
		}
			i++;
		
	}

});

});



