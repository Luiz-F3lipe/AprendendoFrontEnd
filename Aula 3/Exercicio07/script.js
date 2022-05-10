const InsertText = document.getElementById("text");

const getRandom = () => Math.floor(Math.random() * 100 + 1);


let array = []

console.log(array);

for (let i = 0; i < 10; i++) {
  array.push(getRandom());
}

InsertText.innerText = array.sort();