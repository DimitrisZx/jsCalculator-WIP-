class Events {
    static inputNum(e) {
        e.preventDefault;
        $input.value += e.target.textContent;
    }
    static clearInput(e) {
        e.preventDefault;
        $input.value = '0';
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
        if ($input.value !== '') {
            switch (type) {
                case 'add':
                    sign = ' + ';
                    break;
                case 'sub':
                    sign = ' - ';
                    break;
                case 'mul':
                    sign = ' x ';
                    break;
                case 'div':
                    sign = ' / ';
                    break;
            }
            $input.value += sign;
        }
    }
}

const memory = {
    operations: ''
};

const $input = document.getElementById('input');
const $equalsBtn = document.getElementById('equals');
const $clearBtn = document.getElementById('clear').addEventListener('click', Events.clearInput);
const $pointBtn = document.getElementById('point').addEventListener('click', Events.addPoint);
const $logMem = document.getElementById('logMem').addEventListener('click', Events.logMemory);

const $addBtn = document.getElementById('add').addEventListener('click', e => { e.preventDefault; Events.addOperation('add') });
const $subBtn = document.getElementById('sub').addEventListener('click', e => { e.preventDefault; Events.addOperation('sub') });
const $mulBtn = document.getElementById('mult').addEventListener('click', e => { e.preventDefault; Events.addOperation('mul') });
const $divBtn = document.getElementById('divide').addEventListener('click', e => { e.preventDefault; Events.addOperation('div') });

const $numBtns = document.querySelectorAll('.btn-num').forEach(btn => {
    btn.addEventListener('click', Events.inputNum);
})
