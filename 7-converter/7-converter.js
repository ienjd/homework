

function converter(price, currencyForSale, currencyForBuy){

    let rubToUsd = 92.58;
    let rubToEur = 103.38;
    let rubToKzt = 0.19;

    let usdToRub = 0.010801;
    let eurToRub = 0.009673;
    let kztToRub = 5.17;


    if ((currencyForSale === "rub") && (currencyForBuy === "usd")) { console.log(price * usdToRub);

    } else if ((currencyForSale === "rub") && (currencyForBuy === "eur")) { console.log(price * eurToRub);

    } else if ((currencyForSale === "rub") && (currencyForBuy === "kzt")) { console.log(price * kztToRub); 

    } else if ((currencyForSale === "usd") && (currencyForBuy === "rub")) { console.log(price * rubToUsd);

    } else if ((currencyForSale === "eur") && (currencyForBuy === "rub")) { console.log(price * rubToEur);

    } else if ((currencyForSale === "kzt") && (currencyForBuy === "rub")) { console.log(price * rubToKzt);

    } else { console.log(null);

    }
}

    converter(14444, "rub", "kzt");



