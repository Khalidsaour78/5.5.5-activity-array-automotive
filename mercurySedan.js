//Including vehicle class as a module

const VehicleModule = require("./vehicleBaseClass");

//writing derived car class

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passengers < this.maximumPassengers) {
            this.passengers += num;
            console.log(`${num} passenger(s) loaded. Total passengers: ${this.passengers}`);
        } else {
            console.log("Maximum passengers reached.");
        }
    }

    start() {
        if (this.fuel > 0) {
            super.start();
            console.log("Engine started...");
        } else {
            console.log("Engine cannot start. Out of fuel.");
        }
    }

    scheduleService(mileage) {
        if (this.mileage > 30000) {
            this.scheduleService = true;
            console.log("Scheduled for maintenance.");
        } else {
            console.log("No maintenance required at this time.");
        }
    }
}

// Creating Instances and Testing Them
let v = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make);

let car1 = new Car("Mercury", "Sedan", "2024", "Silver", 25000);
car1.loadPassenger(3);
car1.start();
car1.accelerate();
car1.scheduleService(35000);

let car2 = new Car("Mercury", "Sedan", "2024", "Blue", 28000);
car2.loadPassenger(5);
car2.start();
car2.decelerate();
car2.scheduleService(25000);
