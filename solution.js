function mutation(arr) {
  let flag = true;
  arr.map((el) => el.toLowerCase());
  for (let i = 0; i < arr[0].length; ++i) {
    const character = arr[0][i];
    if (i < arr[1].length && arr[1].indexOf(character) === -1) {
      flag = false;
    }
  }
  return flag;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
