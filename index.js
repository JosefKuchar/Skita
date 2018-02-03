let input = document.getElementById('input');

input.addEventListener('change', change);

function change(e) {
    let reader = new FileReader();
    let domParser = new DOMParser();
    let trackParser = new TrackParser();

    reader.onload = ((e) => {
        let xml = domParser.parseFromString(e.target.result, 'text/xml');
        let track = trackParser.parse(xml);
        console.log(track);
    });

    reader.readAsText(e.target.files[0]);
}