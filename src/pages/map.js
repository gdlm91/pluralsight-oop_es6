import { BasePage } from '../framework/base-page.js';

import { GoogleMap } from '../ui/index.js';

import { application } from '../app.js';

export class MapPage extends BasePage {

    constructor() {
        super('Map');
    }

    createElement() {
        super.createElement();

        let centerOfMap = {lat: 40.783661, lng: -73.965883};
        let map = new GoogleMap(centerOfMap, application.fleetService.cars);
        map.appendToElement(this.element);
    }

    getElementString() {
        return '<div style="margin: 20px"><h3>Map</h3></div>';
    }

}