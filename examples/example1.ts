import { Laboratory } from "../laboratory/laboratory";

function add(a: number, b: number): number {
    return a + b;
}

Laboratory.test(add, [
    [[2, 0], 2],
    [[5, 5], 10]
]);

/* ------------------------------------------------------------ */

const isPalindrome = (word: string): boolean => {
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedWord = cleanWord.split("").reverse().join("");
    return cleanWord === reversedWord;
}

Laboratory.test(isPalindrome, [
    [['radar'], true],
    [['hello'], false],
    [['A man, a plan, a canal, Panama'], true]
]);

/* ------------------------------------------------------------ */

function sumPositiveNumbers(numbers: number[]): number {
    return numbers.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}

Laboratory.test(sumPositiveNumbers, [
    [[[1, 2, 3]], 6],
    [[[-1, 0, 2, 4]], 6],
    [[[-2, -5, 7, 10]], 17]
]);

/* ------------------------------------------------------------ */

function analyzeText(text: string): { words: number; characters: number } {
    const words = text.split(/\s+/).length;
    const characters = text.length;
    return { words, characters };
}

Laboratory.test(analyzeText, [
    [['Hello, world!'], { words: 2, characters: 13 }],
    [['Lorem ipsum dolor sit amet'], { words: 5, characters: 26 }]
]);

/* ------------------------------------------------------------ */

function validatePassword(password: string): boolean {
    const minLength = 8;
    const containsUppercase = /[A-Z]/.test(password);
    const containsLowercase = /[a-z]/.test(password);
    const containsDigit = /\d/.test(password);
    return password.length >= minLength && containsUppercase && containsLowercase && containsDigit;
}

Laboratory.test(validatePassword,[
    [['Passw0rd'], true],
    [['weak'], false ],
    [['Secure123'], true]
]);