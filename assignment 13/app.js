"use strict";
/* Assignment-13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle
or a car, and make a list that stores several examples. Use your list to print a series of statements
about these items, such as “I would like to own a Honda motorcycle.”.*/
Object.defineProperty(exports, "__esModule", { value: true });
let transportation = ["new Audi", "Mercedes", "BMW", "Rolls-Royce", "Maserati"];
let message = "I would like to own a ";
for (let i = 0; i < 5; i++)
    console.log(message + transportation[i]);
