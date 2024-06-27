document.addEventListener('DOMContentLoaded', () => {
    fetchCars();
});

function fetchCars() {
    const url = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&make=ford&year=2020';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayCars(data.Trims);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayCars(cars) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';

    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');

        carCard.innerHTML = `
            <img src="https://via.placeholder.com/300x200.png?text=${car.make} ${car.model}" alt="${car.make} ${car.model}">
            <div class="car-card-content">
                <h2 class="car-card-title">${car.make} ${car.model}</h2>
                <p class="car-card-price">Price: Not Available</p>
            </div>
        `;

        carList.appendChild(carCard);
    });
}
