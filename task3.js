// task 3

function findMostFrequentElement(arr) {
    if (arr.length === 0) {
        return null;
    }

    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement = arr[0];

    for (const element of arr) {

        frequencyMap[element] = (frequencyMap[element] || 0) + 1;

        if (frequencyMap[element] > maxFrequency) {
            maxFrequency = frequencyMap[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

const array = [2, 3, 2, 5, 6, 2, 3, 3, 3, 3];
const mostFrequent = findMostFrequentElement(array);
console.log(mostFrequent);

