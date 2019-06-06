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
//generate tds
function generateTd(element, array) {
  for (let i = 0; i < array.length; i++) {
    let td = document.createElement('td');
    td.innerText = array[i];

    element.appendChild(td);
  }
}

//create the board
function createBoard() {
  const size = parseInt(document.getElementById('sizeinput').value);

  //console.log(typeof size);
  //remove old board
  document.getElementById('boardtable').remove();

  //create table
  const table = document.createElement('table');
  table.id = 'boardtable';
  console.log(table);
  document.getElementById('board-container').appendChild(table);

  //generate Array
  let arr = Array.from(Array(size).keys());

  //generate shuffledarray and add 1 to all
  let arrShuffled = shuffle(arr).map(x => x + 1);
  let b = 0;
  let sqrt = Math.sqrt(arrShuffled.length);
  let e = sqrt;

  //generate rows
  for (let i = 0; i < sqrt; i++) {
    let tr = document.createElement('tr');
    const newArr = arrShuffled.slice(b, e);
    generateTd(tr, newArr);

    document.getElementById('boardtable').appendChild(tr);

    b = e;
    e = e + sqrt;
  }
  console.log(arrShuffled);
}
