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
// function newArray(myList) {
//     newList=[];
//     myList.forEach(e => { let num = 1;
//         myList.forEach(k => {e!=k ? num*=k :""});
//         newList.push(num)});
//     return newList
// }
// console.log(newArray([1, 2, 3, 4, 5]))


/* const array = [1, 2, 3, 4, 5]
const newArray = []

for(let i=0; i<array.length; i++){
    let temp = array.shift()
    newArray.push(array.reduce((a, b) => a * b))
    array.push(temp)
}

console.log(newArray) */


/* ******************Exercise-15***************** */
// function firstMissing(arr) {
//     let myArr = arr.filter(x => x>0 ).sort(function (a,b) {return a-b});
//     const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
//     let newArr = range(Math.min(...myArr),Math.max(...myArr),1);
//     console.log(newArr)
//     if (arr.includes(0)) {myArr.push(0);newArr.push(myArr[myArr.length-2]+1)};
//     for (let i = 0; i < newArr.length; i++) {
//         if (myArr[i]!=newArr[i]) {return newArr[i];}
//     }
// }
// console.log(firstMissing([3, 4,-1, 1]))
// console.log(firstMissing([1,0, 2]))
// console.log(firstMissing([7,5, 9, 6]))
// console.log(firstMissing([0,8,7,14,5, 9,6]))


/* ******************Exercise-16***************** */

/* function queryString(arr,str) {
    let newArr = []
    for (const i of arr) {i.startsWith(str) ? newArr.push(i):""}
    return newArr
}
console.log(queryString(["dog", "deer", "deal"],"de")) */

/* ******************Exercise-17***************** */


// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var myDict= new Map()
// let count=0
// for (const i of arr1) {
//     for (const j of arr1) {i==j ? count+=1:""}
//     myDict.set(i,count)
//     count=0
// }
// for (const [key,value] of myDict) {
//     value==Math.max(...myDict.values()) ? console.log(`En çok tekrar eden ${key} , tekrar sayisi ${value}`):""
//}
/* ******************Exercise-18***************** */


// function longestSubstring(s, k) {
//     let _s = new Map();
//     for (const i in s) {

//         for (const j in s) {

//             if (new Set(s.slice(i, Number(j) + 1)).size == k) {
//                 console.log(s.slice(i, Number(j) + 1))


//                 _s.set(s.slice(i, Number(j) + 1).length, s.slice(i, Number(j) + 1))
//             }
//         }
//     }
//     console.log(_s)
//     return _s.get(Math.max(..._s.keys()))
// }

// console.log(longestSubstring("abcbeke",2))


/* ******************Exercise-19***************** */


// function longestSubstring(s) {
//     let _s = new Map();
//     for (const i in s) {
//         for (const j in s) {
//             if (new Set(s.slice(i, Number(j) + 1)).size == s.slice(i, Number(j) + 1).length) {
//                 _s.set(s.slice(i, Number(j) + 1).length, s.slice(i, Number(j) + 1))
//             }
//         }
//     }
//     return _s.get(Math.max(..._s.keys())).length
// }
// console.log(longestSubstring("abcabcbb"))
// console.log(longestSubstring("bbbbb"))
// console.log(longestSubstring("pwwkew"))

/* ******************Exercise-20***************** */

// function maxSubarray(arr,k) {
//     let count=0,_arr=[];
//     while (count<arr.length-k+1) {
//         _arr.push(Math.max(...arr.slice(count,count+k)))
//         count+=1
//     }
//     return _arr
// }
// console.log( maxSubarray([10, 5, 2, 7, 8, 7],3))
/* ******************Exercise-21***************** */

// function inputString(s) {
//    for (const i in s) {
//         if (s.length%2!=0) return false;
//          else if (s.includes("()")) s=s.replace("()","");
//          else if (s.includes("[]")) s=s.replace("[]","");
//          else if (s.includes("{}")) s=s.replace("{}",""); 
//          else if (s=="") return true
//          else return false  
//     }
// }
// console.log( inputString("{()[{}]{}([)]"));
// console.log( inputString("(([]{})[])[]"));
// console.log( inputString("(([]{)}[])[]"));


/* ******************Exercise-22***************** */

// const users =[
//     {id:1,name:"Al",isActive:true,age:20},
//     {id:2,name:"Arif",isActive:true,age:18},
//     {id:3,name:"Al Arif",isActive:false,age:30},
// ];
// let result = users.filter(x=>x.isActive).sort((a,b)=>a.age-b.age)
// console.log(result);


/* ******************Exercise-23***************** */

// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }
// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }


// console.log( sortArray( [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] ))


// let ad ="sdfsdfsd";
// console.log(ad.split(""));


// const obj = {
//     A: 1,
//     B: 2,
//     C: 3,
//     D: 4,
//     E: 5,
//     F: 6,
//     G: 7,
//     H: 8,
//     I: 9,
//     J: 10,
//     K: 11,
//     L: 12,
//     M: 13,
//     N: 14,
//     O: 15,
//     P: 16,
//     Q: 17,
//     R: 18,
//     S: 19,
//     T: 20,
//     U: 21,
//     V: 22,
//     W: 23,
//     X: 24,
//     Y: 25,
//     Z: 26,
//   }

//   function setWord(word) {
//     let arr = []
//     let str = ''
//     for (const i in String(word)) {
//       for (const [key, value] of Object.entries(obj)) {
//         if (value == +String(word)[i]) arr.push(key)
//       }
//     }
//     str = arr.join('')
//     arr = []
//     let first = String(word).slice(0, 1)
//     let second = String(word).slice(1, 3)
//     for (const [key, value] of Object.entries(obj)) {
//       if (value == +first || value == +second) arr.push(key)
//     }
//     str += ' ' + arr.join('')
//     arr = []
//     let sfirst = String(word).slice(0, 2)
//     let ssecond = String(word).slice(2, 3)
//     for (const [key, value] of Object.entries(obj)) {
//       if (value == +sfirst || value == +ssecond) arr.push(key)
//     }
//     str += ' ' + arr.join('')
//     console.log(str)
//   }

//   setWord(1213)

//   let ser ="sdfsf";

//  console.log( ser.substring(0,2))

/* ******************Exercise-24***************** */


function possibleLetters(n) {
    let phoneNum = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }
    let _n=[] , result= []

    for (const i of String(n)){  _n.push(phoneNum[i])}

    for (let i = 0; i < _n.length-1; i++) {
        for (let j of _n[i]) {
            for (let k of _n[i+1]) {
                result.push(j+k)
            }
        }
    }
    return result
};

console.log(possibleLetters(89))      