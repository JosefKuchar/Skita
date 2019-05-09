import Track from './track';
import Segment from './segment';
import Point from './point';

export default class TrackParser {
    parse(xml, filename) {
        let meta = xml.getElementsByTagName('metadata')[0];
        let track = new Track(filename, meta.getElementsByTagName('name')[0].childNodes[0].data);
        let trackDOM = xml.getElementsByTagName('trk')[0];
        let segmentsDOM = trackDOM.getElementsByTagName('trkseg');
        for (let i = 0; i < segmentsDOM.length; i++) {
            let segment = new Segment();
            let pointsDOM = segmentsDOM[i].getElementsByTagName('trkpt');
            for (let j = 0; j < pointsDOM.length; j++) {
                let elevation = Number(pointsDOM[j].getElementsByTagName('ele')[0].innerHTML);
                let time = new Date(pointsDOM[j].getElementsByTagName('time')[0].innerHTML);
                let latitude = Number(pointsDOM[j].getAttribute('lat'));
                let longitude = Number(pointsDOM[j].getAttribute('lon'));
                segment.addPoint(new Point(latitude, longitude, elevation, time));
            }
            track.addSegment(segment);
        }

        return track;
    }
}
