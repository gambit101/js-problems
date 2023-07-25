// task 2 

function sumOfNumbers(numbers) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const numbersArray = [1, -2, 3, 4, -5, 6, 9];
const result = sumOfNumbers(numbersArray);
console.log(result);