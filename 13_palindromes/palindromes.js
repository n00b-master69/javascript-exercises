const palindromes = function (word) {
    let trimmed = word.replaceAll(/[ ,.!?()-]/g, "").toLowerCase();
    if(trimmed.split("").reverse().join("") === trimmed){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
