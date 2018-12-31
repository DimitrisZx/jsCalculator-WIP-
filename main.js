
// class Operation {
//   constructor(type) {
//     this.type;
//   }

//   static addition() {
//     const num1 = parseInt(display.value);
//     console.log(num1)
//     display.value = 0;
//     memory.numVal = num1
//     console.log(memory);

//   }
//   static subtraction() {

//   }
//   static multiplication() {

//   }
//   static division() {

//   }
//   static clear() {

//   }
// }

class Memory {
  constructor() {
    this.numbers = [];
    this.operationType = '';
  }
}

const memory = new Memory;

// Events..
const display = document.querySelector('#input');
display.value = 0;
const add = document.querySelector("#add").addEventListener("click", (e) => { e.preventDefault; memory.operationType = 'addition'; console.log(memory) });
const subtract = document.querySelector("#sub").addEventListener("click", (e) => { e.preventDefault; memory.operationType = 'subtraction' });
const multiply = document.querySelector("#mult").addEventListener("click", (e) => { e.preventDefault; memory.operationType = 'multiplication' });
const divide = document.querySelector("#divide").addEventListener("click", (e) => { e.preventDefault; memory.operationType = 'division' });
const equal = document.querySelector("#equals").addEventListener("click", (e) => { e.preventDefault; getResult() });
const point = document.querySelector('#point').addEventListener('click', () => { if (display.value !== '0') display.value += '.' })

const clear = document.querySelector("#clear").addEventListener("click", (e) => { display.value = 0; memory.numbers = ''; memory.operationType = ''; }); // Clear display and Memory
const logMem = document.querySelector("#logMem").addEventListener('click', (e) => { e.preventDefault(); console.log(`Numbers: ${memory.numbers} | OpType: ${memory.operationType}`) })

const numInputBtns = document.querySelectorAll('.btn-num').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault;
    if (display.value === '0') display.value = '';
    display.value += btn.textContent;
    memory.numbers.push(btn.textContent);
    memory.numbers.reduce((acc, curr) => acc + curr)
    console.log(memory);
  });
});

function getResult() {
  switch (memory.operationType) {
    case 'addition':
      const result = parseFloat(memory.numVal1) + parseFloat(memory.numVal2);
      display.value = result;
      break;
    case 'subtraction':
      break;
    case 'multiplication':
      break;
    case 'division':
      break;
  }
}



