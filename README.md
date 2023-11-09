## 1. What are some benefits of using TypeScript over JavaScript in a project?

> We can prevent data type error on the coding time. We can perceive our code after long time in shortly

## 2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work?

> By using optional chaining we can prevent from stop of code execution.By using nullish coalescing we can utilize null and undefiend operators.Like `!user?.exist??'Spy'`

## 3. How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.

> By using async and await function.Await will wait utill receive the asynce functions return then it will continue next line of code .
> Promises are a cleaner way to handle asynchronous code that allows for chaining . then() and . catch() methods, while Async/await provides a more procedural syntax that makes asynchronous code look similar to synchronous code, with better error handling capabilities.

## 4. How can you use TypeScript's enums, and what are their advantages?.

> Enums are a way to define a set of named constants. They allow you to create a collection of related values that can be assigned to variables or used as a type.Enums provide a convenient way to work with a fixed set of values in a type-safe manner.Reduces errors caused by transposing or mistyping numbers. Makes it easy to change values in the future. Makes code easier to read, which means it is less likely that errors will creep into it.Like as type Data={name:string}

## 5. Explain the role of type guards in TypeScript and provide an example of a custom type guard.

> By using this we can know the what is type of this data (number,string etc).For using this the keyword is typeof and for and object we can use type in and instanceof .

## 6. Can you give an example of how to use "readonly" properties in TypeScript?

> ````type ReadOnly{
>    readonly name:string;
> }```
> ````

## 7. Explain what a union type is in TypeScript and provide an example of its usage. -->

> It is a combine of types like we can store number or string or so what we wanna store in our variable. Like as string|number|boolean so forth.
