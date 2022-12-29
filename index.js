// Code your solution in this file!
//1
const returnFirstTwoDrivers= function(drivers){
    let newarr=[];
   
        newarr=drivers.slice(0,2);
      
        return newarr;

}
//2
const x =returnFirstTwoDrivers([1,2,3,4]);
console.log(x);

 const returnLastTwoDrivers = function(drivers){
    let newarr1=[];
    newarr1=drivers.slice(drivers.length-2);
    return newarr1;

 }

 //3

 const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
 //4

 function createFareMultiplier(x){
    return function(){
        return x*5;
    }
 }

 //5
const fareDoubler = function(fares){
    createFareMultiplier();
    return fares*2;
}

//6
const fareTripler = function(fares){
    createFareMultiplier();
    return fares*3;
}

//7
 function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);

 }




