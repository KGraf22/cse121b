/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Karee Graf",
    photo: 'images/profile.jpg',
    favoriteFoods: [
        'Teryaki Chicken',
        'Steak',
        'Fettucine Alfredo',
        'crepes',
        'pizza'
    ],
    hobbies: [
        'Volleyball',
        'Gardening',
        'Exercising',
        'Singing'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Las Vegas, NV',
        length: '25 years'
    },
    {
        place: 'Caliente, NV',
        length: '3 years'
    },
    {
        place: 'Pioche, NV',
        length: '7 years'
    }
);


//document.querySelector('#photo').src.profile.jpg
//document.querySelector('#name').lastChild.profile.jpg




/* DOM Manipulation - Output */
document.addEventListener('DOMContentLoaded', function() {
    
/* Name */
    document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
    document.querySelector('#photo').src = myProfile.photo;
    document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
    myProfile.favoriteFoods.forEach(food => {
        let li = document.createElement('li');
        li.textContent =food;
        document.querySelector('#favorite-foods').appendChild(li);
    });

/* Hobbies List */
    myProfile.hobbies.forEach(hobby => {
        let li = document.createElement('li');
        li.textContent = hobby;
        document.querySelector('#hobbies').appendChild(li);
    });


/* Places Lived DataList */
    myProfile.placesLived.forEach(place => {
        let dl = document.createElement('dl');
    
        let dt = document.createElement('dt');
        dt.textContent = place.place;

        let dd = document.createElement('dd');
        dd.textContent = place.length;

        dl.appendChild(dt);
        dl.appendChild(dd);

        document.querySelector('#places-lived').appendChild(dl);
    });
});
