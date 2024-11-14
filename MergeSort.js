let arr = [3, 2, 1, 13, 8, 5, 0, 1];

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let leftArray = arr.slice(0, mid);
    let rightArray = arr.slice(mid);

    // Recursively sort the left and right sub-arrays
    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);

    // Merge the sorted sub-arrays
    return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
    let result = [];
    let leftIndex = 0, rightIndex = 0;

    // Merge the two arrays by comparing their elements
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in the left array, push them to result
    while (leftIndex < leftArray.length) {
        result.push(leftArray[leftIndex]);
        leftIndex++;
    }

    // If there are remaining elements in the right array, push them to result
    while (rightIndex < rightArray.length) {
        result.push(rightArray[rightIndex]);
        rightIndex++;
    }

    return result;
}

arr = mergeSort(arr);
console.log(arr);
