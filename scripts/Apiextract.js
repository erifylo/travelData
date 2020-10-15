const listaPaises = document.getElementById('listaPaises') ;
const informacionPaises = document.getElementById('informacionPaises')
const searchBar = document.getElementById('searchBar');
const countryUnique = document.getElementsByClassName('countries')
const countriesURL = 'https://travelbriefing.org/countries.json'

let countries = [];
informacionPaises.style.display = 'none';

console.log(searchBar);
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(countries)
    let filteredCountries = countries.filter (country => {
        
       // console.log(country)
     return country.name.toLowerCase().includes(searchString)
     console.log(country.name.toLowerCase().includes(searchString))  
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
    countries = await response.json();
  
    return displayCountries(countries);
} catch (err) {
    console.log(err);
}
};
  
getCountries();

  const displayCountries = (countries) => {
    const htmlString = countries.map((countries) => {
            
            return `
            <button type="button" class="btn btn-outline-info">
            <li class="countries">
                <h2>${countries.name}</h2>
                
            </li>
            </button>
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
        
        let liCreate = document.createElement("p"); // nombre completo pais
        
        listaPaises.style.display = 'none';
        informacionPaises.style.display = 'inline';
        liCreate.innerHTML = `${information.names.name} ${information.names.full}` ; // nombre completo pais
        completo.appendChild(liCreate) // nombre completo pais

        let li2Create = document.createElement("p"); // timezone
        li2Create.innerHTML = `${information.timezone.name}` ; // timezone
        timeZone.appendChild(li2Create);

        let li3create = document.createElement("p"); // language
        const languageSelect = information.language[0].language;
        li3create.innerHTML = `${languageSelect}`//language
        languages.appendChild(li3create);

        let li4create = document.createElement("p"); //Voltage
        li4create.innerHTML = `${information.electricity.voltage}`
        voltage.appendChild(li4create);

        let li5create = document.createElement("p"); // Frequency
        li5create.innerHTML = `${information.electricity.frequency}`
        frequency.appendChild(li5create);

        let li6create = document.createElement("p"); // 
        li6create.innerHTML = `${information.telephone.calling_code}`
        callingCode.appendChild(li6create);

        let li7create = document.createElement("p"); // 
        li7create.innerHTML = `${information.telephone.police}`
        police.appendChild(li7create);

        let li8create = document.createElement("p"); // 
        li8create.innerHTML = `${information.telephone.ambulance}`
        ambulance.appendChild(li8create);

        let li9create = document.createElement("p"); // 
        li9create.innerHTML = `${information.telephone.fire}`
        fire.appendChild(li9create);

        let li10create = document.createElement("p"); // 
        li10create.innerHTML = `${information.water.short}`
        tapWater.appendChild(li10create);

        let li11create = document.createElement("p"); 
        const vaccinationsSelect = information.vaccinations[0].name;
        li11create.innerHTML = `${vaccinationsSelect}`
        vaccinations.appendChild(li11create);

        let li12create = document.createElement("p"); 
        const messageSelect = information.vaccinations[0].message;
        li12create.innerHTML = `${messageSelect}`
        message.appendChild(li12create);

        let li13create = document.createElement("p"); 
        li13create.innerHTML = `${information.currency.name}`
        currency.appendChild(li13create);

        let li14create = document.createElement("p"); 
        const neighborSelectOne = information.neighbors[0].name;
        const neighborSelectTwo = information.neighbors[1].name;
        const neighborSelectThree = information.neighbors[2].name;
        const neighborSelectFour = information.neighbors[3].name;
        li14create.innerHTML = `${neighborSelectOne} ${neighborSelectTwo} ${neighborSelectThree} ${neighborSelectFour}`
        neighbors.appendChild(li14create);


        
        
        
        
      return  banderas(infoCountryDetail)
        
    }
    
    let banderas = (countries) => {
        let flag = document.querySelector("#flag");
        let img = document.createElement("img");
        img.setAttribute("src", `https://www.countries-ofthe-world.com/flags-normal/flag-of-${countries.names.name}.png`)
       console.log(img)
       img.setAttribute("class", "flagOne")
        // const htmlString =  `<img class = "flagOne" src="https://www.countries-ofthe-world.com/flags-normal/flag-of-${countries.names.name}.png" alt="flag" />`;
       // console.log(`<img src="https://www.countries-ofthe-world.com/flags-normal/flag-of-${countries.names.name}.png" alt="flag">`)
       
     flag.appendChild(img); 

    }

getCountries();
 

