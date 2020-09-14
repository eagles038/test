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

const numberOfFilms = prompt('Сколько фильмов вы уже смотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Один из просмотренных последних фильмов?', '');
const valueFilm = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = valueFilm;


console.log(personalMovieDB);
