function fibs(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i < 2) arr.push(i);
    else arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}
console.log(fibs(8));

function fibsRec(num) {
  return num < 2 ? num : [...(fibsRec(num - 1) + fibsRec(num - 2))];
}
console.log(fibsRec(8));
