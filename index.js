const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,-2);
}

console.log(returnFirstTwoDrivers(drivers));


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2);
}

console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [];

selectingDrivers.push(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);

console.log(selectingDrivers);

const createFareMultiplier = function(multiplier) {
    if (multiplier === 2) {
    return fareDoubler;
    } if (multiplier === 3) {
        return fareTripler;
    } if (multiplier === 5) {
        return fareQuintupler
    }
};

 const fareDoubler = function(fare) {
    return fare * 2
 }

 const fareTripler = function(fare){
     return fare * 3;
 }

 const fareQuintupler = function(fare){
    return fare * 5;
 }

 console.log(createFareMultiplier('two'));
 console.log(createFareMultiplier(2));
 console.log(createFareMultiplier(3));
 console.log(createFareMultiplier(5));
 

//  console.log(fareDoubler(2));
//  console.log(fareTripler(2));
//  console.log(fareQuintupler(2));

const selectDifferentDrivers = function(drivers, whichdrivers) {
    
    if (whichdrivers === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
    } else {
        return returnLastTwoDrivers(drivers);
    }
} 

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));