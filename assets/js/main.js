document.addEventListener('DOMContentLoaded', () => {
    loadSavedFormData();
    const countrySelect = document.getElementById('country');
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.text = country.name.common;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));

    countrySelect.addEventListener('change', (event) => {
        const countryName = event.target.value;
        loadCities(countryName);
    });
});

function loadCities(countryName) {
    const citySelect = document.getElementById('city');
    citySelect.innerHTML = '';

    fetch('https://countriesnow.space/api/v0.1/countries/cities', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country: countryName }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.error === false && data.data.length > 0) {
            data.data.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.text = city;
                citySelect.appendChild(option);
            });
        } else {
            const option = document.createElement('option');
            option.value = '';
            option.text = 'No cities found';
            citySelect.appendChild(option);
        }
    })
    .catch(error => console.error('Error fetching cities:', error));
}

document.getElementById('searchForm').addEventListener('click', (event) => {
    event.preventDefault();

    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const duration = document.getElementById('duration').value;
    const members = document.getElementById('members').value;



    // Save the data in localStorage
    localStorage.setItem('country', country);
    localStorage.setItem('city', city);
    localStorage.setItem('from', from);
    localStorage.setItem('to', to);
    localStorage.setItem('duration', duration);
    localStorage.setItem('members', members);
       

if (country === 'default' || city === 'default' || !from || !to || !duration || !members) {
    alert('Please fill in all the required fields.');
    return;
}

    const HotelsModal = document.getElementById('hotelsModal');
    HotelsModal.innerHTML = '';

    const dummyData = [
        { name: "Hotel A", city, country, from, to, duration, members, price: 200 },
        { name: "Hotel B", city, country, from, to, duration, members, price: 150 },
    ];

    if (dummyData.length > 0) {
        dummyData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>City: ${item.city}, Country: ${item.country}</p>
                <p>From: ${item.from} To: ${item.to}</p>
                <p>Duration: ${item.duration} days, Members: ${item.members}</p>
                <p>Price: $${item.price}</p>
            `;
            //    Create "Book Now" button
            const bookNowButton = document.createElement('button');
            bookNowButton.textContent = 'Book Now';
            bookNowButton.className = 'btn btn-primary';
            bookNowButton.addEventListener('click', () => {
                alert(`Booking confirmed for ${item.name}`);
            });

            // Create "Close" button
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.className = 'btn btn-secondary';
            closeButton.addEventListener('click', () => {
                HotelsModal.innerHTML = '';  
                HotelsModal.classList.add('hidden');  
            });
            // Append the buttons to the card
            card.appendChild(bookNowButton);
            card.appendChild(closeButton);
            HotelsModal.appendChild(card);
        });
        HotelsModal.classList.remove('hidden');
    }
});

// Load saved data from localStorage when page is loaded
function loadSavedFormData() {
    const savedCountry = localStorage.getItem('country');
    const savedCity = localStorage.getItem('city');
    const savedFrom = localStorage.getItem('from');
    const savedTo = localStorage.getItem('to');
    const savedDuration = localStorage.getItem('duration');
    const savedMembers = localStorage.getItem('members');

    if (savedCountry) document.getElementById('country').value = savedCountry;
    if (savedCity) document.getElementById('city').value = savedCity;
    if (savedFrom) document.getElementById('from').value = savedFrom;
    if (savedTo) document.getElementById('to').value = savedTo;
    if (savedDuration) document.getElementById('duration').value = savedDuration;
    if (savedMembers) document.getElementById('members').value = savedMembers;
}







































