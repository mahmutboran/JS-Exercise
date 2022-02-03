/* Exercise-1 */

/* function findNeedle(haystack) { 
    for (let i = 0; i < haystack.length; i++) { 
          if (haystack[i] == "needle") {return `found the needle at position ${i}`} 
       } 
    } */
/* *********Exercise-2******* */
/* function mySort(list) {
    return list.sort(function (a,b) {return a-b});
}
console.log(mySort([10, 100, 250, 30, 1, 45])); */

/* ********Exercise-3******** */
/* function isPrime(num) {
    if (num == 2) {return true;}
    if (num <= 1) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++){
            if (num%i===0) {return false; } 
        }
        return true;
    }
  }
  console.log(isPrime(42));
  const limit = Math.sqrt(42);
  console.log(limit); */

  /* ********Exercise-4******** */

/*  function twiceChar(text) {
    let _text="";
    for (let i = 0; i < text.length; i++) {
        _text+=text[i]+text[i]
    }
    return _text;
 }
 console.log(twiceChar("Turkey")); */

 
  /* ********Exercise-5******** */


/* function numberFind() {
    const numberRandom =  Math.floor(Math.random()*101);
    count = 5; 

    while (true) {
        const userGuess = +prompt("Please guess a number 1-100 (including 100) ")
        count -=1
        if (userGuess===numberRandom) {
            console.log(`Congratulations, you got it right about "${numberRandom}"...`);
            break;
        } else if(userGuess!==numberRandom && count>0 ) {
            console.log(`Wrong Guess! You have ${count} right to guess`); 
        } else if (count===0){
            console.log("5 you have expired, please try again..."); 
            break;
        }
    } 
}
console.log(numberFind()); */


  /* ********Exercise-6******** */


/* function wave(str){
    let strArray=[];
    for (let i = 0; i < str.length; i++) {
        if (str[i]===" "){
            continue;
        }
        else{
            strArray.push(str.slice(0,i)+str.slice(i,i+1).toUpperCase()+str.slice(i+1,));
        }
        
    }
    return strArray;
  }

console.log(wave("two words")); */


 /* ********Exercise-6******** */

//  function fibonacci(number){
//     let a = 1;
//     let b = 1;
//     let c = a+b;
//     let i = 1;
//     let output = []
//     if(number === 0){
//         return  console.log(`${number} Fibonacci value of the number ${number}`);}
//     else{      
//         while(i<number){ 
//         a = b;
//         b = c
//         c = a+b;
//         output.push(b-a)
//         i++;
//      }
    
//     }
//     console.log(output);
// return console.log(`${number} Fibonacci value of the number ${c}`);
// }

// fibonacci(7)


function fibonacci(n) {
    if (n===1){return 1;}
    else if (n===2) {return 1}
    else { return fibonacci(n-2)+fibonacci(n-1);
     }
}
console.log(fibonacci(7)); 


