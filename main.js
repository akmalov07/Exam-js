import movies  from "./movies.js";

let productList = document.querySelector(".product_list");
const formElement = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const pokemonSelect = document.querySelector("#pokemon");
const sortedElement = document.querySelector("#sorted");
const searchBtn = document.querySelector(".search");


function showProduct(arr) {
    productList.innerHTML = arr.map(item => `
        <li class="product_item">
            <img src="${item.ImageURL}" alt="">
            <h3 class="product_name">${item.Title}</h3>
            <p class="year">${item.movie_year}</p>
            <p class="Categories">${item.Categories}</p>
            <button class="info">More info</button>
        </li>
    `).join("")}