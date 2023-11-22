/** @format */

// Testing Codes Line By Line
//
//
// console.log("Hello World");

// let age: number = 5;
// if (age < 50) {
//   age += 10;
// }

// Type "any"
//
// let sales: number = 123_456_789;
// let course: string = "TypeScript";
// let is_published: boolean = true;
// let level;
// level = 1;
// level = "a"

// function render(document) {
//   console.log(document);
// }

// Arrays
// let numbers: number[] = [1, 2, 3, 4, 5, 6];
// numbers.forEach(element => {
//   let p: number = element
// });

// Tuples
// Tuples is a new type added to TypeScript, which is a fixed length of an array. We offend use them when working with a pair of values

// LEt's Say for each user we wanna represent two values whic is [id, name] >>> 1, Vincent

// let user: [number, string] = [1, "Vincent"]
// user[0] /* Code Completion === Productivity Increase */

// Enum
// TypeScript has another built-in type called Enum. Enum represents list of related concepts.

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
// If we define the "enum", typeScript will generate a more optimized code and not lengthy.
//
// enum Size { Small = 0, Medium = 1, Large = 2 } /* enum not defined */
//
// const enum Size { Small = 0, Medium = 1, Large = 2 } /* enum defined */
// let mySize: Size = Size.Medium;
// console.log(mySize);

// functions in TypeScript
// Functions should be properly annotated
// noUnusedLocals > Settings
// noUnusedParameters > Settings
// noImplicitReturns > Settings
//
// function calculateTask(income: number, taxYear = 2022): number {
//   if (taxYear < 2022)
//     return income * 1.2;
//   return (income * 1.3);
// }

// calculateTask(200_000, 2022)
//
// Object

// Type aliase is the use of "type" to defined a property type in one place
// type Employee = {
//   readonly id: number,
//   name: string,
//   retire: (date: Date) => void
// }

// let employee: Employee = {
//   id: 1, name: "Vincent", retire: (date: Date) => {
//   console.log(date);
//
// } }
//
// Union Type, union type is used to a give a variable one num one type
//
// function kgToLbs(weight: number | string): number {
//   // Narrowing
//   if (typeof weight === "number")
//     return weight * 2.2
//   else
//     return parseInt(weight) * 2.2
//   }
//
//
// kgToLbs(10);
// kgToLbs("10");
//
//
// Intersection Type

// type Draggable = {
//   drag: () => void
// }

// type Resizable = {
//   resize: () => void
// }

// type UIWidge = Draggable & Resizable; /* This is an intersection type */

// let textBox: UIWidge = {
//   drag: () => { },
//   resize: () => { }
// }
//
//
// Literal Type
//
// Literal type means assigning an exact or specific type to an object or element
//
// type Quantity = 50 | 100;

// let quantity: Quantity = 50;
//
//
// Nullable Types
//
// function greet(name: string | null | undefined) {
//   if(name)
//     console.log(name.toUpperCase());
//   else
//     console.log("Hello!");
// }

// greet(undefined);
//
//
// Optional Chaining
//
//
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0
    ? null
    : {
        birthday: new Date(),
      };
}

let customer = getCustomer(2);
console.log(customer?.birthday?.getFullYear()); /* This is called optional property access operator */
//
// Optional element access operator
// if (customer !== null && customer !== undefined)
//    customer?.[0] >>> Optional element access operator for arrays
//
// Optional Call Operator
let log: any = null
log?.("a")