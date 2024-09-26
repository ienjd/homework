
function enigma(word){
    
    const charArr = word.split("").reverse();

    const firstHalf = charArr.slice(0, charArr.length/2);

    const secondHalf = charArr.slice(charArr.length/2, charArr.length);

    const password = secondHalf.concat(firstHalf).join("");

    return password;

}

function crypto(password){

    console.log(enigma(password));
}


function check(cryptedPassword, password){

    console.log(`${enigma(cryptedPassword) === password ? true : false}`);
}


crypto("тропический");
check("чипортйиксе", "тропичеcкий");

