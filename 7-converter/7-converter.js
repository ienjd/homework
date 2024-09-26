

function converter(price, currencyForSale, currencyForBuy){

    const rubToUsd = 92.58;
    const rubToEur = 103.38;
    const rubToKzt = 0.19;

    const usdToRub = 0.010801;
    const eurToRub = 0.009673;
    const kztToRub = 5.17;


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



