# Mr. Robogers' Neighborhood


#### By Samuel Majerus 


#### User enters a number. Program counts up from 0, replacing numbers that contain 1, 2 or 3 with a certain phrase. Prints a comma-separated list of numbers and terms (from 0 and up). 

## Technologies Used

* HTML
* JavaScript 
* Cascading Style Sheets (CSS) 
* Git, Git BASH 
* GitHub (remote repository)
* Markdown (this document) 
* Markdown 'details' tag  (creates dropdown that contains, in this case, all the TDD Test Blocks) 


## Description

When the use submits their number, the program first creates an array of numbers, ordered from least to greatest, from 0 to the input number (inclusive). Then, the function replaces numbers containing '1', '2' or '3' as follows: 
  * If given number contains a '1', the whole thing is replaced with "BEEP!". 
  * If given number contains a '2', the whole thing is replaced with "BOOP!". 
  * If given number contains a '3', the whole thing is replaced with "Won't you be my neighbor?". 
Further, a hierarchy is followed when dealing with numbers with (x>=1) digits. In a nutshell: "3 trumps 2 trumps 1".  
Here are some examples-- 
  * '13', '23', '43' and/or '123' are replaced with   "Won't you be my neighbor?". 
  * '12', '21' and/or '42' are replaced with   "BOOP!". 
  * '10', '51' and/or '11' are replaced with   "BEEP!". 

Other notes: 
* This program's Business Logic was built up using Test-Driven Development (TDD). To see the tests I used, look no further than the next section. 
* For those wondering how to implement dropdowns/spoilers (like below) in Markdown,  I Googled 'details tag markdown' and found this website:  https://spinningnumbers.org/a/details.html#details-markdown-template .   (Yes, I used that template for the dropdown in this document)


## Tests

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


## Setup/Installation Requirements

* All that's required to run this application -- at minimum -- is:  a decently-performing laptop, and a reliable Internet connection. 
* To Clone the program from the GitHub repo to your local machine: 
  * 1.)    Click the green button labelled 'Code'. Under the 'HTTPS' tab, there are 3 Options. If you know how to use Git in command line and have Git BASH installed, move on to Step 2a.    Otherwise, I recommend Option 3, where it says 'Download ZIP'. (move on to Step 2b).  
  * 2.)
    * a.)   If you selected Option 1:   Copy the link. Then, in Git BASH, navigate to the folder you want to put the files in. This can be your Desktop directory, or a different subfolder, whatever you prefer. Next, still in the Git BASH console, type the following (with the copied-link in place of 'HTTPS') and hit ENTER:  
    'git clone HTTPS' 
    Several lines of text will come up in the console -- that's the files being copied into whichever directory/folder you're in currently.  Then, do the following once your prompt line reappears:   While still in the console window, type 'pwd' and press ENTER.  This will display your current file path. Copy that by highlighting it and pressing 'Ctrl-C', and then pasting it in an easily-accessible word processor like Notepad for reference.    
    Next, open File Explorer, and navigate to through your files according to that File Path you just copy-pasted for reference.  Once you've done this, move on to Step 3. 
    
    * 2b.)  Once the '.zip' file is downloaded, unzip and open the folder.  Next, move on to Step 3.

  * 3.)  Before opening the HTML file, do the following:   right-click the containing folder (in which the newly-copied files are stored)  and select the option that says 'Pin to Quick Access'. That way, if the tab is accidentally closed for whatever reason and you want to reopen it, the folder can be accessed again in one step.  
  Move on to Step 4. 
  
  * 4.)  To open the webpage, double-click the file named  "index.html". The webpage will then be opened in a new browser tab.  Everything else after that should be self-explanatory. 
* IMPORTANT:  the webpage's interactive features will not work if the files' containing folder doesn't look something like this  (names with a '/' are folders):  
'css/'     'index.html'     'js/'     'README.md'


## Known Bugs

* N/A 


## License

Email me at ladolego@gmail.com for questions, ideas, concerns, or even any issues that you run into.  You may also clone or Fork the content in this Repo to fiddle around with it, if you like. 

Licensed through MIT. Copyright (c) 8/25/2022, Samuel Majerus. 