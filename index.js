function map(arr, callback) {
  const new_arr = [];
  for(let i = 0; i < arr.length; i++) {
    new_arr.push(callback(arr[i]));
  }
  return new_arr;
}

function reduce(arr, func, start) {
  let result = start || arr[0];
  for(let i = start ? 0 : 1; i < arr.length; i++) {
    result = func(arr[i], result);
  }
  return result;
}
