const form = document.querySelector("#form");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");
const myIp = document.querySelector("#myIp");
const copied = document.querySelector("#copied");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1094e3c0e6mshdcfded0f62c10fap112866jsn9a62fd325887",
    "X-RapidAPI-Host":
      "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
  },
};

const URL_MYIP =
  "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8";
const OPTIONS_MYIP = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1094e3c0e6mshdcfded0f62c10fap112866jsn9a62fd325887",
    "X-RapidAPI-Host":
      "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
  },
};

const fetchMyIp = () => {
  return fetch(
    `https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8`,
    OPTIONS_MYIP
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const fetchIpInfo = (ip) => {
  return fetch(
    `https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?ip=${ip}&apikey=873dbe322aea47f89dcf729dcc8f60e8`,
    options
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { value } = input;
  if (!value) return;

  submit.setAttribute("disabled", "");
  submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);

  if (ipInfo) {
    results.innerHTML += `
     <ul>
     <li> <img src="${ipInfo.flag}" alt=""></li>
    <li>Continente: ${ipInfo.continent} </li>
    <li>Pais: ${ipInfo.country}</li>
    <li>Codigo postal: ${ipInfo.zipCode}</li>
    
    <li>Ciudad: ${ipInfo.city}</li>
    <li>Zona horaria: ${ipInfo.timezone}</li>
    <li>ID Pais: ${ipInfo.countryGeoNameId}</li>
    <li>Codigo telefonico: ${ipInfo.phoneCode}</li>
    <li>Provincia/Estado: ${ipInfo.state}</li>
    <li>Lenguaje: ${ipInfo.languages}</li>
    <li>Numero de ciudades: ${ipInfo.numOfCities}</li>
    <li>IP: ${ipInfo.ip}</li>
    <li>Capital: ${ipInfo.countryCapital}</li>
    <li>Latitud: ${ipInfo.latitude}</li>
    <li>Longitud:  ${ipInfo.longitude}</li>
  </ul>`;
  }

  submit.removeAttribute("disabled");
  submit.removeAttribute("aria-busy");
});

myIp.addEventListener("click", async (event) => {
  event.preventDefault();
  const myIpInfo = await fetchMyIp();
  if (myIpInfo) {
    console.log(myIpInfo);
    results.innerHTML = `<p>Tu IP es: ${myIpInfo.ip} <div id="copiedtxt">copiado al portapapeles!</div></p> `;
    navigator.clipboard.writeText(myIpInfo.ip);
  }
});
