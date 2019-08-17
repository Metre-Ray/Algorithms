const nums = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6, 9, 9, 9, 15, 14, 1, 5];
let iterations = 0;
nums.sort((a, b) => a-b);
console.log('sorted array: ', nums);

function recursiveBinarySearch(arr, element, start, end) {
    iterations += 1;
    if (start > end || start > arr.length) return false;
    const midIndex = Math.floor((end + start) / 2);
    if (arr[midIndex] === element) {
        return midIndex;
    }
    else if (element < arr[midIndex]) {
        return binarySearch(arr, element, start, midIndex - 1);
    }
    return binarySearch(arr, element, midIndex + 1,end);
}

function iterativeBinarySearch(arr, element) {
    let start = 0;
    let end = arr.length;
    while (start < end) {
        iterations += 1;
        const midIndex = Math.floor((start + end) / 2);
        if (arr[midIndex] === element) {
            return midIndex;
        }
        else if (element < arr[midIndex]) {
            end = midIndex;
        }
        else {
            start = midIndex + 1;
        }
    }
    return false;
}

// console.log('index of element: ', binarySearch(nums, 6, 0, nums.length - 1));
console.log('index of element: ', iterativeBinarySearch(nums, 6, 0, nums.length - 1));
console.log('array length: ', nums.length, ', number of iterations: ', iterations);