import { BaseElement } from './base-element.js';

export class GoogleMap extends BaseElement{

    constructor(centerOfMap, data) {
        super();
        this.centerOfMap = centerOfMap;
        this.data = data;
    }

    createElement() {
        super.createElement();

        setTimeout(() => {
            var gMap = new google.maps.Map(document.getElementById('gmap'), {
                center: this.centerOfMap,
                zoom: 13
            });

            for(let vehicle of this.data) {
                let [lat, long] = vehicle.latLong.split(' ');
                let gLatLng = new google.maps.LatLng(lat, long);

                var marker = new google.maps.Marker({
                    position: gLatLng,
                    map: gMap,
                });
            }

        }, 0);
    }

    getElementString() {
        return `<div style="width: 600px; height: 400px" id="gmap"></div>`;
    }

}