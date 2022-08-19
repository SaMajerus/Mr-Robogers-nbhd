/*     Business Logic     */ 

function processNum (num) {
  let numArr = [];   //Initializes empty array
  let retArr = [];  //Initializes empty array (for 'retStr' to cast as a String before returning, at least for the first couple 'combined-arms function' tests.  Will end up casting the 'substituteNums' function call as a String and saving to retStr [as a one-liner].) 
  let retStr = "";  //Initializes empty string return-value 

  for(let i=0; i < num+1; i+=1){   //Populates numArr.   Order in which values will be added: 0 to 'num' (inclusive). 
    numArr.push(i); 
  } 

  retArr = substituteNums(numArr);  
 
  retStr = String(retArr);
  console.log(retStr); 
  return retStr; 
}  

function substituteNums(currArr) {   //Substitutes numbers containing digits '1', '2', or '3' with corresponding String values.  [Input-parameter type: array] 
  //Pre-defining substitutions for '1', '2', and '3' as constant-type variables. 
  const sub1 = "BEEP!"; 
  const sub2 = "BOOP!"; 
  const sub3 = "Won't you be my neighbor?"; 

  let newArr = [];  //Initializing empty array which will store the modified version of 'currArr'. 
  //console.log(currArr); 
  currArr.forEach(function(element) { 
    //if(element.length === 1) {}
    if(element === 1) { 
      newArr.push(sub1); 
    } else if (element === 2) { 
      newArr.push(sub2); 
    } else if (element === 3) { 
      newArr.push(sub3); 
    } else { 
      newArr.push(element); 
    } 

  }); 

  //console.log("Final form of 'newArr': " + newArr); 
  return newArr; 
} 




/*     UI Logic     */ 
function handleSubmission(){
  event.preventDefault; 

}

window.addEventListener("load", function(event){ 

}); 