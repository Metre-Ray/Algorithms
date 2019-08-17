const nums = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6, 9, 9, 9, 15, 14, 1];


// we have "sorted" and "unsorted" parts of the array

function insertionSort(arr) {       // array mustn'e contain index -1
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
            else {
                break;
            }
        }
    }
    return arr;
}

console.log(insertionSort(nums));