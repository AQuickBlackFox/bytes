var a = [1,1,1,1, 2,2,2,2, 3,3,3,3, 4,4,4,4]
var b = [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1]

function Mul(x, y){
    return x * y;
}

function Addx4(x, y){
    return [x[0]+y[0], x[1]+y[1], x[2]+y[2], x[3]+y[3]];
}

function MatMulTile(A, B){
    var BusTop1 = [B[0],  B[1],  B[2],  B[3]];
    var BusTop2 = [B[4],  B[5],  B[6],  B[7]];
    var BusTop3 = [B[8],  B[9],  B[10], B[11]];
    var BusTop4 = [B[12], B[13], B[14], B[15]];
    var Left1 = A[0];
    var Left2 = A[1];
    var Left3 = A[2];
    var Left4 = A[3];
    var c11 = A[0] * BusTop1[0];
    var c12 = A[0] * BusTop1[1];
    var c13 = A[0] * BusTop1[2];
    var c14 = A[0] * BusTop1[3];

    var c21 = A[1] * BusTop2[0];
    var c22 = A[1] * BusTop2[1];
    var c23 = A[1] * BusTop2[2];
    var c24 = A[1] * BusTop2[3];

    var c31 = A[2] * BusTop3[0];
    var c32 = A[2] * BusTop3[1];
    var c33 = A[2] * BusTop3[2];
    var c34 = A[2] * BusTop3[3];

    var c41 = A[3] * BusTop4[0];
    var c42 = A[3] * BusTop4[1];
    var c43 = A[3] * BusTop4[2];
    var c44 = A[3] * BusTop4[3];
    return [Addx4(Addx4([c11,c12,c13,c14],[c21,c22,c23,c24]), Addx4([c31,c32,c33,c34],[c41,c42,c43,c44]))];
}

var z = [MatMulTile([a[0], a[1], a[2], a[3]],b), 
        MatMulTile([a[4], a[5], a[6], a[7]],b),
        MatMulTile([a[8], a[9], a[10], a[11]],b),
        MatMulTile([a[12], a[13], a[14], a[15]],b)];

console.log(z);
