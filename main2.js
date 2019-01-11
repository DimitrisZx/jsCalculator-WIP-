class Events {
    static inputNum(e) {
        if ($input.value === '0') $input.value = '';
        e.preventDefault;
        $input.value += e.target.textContent;
    }
    static clearInput(e) {
        e.preventDefault;
        $input.value = '0';
        $output.value = '0';
        memory.operations = '0';
    }
    static addPoint(e) {
        e.preventDefault;
        $input.value += '.'
    }
    static logMemory(e) {
        e.preventDefault;
        console.log(memory);
    }
    static addOperation(type) {
        let sign;
        const arr = ['+', '-', 'x', '/'];
        switch (type) {
            case 'add':
                sign = ' + ';
                break;
            case 'sub':
                sign = ' - ';
                break;
            case 'mul':
                sign = ' * ';
                break;
            case 'div':
                sign = ' / ';
                break;
        }

        if (parseFloat($output.value) !== 0) {
            $input.value = $output.value;
            $output.value = 0;
        }
        // Add the operation sign if none present, else change the already existing
        if ($input.value !== '' && !(arr.includes($input.value.charAt($input.value.length - 2)))) {
            $input.value += sign;

        } else if ((arr.includes($input.value.charAt($input.value.length - 2)))) {
            const newInput = $input.value.slice(0, $input.value.length - 3);
            console.log(newInput)
            $input.value = newInput + sign;
        }
    }
    static equals() {
        const expression = $input.value;
        if (!isNaN($input.value.charAt($input.value.length - 1))) {

            const result = math.eval(expression);
            $output.value = result;
        }

    }
    static changeSign() {
        // Implement change sign
        console.log('WIP');
    }
}

const memory = {
    operations: '',
};

const $input = document.getElementById('input');
const $output = document.getElementById('output');
$input.value = $output.value = 0;
const $equalsBtn = document.getElementById('equals').addEventListener('click', e => { e.preventDefault; Events.equals() });
const $clearBtn = document.getElementById('clear').addEventListener('click', Events.clearInput);
const $pointBtn = document.getElementById('point').addEventListener('click', Events.addPoint);
// const $logMem = document.getElementById('logMem').addEventListener('click', Events.logMemory);
const $negPos = document.getElementById('negPos').addEventListener('click', Events.changeSign);

const $addBtn = document.getElementById('add').addEventListener('click', e => { e.preventDefault; Events.addOperation('add') });
const $subBtn = document.getElementById('sub').addEventListener('click', e => { e.preventDefault; Events.addOperation('sub') });
const $mulBtn = document.getElementById('mult').addEventListener('click', e => { e.preventDefault; Events.addOperation('mul') });
const $divBtn = document.getElementById('divide').addEventListener('click', e => { e.preventDefault; Events.addOperation('div') });

const $numBtns = document.querySelectorAll('.btn-num').forEach(btn => {
    btn.addEventListener('click', Events.inputNum);
})


// To do:
// stop equals from functioning if the input does not end in a number e.g: "23 + 3 - " DONE