//1.2.3
let car1 = new Object();

car1.color = "magenta";
car1.maxSpeed = 200;
car1.driver = {
    name: "John Smith",
    category: "C",
    personal_limitations: "No driving at night"
};
car1.tuning = true;
car1.number_of_accidents = 0;
console.log(car1);

//1.2.4
let car2 = {
    color: "cyan",
    maxSpeed: 240,
    driver: {
        name: "Michael Brown",
        category: "B",
        personal_limitations: null      //тотально обезбашений
    },
    tuning: false,
    number_of_acc: 2
};

//1.2.5
car1.drive = function(){
    console.log("I am not driving at night");
}
car1.drive();

//1.2.6
car2.drive = function(){
    console.log("I can driving anytime");
}
car2.drive();