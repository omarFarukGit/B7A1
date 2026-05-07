## Assignment: Advanced Problem Solving with TypeScript & OOP

This assignment comprises various problems that demonstrate fundamental TypeScript concepts, including data typing, interfaces for objects, class usage with inheritance, type checking, and manipulation of data structures. The solutions aim to showcase efficient and clear problem-solving techniques using TypeScript, adhering to best coding practices.

## 💻 Problem Solving

All coding solutions must be implemented in a **single file** named `solutions.ts`.

## Problem 1:

Create a TypeScript function `filterEvenNumbers` that accepts an array of numbers and returns a new array containing only the even numbers.

## Solution 

```tsx
const filterEvenNumbers = (filterArray: number[]): number[] => {
  const result: number[] = [];
  filterArray.forEach((num) => {
    if (num % 2 === 0) {
      result.push(num);
    }
  });
  return result;
};

//Input
const res = filterEvenNumbers([1, 2, 3, 4, 5, 20, 78, 5]);
console.log(res);

```

## Problem 2:

Write a function `reverseString` that takes a string as input and returns the reversed version of that string.

## Solution 
```tsx
const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};
//Input
const res2 = reverseString("hello");
console.log(res2);
```

## Problem 3:

Define a union type `StringOrNumber` and create a function `checkType` that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

## Solution

```tsx
const checkType = (params: string | number) => {
  if (typeof params === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// Input
const res3 = checkType("sinan");
console.log(res3);
```

## Problem 4:

Write a generic function `getProperty` that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

## solution

```tsx
const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
}

// input 
const user = { id: 1, name: "John Doe", age: 21 };
const res4 = getProperty(user, "id");
console.log(res4);

```

## Problem 5:

## solution

Define an interface `Book` with properties `title`, `author`, and `publishedYear`. Create a function `toggleReadStatus` that accepts a `Book` object and returns a new object with an added `isRead` property (boolean), defaulting to `true`.

```tsx
// Sample Input:
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);

// Sample Output:
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
// Input
const res5 = toggleReadStatus(myBook);
console.log(res5);
```

## Problem 6:

Create a class `Person` with a name and age. Then, create a subclass `Student` that adds a `grade` property. Include a method `getDetails` in the `Student` class that returns a string with the student's name, age, and grade.

## solution

```tsx
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}";`;
  }
}

// Input
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());
```

## Problem 7:

Create a function `getIntersection` that takes two arrays of numbers and returns a new array containing only the elements that are `present in both arrays`.

# solution
```tsx
const getIntersection = (arr1: number[], arr2: number[]) => {
  const result:number[] = arr1.filter((item) => arr2.includes(item));
  return result;
};

// input
const res7 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(res7);
```

---
