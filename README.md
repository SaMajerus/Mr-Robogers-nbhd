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

Test: "(Same as above)"   **(function is in its 'Test 2' configuration) 
Code: 
const x = 5; 
processNum(x); 
Expected Output:  "0,BEEP!,BOOP!,Won't you be my neighbor?,4,5" 


Describe:  substituteNums() 

Test:  "It must return an array modified from the original, with the string-substitution (a.k.a. 'string-sub') for '1' applied to that array index only." 
Code: 
const x = [0, 1]; 
substituteNums(x); 
Expected Output:  [0, "BEEP!"]  

Test:  "It must return an array modified from the original, with the string-subs for '1', '2' and '3' applied to their respective array indices only." 
Code: 
const x = [0, 1, 2, 3, 4]; 
substituteNums(x); 
Expected Output:  [0, "BEEP!", "BOOP!", "Won't you be my neighbor?", 4] 

Test:  "(Ditto above.)  If console displays the first and second digits of the 2-digit number before the returned array-output, this test is successful." 
Code: 
const x = [0, 1, 2, 3, 4, 12]; 
substituteNums(x); 
Expected Output:  "d1 of '12' is:  1"
"d2 of '12' is:  2" 
[0, "BEEP!", "BOOP!", "Won't you be my neighbor?", 4, 12] 

Test:  "Must properly apply String-subs to the two-digit numbers (as laid out by the 'Hierarchy of Substitutions' in the project prompt)." 
Code: 
const x = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24, 30, 31, 32, 33, 34]; 
substituteNums(x); 
Expected Output:  
[0, "BEEP!", "BOOP!", "Won't you be my neighbor?", 4, 5, "BEEP!", "BEEP!", "BOOP!", "Won't you be my neighbor?", 14, "BOOP!", "BOOP!", "BOOP!", "Won't you be my neighbor?", 24, "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", 34] 