var rowTotal = 10;
var str = "_"

var epistaxisPrimary = document.getElementsByName("fld10050_139228_142853");
var epistaxisHowMany = document.getElementsByName("fld10050_139234_142859");
var epistaxisHowLong = document.getElementsByName("fld10050_139227_142852");
var epistaxisSeekMedAttn = document.getElementsByName("fld10050_139233_142858");
var epistaxisTreatedHow = document.getElementsByName("fld10050_139238_142863");
var noseBleedTotalScore = document.getElementsByName("fld10050_139237_142862");

var bruisingPrimary = document.getElementsByName("fld10050_41492_44708");
var bruisingTrauma = document.getElementsByName("fld10050_41496_44712");
var bruisingMedicalAttention = document.getElementsByName("fld10050_41488_44704");
var bruisingTreatedHow = document.getElementsByName("fld10050_41493_44709");
var bruisingMultiple = document.getElementsByName("fld10050_41489_44705");
var bruisingTotalScore = document.getElementsByName("fld10050_41501_44717");

var minorWoundsPrimary = document.getElementsByName("fld10050_41508_44724");
var minorWoundsHowMany = document.getElementsByName("fld10050_41513_44729");
var minorWoundsHowLong = document.getElementsByName("fld10050_41515_44731");
var minorWoundsTreatedHow = document.getElementsByName("fld10050_41509_44725");
var minorWoundsTotalScore = document.getElementsByName("fld10050_41516_44732");

var oralCavityPrimary = document.getElementsByName("fld10050_41520_44736");
var oralCavityTreatedHow = document.getElementsByName("fld10050_41524_44740");
var oralCavityTotalScore = document.getElementsByName("fld10050_41526_44742");

var toothExtractionPrimary = document.getElementsByName("fld10050_41531_44747");
var toothExtractionHowManyTimes = document.getElementsByName("fld10050_41534_44750");
var toothExtractionExcessiveTimes = document.getElementsByName("fld10050_41540_44756");
var toothExtractionTotalScore = document.getElementsByName("fld10050_41538_44754");
var toothExtractionTreatedHow= new Array(rowTotal);
toothExtractionTreatedHow[0] = "fld10050_41611_44827";

for (var i = 1; i < toothExtractionTreatedHow.length; i++) {
	var field = toothExtractionTreatedHow[i-1];
	var fieldElements = field.split("_");
	var firstIncrement = Number(fieldElements[1]) + 1;
	var secondIncrement = Number(fieldElements[2]) + 1;
	var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
	toothExtractionTreatedHow[i] = String(nextTreatedHowID);
}

var giBleedingPrimary = document.getElementsByName("fld10050_41706_44922");
var giBleedingOtherIllness = document.getElementsByName("fld10050_41708_44924");
var giBleedingTreatedHow = document.getElementsByName("fld10050_41710_44926");
var giBleedingTotalScore = document.getElementsByName("fld10050_41711_44927");

var hematuriaPrimary = document.getElementsByName("fld10050_41715_44931");
var hematuriaEverHad = document.getElementsByName("fld10050_41715_44931");
var hematuriaTreatedHow = document.getElementsByName("fld10050_41719_44935");
var hematuriaTotalScore = document.getElementsByName("fld10050_41724_44940");

var surgeryPrimary = document.getElementsByName("fld10050_41730_44946");
var surgeryHowManyTimes = document.getElementsByName("fld10050_41731_44947");
var surgeryExcessiveTimes = document.getElementsByName("fld10050_41729_44945");
var surgeryTotalScore = document.getElementsByName("fld10050_41733_44949");
var surgeryTreatedHow= new Array(rowTotal);
surgeryTreatedHow[0] = "fld10050_41815_45031";

for (var i = 1; i < surgeryTreatedHow.length; i++) {
	var field = surgeryTreatedHow[i-1];
	var fieldElements = field.split("_");
	var firstIncrement = Number(fieldElements[1]) + 1;
	var secondIncrement = Number(fieldElements[2]) + 1;
	var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
	surgeryTreatedHow[i] = String(nextTreatedHowID);
}

var menstrualPrimary = document.getElementsByName("fld10050_41924_45140");
var menstrualHowLong = document.getElementsByName("fld10050_41931_45147");
var menstrualPassClots = document.getElementsByName("fld10050_41933_45149");
var menstrualHeaviestDay = document.getElementsByName("fld10050_41934_45150");
var menstrualHowLongExcessive = document.getElementsByName("fld10050_41919_45135");
var menstrualMedicalAttention = document.getElementsByName("fld10050_41923_45139");
var menstrualTreatedHow = document.getElementsByName("fld10050_41921_45137");
var menstrualHospitalization = document.getElementsByName("fld10050_41918_45134");
var menstrualTimeOffWork = document.getElementsByName("fld10050_41916_45132");
var menstrualPictoralScore = document.getElementsByName("fld10050_41944_45160");
var menstrualTotalScore = document.getElementsByName("fld10050_41938_45154");

var deliveryPrimary = document.getElementsByName("fld10050_41952_45168");
var deliveryTotalScore = document.getElementsByName("fld10050_41955_45171");
var deliveryTreatedHow = new Array(rowTotal);
deliveryTreatedHow[0] = "fld10050_41977_45193";
var deliveryHospital = new Array(rowTotal);
deliveryHospital[0] = "fld10050_42007_45223";

for (var i = 1; i < deliveryTreatedHow.length; i++) {
	var field = deliveryTreatedHow[i-1];
	var fieldElements = field.split("_");
	var firstIncrement = Number(fieldElements[1]) + 1;
	var secondIncrement = Number(fieldElements[2]) + 1;
	var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
	deliveryTreatedHow[i] = String(nextTreatedHowID);
}

for (var i = 1; i < deliveryHospital.length; i++) {
	var field = deliveryHospital[i-1];
	var fieldElements = field.split("_");
	var firstIncrement = Number(fieldElements[1]) + 1;
	var secondIncrement = Number(fieldElements[2]) + 1;
	var nextHospitalID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
	deliveryHospital[i] = String(nextHospitalID);
}

var otherNeonatalType = document.getElementsByName("fld10050_42144_45360");
var otherNeonatalTreatedHow = document.getElementsByName("fld10050_42143_45359");
var otherBleedingTotalScore = document.getElementsByName("fld10050_42149_45365");

var cnsPrimary = document.getElementsByName("fld10050_42158_45374");
var cnsTotalScore = document.getElementsByName("fld10050_42159_45375");
var cnsTreatedHow = new Array(rowTotal);
cnsTreatedHow[0] = "fld10050_42171_45387";

for (var i = 1; i < cnsTreatedHow.length; i++) {
	var field = cnsTreatedHow[i-1];
	var fieldElements = field.split("_");
	var firstIncrement = Number(fieldElements[1]) + 1;
	var secondIncrement = Number(fieldElements[2]) + 1;
	var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
	cnsTreatedHow[i] = String(nextTreatedHowID);
}

var hemarthrosisPrimary = document.getElementsByName("fld10050_42243_45459");
var hemarthrosisTotalScore = document.getElementsByName("fld10050_42245_45461");
var hemarthrosisTreatedHow = new Array(rowTotal);
hemarthrosisTreatedHow[0] = "fld10050_42277_45493";
var hemarthrosisBleedingType = new Array(rowTotal);
hemarthrosisBleedingType[0] = "fld10050_42287_45503";

for (var i = 1; i < hemarthrosisTreatedHow.length; i++) {
	var field = hemarthrosisTreatedHow[i-1];
	var fieldElements = field.split("_");
	var firstIncrement = Number(fieldElements[1]) + 1;
	var secondIncrement = Number(fieldElements[2]) + 1;
	var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
	hemarthrosisTreatedHow[i] = String(nextTreatedHowID);
}

for (var i = 1; i < hemarthrosisBleedingType.length; i++) {
	var field = hemarthrosisBleedingType[i-1];
	var fieldElements = field.split("_");
	var firstIncrement = Number(fieldElements[1]) + 1;
	var secondIncrement = Number(fieldElements[2]) + 1;
	var nextBleedingTypeID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
	hemarthrosisBleedingType[i] = String(nextBleedingTypeID);
}

var hematomaPrimary = document.getElementsByName("fld10050_42369_45585");
var hematomaTotalScore = document.getElementsByName("fld10050_42371_45587");
var hematomaTreatedHow = new Array(rowTotal);
hematomaTreatedHow[0] = "fld10050_42383_45599";
var hematomaBleedingType = new Array(rowTotal);
hematomaBleedingType[0] = "fld10050_42393_45609";

for (var i = 1; i < hematomaTreatedHow.length; i++) {
	var field = hematomaTreatedHow[i-1];
	var fieldElements = field.split("_");
	var firstIncrement = Number(fieldElements[1]) + 1;
	var secondIncrement = Number(fieldElements[2]) + 1;
	var nextTreatedHowID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
	hematomaTreatedHow[i] = String(nextTreatedHowID);
}

for (var i = 1; i < hematomaBleedingType.length; i++) {
	var field = hematomaBleedingType[i-1];
	var fieldElements = field.split("_");
	var firstIncrement = Number(fieldElements[1]) + 1;
	var secondIncrement = Number(fieldElements[2]) + 1;
	var nextBleedingTypeID = fieldElements[0].concat(str,firstIncrement,str,secondIncrement);
	hematomaBleedingType[i] = String(nextBleedingTypeID);
}

var totalScoreInput = document.getElementsByName("fld10050_41450_44666");
var totalScoreInputEnd = document.getElementsByName("fld10050_42512_45728");

$j(document).ready(function() {

$j('.[class^="calculateBtn"]').click(function(event) {


	
/***
//SECTION 1:  Nose Bleeds (Epistaxis)
***/
var noseBleedScore = 0;

if (epistaxisPrimary[0].checked) {
	for (var i=0; i<epistaxisHowMany.length; i++) {
		// And stick the checked ones onto an array...
		if (epistaxisHowMany[i].checked) {
			var answer = epistaxisHowMany[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > noseBleedScore)
				noseBleedScore = Number(answerValue[1]);
		}
	}

  
	for (var i=0; i<epistaxisHowLong.length; i++) {
		// And stick the checked ones onto an array...
		if (epistaxisHowLong[i].checked) {
			var answer = epistaxisHowLong[i].value;
			var answerValue = answer.split("|");	
			if (Number(answerValue[1]) > noseBleedScore)
				noseBleedScore = Number(answerValue[1]);
		}
	}

	//Add check ... only evaluate treatments if the answer to seeking medical attention is Yes.
	

		for (var i=0; i<epistaxisTreatedHow.length; i++) {
			// And stick the checked ones onto an array...
			if (epistaxisTreatedHow[i].checked) {
				var answer = epistaxisTreatedHow[i].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > noseBleedScore)
					noseBleedScore = Number(answerValue[1]);
			}
		}
} 
// Nose Bleed (Epistaxis) score
noseBleedTotalScore[0].value = noseBleedScore;


/***
//SECTION 2:  Bruising
***/
var bruisingScore = 0;

if (bruisingPrimary[0].checked) {
	for (var i=0; i<bruisingTrauma.length; i++) {
		// And stick the checked ones onto an array...
		if (bruisingTrauma[i].checked) {
			var answer = bruisingTrauma[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > bruisingScore)
				bruisingScore = Number(answerValue[1]);
		}
	}

  
	for (var i=0; i<bruisingMedicalAttention.length; i++) {
		// And stick the checked ones onto an array...
		if (bruisingMedicalAttention[i].checked) {
			var answer = bruisingMedicalAttention[i].value;
			var answerValue = answer.split("|");	
			if (Number(answerValue[1]) > bruisingScore)
				bruisingScore = Number(answerValue[1]);
		}
	}

	for (var i=0; i<bruisingTreatedHow.length; i++) {
		// And stick the checked ones onto an array...
		if (bruisingTreatedHow[i].checked) {
			var answer = bruisingTreatedHow[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > bruisingScore)
				bruisingScore = Number(answerValue[1]);
		}
	}
	
	for (var i=0; i<bruisingMultiple.length; i++) {
		// And stick the checked ones onto an array...
		if (bruisingMultiple[i].checked) {
			var answer = bruisingMultiple[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > bruisingScore)
				bruisingScore = Number(answerValue[1]);
		}
	}
}
//Bruising score
bruisingTotalScore[0].value= bruisingScore;

/***
//SECTION 3:  Minor Wounds
***/
var minorWoundsScore = 0;

if (minorWoundsPrimary[0].checked) {
	for (var i=0; i<minorWoundsHowMany.length; i++) {
		// And stick the checked ones onto an array...
		if (minorWoundsHowMany[i].checked) {
			var answer = minorWoundsHowMany[i].value;
			var answerValue = answer.split("|");	
			if (Number(answerValue[1]) > minorWoundsScore)
				minorWoundsScore = Number(answerValue[1]);
		}
	}

  
	for (var i=0; i<minorWoundsHowLong.length; i++) {
		// And stick the checked ones onto an array...
		if (minorWoundsHowLong[i].checked) {
			var answer = minorWoundsHowLong[i].value;
			var answerValue = answer.split("|");	
			if (Number(answerValue[1]) > minorWoundsScore)
			minorWoundsScore = Number(answerValue[1]);
		}
	}


	for (var i=0; i<minorWoundsTreatedHow.length; i++) {
		// And stick the checked ones onto an array...
		if (minorWoundsTreatedHow[i].checked) {
			var answer = minorWoundsTreatedHow[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > minorWoundsScore)
				minorWoundsScore = Number(answerValue[1]);
		}
	}
}
//Minor Wounds score
minorWoundsTotalScore[0].value= minorWoundsScore;

/***
//SECTION 4:  Oral Cavity Bleeding
***/
var oralCavityScore = 0;

if (oralCavityPrimary[0].checked) {
	for (var i=0; i<oralCavityPrimary.length; i++) {
		// And stick the checked ones onto an array...
		if (oralCavityPrimary[i].checked) {
			var answer = oralCavityPrimary[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > oralCavityScore)
				oralCavityScore = Number(answerValue[1]);
		}
	}
	
	for (var i=0; i<oralCavityTreatedHow.length; i++) {
		// And stick the checked ones onto an array...
		if (oralCavityTreatedHow[i].checked) {
			var answer = oralCavityTreatedHow[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > oralCavityScore)
				oralCavityScore = Number(answerValue[1]);
		}
	}
}
//Oral Cavity score
oralCavityTotalScore[0].value= oralCavityScore;

/***
//SECTION 5:  Tooth Extractions
***/
var toothNoOfTimes = Number(toothExtractionHowManyTimes[0].value);
var toothNoOfTimesExcessive = 0;

var toothExtractionScore = 0;

if (toothExtractionPrimary[0].checked) {
	for (var i=0; i<toothExtractionExcessiveTimes.length; i++) {
		// And stick the checked ones onto an array...
		if (toothExtractionExcessiveTimes[i].checked) {
			if (i != toothExtractionExcessiveTimes.length-1) {
				var answer = Number(toothExtractionExcessiveTimes[i].value);
				toothNoOfTimesExcessive = Number(answer);
			} else {
				toothNoOfTimesExcessive = Number(toothExtractionHowManyTimes[0].value);
			}
		}
	}
	
	if (toothNoOfTimesExcessive == 0 || toothNoOfTimes == 0)
		toothExtractionScore = 0;
	else if ((toothNoOfTimesExcessive/toothNoOfTimes)*100 < 25)
		toothExtractionScore = toothExtractionScore + 1;
	else if ((toothNoOfTimesExcessive/toothNoOfTimes)*100 >= 25)
		toothExtractionScore = toothExtractionScore + 2;

	for (var i = 0; i<toothExtractionTreatedHow.length; i++) {
		var currentSection = document.getElementsByName(String(toothExtractionTreatedHow[i]));
		for (var j=0; j<currentSection.length; j++) {
			// And stick the checked ones onto an array...
			if (currentSection[j].checked) {
				var answer = currentSection[j].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > toothExtractionScore)
					toothExtractionScore = Number(answerValue[1]);
			}
		}
	}
}
//Tooth Extraction score
toothExtractionTotalScore[0].value= toothExtractionScore;

/***
//SECTION 6:  GI Bleeding
***/
var giBleedingScore = 0;

if (giBleedingPrimary[0].checked) {
	for (var i=0; i<giBleedingOtherIllness.length; i++) {
		// And stick the checked ones onto an array...
		if (giBleedingOtherIllness[i].checked) {
			var answer = giBleedingOtherIllness[i].value;
			var answerValue = answer.split("|");	
			if (Number(answerValue[1]) > giBleedingScore)
				giBleedingScore = Number(answerValue[1]);
		}
	}

	for (var i=0; i<giBleedingTreatedHow.length; i++) {
		// And stick the checked ones onto an array...
		if (giBleedingTreatedHow[i].checked) {
			var answer = giBleedingTreatedHow[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > giBleedingScore)
				giBleedingScore = Number(answerValue[1]);
		}
	}
}
//GI Bleeding score
giBleedingTotalScore[0].value= giBleedingScore;

/***
//SECTION 7:  Hematuria
***/
var hematuriaScore = 0;

if (hematuriaPrimary[0].checked) {
	for (var i=0; i<hematuriaEverHad.length; i++) {
		// And stick the checked ones onto an array...
		if (hematuriaEverHad[i].checked) {
			var answer = hematuriaEverHad[i].value;
			var answerValue = answer.split("|");	
			if (Number(answerValue[1]) > hematuriaScore)
				hematuriaScore = Number(answerValue[1]);
		}
	}

	for (var i=0; i<hematuriaTreatedHow.length; i++) {
		// And stick the checked ones onto an array...
		if (hematuriaTreatedHow[i].checked) {
			var answer = hematuriaTreatedHow[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > hematuriaScore)
				hematuriaScore = Number(answerValue[1]);
		}
	}
}
//Hematuria score
hematuriaTotalScore[0].value= hematuriaScore;

/***
//SECTION 8:  Surgeries
***/
var noOfTimes = Number(surgeryHowManyTimes[0].value);
var noOfTimesExcessive = 0;
var surgeryScore = 0;

if (surgeryPrimary[0].checked) {
	for (var i=0; i<surgeryExcessiveTimes.length; i++) {
		// And stick the checked ones onto an array...
		if (surgeryExcessiveTimes[i].checked) {
			if (i != surgeryExcessiveTimes.length-1) {
				var answer = Number(surgeryExcessiveTimes[i].value);
				noOfTimesExcessive = Number(answer);
			} else {
				noOfTimesExcessive = Number(surgeryHowManyTimes[0].value);
			}
		}
	}

	if (noOfTimesExcessive == 0 || noOfTimes == 0)
		surgeryScore = 0;
	else if ((noOfTimesExcessive/noOfTimes)*100 < 25)
		surgeryScore = surgeryScore + 1;
	else if ((noOfTimesExcessive/noOfTimes)*100 >= 25)
		surgeryScore = surgeryScore + 2;

	for (var i = 0; i<surgeryTreatedHow.length; i++) {
		var currentSection = document.getElementsByName(String(surgeryTreatedHow[i]));
		for (var j=0; j<currentSection.length; j++) {
			// And stick the checked ones onto an array...
			if (currentSection[j].checked) {
				var answer = currentSection[j].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > surgeryScore)
					surgeryScore = Number(answerValue[1]);
			}
		}
	}
}
//Surgery score
surgeryTotalScore[0].value= surgeryScore;

/***
//SECTION 9:  Female Menstrual History
***/
var menstrualScore = 0;

if (menstrualPrimary[0].checked) {
	if (menstrualHowLong[0].value > 7)
		menstrualScore = menstrualScore + 1;

	for (var i=0; i<menstrualPassClots.length; i++) {
		// And stick the checked ones onto an array...
		if (menstrualPassClots[i].checked) {
			var answer = menstrualPassClots[i].value;
			var answerValue = answer.split("|");	
			if (Number(answerValue[1]) > menstrualScore)
				menstrualScore = Number(answerValue[1]);
		}
	}

	for (var i=0; i<menstrualHeaviestDay.length; i++) {
		// And stick the checked ones onto an array...
		if (menstrualHeaviestDay[i].checked) {
			var answer = menstrualHeaviestDay[i].value;
			var answerValue = answer.split("|");	
			if (Number(answerValue[1]) > menstrualScore)
				menstrualScore = Number(answerValue[1]);
		}
	}

	for (var i=0; i<menstrualHowLongExcessive.length; i++) {
		// And stick the checked ones onto an array...
		if (menstrualHowLongExcessive[i].checked) {
			var answer = menstrualHowLongExcessive[i].value;
			var answerValue = answer.split("|");	
			if (Number(answerValue[1]) > menstrualScore)
				menstrualScore = Number(answerValue[1]);
		}
	}

	for (var i=0; i<menstrualMedicalAttention.length; i++) {
		// And stick the checked ones onto an array...
		if (menstrualMedicalAttention[i].checked) {
			var answer = menstrualMedicalAttention[i].value;
			var answerValue = answer.split("|");	
			if (Number(answerValue[1]) > menstrualScore)
				menstrualScore = Number(answerValue[1]);
		}
	}

	for (var i=0; i<menstrualTreatedHow.length; i++) {
		// And stick the checked ones onto an array...
		if (menstrualTreatedHow[i].checked) {
			var answer = menstrualTreatedHow[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > menstrualScore)
				menstrualScore = Number(answerValue[1]);
		}
	}

	for (var i=0; i<menstrualHospitalization.length; i++) {
		// And stick the checked ones onto an array...
		if (menstrualHospitalization[i].checked) {
			var answer = menstrualHospitalization[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > menstrualScore)
				menstrualScore = Number(answerValue[1]);
		}
	}

	for (var i=0; i<menstrualTimeOffWork.length; i++) {
		// And stick the checked ones onto an array...
		if (menstrualTimeOffWork[i].checked) {
			var answer = menstrualTimeOffWork[i].value;
			var answerValue = answer.split("|");
			if (Number(answerValue[1]) > menstrualScore)
				menstrualScore = Number(answerValue[1]);
		}
	}

	if (menstrualPictoralScore[0].value > 100)
		if (menstrualScore < 1)
			menstrualScore = 1;
}
//Female Menstrual History score
menstrualTotalScore[0].value= menstrualScore;

/***
//SECTION 10:  Deliveries
***/
var deliveryScore = 0;

if (deliveryPrimary[0].checked) {
	for (var i = 0; i<deliveryTreatedHow.length; i++) {
		var currentSection = document.getElementsByName(String(deliveryTreatedHow[i]));
		for (var j=0; j<currentSection.length; j++) {
			// And stick the checked ones onto an array...
			if (currentSection[j].checked) {
				var answer = currentSection[j].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > deliveryScore)
					deliveryScore = Number(answerValue[1]);
			}
		}
	}

	for (var i = 0; i<deliveryHospital.length; i++) {
		var currentSection = document.getElementsByName(String(deliveryHospital[i]));
		for (var j=0; j<currentSection.length; j++) {
			// And stick the checked ones onto an array...
			if (currentSection[j].checked) {
				var answer = currentSection[j].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > deliveryScore)
					deliveryScore = Number(answerValue[1]);
			}
		}
	}
}
//Deliveries score
deliveryTotalScore[0].value= deliveryScore;

/***
//SECTION 11:  Other Bleeding Section
***/
var otherBleedingScore = 0;

for (var i=0; i<otherNeonatalType.length; i++) {
	// And stick the checked ones onto an array...
	if (otherNeonatalType[i].checked) {
		var answer = otherNeonatalType[i].value;
		var answerValue = answer.split("|");	
		if (Number(answerValue[1]) > otherBleedingScore)
			otherBleedingScore = Number(answerValue[1]);
	}
}

for (var i=0; i<otherNeonatalTreatedHow.length; i++) {
	// And stick the checked ones onto an array...
	if (otherNeonatalTreatedHow[i].checked) {
		var answer = otherNeonatalTreatedHow[i].value;
		var answerValue = answer.split("|");			
		if (Number(answerValue[1]) > otherBleedingScore)
			otherBleedingScore = Number(answerValue[1]);
	}
}

//Other Bleeding Section score
otherBleedingTotalScore[0].value= otherBleedingScore;

/***
//SECTION 12:  CNS Bleeding
***/
var cnsScore = 0;

if (cnsPrimary[0].checked) {
	for (var i = 0; i<cnsTreatedHow.length; i++) {
		var currentSection = document.getElementsByName(String(cnsTreatedHow[i]));
		for (var j=0; j<currentSection.length; j++) {
			// And stick the checked ones onto an array...
			if (currentSection[j].checked) {
				var answer = currentSection[j].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > cnsScore)
					cnsScore = Number(answerValue[1]);
			}
		}
	}
}
//CNS Bleeding score
cnsTotalScore[0].value= cnsScore;

/***
//SECTION 13:  Hemarthrosis
***/
var hemarthrosisScore = 0;

if (hemarthrosisPrimary[0].checked) {
	for (var i = 0; i<hemarthrosisBleedingType.length; i++) {
		var currentSection = document.getElementsByName(String(hemarthrosisBleedingType[i]));
		for (var j=0; j<currentSection.length; j++) {
			// And stick the checked ones onto an array...
			if (currentSection[j].checked) {
				var answer = currentSection[j].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > hemarthrosisScore)
					hemarthrosisScore = Number(answerValue[1]);
			}
		}
	}

	for (var i = 0; i<hemarthrosisTreatedHow.length; i++) {
		var currentSection = document.getElementsByName(String(hemarthrosisTreatedHow[i]));
		for (var j=0; j<currentSection.length; j++) {
			// And stick the checked ones onto an array...
			if (currentSection[j].checked) {
				var answer = currentSection[j].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > hemarthrosisScore)
					hemarthrosisScore = Number(answerValue[1]);
			}
		}
	}
}
//Hemarthrosis score
hemarthrosisTotalScore[0].value= hemarthrosisScore;

/***
//SECTION 14:  Hematoma
***/
var hematomaScore = 0;

if (hematomaPrimary[0].checked) {
	for (var i = 0; i<hematomaBleedingType.length; i++) {
		var currentSection = document.getElementsByName(String(hematomaBleedingType[i]));
		for (var j=0; j<currentSection.length; j++) {
			// And stick the checked ones onto an array...
			if (currentSection[j].checked) {
				var answer = currentSection[j].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > hematomaScore)
					hematomaScore = Number(answerValue[1]);
			}
		}
	}

	for (var i = 0; i<hematomaTreatedHow.length; i++) {
		var currentSection = document.getElementsByName(String(hematomaTreatedHow[i]));
		for (var j=0; j<currentSection.length; j++) {
			// And stick the checked ones onto an array...
			if (currentSection[j].checked) {
				var answer = currentSection[j].value;
				var answerValue = answer.split("|");
				if (Number(answerValue[1]) > hematomaScore)
					hematomaScore = Number(answerValue[1]);
			}
		}
	}
}
//Hematoma score
hematomaTotalScore[0].value= hematomaScore;

/***
//TOTAL SCORE CALCULATION
***/
var totalScore = 0;
totalScore = noseBleedScore + bruisingScore + minorWoundsScore + oralCavityScore + toothExtractionScore + giBleedingScore + hematuriaScore  + surgeryScore 
				+ menstrualScore + deliveryScore + otherBleedingScore + cnsScore + hemarthrosisScore + hematomaScore;
totalScoreInput[0].value = totalScore;
totalScoreInputEnd[0].value = totalScore;
});

});