function mergeAndRemoveDuplicates() {
    // Get user inputs
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    // Convert comma-separated strings to arrays
    const array1 = input1.split(',').map(item => parseInt(item.trim()));
    const array2 = input2.split(',').map(item => parseInt(item.trim()));

    // Merge arrays and remove duplicates
    const mergedArray = mergeAndRemoveDuplicatesHelper(array1, array2);

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Merged and Unique Array: [${mergedArray.join(', ')}]</p>`;
}

function mergeAndRemoveDuplicatesHelper(array1, array2) {
    const mergedArray = array1.concat(array2);

    // Remove duplicates without using Set
    const uniqueArray = mergedArray.filter((item, index) => mergedArray.indexOf(item) === index);

    return uniqueArray;
}
