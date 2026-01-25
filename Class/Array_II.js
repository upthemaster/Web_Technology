//IMP -> JavaScript arrays are heterogeneous (can store any data type)
let superHero = ["Hanuman", "Krish", "Spiderman"];

// Printing the full array
console.log(superHero);

let avengers = ["Ben10", "Professor", "berlin", "HalkuRe"];


// Accessing a character from a string inside an array
// superHero[2] → "Spiderman"
// "Spiderman"[2] → 'i' (0-based indexing)
console.log(superHero[2][2]);
// IMPORTANT -> Strings in JavaScript are indexable like arrays


// concat() → merges two arrays and RETURNS a NEW array
// IMPORTANT -> Original arrays are NOT modified
console.log(superHero.concat(avengers));

// Modern & preferred way to merge arrays using spread operator
// Cleaner, faster, interview-favorite
const allHeroes = [...superHero, ...avengers];
console.log(allHeroes);


// Creating a nested array (array inside array)
// Very common in real-world API responses
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [7, 8, 9]];


// flat(1) → flattens only ONE level of nesting
// IMPORTANT: Original array remains unchanged
const arr2 = anotherArray.flat(1);
console.log(arr2);
// Output: [1,2,3,4,5,6,7,7,8,9]


// Safest flattening method
// flat(Infinity) → flattens array of ANY depth
const fullyFlatArray = anotherArray.flat(Infinity);
console.log(fullyFlatArray);


// Correct way to check if a value is an array
// "Utkarsh" is a STRING, not an array
console.log(Array.isArray("Utkarsh"));
// Output: false


// Converting a string into an array using Array.from()
// Each character becomes an element
console.log(Array.from("Utkarsh"));
// Output: ["U","t","k","a","r","s","h"]

//  IMPORTANT INTERVIEW NOTES
// push()     → adds element at END, returns new length
// pop()      → removes last element, returns removed value
// unshift()  → adds element at START, returns new length
// shift()    → removes first element, returns removed value
// concat()   → returns new merged array (non-destructive)
// spread (...) → modern way to merge arrays
// typeof array → "object" (NOT reliable)
// Array.isArray() → correct array check
