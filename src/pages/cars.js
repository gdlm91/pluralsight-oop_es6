import { BasePage } from '../framework/base-page.js';
import { DataTable } from '../ui/index.js';

import { application } from '../app.js';

export class CarsPage extends BasePage {

    constructor() {
        super('Cars');
    }

    createElement() {
        super.createElement();

        let headers = ['License', 'Make', 'Model', 'Miles'];
        let t = new DataTable(headers, application.fleetService.cars);
        t.appendToElement(this.element);
    }

    getElementString() {
        return '<div style="margin: 20px"><h3>Cars</h3></div>';
    }

}