const tourData = {
    "countries": [
        {
            "name": "Luxury Tour",
            "favoritefamilyTours": [
                {
                    "tourName": "Atlas Mountain Trekking place",
                    "details": "Embark on a multi-day trek through the Atlas Mountains, exploring stunning landscapes and Berber villages.",
                    "images":"image1/morocco.jpg",
                    "price" : "$200"
                    
                }
            ]
        },
        {
            "name": "Family Tour",
            "favoritefamilyTours": [
                {
                    "tourName": "MaasaiMara Wildlife Safari",
                    "details": "Join guided safaris to witness the Great Migration and explore the incredible wildlife of Maasai Mara.",
                    "images":"image1/masaimara.jpg",
                    "price" : "$600"
                    
                }
            ]
        },
        {
            "name": "Adventure Tour",
            "favoritefamilyTours": [
                {
                    "tourName": "Chiang Mai Zip Lining place",
                    "details": "Soar through the treetops on a thrilling zip line adventure in the jungles of Chiang Mai.",
                    "images":"image1/zipline.jpg",
                    "price" : "$400"
                    
                }
            ]
        },
        {
            "name": "Cultural Tour",
            "favoritefamilyTours": [
                {
                    "tourName": "Borneo Rainforest Adventure",
                    "details": "Trek through the pristine rainforests of Borneo, spotting wildlife and exploring caves.",
                    "images":"image1/jungle.jpg",
                    "price" : "$150"
                    
                }
            ]
        }
        
    ]
};
const cardsContainer = document.getElementById('tour-cards');
const countryFilter = document.getElementById('country-filter');
const tourFilter = document.getElementById('tour-filter');

// Populate country filter dropdown dynamically
function populateCountryFilter() {
    tourData.countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name;
        option.textContent = country.name;
        countryFilter.appendChild(option);
    });
}

// Display tour cards based on filters
function displayTours(filteredCountries = tourData.countries) {
    cardsContainer.innerHTML = ''; // Clear existing cards

    filteredCountries.forEach(country => {
        country.favoritefamilyTours.forEach(tour => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${tour.images}" alt="${tour.tourName}">
                <div class="info">
                    <h2>${country.name}</h2>
                    <p>${tour.tourName}</p>
                    <p><strong>People:</strong> ${tour.details}</p>
                    <div class="price">${tour.price}</div>
                    <a href="#filter"><button class="book-now-btn">Book Now</button></a>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    });
}

// Filter tours by country and tour name
function filterTours() {
    const selectedCountry = countryFilter.value;
    const searchTour = tourFilter.value.toLowerCase();

    let filteredCountries = tourData.countries.filter(country => {
        // Filter by country name
        if (selectedCountry !== 'all' && country.name !== selectedCountry) {
            return false;
        }

        // Filter by tour name
        const hasMatchingTour = country.favoritefamilyTours.some(tour =>
            country.name.toLowerCase().includes(searchTour)
        );
        return hasMatchingTour;
    });

    displayTours(filteredCountries);
}

// Event listeners for filters
countryFilter.addEventListener('change', filterTours);
tourFilter.addEventListener('input', filterTours);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateCountryFilter(); // Populate country filter
    displayTours(); // Display all tours initially
});











              
