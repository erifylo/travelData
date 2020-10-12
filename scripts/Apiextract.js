const listaPaises = document.getElementById('listaPaises') ;
const searchBar = document.getElementById('searchBar');
const countriesURL = 'https://travelbriefing.org/countries.json'
const uniqueURL = 'https://travelbriefing.org/`${filteredCountries}?format=json'
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

/*   const responseUnique = countries.name.map (async unique => {
   var responseUniqueMap = await fetch(uniqueURL)
   const postResponse = await responseUniqueMap.json()
   return postResponse
   } )

   return Promise.all (responseUnique) */ 

const getCountries = async () => {
    try {
    const response = await fetch(countriesURL);
    countries = await response.json();
    displayCountries(countries);
    console.log(countries);
} catch (err) {
    console.error(err);
}
    const response2 = await fetch('https://travelbriefing.org/spain?format=json');
  };
  
  getCountries();

  const displayCountries = (countries) => {
    const htmlString = countries
        .map((countries) => {
            return `
            <li class="countries">
                <h2>${countries.name}</h2>
            </li>
        `;
        })
        .join('');
    listaPaises.innerHTML = htmlString;
};

getCountries();

