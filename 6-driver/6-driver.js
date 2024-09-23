let hasLicense = true;
let age = 18;
let isSober = true;

let canDrive = hasLicense && age >= 18 && isSober;

switch (canDrive){

    case true:

        console.log("может");
            break;

    case false:

        console.log("не может")
            break;

}



