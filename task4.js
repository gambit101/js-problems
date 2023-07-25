// task 4

function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right ) {
        const currentSum = arr[left] + arr[right];

        if (currentSum === target) {
            return [left, right];
        }

        if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}


const array = [1, 3, 5, 7, 9, 11, 1];
const targetValue = 12;
const result = findTwoNumbersWithSum(array, targetValue);
console.log(result);
