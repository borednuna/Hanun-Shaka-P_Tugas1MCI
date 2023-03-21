function dim(arr) {
  if (arr instanceof Array) {
    return [arr.length].concat(dim(arr[0]));
  } else {
    return [];
  }
}

let input_array = 
[
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
]

const argwhere = (arr) => {
  let result = [];
  let size = dim(arr);

  for (let i = 0; i < size[0]; i++) {
    for (let j = 0; j < size[1]; j++) {
      for (let k = 0; k < size[2]; k++) {
        if (arr[i][j][k] != 0) {
          result.push([i, j, k]);
        }
      }
    }
  }
  return result;
};

console.log(argwhere(input_array));
