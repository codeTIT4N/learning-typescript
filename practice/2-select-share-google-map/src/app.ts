// import * as dotenv from "dotenv";
// dotenv.config({ path: __dirname + '/.env' });
// import axios from "axios";

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

// const key = process.env.GOOGLE_API_KEY;


async function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    // send this to Google's API
    console.log(enteredAddress);

    // const data = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${key}`)
    // console.log(data);

}


form.addEventListener('submit', searchAddressHandler);

// TBC