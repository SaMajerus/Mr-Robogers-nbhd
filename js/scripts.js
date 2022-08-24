/*     Business Logic     */ 

function processNum(num) {
  let numArr = [];   //Initializes empty array
  let retArr = [];  //Initializes empty array (for 'retStr' to cast as a String before returning, at least for the first couple 'combined-arms function' tests.  Will end up casting the 'substituteNums' function call as a String and saving to retStr [as a one-liner].) 
  //let retStr = "";  //Initializes empty string return-value 

  for(let i=0; i < num+1; i+=1){   //Populates numArr.   Order in which values will be added: 0 to 'num' (inclusive). 
    //console.log("[processNum] -- Pushing " + i + " to numArr"); 
    numArr.push(i); 
  } 
  //console.log(""); 

  retArr = substituteNums(numArr);  
  //retStr = String(retArr);
  //console.log(String(retArr)); 
  return String(retArr); 
}  

function substituteNums(currArr) {   //Substitutes numbers containing digits '1', '2', or '3' with corresponding String values.  [Input-parameter type: array] 
  let subsArr = [];  //Initializing empty array which will store the modified version of 'currArr' that this function returns.
  
  //Pre-defining substitutions for '1', '2', and '3' as constant-type variables. 
  const sub1 = "BEEP!"; 
  const sub2 = "BOOP!"; 
  const sub3 = "Won't you be my neighbor?";  
  // console.log(subsArr); 

  for (let index = 0; index < currArr.length; index += 1) { 
    let curr = String(currArr[index]);  //Casts current element as a String, saves it to 'curr'.  [Need to do this to be able to check its length, look for certain digits that comprise it, etc.] 
    // console.log("[substituteNums]--  'curr' =  " + curr);
    // console.log("Length of '" + curr + "' is:  " + curr.length);

    /*The logic below will do the following:
    First, it'll check if '3' is in one or more of the given number's digits. If so, that String-sub gets applied.     
    Otherwise, the same logic is applied for '2',   as well as for '1' if it turns out no '2' is present. 
    Finally, if the logic comes up negative for all three, then the given number therefore does not contain any digits with a '1', '2', '3' (or any combination), so the given number gets pushed to 'newArr' the main for-loop continues to the next element. 
    This logic ultimately applies for all numbers with [1] or more digits, and therefore means that it'll work for however many digits the Number data-type can handle before hitting a maximum (assuming that JS has one). The downside, of course, is that the more digits the user inputs, the greater the amount of time the process will take (and with that corresponding increase of time, the likelihood of something like a Memory Leak occurring, for example, also increases.) 
    -SM, 8/19/2022, 1:46pm PDT.  [Edited at 2:41pm PDT by me (SM), same day.] */ 

    if (curr.includes(3)) {  //Checking by 'order of importance'  [3 = Most (Important);  2 = 2nd-Most;  1 = 3rd-Most].   
      subsArr.push(sub3); 
      // console.log("Pushed " + sub3 + "to  subsArr"); 
      // console.log(""); 
    } else if (curr.includes(2)) { 
      subsArr.push(sub2); 
      // console.log("Pushed " + sub2 + "to  subsArr"); 
      // console.log(""); 
    } else if (curr.includes(1)) { 
      subsArr.push(sub1); 
      // console.log("Pushed " + sub1 + "to  subsArr"); 
      // console.log(""); 
    } else { 
      subsArr.push(curr); 
      // console.log("Pushed " + curr + "to  subsArr"); 
      // console.log(""); 
    }
  } 
  //console.log("Final form of 'newArr': " + newArr); 
  return subsArr; 
} 

/*     UI Logic     */ 
function handleSubmission(event){  //Handles user input -- saves it, and passes it on to Business Logic (processNums) 
  event.preventDefault();  //As we know, it prevents the 'onsubmit' function's default behavior from occurring (which would bypass everything that comes after 'onsubmit' and erase user input without the Business Logic having a chance to execute with any inputs). 

  let result; //Initializes variable that will save the output returned from 'processNums', and in turn, allow the webpage to display that output. 
  const inputValue = parseInt(document.getElementById("inNum").value); //Retrieves and saves user's entered number 
  //console.log(inputValue);
  result = processNum(inputValue); 

  //Displaying results on webpage 
  document.getElementById("response-hdr").removeAttribute("class");  //Reveals 'h1' header
  document.getElementById("robogrs-greet").removeAttribute("class");  //Reveals Robogers' initial greeting to the user. 
  document.getElementById("robogrs-response").innerText = result;  //Prints the Business Logic's output for the user on the webpage
}

window.addEventListener("load", function() { 
  const nbhd = document.getElementById("userIn"); 
  nbhd.addEventListener("submit", handleSubmission); 
}); 
