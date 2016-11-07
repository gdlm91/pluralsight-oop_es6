import { Vehicle } from './vehicle.js';
import { Car } from './car.js';
import { Drone } from './drone.js';

let c = new Car(123);

console.log(c instanceof Car); //true
console.log(c instanceof Vehicle); //true
console.log(c instanceof Object); //true

console.log(`c LN is: ${c.licenseNumber}`);
console.log(`c GPS is: ${c.gpsEnabled}`);

c.start();
c.stop(); //Inheriting Method

Car.getCompanyName(); //Inheriting Static Method