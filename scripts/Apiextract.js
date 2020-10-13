const listaPaises = document.getElementById('listaPaises') ;
const informacionPaises = document.getElementById('informacionPaises')
const searchBar = document.getElementById('searchBar');
const countryUnique = document.getElementsByClassName('countries')
const countriesURL = 'https://travelbriefing.org/countries.json'

let countries = [];


console.log(searchBar);
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const filteredCountries = countries.filter (country => {
      return country.name.toLowerCase().includes(searchString)  
    })
    displayCountries(filteredCountries);
});

let myFunction = function(){
    console.log('1', countryUnique.length);
for (var i=0; i<countryUnique.length; i++) {
    countryUnique[i].addEventListener('click', function() {
        var x = this.firstElementChild.innerHTML.split(" ").join("");

        const uniqueURL = `https://travelbriefing.org/${x}?format=json`
            
        const getInformation = async () => {
            try {
                const infoResponse = await fetch(uniqueURL);
                information = await infoResponse.json();
                displayInformation(information);
                console.log(information);
            } catch (err){
                console.log(err);
            }
        }
        getInformation();
    })
    
} }

const getCountries = async () => {
    try {
    const response = await fetch(countriesURL);
    countries = await response.json();
    displayCountries(countries);
} catch (err) {
    console.log(err);
}
};
  
getCountries();

  const displayCountries = (countries) => {
    const htmlString = countries.map((countries) => {
            displayInformation();
            return `
            <li class="countries">
                <h2>${countries.name}</h2>
               
            </li>
        `;
        })
        .join('');
    listaPaises.innerHTML = htmlString;    
    myFunction();
};

    const displayInformation = (information) => {
        console.log(information)
         informacionPaises.innerHTML =  `<li class= "informacion">
            <h3>${information.timezone.name}</h3>
            </li>`
    }

getCountries();


