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
  let newArr = [];  //Initializing empty array which will store the modified version of 'currArr' that this function returns.
  
  //Pre-defining substitutions for '1', '2', and '3' as constant-type variables. 
  const sub1 = "BEEP!"; 
  const sub2 = "BOOP!"; 
  const sub3 = "Won't you be my neighbor?"; 

  //  **Pre-defining constant- and nonconstant-vars for the case in which the given element's Length>1.  
  let eNum = []; //Empty array variable that will store the 1st, 2nd, 3rd, and 4th digits, respectively, in separate indices. This will allow the logic to evaluate which String-sub to apply (if '1', '2', and/or '3' -- or a combination -- are present in the element) 
  let eCopy;  //'element' will get copied to this variable, so that the original 'element' var can be pushed -- or have something else pushed -- to 'newArr' once the logic does its String-sub Hierarchy evaluation. 
  let eTemp = []; //Initializes temporary array. Saves the results of 'eCopy.split(" ")'. 
  let inNum = 0; 
  //Pre-defining -- and initializing -- constant vars for the 1st, 2nd, 3rd, and 4th digits, respectively, of the given element. 
  const d1=0; 
  const d2=0; 
  const d3=0; 
  const d4=0; 

  //console.log(currArr); 
  currArr.forEach(function(element) { 
    inNum = parseInt(element); 
    console.log("Length of '" + inNum + "' is:  " + inNum.length);
    if(inNum.length === 1) { 
      if(inNum === 1) { 
        newArr.push(sub1); 
      } else if (inNum === 2) { 
        newArr.push(sub2); 
      } else if (inNum === 3) { 
        newArr.push(sub3); 
      } else { 
        newArr.push(inNum); 
      } 
    } else if(inNum.length === 2) { 
      eCopy = inNum; 
      eTemp = eCopy.split(""); 
      for(let i=0; i < eTemp.length; i+=1){ 
        eNum.push(eTemp[i]); 
      } 
      d1 = eNum[0]; 
      console.log("d1 of '" + inNum + "' is:  " + d1); 
      d2 = eNum[1]; 
      console.log("d2 of '" + inNum + "' is:  " + d2); 
      /*
      if(d1 === 1){
        if(d2 === 2){

        }
      }
      */ 
      newArr.push(inNum);  //This is temporary; it'll hopefully ensure that no errors get thrown when testing if code on Lines 49-53 [chiefly 49] work. 
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