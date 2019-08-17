const nums = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6, 9, 9, 9, 15, 14, 1, 5];
let iterations = 0;
nums.sort((a, b) => a-b);
console.log('sorted array: ', nums);

function binarySearch(arr, element, start, end) {
    iterations += 1;
    if (start === undefined || end === undefined || start > end || start > arr.length) return false;
    let mid = Math.floor((end + start) / 2);
    if (arr[mid] === element) {
        return mid;
    }
    else if (element < arr[mid]) {
        return binarySearch(arr, element, start, mid - 1);
    }
    return binarySearch(arr, element, mid + 1,end);
}

function iterativeBinarySearch(arr, element) {
    let start = 0;
    let end = arr.length;
    while (start < end) {
        iterations += 1;
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === element) {
            return mid;
        }
        else if (element < arr[mid]) {
            end = mid;
        }
        else {
            start = mid + 1;
        }
    }
    return false;
}

// console.log('index of element: ', binarySearch(nums, 6, 0, nums.length - 1));
console.log('index of element: ', iterativeBinarySearch(nums, 6, 0, nums.length - 1));
console.log('array length: ', nums.length, 'number of iterations: ', iterations);