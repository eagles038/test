"use strict";

// const result = confirm("Are you here");

// const answer = prompt("Вам 18 лет?", '50');

// console.log(typeof +answer);

// const answers = [];

// answers[0] = prompt('Your name?', '');
// answers[1] = prompt('Your family?', '');
// answers[3] = prompt('Your age?', '');

// document.write(answers);

// const user = 'Ivan';

// console.log(`ПРивет ${user}`);






// do {
//     var numberOfFilms = prompt('Сколько фильмов вы уже смотрели?', '');
// } while (numberOfFilms !== '' || numberOfFilms !== null);


// if (numberOfFilms === '') {
//     numberOfFilms = prompt('Сколько фильмов вы уже смотрели?', '');
// } else {
//     console.log('no');
// }




// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// personalMovieDB.movies[lastFilm] = valueFilm;


// console.log(personalMovieDB);

// for (let i = 0; i < 2; i++) {
//     const lastFilm = prompt('Один из просмотренных последних фильмов?', '');
//     const valueFilm = prompt('На сколько оцените его?', '');
//     if (numberOfFilms == '' || numberOfFilms !== null) {
        
//     }

//     personalMovieDB.movies[lastFilm] = valueFilm;
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// } while (num < 55);


// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;

// }


// function showFirstMessage(text) {
//     console.log(text);
// }


// showFirstMessage('his');

// function calc(a, b) {
//     return (a + b);
// }


// const calculator = (a, b) => a + b;


// const str = 'Some fruit';
// const num = 12.2;

// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseFloat(test));

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних фильмов?', ''),
              b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDb (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

 showMyDb(personalMovieDB.privat);


function writeYourGenres () {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();



