//1.2.12
class Square {
    //1.2.13
    constructor(a) {
        this.a = a;
    }

    //1.2.14
    static help() {
        console.log("A square is a geometric figure with four equal sides and four right angles (90 degrees each)");
    }

    //1.2.15
    length() {
        console.log("The sum of all four sides is " + this.a * 4);
    }

    square() {
        console.log("The area of the figure is " + this.a ** 2);
    }

    info() {
        Square.help();
        console.log("All sides have " + this.a + " cm lenght each");
        this.length();
        this.square();
    }
}

//1.2.16
class Rectangle extends Square {
    //1.2.17
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("A rectangle is a geometric figure with four sides, where opposite sides are equal and all angles have right angles (90 degrees each)");
    }

    length() {
        console.log("The sum of all four sides is " + (this.a * 2 + this.b * 2));
    }

    square() {
        console.log("The area of the figure is " + this.a * this.b);
    }

    info() {
        Rectangle.help();
        console.log("Two opposite sides have " + this.a + " cm lenght each. Another two opposite sides have " + this.b + " cm lenght each");
        this.length();
        this.square();
    }
}

//1.2.18
class Rhombus extends Square {
    //1.2.19
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
        if (beta > 90 || alpha < 90 || alpha + beta != 180) throw new Error("Invalid data (alpha > 90, beta < 90, swap them or alpha + beta != 180)");
    }

    //1.2.22
    get a() {
        console.log('get side length:');
        return this._a;
    }
    set a(newSide) {
        console.log("set side length " + newSide + " cm");
        this._a = newSide;
    }


    get alpha() {
        console.log('get obtuses angle:');
        return this._alpha;
    }
    set alpha(newAngle) {
        console.log('set obtuses angle ' + newAngle + " degrees");
        this._alpha = newAngle;
    }

    get beta() {
        console.log('get acutes angle:');
        return this._beta;
    }
    set beta(newAngle) {
        console.log('set acutes angle ' + newAngle + " degrees");
        this._beta = newAngle;
    }

    static help() {
        console.log("A rhombus is a geometric figure where all sides and opposite angles are equal. The sum of adjacent angles are 180 degrees");
    }

    length() {
        super.length();
    }

    square() {
        console.log("The area of the figure is " + (this.a ** 2 * Math.sin(this.alpha * Math.PI / 180)).toFixed(4));
    }

    info() {
        Rhombus.help();
        console.log("All sides have " + this.a + " cm lenght each");
        this.length();
        this.square();
    }
}

//1.2.20
class Parallelogram extends Rectangle {
    //1.2.21
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
        if (beta > 90 || alpha < 90 || alpha + beta != 180) throw new Error("Invalid data (alpha > 90, beta < 90, swap them or alpha + beta != 180)");
    }

    static help() {
        console.log("A parallelogram is a figure where opposite sides are parallel and equal. Opposite angles are equal too");
    }

    length() {
        super.length();
    }

    square() {
        console.log("The area of the figure is " + (this.a * this.b * Math.sin(this.alpha * Math.PI / 180)).toFixed(4));
    }

    info() {
        Parallelogram.help();
        console.log("Two opposite sides have " + this.a + " cm lenght each. Another two opposite sides have " + this.b + " cm lenght each");
        this.length();
        this.square();
    }
}

//1.2.23
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

//1.2.24
let Kvadrat = new Square(5);
let Prjamokutnyk = new Rectangle(10, 20);
let Romb = new Rhombus(7, 150, 30);
let Paralelohram = new Parallelogram(5, 12, 150, 30);

Kvadrat.info();
Prjamokutnyk.info();
Romb.info();
Paralelohram.info();

//1.2.25
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

//1.2.26
const { a, b, c } = Triangular();
console.log(a, b, c);


const triangle1 = Triangular();
console.log(triangle1);

const triangle2 = Triangular(6, 8, 10);
console.log(triangle2);