const travelDestinations = [
    {
        "continent": "africa",
        "country": [
            {
                "name": "Morocco",
                "image": "image/morocco.jpeg",
                "price": "$300",
                "description": "Discover the vibrant culture and stunning landscapes of Morocco, where ancient cities meet the sweeping Sahara desert.",
                "people": "2",
                "days": "3"
            },
            {
                "name": "Kenya",
                "image": "image/kenya.jpeg",
                "price": "$200",
                "description": "Kenya offers stunning safaris, diverse wildlife, and rich cultural experiences.",
                "people": "2",
                "days": "3"
            }
        ]
    },
    {
        "continent": "asia",
        "country": [
            {
                "name": "Thailand",
                "image": "image/thailand.jpeg",
                "price": "$500",
                "description": "Thailand is a tropical paradise famous for its beaches and vibrant culture.",
                "people": "2",
                "days": "3"
            },
            {
                "name": "Malaysia",
                "image": "image/malaysia.jpg",
                "price": "$400",
                "description": "Malaysia features vibrant cities, lush jungles, and beautiful beaches.",
                "people": "2",
                "days": "3"
            }
        ]
    },
    {
        "continent": "south america",
        "country": [
            {
                "name": "Argentina",
                "image": "image/argentina.jpg",
                "price": "$400",
                "description": "Argentina is a diverse South American country known for its landscapes, tango, and rich cuisine.",
                "people": "2",
                "days": "3"
            },
            {
                "name": "Brazil",
                "image": "image/brazil.jpeg",
                "price": "$300",
                "description": "Brazil boasts stunning landscapes, lively culture, and beautiful beaches.",
                "people": "2",
                "days": "3"
            }
        ]
    },
    {
        "continent":"europe",
            "country":[
                {
                    "name":"france",
                    "image":"image/france.jpg",
                    "price":"$600",
                    "description":"France is renowned for its art, cuisine, and romantic landscapes.",
                    "people":"2",
                    "days":"3"  
                },
                {
                    "name":"spain",
                    "image":"image/spain.jpg",
                    "price":"$500",
                    "description":"Spain features historic cities, stunning architecture, vibrant festivals, and delicious tapas.",
                    "people":"2",
                    "days":"3"  
                }
            ]
            
            }
    
  ];


  
  function displayDestinations(filteredDestinations = travelDestinations) {
    const container = document.getElementById('travel-destinations');
    container.innerHTML = ''; // Clear the previous content

    filteredDestinations.forEach(continent => {
        continent.country.forEach(country => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${country.image}" alt="${country.name}">
                <div class="info">
                    <h2>${country.name}</h2>
                    <p>${country.description}</p>
                    <p><strong>People:</strong> ${country.people} | <strong>Days:</strong> ${country.days}</p>
                    <div class="price">${country.price}</div>
                    <a href="#filter"><button class="book-now-btn">Book Now</button></a>
                </div>
            `;
            container.appendChild(card);
        });
    });
}

// Filter function based on selected continent
function filterByContinent(event) {
    const selectedContinent = event.target.value;

    if (selectedContinent === 'all') {
        displayDestinations(travelDestinations);
    } else {
        const filteredDestinations = travelDestinations.filter(dest => dest.continent === selectedContinent);
        displayDestinations(filteredDestinations);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayDestinations(); // Display all destinations initially
    document.getElementById('continent-filter').addEventListener('change', filterByContinent); // Add filter event listener
});

























