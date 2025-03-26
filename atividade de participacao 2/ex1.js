class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    };

    plus(n1, n2){
        console.log("A soma resultante dos dois vetores é:", (this.x+n1), ",", (this.y+n2));
    }

    minus(n1, n2){
        console.log("A subtração resultante dos dois vetores é:", (this.x-n1), ",", (this.y-n2));
    }
}


const v1 = new Vec(10, 12);
v1.plus(3, 4);
v1.minus(4, 11);

const v2 = new Vec(90, 21);
v2.plus(10, 79);
v2.minus(90, 25);
