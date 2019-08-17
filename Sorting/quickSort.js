const nums = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6, 9, 9, 9, 15, 14, 1];


function quickSort(arr, start, end) {
    if (start >= end) return;
    const pIndex = partition(arr, start, end)
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end)
    return arr;
}

function partition(A, start, end) {
    const pivot = A[end];
    let pIndex = start;
    const pivotIndex = end;
    for (let i = start; i < end; i++) {
        if (A[i] <= pivot) {
            [A[i], A[pIndex]] = [A[pIndex], A[i]];
            pIndex += 1;
        }
    }
    [A[pIndex], A[pivotIndex]] = [A[pivotIndex], A[pIndex]];
    return pIndex;
}

console.log(quickSort(nums, 0, nums.length - 1));