/*     Business Logic     */ 

function processNum (num) {
  let numArr = [];   //Initializes empty array
  let retArr = [];  //Initializes empty array (for 'retStr' to cast as a String before returning, at least for the first couple 'combined-arms function' tests.  Will end up casting the 'substituteNums' function call as a String and saving to retStr [as a one-liner].) 
  let retStr = "";  //Initializes empty string return-value 

  //
  for(let i=0; i < num+1; i+=1){   //Populates numArr.   Order in which values will be added: 0 to 'num' (inclusive). 
    numArr.push(i); 
  } 

  retArr = substituteNums(numArr);  
 
  //retStr = String(retArr);
  console.log(String(retArr)); 
  return String(retArr); 
}  


function substituteNums(currArr) {   //Substitutes numbers containing digits '1', '2', or '3' with corresponding String values.  [Input-parameter type: array] 
  let newArr = [];  //Initializing empty array which will store the modified version of 'currArr' that this function returns.
  
  //Pre-defining substitutions for '1', '2', and '3' as constant-type variables. 
  const sub1 = "BEEP!"; 
  const sub2 = "BOOP!"; 
  const sub3 = "Won't you be my neighbor?"; 

  //  **Pre-defining constant- and nonconstant-vars for the case in which the given element's Length>1.  
  let eNum = []; //Empty array variable that will store the 1st, 2nd, 3rd, and 4th digits, respectively, in separate indices. This will allow the logic to evaluate which String-sub to apply (if '1', '2', and/or '3' -- or a combination -- are present in the element) 
  let eTemp = []; //Initializes temporary array. Saves the results of 'curr.trim("").split(" ")'  [see Line 62]. 


  //console.log(currArr); 

  for (let index = 0; index < currArr.length; index += 1) { 
    let curr = String(currArr[index]);  //Casts current element as a String, saves it to 'curr'.  [Need to do this in order to check a number's length, look for certain digits, etc.  (Also allows us to split digits -- see Line 62-71)] 

    console.log("Length of '" + curr + "' is:  " + curr.length);

    if(curr.length === 1) { 
      if(curr === 1) { 
        newArr.push(sub1); 
      } else if (curr === 2) { 
        newArr.push(sub2); 
      } else if (curr === 3) { 
        newArr.push(sub3); 
      } else { 
        newArr.push(curr); 
      } 
    } else if(curr.length >= 2) {  //If number has 2 or more digits 
      /*The logic below will do the following:
      First, it'll check if '3' is in one or more of the given number's digits. If so, that String-sub gets applied.     
      Otherwise, the same logic is applied for '2',   as well as for '1' if it turns out no '2' is present. 
      Finally, if the logic comes up negative for all three, then the given number therefore does not contain any digits with a '1', '2', '3' (or any combination), so the given number gets pushed to 'newArr' the main for-loop continues to the next element. 

      This logic ultimately applies for all numbers with 2 or more digits, and therefore means that it'll work for however many digits the Number data-type can handle before hitting a maximum (assuming that JS has one). The downside, of course, is that the more digits the user inputs, the greater the amount of time the process will take (and with that corresponding increase of time, the likelihood of something like a Memory Leak occurring, for example, also increases.) 
      -SM, 8/19/2022, 1:46pm PDT. 
      */ 

      /*
      eTemp = (curr.trim("")).split(""); 
      console.log("Current contents of array 'eTemp' (for currArr element  '" + curr + "'):  " + eTemp); 
      for (let i=0; i < eTemp.length; i+=1) {  //Copying contents from 'eTemp' to 'eNum' arrays. 
        eNum.push(eTemp[i]); 
      } 
      console.log("Current contents of array 'eNum' (for currArr element  '" + curr + "'):  " + eNum);
      //d1 = eNum[0]; 
      console.log("d1 of '" + curr + "' is:  " + eNum[0]); 
      //d2 = eNum[1]; 
      console.log("d2 of '" + curr + "' is:  " + eNum[1]); 

      newArr.push(curr);  //This is temporary;  ensures no errors get thrown while testing Lines 62-71. 
      */
    }

  }
  //console.log("Final form of 'newArr': " + newArr); 
  return newArr; 
} 




/*     UI Logic     */ 
function handleSubmission(){
  event.preventDefault; 

}

window.addEventListener("load", function(event){ 

}); 


//Note-To-Self RE Error-check:  include a 'base-case' if-statment at the start of the submission handler where:  if the inputted number is longer than 4 digits, give the user an error -- or alert -- that tells them to try again with a number of   'length <= 4'   digits. 