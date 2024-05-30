

## Arrow Function

Arrow functions are introduced in ES6, which provides you a more accurate way to write the functions in JavaScript. Arrow functions make your code more readable and structured.

Arrow functions are anonymous functions (the functions without a name and not bound with an identifier). They don't return any value and can declare without the function keyword. Arrow functions cannot be used as the constructors. The context within the arrow functions is lexically or statically defined. They are also called as Lambda Functions in different languages.

Arrow functions do not include any prototype property, and they cannot be used with the new keyword.

Before Arrow:

```ts

hello = function() {
  return "Hello World!";
}

```


With Arrow Function:

```ts

hello = () => {
  return "Hello World!";
}

```

Arrow Functions Return Value by Default:



```ts

hello = () => "Hello World!";

```

Arrow Function With Parameters:

```ts

hello = (val) => "Hello " + val;

```

In fact, if you have only one parameter, you can skip the parentheses as well:

```ts

hello = val => "Hello " + val;

```
