const hasLicense = true;
const age = 18;
const isDrink = false;

const canDrive = hasLicense && age >= 18 && !isDrink;

console.log(`Водитель ${canDrive ? "может" : "не может"} сесть за руль`);



