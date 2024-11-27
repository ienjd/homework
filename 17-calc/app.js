'use strict';

let number1;
let number2;
let result;
let inputAreaOne = document.getElementById("input1");
let inputAreaTwo = document.getElementById("input2");
let string = "результат операции = ";


function inputChanged(e) {
	if (e.code == 'Enter') {
		saveChanged();
	}
}

function saveChanged() {
	if ((number1 != inputAreaOne.value)) {
		number1 = Number(inputAreaOne.value);
	} 

	if(number1){
		number2 = Number(inputAreaTwo.value);
	}
}

function outputResult(result){
	document.querySelector(".result").innerHTML = string + result;
	inputAreaOne.value = " ";
	inputAreaTwo.value = " ";
	number1 = 0;
	number2 = 0;
}

function addition(){
	result = number1 + number2;
	outputResult(result);
}

function multiplication(){
	result = number1 * number2;
	outputResult(result);
}

function division(){
	result = number1 / number2;
	outputResult(result);
}

function subtraction(){
	result = number1 - number2;
	outputResult(result);
}



