function firstNonRepeatedChar(str) {
 // Write your code here
	let charCount = {}; // Step 1: Initialize an empty object

    // Step 2: Count each character's frequency
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 3: Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
