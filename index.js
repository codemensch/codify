// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const clientID = 'cd89c716f00f46aba2709e4c7efbcff2';
const clientSecret = '391c63e30de54f5c838a9701d0cfcf19';

appDiv.innerHTML = `<h1>Codify</h1>`;

document.getElementById("auth-btn").addEventListener("click", getSpotifyAccessToken(clientID, clientSecret));

async function getSpotifyAccessToken(clientId, clientSecret) {
    return await fetch("https://accounts.spotify.com/api/token", { 
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
      body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret,
      "method": "POST",
    }).then((res) => res.json());
}