// Problem 1:

const filterEvenNumbers = (filterArray: number[]): number[] => {
  const result: number[] = [];
  filterArray.forEach((num) => {
    if (num % 2 === 0) {
      result.push(num);
    }
  });
  return result;
};

filterEvenNumbers([1, 2, 3, 4, 5, 20, 78, 5]);

// Problem 2:

const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};
reverseString("hello");

// Problem 3:

const checkType = (params: string | number) => {
  if (typeof params === "string") {
    return "String";
  } else {
    return "Number";
  }
};

checkType("sinan");

// Problem 4:

const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "id");

//Problem 5:

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

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

toggleReadStatus(myBook);

// Problem 6:

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

const student = new Student("Alice", 20, "A");
student.getDetails();

// Problem 7:

const getIntersection = (arr1: number[], arr2: number[]) => {
  const result: number[] = arr1.filter((item) => arr2.includes(item));
  return result;
};

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
