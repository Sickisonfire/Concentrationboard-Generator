document.getElementById('generate').addEventListener('click', createBoard);
const size = parseInt(document.getElementById('sizeinput').value);

//shuffle array funktion
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

//create the board
function createBoard() {
  //console.log(typeof size);
  //remove old board
  document.getElementById('boardtable').remove();

  //create table
  const table = document.createElement('table');
  table.id = 'boardtable';
  console.log(table);
  document.getElementById('board-container').appendChild(table);
  const size = parseInt(document.getElementById('sizeinput').value);
  //generate Array
  let arr = Array.from(Array(size).keys());

  //generate shuffledarray and add 1 to all
  let arrShuffled = shuffle(arr).map(x => x + 1);

  for (let i = 0; i < arrShuffled.length; i++) {
    let board;
    let td = document.createElement('td');
    td.innerText = arrShuffled[i];

    table.appendChild(td);

    document.getElementById('output').innerHTML = arrShuffled;
  }
  console.log(arrShuffled);
}
