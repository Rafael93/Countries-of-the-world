function showContries() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      let countries = JSON.parse(this.response);
      countries.forEach((country) => {
        const countryCard = document.createElement("div");
        const countryCardImage = document.createElement("img");
        countryCard.innerHTML = country.name.official;
        countryCardImage.src = country.flag;
        console.log(countryCardImage.src);
        countryCard.appendChild(countryCardImage);
        document.getElementById("feed").appendChild(countryCard);
      });
    }
  };
  xhr.send();
}
