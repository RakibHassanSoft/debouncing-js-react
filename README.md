
# Debouncing


## Step 1
- create a html page where we have button and a div
- button id will be **pay-btn** and div id will be **message**
```html
<button id="pay-btn">Pay Now</button>
  <div id="message"></div>
```

## Step 2
- link the html file to js file
```
  <script src="script.js"></script>
```


## Step 3
- add a addevet to the script 
- here DOMContentLoaded is a event 
- we are taking the buttin id by **payButton**
- we are adding a add event listener with  **payButton** and give 2 parameters, another event **click** and  debouncing function **debounce** with 2 parameters  storend is  **debouncedPayment** 
- **debounce**  fucntion takes 2 paraments a fucntion and ducration to wait

```js
const debouncedPayment = debounce(processPayment, 2000); 

  document.addEventListener('DOMContentLoaded', () => {
    const payButton = document.getElementById('pay-btn');
    payButton.addEventListener('click', debouncedPayment);
});
```


## Step 4
- Debouncing starts from here 
- in **debounce** function we have a fucnion and duration
- we have to return a fucntion **This is not perfect version** because of clouser
```js
function debounce(func, delay) {
   return function(){
     setTimeout(()=>{
        func()
     },delay)
   }
}
```
- ***Optinal*** 
- **In JavaScript, closures are a powerful feature that allow a function to access variables from its outer scope even after the outer function has finished executing. Here’s a basic example to illustrate closures: Example**
```js
function createCounter() {
    let count = 0; // This variable is in the outer scope

    return function() {
        count += 1; // The inner function can access and modify `count`
        console.log(count);
    };
}

const counter = createCounter(); // `counter` is a function that closes over `count`

counter(); // Outputs: 1
counter(); // Outputs: 2
counter(); // Outputs: 3

```
- that is why we have to remove the previous data
- here we use here **timeoutId**
- if **timeoutId** is not emptry then we clear all by **clearTimeout(timeoutId)** function
- because we stored that in **timeoutId** 

### 1.Normal version
```js
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
```
### 2.Simple version
```js
function debounce(func, delay) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}
```


##In React
- we can see in **app.js** in **debouncing-in-react** react project
- we can just uncomment and run the code 
- **NB: We need to remember that deboncing takes a fucntion and duration of time** 
```jsx

import { useCallback } from 'react';

const useDebounce = (callback, delay) => {
  const debouncedCallback = useCallback(() => {
    let handler;
    return (...args) => {
      if (handler) {
        clearTimeout(handler);
      }
      handler = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }, [callback, delay]);

  return debouncedCallback();
};

export default useDebounce;

```

###with lodash
```jsx

import { useState, useCallback } from 'react';
import _ from 'lodash';

const useDebounce = (callback, delay) => {
  const debouncedCallback = useCallback(
    _.debounce((...args) => {
      callback(...args);
    }, delay),
    [callback, delay]
  );

  return debouncedCallback;
};

export default useDebounce;


```





