export default class Segment {
    constructor() {
        this.points = [];
    }

    addPoint(point) {
        this.points.push(point);
    }

    getDistance() {
        let distance = 0;
        for (let i = 0; i < this.points.length - 1; i++) {
            distance += this.points[i].distanceTo(this.points[i + 1]);
        }
        return distance;
    }

    getTime() {
        return this.points[this.points.length - 1].time - this.points[0].time;
    }

    getAverageSpeed() {
        return this.getDistance() / (this.getTime() / 1000);
    }
}
