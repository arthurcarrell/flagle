function generateCountryFlag(country_code){
    document.getElementById("flagdiv").innerHTML = `
    <img
  src="https://flagcdn.com/h240/${country_code}.png"
  height="240"
  alt="???">
    `;
    document.getElementById("country_name").innerHTML = country_code_to_name[country_code]
}

generateCountryFlag(country_codes[Math.floor(Math.random()*(country_codes.length-1))].toLowerCase());