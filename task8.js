// task 8

function findSecondSmallest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        console.log('Input should be an array with at least two elements.');
    }

    arr.sort((a, b) => a - b);

    return arr[1];
}

const inputArray = [1, 3, 4, 5, 6, 7]
const result = findSecondSmallest(inputArray)
console.log(result);