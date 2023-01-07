//Merge sort
//First the function for merging two already sorted arrays
//Take first element from first and second array
//Check which element is smaller,
//Add it to the finished array
//Remove it from the exploded array
//Do it again until both are empty
const testUno = [1, 3, 5, 7];
const testDos = [2, 4, 6, 8];
const merge = (arrayOne, arrayTwo, result = []) => {
  if (arrayOne.length === 0 && arrayTwo.length === 0) return result;
  let leftEl = arrayOne[0];
  let rightEl = arrayTwo[0];
  //If left element is smaller or the right one is undefined, push the left one
  if (leftEl < rightEl || rightEl === undefined) {
    result.push(leftEl);
    arrayOne.shift();
  } else if (rightEl < leftEl || leftEl === undefined) {
    result.push(rightEl);
    arrayTwo.shift();
  }
  return merge(arrayOne, arrayTwo, result);
};

console.log(merge(testUno, testDos));

const testTres = [2, 5, 7, 1, 3, 6, 4, 9, 8];

//Then  mergeSort function that splits up arrays until you have only one left
const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  //Split the array until its the length of one, I guess or two
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  //then sort and merge them together
  return merge(left, right);
};

console.log(mergeSort(testTres));
