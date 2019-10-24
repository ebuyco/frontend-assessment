My own understanding on Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.  

### #1: I declare variable const so it will hold the document.write
```js
     const Banana = ('b' + 'a' + + 'a' + 'a').toLowerCase();     
     console.log(Banana);
```

### #2: Real explanation based on Banana question Adding NaN to "ba" turns NaN into the string "NaN" due to type conversion, gives baNaN. And then there is an a behind, giving baNaNa.
### The space between + + is to make the first one string concatenation and the second one a unary plus (i.e. "positive") operator. You have the same result if you use 'b' + 'a' + + 'a' + 'a', resolved as 'ba'+NaN+'a', which is equivalent to 'ba'+'NaN'+'a' due to type juggling
### and the .toLowerCase(); is convert all letters to small thats why when you document.write the output on the browser is banana
### #3. I declare console.log(Banana) so it will print also on the console
