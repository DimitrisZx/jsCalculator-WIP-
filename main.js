class Memory {
  constructor() {
    this.numbers = [];
    this.operationType = '';
    this.calcArr = [];
    this.result = 0;
  }
}

let memory = new Memory;

// Events..
const display = document.querySelector('#input');
display.value = 0;
const add = document.querySelector("#add").addEventListener("click", (e) => {
  e.preventDefault;
  memory.operationType = 'addition';
  memory.calcArr.push(memory.numbers[0]);
  memory.numbers = [];
  display.value = '0';

});
const subtract = document.querySelector("#sub").addEventListener("click", (e) => { e.preventDefault; memory.operationType = 'subtraction' });
const multiply = document.querySelector("#mult").addEventListener("click", (e) => { e.preventDefault; memory.operationType = 'multiplication' });
const divide = document.querySelector("#divide").addEventListener("click", (e) => { e.preventDefault; memory.operationType = 'division' });
const equal = document.querySelector("#equals").addEventListener("click", (e) => {
  e.preventDefault;
  getResult()
});
const point = document.querySelector('#point').addEventListener('click', (e) => {
  e.preventDefault;
  if (display.value !== '0');
  display.value += '.';
  memory.numbers.push('.');
  memory.result += memory.calcArr.reduce((acc, curr) => acc + curr);
})

const clear = document.querySelector("#clear").addEventListener("click", (e) => { display.value = 0; memory.numbers = []; memory.operationType = ''; memory.calcArr = []; }); // Clear display and Memory
const logMem = document.querySelector("#logMem").addEventListener('click', (e) => { e.preventDefault(); console.log(`Numbers: ${memory.numbers} CalcArr: ${memory.calcArr}| OpType: ${memory.operationType}`) })

const numInputBtns = document.querySelectorAll('.btn-num').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault;
    if (display.value === '0') display.value = '';
    display.value += btn.textContent;
    memory.numbers.push(btn.textContent);
    const number = memory.numbers.join('');
    memory.numbers = [];
    memory.numbers.push(number)



  });
});

function getResult() {
  switch (memory.operationType) {
    case 'addition':
      memory.calcArr.push(memory.numbers);
      let result = memory.calcArr.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr));
      memory.numbers = [];
      console.log(memory.calcArr)
      memory.numbers.push(result)
      memory.calcArr = [];
      display.value = result;
      console.log(`Numbers: ${memory.numbers} CalcArr: ${memory.calcArr}| OpType: ${memory.operationType}`)
      console.log(result);
      break;
    case 'subtraction':
      break;
    case 'multiplication':
      break;
    case 'division':
      break;
  }
}



