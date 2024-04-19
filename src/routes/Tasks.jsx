// first task

function exchangeIndices(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr.join('');
}

const inputArray = [1, 2, 3, 4, 2, 3];
const exchangedArray = exchangeIndices(inputArray);
console.log(exchangedArray); 


//second task 
function maxPositiveDifference(arr) {
    let maxDiff = 0;
    let minSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > minSoFar && arr[i] - minSoFar > maxDiff) {
            maxDiff = arr[i] - minSoFar;
        } else if (arr[i] < minSoFar) {
            minSoFar = arr[i];
        }
    }

    return maxDiff;
}

s
console.log(maxPositiveDifference([8, 2, 5, 6, 1, 4]));
console.log(maxPositiveDifference([12, 10, 8, 5, 4])); 
console.log(maxPositiveDifference([9, 35, 5, 17, 1, 3])); 


// third task
function canObtainByRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const concatenatedStr = str1 + str1;
    return concatenatedStr.includes(str2);
}

console.log(canObtainByRotation("abc", "cab"));
console.log(canObtainByRotation("abc", "bca")); 
