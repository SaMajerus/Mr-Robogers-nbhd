<!--
Describe: -Insert function name [followed by '()'] here -

Test: -Insert test-descriptor(?) here-
Code: 
-Insert test-code here-
Expected Output:  -Insert expected output [that signifies a successful, passed test] here- 
--> 




<details markdown=block>
<summary markdown=span>TDD Test-Blocks (Business Logic)</summary>

  Describe:  processNum() 

  Test 1:  "Function must detect the input, and print the resulting Array as a String."
    Code: 
      const x = 1; 
      processNum(x); 
    Expected Output:  "0,1" 

  Test 2:  "Function must detect the input, call 'substituteNums'**, and print the resulting Array as a String."   **(function is in its 'Test 1' configuration)
    Code: 
      const x = 1; 
      processNum(x); 
    Expected Output:  "0,BEEP!" 

  Test 3:  "(Same as above)"   **(function is in its 'Test 2' configuration) 
    Code: 
      const x = 5; 
      processNum(x); 
    Expected Output:  "0,BEEP!,BOOP!,Won't you be my neighbor?,4,5" 

  Test 4:  "Function must detect the input, call 'substituteNums'**, and print the resulting Array as a String."   **(function is in its 'Test 4' configuration) 
    Code: 
      const x = 40; 
      processNum(x); 
    Expected Output:  "0,BEEP!,BOOP!,Won't you be my neighbor?,4,5,6,7,8,9,BEEP!,BEEP!,BOOP!,Won't you be my neighbor?,BEEP!,BEEP!,BEEP!,BEEP!,BEEP!,BEEP!,BOOP!,BOOP!,BOOP!,Won't you be my neighbor?,BOOP!,BOOP!,BOOP!,BOOP!,BOOP!,BOOP!,Won't you be my neighbor?,Won't you be my neighbor?,Won't you be my neighbor?,Won't you be my neighbor?,Won't you be my neighbor?,Won't you be my neighbor?,Won't you be my neighbor?,Won't you be my neighbor?,Won't you be my neighbor?,Won't you be my neighbor?,40" 


  Describe:  substituteNums() 

  Test 1:  "It must return an array modified from the original, with the string-substitution (a.k.a. 'string-sub') for '1' applied to that array index only." 
    Code: 
      const x = [0, 1]; 
      substituteNums(x); 
    Expected Output:  [0, "BEEP!"]  

  Test 2:  "It must apply the string-sub for '2'." 
    Code: 
      const x = [0, 2]; 
      substituteNums(x); 
    Expected Output:  [0, "BOOP!"] 

  Test 3:  "It must apply the string-sub for '3'." 
    Code: 
      const x = [0, 3]; 
      substituteNums(x); 
    Expected Output:  [0, "Won't you be my neighbor?"] 

  Test 4:  "It must return an array modified from the original, with the string-subs for '1', '2' and '3' applied to their respective array indices only." 
    Code: 
      const x = [0, 1, 2, 3, 4]; 
      substituteNums(x); 
    Expected Output:  [0, "BEEP!", "BOOP!", "Won't you be my neighbor?", 4] 

  Test 5:  "(Ditto above.)  If console displays the first and second digits of the 2-digit number before the returned array-output, this test is successful." 
    Code: 
      const x = [0, 1, 2, 3, 4, 12]; 
      substituteNums(x); 
    Expected Output:  
      "d1 of '12' is:  1"
      "d2 of '12' is:  2" 
      [0, "BEEP!", "BOOP!", "Won't you be my neighbor?", 4, 12] 

  Test 6:  "Must properly apply String-subs to the two-digit numbers (as laid out by the 'Hierarchy of Substitutions' in the project prompt)." 
    Code: 
      const x = [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24, 30, 31, 32, 33, 34]; 
      substituteNums(x);  
    Expected Output:  
      [0, "BEEP!", "BOOP!", "Won't you be my neighbor?", 4, 5, "BEEP!", "BEEP!", "BOOP!", "Won't you be my neighbor?", "BEEP!", "BOOP!", "BOOP!", "BOOP!", "Won't you be my neighbor?", "BOOP!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"] 
</details> 



