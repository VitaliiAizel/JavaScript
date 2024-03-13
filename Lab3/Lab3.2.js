//1.2.7
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;    
}

//1.2.8
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

//1.2.9
Truck.prototype.trip = function() {
    if(!this.driver) console.log("No driver assigned");
    else {
        let message = "Driver " + this.driver.name;
        message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
        message += " and has " + this.driver.experience + " years of experience";

        console.log(message);
    }
}

//1.2.10
let Truck1 = new Truck('Blue', 6000, 55, 'Ford', 'F-150');
Truck1.AssignDriver('John Doe', true, 10);
Truck1.trip();

let Truck2 = new Truck('Gray', 5500, 65, 'Ford', 'F-140');
Truck2.AssignDriver('Tom Abe', false, 6);
Truck2.trip();