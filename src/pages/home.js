import { BasePage } from '../framework/base-page.js';
import { Image, Button } from '../ui/index.js'

import { application } from '../app.js';

export class HomePage extends BasePage {

    constructor() {
        super('Home');
    }

    createElement() {
        super.createElement();

        let i = new Image('../../images/drone.jpg');
        i.appendToElement(this.element);

        let styleString = 'width: 300px; height: 80px; font-size: 14px; margin: 10px;';

        let bc = new Button('Self Driving Cars');
        bc.setStyleString(styleString);
        bc.appendToElement(this.element);
        bc.element.click(()  => application.activateRoute('Cars'));

        let bd = new Button('Drones');
        bd.setStyleString(styleString);
        bd.appendToElement(this.element);
        bd.element.click(()  => application.activateRoute('Drones'));
    }

    getElementString() {
        return '<div style="text-align: center"></div>'
    }

}