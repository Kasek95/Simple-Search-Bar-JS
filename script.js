const searchBar = document.querySelector('.search');
const menuOfDrinks = document.querySelectorAll('li');

const showDrink = (e) => {
	const text = e.target.value.toLowerCase();

    menuOfDrinks.forEach(drink => {
        if(drink.textContent.toLowerCase().indexOf(text) !== -1) {
            drink.style.display = "block"
        } else {
            drink.style.display = "none"
        }
    })
};

searchBar.addEventListener('keyup', showDrink);
