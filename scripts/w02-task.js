document.addEventListener('DOMContentLoaded', function() {
    
    


/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Karee Graf';
let currentYear = new Date().getFullYear();
let profilePicture= 'images/profile.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src',profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */

const favoriteFoods = ['crepes', 'pasta', 'fajitas', 'fettucine', 'pizza', 'steak'];

const newFavoriteFood = 'NewFavoriteFood';

favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += favoriteFoods.join(' ');

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
});