//1.2.27
function PiMultiplier(x) {
    return function () {
        return Math.PI * x;
    };
}
console.log(PiMultiplier(4)());

//1.2.28
function TwoPI() {
    return PiMultiplier(2)();
}
function TwoThirdOfPI() {
    return PiMultiplier(2 / 3)();
}
function HalfOfPI() {
    return PiMultiplier(1 / 2)();
}
console.log(TwoPI());
console.log(TwoThirdOfPI());
console.log(HalfOfPI());