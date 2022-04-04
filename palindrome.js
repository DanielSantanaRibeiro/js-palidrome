function isPalindrome(word) {
    const reverseWord = word.split("").reverse().join("");
    return word === reverseWord;
}

const word = "arara";

console.log(`${word} is a palidrome ? :  ${isPalindrome(word)}`);

