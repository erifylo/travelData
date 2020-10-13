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

let paisUnico = function(){
for (var i=0; i<countryUnique.length; i++) {
    countryUnique[i].addEventListener('click', function() {
        var x = this.firstElementChild.innerHTML.split(" ").join("");

        const uniqueURL = `https://travelbriefing.org/${x}?format=json`
            
        const getInformation = async () => {
            try {
                const infoResponse = await fetch(uniqueURL);
               let  information = await infoResponse.json();
                displayInformation(information);
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
    let countries = await response.json();
  
    return displayCountries(countries);
} catch (err) {
    console.log(err);
}
};
  
getCountries();

  const displayCountries = (countries) => {
    const htmlString = countries.map((countries) => {
            
            return `
            <li class="countries">
                <h2>${countries.name}</h2>
               
            </li>
        `;
        })
        .join('');
    listaPaises.innerHTML = htmlString;    
    paisUnico();
    return htmlString;
};

    const displayInformation = async (information) => {
        let infoCountryDetail = await information;
        console.log(infoCountryDetail, 'country detail')
        let liCreate = document.createElement("h3");
        liCreate.innerHTML = `${information.names.name} ${information.names.full}`;
        informacionPaises.appendChild(liCreate)
    }

getCountries();
 

