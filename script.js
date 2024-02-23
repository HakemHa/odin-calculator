const input = document.querySelector("#input");
let inputStr = "";
let lastTyped = "";
const advBtn = document.querySelector('#advanced');
let advSet = 0;
const advTab = document.querySelector('#lower-body');
const mainTab = document.querySelector("#body");
const clrBtn = document.querySelector('#clear');
const backBtn = document.querySelector('#backspace');
let error = 0;
const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#two');
const btn3 = document.querySelector('#three');
const btn4 = document.querySelector('#four');
const btn5 = document.querySelector('#five');
const btn6 = document.querySelector('#six');
const btn7 = document.querySelector('#seven');
const btn8 = document.querySelector('#eight');
const btn9 = document.querySelector('#nine');
const sumBtn = document.querySelector('#plus');
const minBtn = document.querySelector('#minus');
const prodBtn = document.querySelector('#product');
const divBtn = document.querySelector('#division');
const dotBtn = document.querySelector('#dot');
let dotted = false;
const btn0 = document.querySelector('#zero');
const eqBtn = document.querySelector('#equal');
const expBtn = document.querySelector('#exp');
const logBtn = document.querySelector('#log');
const openBtn = document.querySelector('#open');
let opened = 0;
const closeBtn = document.querySelector('#close');
const ops = ['+', '-', '*', '/', '^', 'log', 'g'];
const nums = ['1','2','3','4','5','6','7','8','9','0'];
document.querySelectorAll('.btn').forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        if (error) {
            inputStr = "";
            lastTyped = "";
            error = 0;
            dotted = false;
            opened = 0;
            input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
        }
    });
});
clrBtn.addEventListener('click', ()=>{
    inputStr = "";
    lastTyped = "";
    error = 0;
    dotted = false;
    opened = 0;
    input.innerHTML = `<p id="eos">|</p>`; 
});
backBtn.addEventListener('click', (e)=>{
    if (lastTyped === '.') {
        dotted = false;
    }
    if (lastTyped === '(') {
        opened--;
    }
    if (lastTyped === ')') {
        opened++;
    }
    if (lastTyped === 'g') {
        inputStr = inputStr.slice(0, inputStr.length-2);
    }
    inputStr = inputStr.slice(0, inputStr.length-1);
    lastTyped = inputStr[inputStr.length-1];
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
btn1.addEventListener('click', ()=>{
    inputStr = inputStr + '1';
    lastTyped = '1';
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
btn2.addEventListener('click', ()=>{
    inputStr = inputStr + '2';
    lastTyped = '2';
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
btn3.addEventListener('click', ()=>{
    inputStr = inputStr + '3';
    lastTyped = '3';
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
btn4.addEventListener('click', ()=>{
    inputStr = inputStr + '4';
    lastTyped = '4';
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
btn5.addEventListener('click', ()=>{
    inputStr = inputStr + '5';
    lastTyped = '5';
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
btn6.addEventListener('click', ()=>{
    inputStr = inputStr + '6';
    lastTyped = '6';
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
btn7.addEventListener('click', ()=>{
    inputStr = inputStr + '7';
    lastTyped = '7';
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
btn8.addEventListener('click', ()=>{
    inputStr = inputStr + '8';
    lastTyped = '8';
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
btn9.addEventListener('click', ()=>{
    inputStr = inputStr + '9';
    lastTyped = '9';
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
btn0.addEventListener('click', ()=>{
    inputStr = inputStr + '0';
    lastTyped = '0';
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
sumBtn.addEventListener('click', ()=>{
    if (ops.includes(lastTyped)) {
        alert("Invalid Syntax");
        return;
    }
    inputStr = inputStr + '+';
    lastTyped = '+';
    dotted = false;
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
minBtn.addEventListener('click', ()=>{
    if (ops.includes(lastTyped)) {
        alert("Invalid Syntax");
        return;
    }
    inputStr = inputStr + '-';
    lastTyped = '-';
    dotted = false;
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
prodBtn.addEventListener('click', ()=>{
    if (ops.includes(lastTyped) || !lastTyped || lastTyped === '(') {
        alert("Invalid Syntax");
        return;
    }
    inputStr = inputStr + '*';
    lastTyped = '*';
    dotted = false;
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
divBtn.addEventListener('click', ()=>{
    if (ops.includes(lastTyped) || !lastTyped || lastTyped === '(') {
        alert("Invalid Syntax");
        return;
    }
    inputStr = inputStr + '/';
    lastTyped = '/';
    dotted = false;
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
expBtn.addEventListener('click', ()=>{
    if (ops.includes(lastTyped) || !lastTyped || lastTyped === '(') {
        alert("Invalid Syntax");
        return;
    }
    inputStr = inputStr + '^';
    lastTyped = '^';
    dotted = false;
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
logBtn.addEventListener('click', ()=>{
    if (ops.includes(lastTyped) || !lastTyped || lastTyped === '(') {
        alert("Invalid Syntax");
        return;
    }
    inputStr = inputStr + 'log';
    lastTyped = 'g';
    dotted = false;
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
openBtn.addEventListener('click', ()=>{
    if (!ops.includes(lastTyped)) {
        alert("Invalid Syntax");
        return;
    }
    opened += 1;
    inputStr = inputStr + '(';
    lastTyped = '(';
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
closeBtn.addEventListener('click', ()=>{
    if (opened === 0) {
        alert("Invalid Syntax");
        return;
    }
    opened -= 1;
    inputStr = inputStr + ')';
    lastTyped = ')';
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
dotBtn.addEventListener('click', ()=> {
    if (dotted) {
        alert("Invalid Syntax");
        return;
    }
    inputStr = inputStr + '.';
    lastTyped = '.';
    dotted = true;
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});
advBtn.addEventListener('click', ()=>{
    if (!advSet) {
        document.querySelector("#advanced span").style.animation = `swap 1s 1 linear forwards`;
        advTab.style.animation = `swipe 1s ease-in forwards`;
        mainTab.style.borderRadius = `0`;
        mainTab.style.transition = `border-radius 2s`;
        advSet = 1;
    }
    else {
        document.querySelector("#advanced span").style.animation = `swapBack 1s 1 linear forwards`;
        advTab.style.animation = `swipeBack 1s ease-in forwards`;
        mainTab.style.borderRadius = `0 0 12px 12px`;
        mainTab.style.transition = `border-radius 2s`;
        mainTab.style.tr
        advSet = 0;
    }
});
eqBtn.addEventListener('click', ()=>{
    inputStr = solveStr(inputStr);
    lastTyped = inpuStr[inputStr.length-1];
    dotted = inputStr.includes(".");
    error = 0;
    opened = 0;
    if (!parseFloat(inputStr) || inputStr === 'Infinity' || inputStr === '-Infinity') {
        error = 1;
    }
    alert(inputStr);
    input.innerHTML = `<p>${inputStr}</p><p id="eos">|</p>`;
});

document.onkeydown = (e) => {
    switch (e.key) {
        case '1':
            btn1.click();
            break;
        case '2':
            btn2.click();
            break;
        case '3':
            btn3.click();
            break;
        case '4':
            btn4.click();
            break;
        case '5':
            btn5.click();
            break;
        case '6':
            btn6.click();
            break;
        case '7':
            btn7.click();
            break;
        case '8':
            btn8.click();
            break;
        case '9':
            btn9.click();
            break;
        case '0':
            btn0.click();
            break;
        case ' ':
            advBtn.click();
            break;
        case 'Backspace':
            backBtn.click();
            break;
        case 'Escape':
            clrBtn.click();
            break;
        case '+':
            sumBtn.click();
            break;
        case '-':
            minBtn.click();
            break;
        case 'x':
            prodBtn.click();
            break;
        case '*':
            prodBtn.click()
            break;
        case '/':
            divBtn.click()
            break;
        case '(':
            if (advSet) {
                openBtn.click();
            }
            break;
        case ')':
            if (advSet) {
                closeBtn.click();
            }
            break;
        case '^':
            if (advSet) {
                expBtn.click();
            }
            break;
        case 'e':
            if (advSet) {
                expBtn.click();
            }
            break;
        case '_':
            if (advSet) {
                logBtn.click();
            }
            break;
        case 'l':
            if (advSet) {
                logBtn.click();
            }
            break;
        case 'Enter':
            eqBtn.click();
            break;
        case '.':
            dotBtn.click();
            break;
    }
}
    

function solveStr(str) {
    if (!str || opened !== 0 || ops.includes(str[str.length-1])) {
        alert('Invalid Expression');
        return str;
    }
    let expr = [];
    let i = 0;
    let sos = true;
    while (i < str.length) {
        if (sos) {
            if (str[i] === '-') {
                expr.push(0);
                expr.push('-');
                sos = false;
                i++;
            } else if (str[i] == '+') {
                expr.push(0);
                expr.push('+');
                sos = false;
                i++;
            } else if (str[i] === '(') {
                expr.push('(');
                i++;
            } else {
                let num = "";
                while (i < str.length && (nums.includes(str[i]) || str[i] === '.')) {
                    num += str[i];
                    sos = false;
                    i++;
                }
                expr.push(parseFloat(num));
            }
        } else {
            if (ops.includes(str[i])) {
                if (str[i] === 'l') {
                    expr.push('log')
                    i += 3;
                } else {
                    expr.push(str[i++]);
                }
            } else if (nums.includes(str[i]) || str[i] === '.') {
                let num = "";
                while (i < str.length && (nums.includes(str[i]) || str[i] === '.')) {
                    num += str[i];
                    sos = false;
                    i++;
                }
                expr.push(parseFloat(num));
            } else {
                expr.push(str[i++]);
                if (str[i] === '(') {
                    sos = true;
                }
            }
        }
    }
    const ans = solve(expr, 0)[0].toString();
    if (!parseFloat(ans) || ans === 'Infinity' || ans === '-Infinity') {
        return ans;
    }
    i = ans.toString().indexOf('.');
    if (i === -1) {
        return ans;
    } else {
        return ans.slice(0, Math.min(ans.length, i+4));
    }
}

function solve(expr, idx) {
    let nexpr = [];
    while (idx < expr.length && expr[idx] !== ')') {
        if (expr[idx] === '(') {
            const [sans, j] = solve(expr, idx+1);
            if (j === -1) {
                return [sans, j];
            }
            nexpr.push(sans);
            idx = j+1;
        } else {
            if (expr[idx] !== 'l') {
                nexpr.push(expr[idx++]);
            } else {
                nexpr.push('log');
                idx += 3;
            }
        }
    }
    expr = nexpr;
    nexpr = [];
    let i = 0;
    while (i < expr.length) {
        const el = expr[i];
        if (el === 'log') {
            if (expr[i+1] <= 0) {
                return ["LOG BY NEG", -1];
            }
            nexpr.push(Math.log(nexpr.pop()) / Math.log(expr[++i]));
        } else if (el === '^') {
            nexpr.push(Math.pow(nexpr.pop(), expr[++i]));
        } else {
            nexpr.push(el);
        }
        i++;
    }
    expr = nexpr;
    nexpr = [];
    i = 0;
    while (i < expr.length) {
        const el = expr[i];
        if (el === '*') {
            nexpr.push(nexpr.pop() * expr[++i]);
        } else if (el === '/') {
            if (expr[i+1] === 0) {
                return ["DIV BY ZERO", -1];
            }
            nexpr.push(nexpr.pop() / expr[++i]);
        } else {
            nexpr.push(el);
        }
        i++;
    }
    expr = nexpr;
    nexpr = [];
    i = 0;
    while (i < expr.length) {
        const el = expr[i];
        if (el === '+') {
            nexpr.push(nexpr.pop() + expr[++i]);
        } else if (el === '-') {
            nexpr.push(nexpr.pop() - expr[++i]);
        } else {
            nexpr.push(el);
        }
        i++;
    }
    expr = nexpr;
    if (expr.length !== 1) {
        return ["WRONG SIZE", -1];
    }
    return [expr[0], idx];
}
