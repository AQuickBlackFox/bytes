var msg = 'Hello World';
console.log(msg);

var one = 0x1;
var zero = 0x0;

function Xor(A, B) {
    return A ^ B;
}

function Or(A, B) {
    return A | B;
}

function And(A, B) {
    return A & B;
}

function Not(A) {
    if(A == zero){ return one;  }
    if(A == one) { return zero; }
}

function Adder1Bit(A, B) {
    S = Xor(A, B);
    C = And(A, B);
    return [S, C];
}


var x = (Not(one)).toString(16);
var y = (Not(zero)).toString(16);
console.log(x);
console.log(y);
console.log(Adder1Bit(one,one).toString(16));