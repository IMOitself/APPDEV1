### 00_script_in_html.html
I've learned that adding `type="module"` makes the script run only after the html finishes loading. Just like what was discussed before about defer. And the lesson says that its deffered by default which explains why.

### 01_base_syntax.js
I've learned that having $ and _ at the start of a varibale are also possible on javascript. It's possible on other languages. That's what I want to put in this reflection because other stuff are pretty obvious since we've already learned those before. For example, the case sensitive of variables and how to `console.log()` etc. 

### 02_variables.js
I've learned that checking for a type of variable dont need to call a function, its directly typeof instead of `typeof()`. Which is pretty unique unlike other languages. I also got refreshed about how its better to use 3 equals because for some reason the 2 equals does not compare the variable by its type. In my opinion, it should've always been not like that. I would suggest to make the == strict and === loose. thats all:D

### 03_functions.js
I've notice that doing `return { sum: a + b, product: a * b }` is very clean and i should do it more often especially when debugging. Aside from that, I've been refreshed about functions and arrow functions which is significant now because of the project. I personally use arrow functions a lot and I see how convenient it really is.

### 04_objects.js
I've learned how to use that way of making a function inside an object. That was my first time seeing that snippet and as discussed its the old way of making function inside object. Although, I prefer using arrow function.

### 05_arrays.js
I've been refreshed about how to iterate to every items in an array by using map(). I always use for loop in other languages and I realized how easy it is to do in javascript.

### 06_control_structures.js
Just like on other languages, this also has the same syntaxes. I've been refreshed about if statement, for loop, and while loop. It reminds me of java.

### 07_dom.html
I've been refreshed about dom. It has been discussed multiple times before but its's good to be reminded again. Something I would take from this is the `setTimeout()`. It is very useful for delaying an action it reminds me of the time where I tried making animation using it by updating images. It is a very important concept.

### 08_essential_features.js
I've been refreshed about destructuring and spread operator since I always forgot that exist. I realized how good practice it is because it makes the code cleaner and smaller.

### 09_tricky_parts.js
Just like in earlier lesson, == and === is different based on how they handle data types. I dont know if its exclusive to javascript but having undefined is probably useful somewhere. For me, I dont really find it necessary since having null is enough. I came from java and having just null in error logs is already enough to know that the variable is undefined or not declared yet. Also I've learned how arrow functions does not use stuff outside its declaration when using `this`. Which is pretty interesting because earlier I thought using arrow function all the time is better. I've also been refreshed about copying an array because I have the same problem before on other languages and knowing that not copying it only as a reference for the other variable is helpful.

### 10_let_const.js
I've learned how to avoid var and just like the discussion said, its not common to see it in modern javascript. I've also been refreshed about const which is the java equivalent of final. 

### 11_arrow_functions.js
I've been refrefreshed how arrow functions work. In my mind it goes like this. It has a parameter on the left side of `=>` and the output or the logic on the right. Same thing when you make an ordinary function except this is more of a shortcut. 

### 12_destructuring.js
This is same as 08_essential_features.js and all i can say is that I've been refresh on how to destructure an array to individual variables. Also I noticed how the parameter of printName directly pull the value of a key from an object which is something new for me.

### 13_spread_rest.js
This is also the same as 08_essential_features.js. I've been refresh on how to use spread operator to put values on an array to another. Something new that i learned is `...args` which is kinda similar to T object on java. It gets any variables on the parameter regardless of how many since it puts it on a list. I also learned how to use reduce().

### 14_classes_inheritance.js
I've not touch OOP for a while because of javascript but knowing you can always use OOP in javascript is a good reminder. All the inheritance, abstraction etc are still the same. I also been refreshed how we are instructed to use pascal case. for naming a class. 

### 15_modules_export.js
I've been refresh about how to export variables as taught in the React lesson. Like the default and named export. Although this time we export variables and functions and not components but its the same idea.

### 16_modules_import.js
I've been refresh about how to import variables as also taught in the React lesson. Basically the same learning as 15_modules_export.js like default and named export. 

### 17_logical_operators.js
I learned that empty array and object returns true. Although i find it confusing because just like the example variables it is considered empty, heck even the 0. Maybe because I haven't found a use case where its useful but still I find it weird. I just dont see the point of an empty array being true. Also I learned about || and && even better. I used it a lot on React where I check if the variable is empty. Its like a shortcut of `if(true)`.

### 18_ternary_nullish.js
I realize how useful ? is, although its used on ternary operator its useful on preventing crashing if the variable is undefined. I often see it when I was using React. ?? also do the same thing as || but it only checks for null or undefined unlike || that checks if its 0, empty string etc.

### 19_strings_numbers.js
This lesson is vey useful since its what our previous instructors also teach when introducing a new language. Its very useful because there are a lot of functions that are essential for modifying strings and numbers. Aside from things that are already taught us before, its only now I realized `parseInt()` gets the first number on a string and disregard anything after it.

### 20_array_methods.js
I've realized there are a lot of useful functions for arrays and objects on javascript and its my fist time seeing every(). I've learned how `.filter(), .find(), .some(), .every(), and .sort()` works.  

### 21_errors_json.js
Just like in java, I've learned how to catch an error so that the program still runs and also debug whats the problem. It's literally the same syntax on java except it uses Error instead of Exception. I also learned how to convert object to JSON then parse it back.

### 22_async_javascript.js
I learned how to use `setTimeout()` to delay code, `callback()` to get the value on another function when using it as a parameter. I also find `async` very useful when fetching something on the web like how i did before with `api.jikan.moe` to fetch anime data. It basically allows us to use await to wait for the response. 

### 23_closures_scope.js
I've been refreshed about scopes on javascript. This is very basic but its very useful for making variables only exist on specific code block. Like if you need to make same variable name for different code blocks it does not reuse the same variable. I also learned about how to use a function inside a function to reuse a variable only to the same function. Its called closure. This is very new for me and it shocked me to know this is what React is using.