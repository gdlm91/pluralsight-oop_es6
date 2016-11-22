import { BaseElement } from '../ui/index.js';

export class BasePage extends BaseElement {

    constructor(pageTitle) {
        super();
        this.pageTitle = pageTitle;
    }

}