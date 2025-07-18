const removeFromArray = function(values) {
    let initialArray = [...values[0]];
    let toBeRemoved = [...values.splice(0,1)];

    for(let item of toBeRemoved){
        if(initialArray.includes(item)){
            let itemIndex = initialArray.findIndex(item);
            initialArray.splice(itemIndex, 1);
        }
    }

    return initialArray;
};

// Do not edit below this line
module.exports = removeFromArray;
