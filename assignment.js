// https://github.com/Rabeyahabiba/Assignment3

//kilometer to Meter Conversion //
function kilometerToMeter (kilometer) {
    var meter = kilometer*1000 ;
    return meter;
}

// Budget Calculation //
function budgetCalculator(watch,phone,laptop){ 
    var result = (watch*50 )+ (phone*100) +(laptop*500) ;
    return result;
}

//  Hotel Cost Calculation  //
function hotelCost(days){
    var amount = 0;
    if (days<=10){
    amount=days*100;

  } else if (days<=20){
    var firstPart =10*100;
    var remaining=days-10;
    var secondPart= remaining*80;
    amount= firstPart+secondPart;
  } else{
    var firstPart =10*100;
    var secondPart= 10*80;
    var remaining= days-20;
    var thirdPart= remaining*50;
    amount= firstPart+secondPart+thirdPart;
  }
  return amount;
}
   
 //Mega friend Finding out //
var result =['lamia','rehenuma','nazia', 'jamila' ]
function megaFriend(string){
    var longest = string [0];
    for(var i=0; i<string.length; i++){
    var element =string [i];
    if(element> longest){
    longest=element;
    }
    }
    return longest;
}