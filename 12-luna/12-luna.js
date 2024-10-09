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

    console.log(sum)
        
    }

    function luhnCheck1(cardNumber) {
        // Удаляем все пробелы и ненужные символы
        cardNumber = cardNumber.replace(/\D/g, '');
        
        let sum = 0;
        let alternate = false;
    
        // Проходим по цифрам в обратном порядке
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let n = parseInt(cardNumber.charAt(i), 10);
            
            // Умножаем каждую вторую цифру на 2
            if (alternate) {
                n *= 2;
                // Если результат больше 9, вычитаем 9
                if (n > 9) {
                    n -= 9;
                }
            }
            sum += n;
            alternate = !alternate;
            console.log(i + " " + cardNumber[i] + " " + n);
        }
    
    console.log(sum);    
    }
    

 luhnCheck("2200-7006-2675-0201");
 luhnCheck1("2200-7006-2675-0201");




        
            





    
        

        





