import { Vehicle } from './vehicle.js';

export class Car extends Vehicle {
    constructor(licenseNumber) {
        super(licenseNumber); //required to call parent constructor, even if Vehicle doesn't have an explicit constructor
        console.log("Constructing Car");
        this.gpsEnabled = false; //Overwriting Property
    }

    start() { //Overwriting method
        super.start(); //Can be before
        console.log("starting Car...");
        super.start(); //and after
    }

    static getCompanyName() { //Overwriting Static method
        super.getCompanyName();
        console.log("Car Company Name");
    }
}