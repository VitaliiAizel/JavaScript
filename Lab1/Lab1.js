let leg1, leg2, hyp, angle1, angle2;
let transform = 180 / Math.PI;          //(* = rad -> grad) (/ = grad -> rad)

function triangle(arg1, type1, arg2, type2) {
    if (type1 == "leg" && type2 == "leg") {
        leg1 = arg1;
        leg2 = arg2;
        hyp = Math.sqrt(leg1 ** 2 + leg2 ** 2);
        angle1 = Math.atan(leg1 / leg2) * transform;
        angle2 = Math.atan(leg2 / leg1) * transform;
        if (arg1 <= 0 || arg2 <= 0) return error();
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
        if (hyp <= leg1 || (arg1 <= 0 || arg2 <= 0)) return error();
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
        angle2 = 90 - angle1;
        if (angle1 >= 90 || (arg1 <= 0 || arg2 <= 0)) return error();
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
        angle2 = 90 - angle1;
        if (angle1 >= 90 || (arg1 <= 0 || arg2 <= 0)) return error();
    } else if ((type1 == "hypotenuse" && type2 == "angle") || (type1 == "angle" && type2 == "hypotenuse")) {
        if (type1 == "hypotenuse") {
            hyp = arg1;
            angle1 = arg2;
        } else {
            hyp = arg2;
            angle1 = arg1;
        }
        angle2 = 90 - angle1;
        leg1 = hyp * Math.sin(angle1 / transform);
        leg2 = hyp * Math.cos(angle1 / transform);
        if (angle1 >= 90 || (arg1 <= 0 || arg2 <= 0)) return error();
    } else {
        return console.log("failed");
    }
    return display(leg1, leg2, hyp, angle1, angle2);
}

function display(leg1, leg2, hyp, angle1, angle2) {
    console.log(
        "a: " + leg1.toFixed(1) + "\n" +
        "b: " + leg2.toFixed(1) + "\n" +
        "c: " + hyp.toFixed(1) + "\n" +
        "alpha: " + angle1.toFixed(1) + "\n" +
        "beta: " + angle2.toFixed(1) + "\n" +
        "success"
    );
}

function error() {
    console.log("Uncorrect input (angle >= 90, zero or negative)");
}

triangle(3, "leg", 3, "leg");
triangle(5, "hypotenuse", 3, "leg");

triangle(6, "leg", 60, "adjacent angle");
triangle(30, "opposite angle", 40, "leg");
triangle(90, "opposite angle", 20, "leg");

triangle(6, "hypotenuse", 30, "angle");
