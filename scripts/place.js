
document.getElementById("lastModified").textContent = document.lastModified;

const temp = parseFloat(document.getElementById("temperature").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

function calculateWindChill(tempC, windKmh) {
  return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(1);
}

if (temp <= 10 && wind > 4.8) {
  document.getElementById("windchill").textContent = calculateWindChill(temp, wind) + " °C";
} else {
  document.getElementById("windchill").textContent = "29 °C";
}
