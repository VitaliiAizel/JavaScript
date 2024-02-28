let leg1, leg2, hyp, angle1, angle2;
let transform = 180 / Math.PI;          //(* = rad -> grad) (/ = grad -> rad)

console.log("You can solve for the sides and acute angles of a right" + 
" triangle. To do this, enter the word 'triangle', after which in round" + 
" brackets write the value (for a correct result, enter only the correct " + 
"values) and the type of two data, including the following:");
console.log("'leg' and 'leg'");
console.log("'leg' and 'hypotenuse'");
console.log("'leg' and 'adjacent angle'");
console.log("'leg' and 'opposite angle'");
console.log("'hypotenuse' and 'angle'");
console.log("(the order of entering the arguments is not important)");
console.log('For example you can enter this: triangle(5,"hypotenuse",3,"leg");');

function triangle(arg1, type1, arg2, type2) {
    if (type1 == "leg" && type2 == "leg") {
        leg1 = arg1;
        leg2 = arg2;
        hyp = Math.sqrt(leg1 ** 2 + leg2 ** 2);
        angle1 = Math.atan(leg1 / leg2) * transform;
        angle2 = Math.atan(leg2 / leg1) * transform;
        if (arg1 <= 0.0 || arg2 <= 0.0) return error();
    } else if ((type1 == "leg" && type2 == "hypotenuse") || (type1 == "hypotenuse" && type2 == "leg")) {
        if (type1 == "hypotenuse") {
            leg1 = arg2;
            hyp = arg1;
        } else {
            leg1 = arg1;
            hyp = arg2;
        }
        leg2 = Math.sqrt(hyp ** 2 - leg1 ** 2);
        angle1 = Math.atan(leg1 / leg2) * transform;
        angle2 = Math.atan(leg2 / leg1) * transform;
        if (hyp <= leg1 || (arg1 <= 0.0 || arg2 <= 0.0)) return error();
    } else if ((type1 == "adjacent angle" && type2 == "leg") || (type1 == "leg" && type2 == "adjacent angle")) {
        if (type1 == "adjacent angle") {
            leg1 = arg2;
            angle1 = arg1;
        } else {
            leg1 = arg1;
            angle1 = arg2;
        }
        leg2 = leg1 * Math.tan(angle1 / transform);
        hyp = Math.sqrt(leg1 ** 2 + leg2 ** 2);
        angle2 = 90.0 - angle1;
        if (angle1 >= 90.0 || (arg1 <= 0.0 || arg2 <= 0.0)) return error();
    } else if ((type1 == "opposite angle" && type2 == "leg") || (type1 == "leg" && type2 == "opposite angle")) {
        if (type1 == "opposite angle") {
            leg1 = arg2;
            angle1 = arg1;
        } else {
            leg1 = arg1;
            angle1 = arg2;
        }
        leg2 = leg1 / Math.tan(angle1 / transform);
        hyp = Math.sqrt(leg1 ** 2 + leg2 ** 2);
        angle2 = 90.0 - angle1;
        if (angle1 >= 90.0 || (arg1 <= 0.0 || arg2 <= 0.0)) return error();
    } else if ((type1 == "hypotenuse" && type2 == "angle") || (type1 == "angle" && type2 == "hypotenuse")) {
        if (type1 == "hypotenuse") {
            hyp = arg1;
            angle1 = arg2;
        } else {
            hyp = arg2;
            angle1 = arg1;
        }
        angle2 = 90.0 - angle1;
        leg1 = hyp * Math.sin(angle1 / transform);
        leg2 = hyp * Math.cos(angle1 / transform);
        if (angle1 >= 90.0 || (arg1 <= 0.0 || arg2 <= 0.0)) return error();
    } else {
        return "Failed. Incorred type";
    }
    return display(leg1, leg2, hyp, angle1, angle2);
}

function display(leg1, leg2, hyp, angle1, angle2) {
        console.log("a: " + leg1);
        console.log("b: " + leg2);
        console.log("c: " + hyp);
        console.log("alpha: " + angle1);
        console.log("beta: " + angle2);
    return "Success";
}

function error() {
    return "Incorrect input (angle >= 90 or <= 0, zero or negative arguments of sides or hypotenuse >= leg)";
}
