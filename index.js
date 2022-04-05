function isPalindrome(word) {
    const reverseWord = word.split("").reverse().join("");
    return word === reverseWord;
}

module.exports = isPalindrome;

