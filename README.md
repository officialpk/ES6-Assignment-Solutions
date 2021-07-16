# ES6-Assignment-Solutions

full question : https://docs.google.com/document/d/1vI_dsX2wuaP38tAAkLrtD1luthtZjjenmKjqTv-nFik/edit?usp=sharing



ES6 tasks

Rules :
1.only use es6 syntax. Do not use normal javascript syntax 
2. Do not add css / bootstraps 
3. Do not give class, id for any tags eg : 
<div id="" Class ="" ></div> //wrong. Do not do this. Avoid id and class 
(hint : use queryselector(),  queryselectorAll() in js for dom manipulation) 
4. Do not use jquery/ any external library 
5. Build a single page application
6. Should follow task order. Do not skip any task order

Task order

Create a student reg form including 
First name ( input type=”text)
Last Name ( input type=”text)
Mobile ( input type=”text)
Email ( input type=”text)
gender(radio box)
Mode of payment( select option: online ,offline)
password  ( input type=”password)
checkbox( i agree terms and cond)
Reset btn
Submit btn
Note : all field should be filled . if not prompt alert to fill the blanks. Also while submitting checkbox should be checked (by default checkbox should not be checked)
Create a table in same page. Add the data you inserted from form to table. Field should be as follows


Id (auto generated)
Fullname
(firstname + lasname)
mobile
email
gender
Mode of pament

Do not display password
Add a search operation to the table. (do not use any external library) should be able to search any related FULL NAME.
FullNames : Nirmal , aswanth , pranav 
 if(fullname.search == ‘a) => output Nirmal, aswanth , pranav
if(fullname.search==’ni’) => output Nirmal
if(fullname.search ==’zzz’) => output “no name with ‘zzz’ found’
Note: seach should be case sensitive and should search on input. 
Add a delete button for element in table when click delete item from table

Note: all the above task should be fulfilled . search should be possible if exist
Give authentication to form (authentication should be done with js only)
Mobile number ( should be b/w 10-12 char and should be number only (note:do not use <input type=”number”  ot type=”tel” )
Email (follow email format , username@domain.com , do not use <input type=”email” )
Password (atleast 8char , atleast one caps , small , number , symbol.)
Hint: use regrex
Create a login form in which user should able to authenticate using reg form.
Email (provided during reg)
Password (provided during reg)
Login btn
if(login ==success) alert (welcome ‘nirmal’ to my site)
Else alert(check email and pass)
