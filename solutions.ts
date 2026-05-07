// Problem 1 solution:

const filterEvenNumbers = (filterArray: number[]): number[] => {
  const result: number[] = [];
  filterArray.forEach((num) => {
    if (num % 2 === 0) {
      result.push(num);
    }
  });
  return result;
};

// Problem 2 solution:

const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};

// Problem 3 solution:

const checkType = (params: string | number) => {
  if (typeof params === "string") {
    return "String";
  } else {
    return "Number";
  }
};


// Problem 4 solution:

const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

//Problem 5 solution:

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

// Problem 6 solution:

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
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7 solution:

const getIntersection = (arr1: number[], arr2: number[]) => {
  const result: number[] = arr1.filter((item) => arr2.includes(item));
  return result;
};
