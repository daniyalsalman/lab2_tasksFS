console.log("task 1")
var Name = "Daniyal";                // string
var age = 20;                              // number
var isStudent = true;                      // boolean
var graduationYear = 2028;                 // number
var bloodGroup = "B";                     // string


var biography = {
    name: Name,
    age: age,
    isStudent: isStudent,
    bloodGroup: bloodGroup,
    address: {
        street: "123 Academic Way",
        city: "Rawalpindi",
        country: "Pakistan"
    },
    degreeProgram: {
        title: "BS Computer Science",
        department: "Faculty of Computing",
        year: graduationYear
    }
};

// Print biography fields individually (without dumping the raw object)
console.log("=== Biography Details ===");
console.log("Name: " + biography.name);
console.log("Age: " + biography.age);
console.log("Currently a Student: " + (biography.isStudent ? "Yes" : "No"));
console.log("Blood Group: " + biography.bloodGroup);
console.log("Degree Program: " + biography.degreeProgram.title + " (" + biography.degreeProgram.department + ")");
console.log("Expected Graduation: " + biography.degreeProgram.year);
console.log("Address: " + biography.address.street + ", " + biography.address.city + ", " + biography.address.country);

console.log("\n------------------------------------------\n");


console.log("task 2")
let givenPrime = 11;


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let candidate = givenPrime + 1;

while (true) {
    if (isPrime(candidate)) {
        console.log("Given prime number: " + givenPrime);
        console.log("The next prime number is: " + candidate);
        break;
    }
    candidate++;
}

console.log("task3")
function createPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join('');
    const middlePart = numbers.slice(3, 6).join('');
    const lastPart = numbers.slice(6, 10).join('');
    return `(${areaCode}) ${middlePart}-${lastPart}`;
}


const sampleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(sampleNumbers));


console.log("task4")


function roundMe(...args) {
    if (args.length === 0) return 0;
    if (args.length === 1) return Math.round(args[0]);
    return args.map(num => Math.round(num));
}


console.log("roundMe():", roundMe());          // 0
console.log("roundMe(4.7):", roundMe(4.7));    // 5
console.log("roundMe(4.7, 4.4):", roundMe(4.7, 4.4)); // [5, 4]


console.log("task5")
function abs(...args) {
    if (args.length === 0) return 0;
    if (args.length === 1) return Math.abs(args[0]);
    return args.map(num => Math.abs(num));
}

function ceil(...args) {
    if (args.length === 0) return 0;
    if (args.length === 1) return Math.ceil(args[0]);
    return args.map(num => Math.ceil(num));
}

function floor(...args) {
    if (args.length === 0) return 0;
    if (args.length === 1) return Math.floor(args[0]);
    return args.map(num => Math.floor(num));
}


console.log("abs(-5, 3.2, -10):", abs(-5, 3.2, -10)); 
console.log("ceil(4.2):", ceil(4.2));                 
console.log("floor(4.9, 1.2):", floor(4.9, 1.2));     


console.log("task6")
function sumOfMultiples(x, y, z) {
    let sum = 0;
    for (let i = 1; i < z; i++) {
        if (i % x === 0 || i % y === 0) {
            sum += i;
        }
    }
    return sum;
}


console.log("Multiples of 3 or 5 below 10:", sumOfMultiples(3, 5, 10)); 
console.log("Multiples of 3 or 5 below 1000:", sumOfMultiples(3, 5, 1000));