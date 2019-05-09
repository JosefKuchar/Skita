import Vue from 'vue';
import TrackParser from './trackParser';

let input = document.getElementById('input');

let app = new Vue({
    el: '#app',
    data: {
        tracks: []
    },
    methods: {
        change(e) {
            let reader = new FileReader();
            let domParser = new DOMParser();
            let trackParser = new TrackParser();
            reader.onload = ((e_xml) => {
                let xml = domParser.parseFromString(e_xml.target.result, 'text/xml');
                if (xml.getElementsByTagName("parsererror").length > 0) {
                    throw new Error('Error parsing XML');
                } else {
                    let track = trackParser.parse(xml, e.target.value);
                    this.tracks.push(track);
                    console.log(track.segments[0].getDistance());
                    console.log(track.segments[0].getAverageSpeed());
                    console.log(track.segments[0].getTime() / 1000 / 60 / 60);
                }
            });

            reader.readAsText(e.target.files[0]);
        },
        removeTrack(index) {
            this.tracks = this.tracks.filter((_, i) => i != index)
        }
    }
});
