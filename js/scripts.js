/*     Business Logic     */ 

function processNum(num) {
  let numArr = [];   //Initializes empty array
  //let retArr = [];  //Initializes empty 'return' array 

  for(let i=0; i < num+1; i+=1){   //Populates numArr.   Order in which values are added: 0 to 'num' (inclusive).  
    numArr.push(i); 
  }  
 
  return String(substituteNums(numArr)); 
}  

function substituteNums(currArr) {   //Substitutes numbers containing digits '1', '2', or '3' with corresponding String values.  [Input-parameter type: array] 
  let subsArr = [];  //Initializing empty array which will store the modified version of 'currArr' that this function returns.
  
  //Pre-defining substitutions for '1', '2', and '3' as constant-type variables. 
  const sub1 = "BEEP!"; 
  const sub2 = "BOOP!"; 
  const sub3 = "Won't you be my neighbor?";  

  for (let index = 0; index < currArr.length; index += 1) { 
    let curr = String(currArr[index]);  //Casts current element as a String, saves it to 'curr'.  [Need to do this to be able to check its length, look for certain digits that comprise it, etc.]  

    if (curr.includes(3)) {  //Checking by 'order of importance'  [3 = Most (Important);  2 = 2nd-Most;  1 = 3rd-Most].   
      subsArr.push(sub3); 
    } else if (curr.includes(2)) { 
      subsArr.push(sub2);  
    } else if (curr.includes(1)) { 
      subsArr.push(sub1);  
    } else { 
      subsArr.push(curr);  
    }
  } 
  return subsArr; 
} 

/*     UI Logic     */ 
function handleSubmission(event){  //Handles user input -- saves it, and passes it on to Business Logic (processNums) 
  event.preventDefault();  //As we know, it prevents the 'onsubmit' function's default behavior from occurring (which would bypass everything that comes after 'onsubmit' and erase user input without the Business Logic having a chance to execute with any inputs). 

  let result; //Initializes variable that will save the output returned from 'processNums', and in turn, allow the webpage to display that output. 
  const inputValue = parseInt(document.getElementById("inNum").value); //Retrieves and saves user's entered number 
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
