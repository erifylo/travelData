const listaPaises = document.getElementById('listaPaises') ;
const searchBar = document.getElementById('searchBar');
let countries = [];


console.log(searchBar);
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    const filteredCountries = countries.filter (country => {
      return country.name.includes(searchString)  
    })
    displayCountries(filteredCountries);
});

const getCountries = async () => {
    try {
    const response = await fetch('https://travelbriefing.org/countries.json');
    countries = await response.json();
    displayCountries(countries);
    console.log(countries);
} catch (err) {
    console.error(err);
}
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