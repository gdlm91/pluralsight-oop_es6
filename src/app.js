import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { FleetService } from './services/fleet.service.js';

import { FLEET } from './fleet.mock.js';

let fleetService = new FleetService();
fleetService.loadData(FLEET);

let car = fleetService.getCarByLicense('AT9900');
console.log(car)

let cars = fleetService.getCarsSortedByLicense();
console.log(cars);

let filteredCars = fleetService.filterCarsBymake('U');
console.log(filteredCars);