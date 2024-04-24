1) At line 12 the number of prices will be printed, in this case `3`, because `console.log(i)` means that the program will print the value of `i` to the terminal, and since `i` is a `var` variable it counts through the array of prices and can be accessed outside of its scope.
2) Line 13 will print `150` in this example. This happens because the value stored in the `var` variable `discountedPrice` is the final price in the array given multiplied by (1 - the discount given).
3) In this example line 14 will output `150`, this is because the `var` variable `finalPrice` is assigned the last price (since it iterates through the array of prices) in the given array once the discount is applied to it. 
4) The function should return the new array of discounted prices, however since there is no `console.log` nothing gets printed. 
5) Line 12 will result in an error since our variables are now declared using `let`. Becuase we use `let`, line 12 cannot get the value of i due to being outside the scope our variables are defined in. 
6) At line 13 there will be an error because all the variables are defined using `let` meaning that outside the scope where the variables are defined, we cannot access them. 
7) HOWEVER, line 14 will print out `150` this happens becuase even though we use `let` to define our variable, line 14 is within the scope of the definition, meaning we can call to it. 
8) The function should return the new array of discounted prices even though we define the variable `discounted` using `let` becuase it is within the scope, however since there is no `console.log` nothing gets printed. 
9) Line 11 will result in an error because we cannot assign to `finalPrice` since it uses `const`.
10) Line 12 here will print out `3` becuase `console.log(length)` means print out the value of `length` to the console, also since we are not trying to reassign the value of the `const` variable `length`, there are no errors. 
11) The function should return the new array of discounted prices because even though `discoutned` uses `const` the `push` method is used to add elements to the array, but it does not change the reference of it, however since there is no `console.log` nothing gets printed.
12) Accessing:
    
    A. `student.name`
    
    B. `student['Grad Year']`
    
    C. `student.greeting()`
    
    D. `student['Favorite Teacher']`
    
    E. `student.courseLoad[0]`

13) Arithmetic:

    A. Output: `32` This is the output becuase `'3'` is a string and in js that makes the equation an exact string representation

    B. Output: `1` This happens becuase instead adding/ concatinating a string we are subtracting which is a mathmatical opperation.

    C. Output: `3` In this equation `null` is treated as a 0

    D. Output: `3null` Here `null` is treated as a string and the + is a concatination of the string `'3'` with the string `null`.

    E. Output: `4` In js, `true` is coerced to the number 1, so this equation is treated as 1 + 3
    
    F. Output: `0` This occurs becuase both `false` and `null are coerced to the number 0, so js interprets this as 0 + 0

    G. Output: `3undefined` Here js is interpretting the + as a concatination of the string `'3'` and `undefined`

    H. Output: `NaN` This means not a numder, js outputs this because `undefined` cannot be converted to a number, also this operation is subtracting a non-number from the string `3` resulting in `NaN`.

14) Comparisions:

    A. Output: `true` This is because the string `'2'` is coerced to the number 2, then is compared with the number 1, resulting in `true`

    B. Output: `false` The way that js handles this is by comparing the strings `'2'` and `'12'` character by character. So the first thing it checked was if `'2'` was greater than `'1'`, which it is not.

    C. Output: `true` This is because the `==` operator performs type coercion, so `'2'` is coerced to the number 2, then compared with `2`, resulting in true.

    D. Output: `false` Here the `===` operator performs strict comparison without type coercion, so `'2'` (a string) is not strictly equal to `2` (a number), resulting in false.

    E. Output: `false` Since the `==` operator performs type coercion, `true` is coerced to the number 1, which is not equal to 2, resulting in false.

    F. Output: `false` Because the '===' operator performs strict comparison without type coercion, `true` (a boolean) is not strictly equal to the result of `Boolean(2)` (which is also true), resulting in false.

15) The difference between the `==` equality operator and the `===` strict equality operator is `==` performs type coercion if the operands are of different types before comparing them, while `===` does not. 
16) [Answer](part2-question16.js)
17) Runing `modifyArray([1,2,3], doSomething)` results in `[2, 4, 6]` because `modifyArray` takes 2 parameters, then it initializes an emptyarray `newArr`, it then iterates through each element of the first parameter, then for each element it calls the second parameter (in this case `doSomething` which doubles the number) finally it pushes the the result into `newArr` and returns `newArr`.
18) asd
19)  asd  

    
