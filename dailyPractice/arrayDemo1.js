const arr = [100, "Harsh", 68.50]
// for (var x of arr)//element
//     console.log(x);
// for (var x in arr)//indices
//     console.log(arr[x]);
arr.forEach(function (element, index, array) {//anaonymous function
    console.log(element + " index: " + index + " array: " + array);
});