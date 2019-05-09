export default class Track {
    constructor(filename, name) {
        this.segments = [];
        this.filename = filename;
        this.name = name;
    }

    addSegment(segment) {
        this.segments.push(segment);
    }
}
