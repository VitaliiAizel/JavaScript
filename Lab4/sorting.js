'use strict';

function bubbleSort(array, isIncreasing) {              //Bubble sort - обмін (бульбашка)
    let undf = 0;
    let swaps = 0;
    let comparisons = 0;
    let arr = array.slice();
    
    if (isUndefined(arr))
        undf = undefinedSorting(arr);

    for (var i = 1; i < arr.length - undf; i++) {
        for (var j = 0; j < arr.length - i - undf; j++) {
            let shouldSwap = isIncreasing ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1];
            if (shouldSwap) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaps++;
            }
            comparisons++;
        }
    }

    return {arr, comparisons, swaps};
}

function selectionSort(array, isIncreasing) {           //Selection sort - мінімальних елементів (вибору)
    let undf = 0;
    let swaps = 0;
    let extremum = 0;
    let comparisons = 0;
    let arr = array.slice();
    
    if (isUndefined(arr))
    undf = undefinedSorting(arr);

    for (var i = 0; i < arr.length - undf; i++) {
        for (var j = i; j < arr.length - undf - 1; j++) {
            let shouldSwap = isIncreasing ? arr[j] < arr[extremum] : arr[j] > arr[extremum];
            comparisons++;
            if (shouldSwap) {
                extremum = j;
            }
        }
        [arr[i], arr[extremum]] = [arr[extremum], arr[i]];
        //if (i !== extremum) операція обміну по суті виконується, навіть якщо extremum = i, тому я це закоментив, але не видалив
        swaps++;
    }

    return {arr, comparisons, swaps};
}

function insertionSort(array, isIncreasing) {           //Insertion sort - вставка (включення)
    let undf = 0;
    let swaps = 0;
    let comparisons = 0;
    let arr = array.slice();
    
    if (isUndefined(arr))
        undf = undefinedSorting(arr);

    for (var i = 1; i < arr.length -undf; i++) {
        comparisons++;
        for (var j = i; j > 0 && (isIncreasing ? arr[j] < arr[j - 1] : arr[j] > arr[j - 1]); j--) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            comparisons++;
            swaps++;
        }
    }

    return {arr, comparisons, swaps};
}

function shellSort(array, isIncreasing) {               //Shellsort - Шелла
    let undf = 0;
    let swaps = 0;
    let comparisons = 0;
    let arr = array.slice();

    if (isUndefined(arr))
        undf = undefinedSorting(arr);

    for (var s = Math.floor((arr.length - undf) / 2); s >= 1; s = Math.floor(s / 2)) {
        for (var i = s; i < arr.length - undf; i++) {
            comparisons++;
            for (var j = i; j >= s && isIncreasing ? arr[j] < arr[j - s] : arr[j] > arr[j - s] ; j -= s) {
                [arr[j - s], arr[j]] = [arr[j], arr[j - s]];
                swaps++;
            }
        }
    }

    return {arr, comparisons, swaps};
}

function hoareSort(array, isIncreasing) {               //Quicksort - Хоара (швидкий)
    let stats = { comparisons: 0, swaps: 0 };
    let arr = array.slice();
    let undf = 0;
    if (isUndefined(arr))
        undf = undefinedSorting(arr);

    hoareSortRecursion(arr, isIncreasing, 0, arr.length - undf - 1, stats);
    return {arr, stats};
}
function hoareSortRecursion(arr, isIncreasing, begin, end, stats) {
    if (begin >= end) return;
    let pivot = arr[Math.floor((begin + end) / 2)];
    let i = begin;
    let j = end;

    while (i <= j) {
        while ((isIncreasing && arr[i] < pivot) || (!isIncreasing && arr[i] > pivot)) {
            i++;
            stats.comparisons++;
        }
        while ((isIncreasing && arr[j] > pivot) || (!isIncreasing && arr[j] < pivot)) {
            j--;
            stats.comparisons++;
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            stats.swaps++;
            i++;
            j--;
        }
        stats.comparisons++;
    }
    hoareSortRecursion(arr, isIncreasing, begin, j, stats);
    hoareSortRecursion(arr, isIncreasing, i, end, stats);
}


function isUndefined(arr) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i] === undefined) return true;
    return false;
}
function undefinedSorting(arr) {
    let undf = 0;
    for (var i = 0; i < arr.length; i++)
        if (arr[i] === undefined)
            undf++;

    for (var i = 0, j = 0; i < arr.length && j < undf; i++) {
        if (arr[i] === undefined) {
            j++;
            if (arr[arr.length - j] !== undefined)
                [arr[i], arr[arr.length - j]] = [arr[arr.length - j], arr[i]];
            else {
                j++;
                [arr[i], arr[arr.length - j]] = [arr[arr.length - j], arr[i]];
            }
        }
    }
    return undf;
}