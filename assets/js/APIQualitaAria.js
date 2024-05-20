const btn = document.querySelector("#btn");
const citta = document.querySelector("#inputCitta");
let nomeCitta = document.querySelector("#nomeCitta");
let dati = document.querySelector("#dati");

btn.onclick = () => {
    nomeCitta.innerHTML = "Qualità dell'aria di: ";
    dati.innerHTML = "";
    citta.value = citta.value.charAt(0).toUpperCase() + citta.value.slice(1);

    async function datiserver(u) {

        let response = await fetch(u);
        if (response.ok) {
            let json = await response.json();
            if (json.status == "ok") {
                nomeCitta.innerHTML += citta.value;
                let data = json.data.forecast.daily.o3[4].day;
                data = data.slice(0, data.length - 3);
                dati.innerHTML += `PM10: ${json.data.forecast.daily.pm10[4].avg}<br>PM25: ${json.data.forecast.daily.pm25[4].avg}<br>O3: ${json.data.forecast.daily.o3[4].avg}<br>Dati del: ${data}`;
            }
            else
                dati.innerHTML += "Errore, Città non valida";
        } else {

            alert("HTTP-Error: " + response.status);

        }

    }
    const url = `https://api.waqi.info/feed/${citta.value}/?token=5da4e3b9f531ff2b4f3b58abb280f54c939d12a2`;
    datiserver(url);
}