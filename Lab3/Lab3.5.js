//1.2.29
function Painter(color) {
    return function(Obj) {
        if (Obj.type) {
            console.log(`Object color: ${color}, type: ${Obj.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

//1.2.30
function PaintBlue(Obj) {
    Painter('blue')(Obj);
}
function PaintRed(Obj) {
    Painter('red')(Obj);
}
function PaintYellow(Obj) {
    Painter('yellow')(Obj);
}

//1.2.31
let Obj1 = {
    maxSpeed: 280,
    type: 'Sportcar',
    color: 'magenta'
};
let Obj2 = {
    type: 'Truck',
    avgSpeed: 90,
    loadCapacity: 2400
};
let Obj3 = {
    maxSpeed: 180,
    color: 'purple',
    isCar: true
};

PaintBlue(Obj1);
PaintRed(Obj2);
PaintYellow(Obj3);
