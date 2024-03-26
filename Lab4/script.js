(function () {
    const denseArray = [
        8439, 9579, 462, 3993, 5597, 3557, 3659, 9799, 3459, 9160, 5296, 1253, 9370, 6241, 5951, 3139, 9120, 2466, 2433, 6127,
        1671, 6114, 8374, 8609, 995, 5940, 7818, 4356, 6032, 637, 398, 3470, 2906, 9921, 2256, 6990, 1807, 1629, 989, 804,
        4586, 6286, 8072, 560, 9731, 3841, 8016, 3675, 7386, 6155, 8791, 5238, 7212, 2402, 7026, 3763, 8354, 4329, 5797, 1153,
        6501, 3411, 9423, 7287, 5029, 5694, 3035, 8173, 9800, 2389, 7422, 723, 8744, 2615, 4255, 1527, 1860, 6875, 5312, 8236,
        8502, 1121, 8868, 516, 5271, 7573, 6848, 357, 1552, 2643, 4594, 4795, 3327, 6707, 8540, 9590, 7220, 5983, 368, 8789, 2919,
        835, 4942, 2901, 3544, 1285, 9708, 3321, 6312, 6547, 7243, 6882, 8949, 8089, 3245, 7490, 4756, 5718, 1357, 2872
      ];
      
      const sparseArray = [
        8439, undefined, 462, undefined, 5597, undefined, 3659, 9799, undefined, 9160, 5296, undefined, 9370, 6241, 5951, 3139,
        9120, undefined, 2433, 6127, undefined, 6114, 8374, 8609, undefined, 5940, 7818, 4356, 6032, 637, undefined, 3470, 2906,
        9921, 2256, 6990, undefined, 1629, 989, 804, 4586, 6286, 8072, undefined, 9731, 3841, 8016, undefined, 7386, 6155, 7517,
        4531, undefined, 9689, 6842, 4127, 5204, 7349, undefined, 8604, 2738, 9852, 2463, 7167, undefined, 4281, 6542, 2903, 2871,
        7944, undefined, 2382, 9914, 8071, 6973, 5472, undefined, 4936, 5729, 2951, 1730, 1867, undefined, 1027, 5891, 9535, 3796,
        8706, undefined, 6174, 4625, 8475, 2955, 9802, undefined, 9025, 6471, 5369, 3192, 7053, undefined, 7265, 3807, 8088, 6741,
        9715, undefined, 8731, 4969, 2816, 7634, 5873, undefined, 4963, 2481, 6718, 1948, 8243, undefined, 3496, 9362, 6726, 6953,
        6327, undefined, 4019, 7057, 2198, 5806, 8059, undefined, 5124, 4985, 5648, 8402, 7032, undefined, 4296, 2546, 9859, 2862,
        5041, undefined, 6314, 3650, 8784, 8433, 9326, undefined, 5867
    ];

    let bubbleArr = [];
    let selectionArr = [];
    let insertionArr = [];
    let shellArr = [];
    let hoareArr = [];

    function init(arr, bool) {
        bubbleArr = bubbleSort(arr, bool);
        selectionArr = selectionSort(arr, bool);
        insertionArr = insertionSort(arr, bool);
        shellArr = shellSort(arr, bool);
        hoareArr = hoareSort(arr, bool);
    }

    function print() {
        console.log("Bubble: ");
        console.log(bubbleArr);

        console.log("Selection: ");
        console.log(selectionArr);

        console.log("Insertion: ");
        console.log(insertionArr);

        console.log("Shell: ");
        console.log(shellArr);

        console.log("Hoare: ");
        console.log(hoareArr);
    }


    console.log("DenseArray:");
    console.log(denseArray);

    console.log("SparseArray:");
    console.log(sparseArray);

    
    console.log("\nDenseArray sort:");
    console.log("Increasing:");
    init(denseArray, true);
    print();

    console.log("\nDecreasing:");
    init(denseArray, false);
    print();

    console.log("\SparseArray sort:");
    console.log("Increasing:");
    init(sparseArray, true);
    print();

    console.log("\nDecreasing:");
    init(sparseArray, false);
    print();

})();