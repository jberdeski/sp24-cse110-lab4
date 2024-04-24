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
11) The function would result in an error since the variable `discounted` is a `const` variable and the function attempts to reassign the array of `discounted`.
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
    
15) 
16) 
17)    
18) 
19) asd
20) asd
21) asd
22) asd
23) asd
24) asdas
25) d
    
