export class Vehicle {
    constructor(licenseNumber) {
        console.log(`Constructing Vehicle withh LN: ${licenseNumber}`);
        this.licenseNumber = licenseNumber;
        this.gpsEnabled = true; //Inheriting Poperty
    }

    start() {
        console.log("starting Vehicle...");
    }

    static getCompanyName() {
        console.log("Vechile Company Name");
    }

    stop() {
        console.log("stoping Vehicle...");
    }
}