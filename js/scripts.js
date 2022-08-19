/*     Business Logic     */ 

function processNum (num) {
  let numArr = [];   //Initializes empty array
  let retStr = "";  //Initializes empty string return-value 

  for(let i=0; i < num+1; i+=1){   //Populates numArr.   Order in which values will be added: 0 to 'num' (inclusive). 
    numArr.push(i); 
  } 

  //retStr = (numArr.toString); //Calls built-in prototype 'toString' function on Array, converts array indices into a single, comma-separated String. 
  retStr = String(numArr);
  console.log(retStr); 
  return retStr; 
}  

function substituteNums(currArr) {  //Substitutes numbers that contain digits '1', '2' or '3' with corresponding String values.  [Input-parameter type: array] 
  let newArr = []; 
  console.log(currArr); 
  console.log(newArr);
  currArr.forEach(function(element) { 
    if((element === 1) || (element.includes(1))) { 
      newArr.push("BEEP!"); 
    } else { 
      newArr.push(element); 
    } 
  }); 

  console.log(newArr); 
  return newArr;
}




/*     UI Logic     */ 
function handleSubmission(){
  event.preventDefault; 

}

window.addEventListener("load", function(event){ 

}); 