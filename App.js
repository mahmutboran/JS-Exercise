/* Exercise-1 */

function findNeedle(haystack) { 
    for (let i = 0; i < haystack.length; i++) { 
          if (haystack[i] == "needle") {return `found the needle at position ${i}`} 
       } 
    }
/* *********Exercise-2******* */
function mySort(list) {
    return list.sort(function (a,b) {return a-b});
}
console.log(mySort([10, 100, 250, 30, 1, 45]));

/* ********Exercise-3******** */
function isPrime(num) {
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
  console.log(limit);

  /* ********Exercise-4******** */

 function twiceChar(text) {
    let _text="";
    for (let i = 0; i < text.length; i++) {
        _text+=text[i]+text[i]
    }
    return _text;
 }
 console.log(twiceChar("Turkey"));