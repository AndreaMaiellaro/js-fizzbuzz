// lista email
var numeri = [];

for( var i = 1; i < 101; i++) {
    console.log(i);

    if( i % 3 == 0 && i % 5 != 0) {
        console.log("Fizz");
    } 

    else if ( i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz");
    }

    else if ( i % 5 == 0 && !i % 3 == 0) {
        console.log("FizzBuzz");
    }
    else {
       console.log(i); 
    }  
}

//se si ok altrimenti no

//else if ( numero % 3 == 0 and numero % 5 == 0 ) {

//}

//else if ( i % 5 == 0 ) {

//} else ( i % 3 == 0 and i % 5 == 0 ) {

//}

//if ( i % 3 == 0 ) {
   //
//}   else if ( i % 5 == 0 ) {
   // console.log("Buzz")
//}   else if (i % 5 == 0 & i % 3 == 0) {
//    console.log("FizzBuzz");
//}   