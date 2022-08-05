// 1. Dynamic Array

class DynamicArray {

    array = [];
    arrayCopy = [];
    аrrayLength = 0;

    constructor(input) {
        this.аrrayLength = input;
    }

    add(value) {
        if (this.array.length >= this.аrrayLength) {
            this.arrayCopy = [...this.array, ...this.array];
            return this.arrayCopy;
        } else {
            this.array.push(value);
            return this.array;
        }
    }

    remove(index) {
        this.array = this.array.filter((_, i) => i !== index);
        return this.array;
    }
}

const dynamicArray = new DynamicArray(3);

dynamicArray.add(1)
dynamicArray.add(2)
dynamicArray.add(3)
dynamicArray.remove(0)

// 2. Do brackets match

let IsMatched;
const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const span = document.querySelector('.span');

let inputArray;

button.addEventListener('click', () => {
    inputArray = input.value.split('')

    console.log(inputArray);
    if (typeof inputArray !== 'undefined' && inputArray.length !== 0) {
        doBracketsMatch(inputArray)
        span.textContent = IsMatched
        input.value = ''
    }
})

doBracketsMatch = inputArray => {

    let brackets = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    let stack = [];

    for (let i = 0; i < inputArray.length; i++) {

        if (inputArray[i] === "(" || inputArray[i] === "[" || inputArray[i] === "{") {
            stack.push(inputArray[i]);
        }
        else if (stack[stack.length - 1] === brackets[inputArray[i]]) {
            stack.pop()
        }

        else IsMatched = false;
    }

    IsMatched = stack.length ? false : true;
}
