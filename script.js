// About Array.flat()

// this is mainly used to take out the nested array values and arranges it in the parent array.

let arr = [1, 2, 3, [4, 5, [6, 7]], [8, 9, 10], 11, 12]; //this is an 3d array

// console.log(num.flat(1)); // this will provide the output as [1,2,3,4,5,[6,7],8,9,10,11,12]
// console.log(num.flat(2 ));

let flatArray = (arr, depth) => {
  if (depth === 0) {
    return arr;
  }

  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      temp.push(...flatArray(arr[i], depth - 1));
    } else {
      temp.push(arr[i]);
    }
  }
  return temp;
};

flatArray(arr, 1);

//closures: A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. For example:

let clouser = () => {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
};

let c = clouser();
console.log(c());
console.log(c());
console.log(c());

// set

let s = new Set([1, 4, 4, 3, 3, 2, 2, 6, 6]);

s.add(33);
console.log(s);

function expo(a) {
  console.log(a ** 2);
}

expo(2);

//merging two sorted arrays without using extra memory

let arr1 = [1, 2, 8, 4, 5, 0, 0, 0];
let arr2 = [7, 6, 3];

function mergeSortedArrays(arr1, arr2) {
  let m = arr1.length,
    n = arr2.length;

  for (let i = 0; i < n; i++) {
    arr1.push(0);
  }

  let i = m - 1,
    j = n - 1,
    ptr = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (arr1[i] > arr2[j]) {
      arr1[ptr--] = arr1[i--];
    } else {
      arr1[ptr--] = arr2[j--];
    }
  }
  console.log(arr1);
  while (j >= 0) {
    arr1[ptr--] = arr2[j--];
  }
}

mergeSortedArrays(arr1, arr2);
