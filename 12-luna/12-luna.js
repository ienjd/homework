/*верные*/
const cardNumber1 = "5678-4567-8901-2345"
const cardNumber2 = "5678-4563-4234-2345"
const cardNumber3 = "5690-4327-8901-2345"
const cardNumber4 = "5678-4567-8695-4958"

function luhnCheck(cardNumber) {

        cardNumber = cardNumber.replaceAll('-', "").split("").map(Number);
        
        let sum = 0;

        let alternate = true;
        
        for (let i = 0; i < cardNumber.length; i++){

            let character = cardNumber[i];

            if (alternate){
                character *= 2; 
                if (character > 9){
                    character -= 9
                }   
            }

            sum += character;
            alternate = !alternate;
            console.log(i + " " + cardNumber[i] + " " + character); 
    }

    return sum % 2 === 0 ? "Верный номер карты" : "Неверный номер карты";
        
    }



        
            





    
        

        





