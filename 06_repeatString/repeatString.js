const repeatString = function(word, num) {
    let repeatedWord = "";
    for(let i = 1; i <= num; i++){
        if(num > 0){
            repeatedWord += word;
        } 
    }

    if(num < 0){
            repeatedWord = "ERROR";
        }
        
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
