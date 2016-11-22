import $ from 'jquery';

import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { FleetService } from './services/fleet.service.js';

import { Button } from './ui/button.js';
import { Image } from './ui/image.js';
import { TitleBar } from './ui/title-bar.js';
import { DataTable } from './ui/data-table.js';
import { GoogleMap } from './ui/google-map.js'; 

let fleetService = new FleetService();
fleetService.loadData();

/** Button Class */
let b = new Button('Click me');
b.appendToElement($('body'));

/** Image Class */
let i = new Image('../images/drone.jpg');
i.appendToElement($('body'));

/** TitleBar Class */
let tb = new TitleBar("Our Aplication");
tb.addLink('Home', '');
tb.addLink('Cars', '');
tb.addLink('Drones', '');
tb.addLink('Map', '');
tb.appendToElement($('body'));

/** DataTable CLass */
let headers = ['License', 'Make', 'Model', 'Miles'];
let dt = new DataTable(headers, fleetService.cars);
dt.appendToElement($('body'));

/** GoogleMap Class */
let centerOfMap = {lat: 40.783661, lng: -73.965883};
let map = new GoogleMap(centerOfMap, fleetService.drones);
map.appendToElement($('body'));