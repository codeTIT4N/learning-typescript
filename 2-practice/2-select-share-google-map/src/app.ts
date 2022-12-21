import axios from "axios";
const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'PASTE_YOUR_API_KEY_HERE';

// not needed after using @types/google.maps package
// declare let google: any;

type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number, lng: number } } }[];
    status: 'OK' | 'ZERO_RESULTS'
}

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    // send this to Google's API

    axios.get<GoogleGeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
            enteredAddress
        )}&key=${GOOGLE_API_KEY}`
    ).then(res => {
        if (res.data.status !== 'OK') {
            throw new Error('Could not fetch location!');
        }
        const coordinates = res.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            center: coordinates,
            zoom: 8,
        });
        let marker = new google.maps.Marker({ position: coordinates, map: map })
        console.log(marker);

    })
        .catch(err => {
            alert(err.message)
            console.log(err);
        })
}


form.addEventListener('submit', searchAddressHandler);