# useRef-sample
UseRef gives us a way to keep values around for the entire life-span of the component. 
Usually when people talk about refs, they are referring to the ability to grab one of the DOM nodes and make imperative(how to) changes to it. (This is in contrast to, React changes that are declarative – what to do and not how to do)

> Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

To achieve this : we first declare the useRef hook to the inputRef dom element, like so: 
```javascript
const inputRef = useRef(null);
```
In this app, we are shifting the focus from the 'Add Todo Item' button to the input text box so that the user can keep adding new items to the list. For achieving this we are invoking the below line of code while adding items
```javascript
inputRef.current.focus()
```
Inside the input component we set: ref={inputRef}

![image](https://user-images.githubusercontent.com/59696420/119686954-6d9dd780-be64-11eb-803a-2dff99efb79a.png)

> Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
