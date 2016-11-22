import { Car } from '../classes/car.js';
import { Drone } from '../classes/drone.js';
import { ErrorLog } from './errorLog.js';

import { FLEET } from '../fleet.mock.js';

export class FleetService {
    
    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    getCarByLicense(license) {
        return this.cars.find(function(car) {
            return car.license === license;
        })
    }

    getCarsSortedByLicense() {
        return this.cars.sort(function(car1, car2) {
            if(car1.license < car2.license)
                return -1
            if(car1.license > car2.license)
                return 1;
            return 0;
        })
    }

    filterCarsBymake(filter) {
        return this.cars.filter(car => car.make.indexOf(filter) >= 0);
    }

    loadData() {
        for(let data of FLEET) {
            switch(data.type) {
                case 'car':
                    if(this.validateCarData(data)) {
                        let car = this.loadCar(data);
                        this.cars.push(car);
                    } else {
                        this.errors.push(new ErrorLog("Invalid Car Data", data));
                    }
                    break;
                case 'drone':
                    let drone = this.loadDrone(data);
                    this.drones.push(drone);
                    break;
                default:
                    let e = new ErrorLog("Invalid Vehicle type", data);
                    this.errors.push(e);
                    break;
            }
        }
    }

    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        } catch(e) {
            this.errors.push(new ErrorLog("Error Loading Car.", car));
        }
        return null;
    }

    validateCarData(car) {
        let requiredProp = ['license', 'model', 'miles', 'make'];
        let hasErrors = false;

        for(let field of requiredProp) {
            if(!car[field]) {
                this.errors.push(new ErrorLog(`Invalid Field ${field}`, car));
                hasErrors = true;
            }
        }

        if(Number.isNaN(Number.parseFloat(car.miles))) {
            this.errors.push(new ErrorLog("Invalid Milage", car));
            hasErrors = true;
        }

        return !hasErrors;
    }

    loadDrone(drone) {
        try {
            let d = new Drone(drone.license, drone.model, drone.latLong);
            d.airTimeHours = drone.airTimeHours;
            d.base = drone.base;
            return d;
        } catch(e) {
            this.errors.push(new ErrorLog("error Loading Drone.", drone));
        }
        return null;
    }

}