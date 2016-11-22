import { BasePage } from '../framework/base-page.js';
import { DataTable } from '../ui/index.js';

import { application } from '../app.js';

export class DronesPage extends BasePage {

    constructor() {
        super('Drones');
    }

    createElement() {
        super.createElement();

        let headers = ['License', 'Base', 'Model'];
        let t = new DataTable(headers, application.fleetService.cars);
        t.appendToElement(this.element);
    }

    getElementString() {
        return '<div style="margin: 20px"><h3>Drones</h3></div>';
    }

}