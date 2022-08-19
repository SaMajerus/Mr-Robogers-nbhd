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

function substituteNums(currArr) {  //Substitutes numbers that contain digits '1', '2' or '3' with corresponding String values.  [Input-parameter type: array] 
  let newArr = []; 
  //console.log(currArr); 
  currArr.forEach(function(element) { 
    if(element === 1) { 
      newArr.push("BEEP!"); 
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