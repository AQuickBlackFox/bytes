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

function HalfAdder(A, B) {
    S = Xor(A, B);
    C = And(A, B);
    return [S, C];
}

function FullAdder(A, B, C) {
    a0 = Xor(A, B);
    S = Xor(C, a0);
    c0 = And(C, a0);
    a1 = And(A, B);
    c1 = Or(c0, a1);
    return [S, c1];
}

var x = (Not(one)).toString(16);
var y = (Not(zero)).toString(16);
console.log(x);
console.log(y);
