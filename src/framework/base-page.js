import { BaseElement } from './base-element.js';

export class BasePage extends BaseElement {

    constructor(pageTitle) {
        super();
        this.pageTitle = pageTitle;
    }

}