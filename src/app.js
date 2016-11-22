import $ from 'jquery';
import { FleetService } from './services/fleet.service.js';
import { BaseApplication } from './framework/base-application.js';

import { HomePage } from './pages/home.js';
import { CarsPage } from './pages/cars.js';
import { DronesPage } from './pages/drones.js';
import { MapPage } from './pages/map.js';

export class App extends BaseApplication {

    constructor() {
        super('Fleet Manager');

        /** Fetch Fleet */
        this.fleetService = new FleetService();
        this.fleetService.loadData();

        /** Routes */
        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Cars', new CarsPage());
        this.addRoute('Drones', new DronesPage());
        this.addRoute('Map', new MapPage());
    }

}

/** App Bootstraping */
export let application = new App();
application.show($('body'));
