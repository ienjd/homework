const arr = ["22/03/25", "тест", "31-12-1290", "22/03/71", "пробное", "31/12/90", "56-ty-78", 
            "карабино", "dfghtyas", "23223123123", "03/02/92", 
            "22/03/73", "31-12-91", "hrwfejher", "09/89-23", "6346hwehd7283", "11/11/11", 
            "7882398sdads", "766677723"];

let isNotWord = arr

        .filter(arraySymbols => {
            return (arraySymbols.length === 8) && (((arraySymbols[2] === "/") && (arraySymbols[5] === "/")) || 
                   ((arraySymbols[2] === "-") && (arraySymbols[5] === "-")) &&
                   ((arraySymbols[0].concat(arraySymbols[1]) <= 31) && (arraySymbols[3].concat(arraySymbols[4]) <= 12))
        )})

       .map(element => {
            return element.split("")
                          .map(char => { 
                                        if (char === "/" || char === "-" ){ 
                                            char = "."} 
                                            return char;
                                        })
                                        .join("")


})
console.log(isNotWord);





        
            





        
        

        





