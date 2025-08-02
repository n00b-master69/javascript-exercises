const findTheOldest = function(people) {
    const date = new Date();
    const currentYear = date.getFullYear();

    people.map((person) => {
        if(!person.yearOfDeath){
            person.yearOfDeath = currentYear;
        }
        person.age = person.yearOfDeath - person.yearOfBirth;
        return;
    });

    people.sort((previous, next) => next.age - previous.age );

    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
