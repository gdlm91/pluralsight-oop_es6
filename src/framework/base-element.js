import $ from 'jquery';

export class BaseElement {

    constructor() {
        this.element = null; // jQuery Object
    }

    appendToElement(el) {
        this.createElement();
        el.append(this.element);
        this.enableJS();
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString() {
        throw 'Please overwrite getElementString in BaseElement';
    }

    enableJS() {
        componentHandler.upgradeElement(this.element[0]);
    }

}