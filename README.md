<!--
Describe: -Insert function name [followed by '()'] here -

Test: -Insert test-descriptor(?) here-
Code: 
-Insert test-code here-
Expected Output:  -Insert expected output [that signifies a successful, passed test] here- 
--> 


## BUSINESS LOGIC 
Describe:  processNums() 

Test: "Function must detect the input, and print the resulting Array as a String."
Code: 
const x = 1; 
processNum(x); 
Expected Output:  "0,1" 

Test: "Function must detect the input, call 'substituteNums'**, and print the resulting Array as a String."   **(function is in its 'Test 1' configuration)
Code: 
const x = 1; 
processNum(x); 
Expected Output:  "0,BEEP!" 


Describe:  substituteNums() 

Test:  "It must return an array modified from the original, with the string-substitution (a.k.a. 'string-sub') for '1' applied to that index only." 
Code: 
const x = [0, 1]; 
substituteNums(x); 
Expected Output:  [0, "BEEP!"]  

