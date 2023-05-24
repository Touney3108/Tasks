
const getGeoLocation = async () => {
    let country=sessionStorage.getItem("country")
    if (country) {
        updateCountryName(country)
    }
    else {
        try {
            const response = await fetch('https://api.ipbase.com/v2/info?apikey=UeoYDcdre6q83zBtuUu23I07MdRoAUiLbz3N54ij',
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                }})
            if (!response.ok) {
                throw new Error("Request failed with status"+response.status)
            }
            else {
                data = await response.json()
                country = data.data.location.country.name
                sessionStorage.setItem("country", country);
                updateCountryName(country)
            }
        } catch (err) {
            console.log("Error",err.message)
        }
    }
        
    
}

const updateCountryName=countryName=> {
    const element = document.getElementById('geo');
    element.textContent = countryName;
}

window.addEventListener('load', getGeoLocation);
