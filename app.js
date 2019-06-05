document.getElementById('generate').addEventListener('click', createArray);

const shuffle = array => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
function createArray() {
  let size = parseInt(document.getElementById('sizeinput').value);
  //console.log(typeof size);
  //generate Array
  let arr = Array.from(Array(size).keys());

  let arrShuffled = shuffle(arr).map(x => x + 1);

  document.getElementById('output').innerHTML = arrShuffled;
  console.log(arrShuffled);
}
