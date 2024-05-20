const btn2 = document.querySelector("#btn2");
const citta2 = document.querySelector("#inputCitta2");
let nomeCitta2 = document.querySelector("#nomeCitta2");
let dati2 = document.querySelector("#dati2");
const img = document.querySelector("#img");
const inf = document.querySelector("#informazioni");

btn2.onclick = () =>{

    nomeCitta2.innerHTML = "Meteo di: ";
    dati2.innerHTML = "";
    inf.innerHTML = "";
    img.setAttribute("src","");
    citta2.value = citta2.value.charAt(0).toUpperCase() + citta2.value.slice(1);
    async function datiserver(u) {
    
        let response = await fetch(u);
        let risposta = "";
        let datiCitta = "";
        if (response.ok) {
            nomeCitta2.innerHTML += citta2.value;
            let json = await response.json();
            img.setAttribute("src",json.current.condition.icon);
            datiCitta= `Local Time = ${json.location.localtime} <br>`;
            datiCitta+=`Region = ${json.location.region}`;
            risposta =`Cloud = ${json.current.cloud} %<br>`;
            risposta += `Conditions = ${json.current.condition.text}<br>`;
            risposta += ` Humidity = ${json.current.humidity} %<br>`;
            risposta += ` Precipitation = ${json.current.precip_mm} mm<br>`;
            risposta += ` Pressure = ${json.current.pressure_mb} mb<br>`;
            risposta += ` Temperature = ${json.current.temp_c} °C<br>`;
            risposta += ` UV rays = ${json.current.uv} uv<br>`;
            risposta += ` Visibility = ${json.current.vis_km} km<br>`;
            risposta += ` Wind = ${json.current.wind_kph} km/h<br>`;
            dati2.innerHTML = risposta;
            inf.innerHTML = datiCitta;
                       
        } else {
            dati2.innerHTML = "Errore, Città non trovata";
        }
    
    }
    const url = `https://api.weatherapi.com/v1/current.json?key=4297335297a049bdad9152314240905&q=${citta2.value}&aqi=no`;
    datiserver(url);
}