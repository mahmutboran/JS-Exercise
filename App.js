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


/* function fibonacci(n) {
    if (n===1){return 1;}
    else if (n===2) {return 1}
    else { return fibonacci(n-2)+fibonacci(n-1);
     }
}
console.log(fibonacci(7));  */


// var a = ['dog','lion','hen'];
// a[10] = 'horse';

// console.log(a.length);

// function addTax(total) {
//     return total * 1.05;
//     }

// console.log(addTax(50));

/* let discountPrice = function (price) {
    return price * 0.85;
    };

console.log(discountPrice(100)); */

/* function myFunc() { 
    return this;
}
console.log(myFunc()); */

/* function vowelConsonant(myStr = prompt().toLowerCase()) {
    let vowel=0;
    let consonant=0;
    for (let i = 0; i < myStr.length; i++) {
        if ("aeiou".includes(myStr[i]) ) {vowel++} 
        else if ("bcdfghjklmnpqrstvwxyz".includes(myStr[i])){consonant++}
    }
    return `vowel:${vowel},consonant:${consonant}`;
}
console.log(vowelConsonant()); */

/* let myStr = prompt().toLowerCase()
    let vowel=0;
    let consonant=0;
 console.log(myStr)

for (let i = 0; i < myStr.length; i++) {

        if ("aeiou".includes(myStr[i]) ) {vowel+=1} 
        else if ("bcdfghjklmnpqrstvwxyz".includes(myStr[i])){consonant+=1}
    }


console.log( `vowel:${vowel},consonant:${consonant}`); */

/* ******************Exercise-9***************** */

/* function mySort(myArray) {
    let count=0
    while (count<myArray.length-1) {
        count=0 
        for (let i = 0; i < myArray.length-1; i++) {
            if (myArray[i]>myArray[i+1]){
                myArray.splice(i+1,0,myArray.splice(i,1)[0])
            }else{
                count+=1
            }
        }   
    }
    return myArray
}
console.log(mySort([999, 333, 2, 8982, 12, 45, 77, 99, 11])) */

/* ******************Exercise-10***************** */

/*  function wordRepetition( str=prompt("Enter a word , separator and number of repetitions :").split(" ")) {

    return  Array(+str[2]).fill(str[0]).join(`${str[1]}`)
}
console.log(wordRepetition()) */


/* ******************Exercise-11***************** */

/* function gcd(num1, num2) {
    commonDivisor = [];
    if (num1 % num2 == 0) { return num2 }
    else if (num2 % num1 == 0) { return num1 }
    else {
      for (let i = 0; i < Math.max(num1,num2)/2+1; i++) {
        if (num1%i==0 && num2%i==0) {
            commonDivisor.push(i)
        }
      }
    }
    return commonDivisor[commonDivisor.sort(function(a,b){return a-b}).length-1]
}
console.log(gcd(120,90)) */

/* ******************Exercise-12***************** */


/*  function grater150(text) {
   let list=[];
   text.split(" ").forEach(e => {if ( +e>150){list.push(e)}});return list;
}
console.log(grater150("Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.")) */



/* ******************Exercise-13***************** */

/* function anyTwoNumbers(myList,k) {
    myList.forEach(i => {
        myList.slice(myList.indexOf(i)+1,).forEach(j => {
            if (i+j == k) {
                console.log (`${i}+${j} = ${k} =>> ${true}`)
            }
        });
        
    });
    
}
console.log(anyTwoNumbers([10,15,3,7],17)); */



/* ******************Exercise-14***************** */
function newArray(myList) {
    newList=[];
    myList.forEach(e => { let num = 1;
        myList.forEach(k => {e!=k ? num*=k :""});
        newList.push(num)});
    return newList
}
console.log(newArray([1, 2, 3, 4, 5]))


/* const array = [1, 2, 3, 4, 5]
const newArray = []

for(let i=0; i<array.length; i++){
    let temp = array.shift()
    newArray.push(array.reduce((a, b) => a * b))
    array.push(temp)
}

console.log(newArray) */