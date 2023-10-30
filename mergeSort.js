function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const leftArr = arr.splice(0, arr.length / 2);
  return merge(mergeSort(leftArr), mergeSort(arr));
}

function merge(leftArr, rightArr) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (leftArr.length > i && rightArr.length > j) {
    if (leftArr[i] < rightArr[j]) {
      merged.push(leftArr[i]);
      i++;
    } else {
      merged.push(rightArr[j]);
      j++;
    }
  }

  while (i < leftArr.length) {
    merged.push(leftArr[i]);
    i++;
  }
  while (j < rightArr.length) {
    merged.push(rightArr[j]);
    j++;
  }
  return merged;
}

console.log(mergeSort([8, 2, 6, 5, 7, 1, 4, 3]));
