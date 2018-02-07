import Constants from './constants'

export default class Point {
    constructor(latitude, longitude, elevation, time) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.elevation = elevation;
        this.time = time;
    }

    distanceTo(point) {
        let latitudeDiff = degreesToRadians(point.latitude - this.latitude);
        let longitudeDiff = degreesToRadians(point.longitude - this.longitude);
        let latitude1 = degreesToRadians(this.latitude);
        let latitude2 = degreesToRadians(point.latitude);

        let a = Math.pow(Math.sin(latitudeDiff / 2), 2) + Math.pow(Math.sin(longitudeDiff / 2), 2) * Math.cos(latitude1) * Math.cos(latitude2);
        let b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return Constants.EARTH_RADIUS * b;
    }
    
    speedTo(point) {
        let distance = this.distanceTo(point);
        let time = Math.abs(this.time - point.time) / 1000;
        return distance / time;
    }
}

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}