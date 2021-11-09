const API_URL = "https://rickandmortyapi.com/api/character";

const templateCard = document.getElementById("template-card").content;
const itemsCards = document.getElementById("items-cards");
const fragment = document.createDocumentFragment();

async function getMovies(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
  } catch (error) {
    console.log("Error en la ejecución", error);
  }
}

getMovies(API_URL);

function showMovies(movies) {
  movies.forEach((movie) => {
    
    templateCard.querySelector(".image").setAttribute("src", movie.image);
    templateCard.querySelector(".name").textContent = movie.name;
    templateCard.querySelector(".dot").setAttribute("id",dotColor(movie.status));
    templateCard.querySelector(".status").textContent = movie.status;
    templateCard.querySelector(".species").textContent = movie.species;
    templateCard.querySelector(".location").textContent = movie.location.name;
    templateCard.querySelector(".origin").textContent = movie.origin.name;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });

  itemsCards.appendChild(fragment);
}

/* Revisar else if */

function dotColor(status) {
  if (status === "alive" || status === "Alive") {
    return "green";
  } else if (status === "unknown" || status === "Unknown") {
    return "grey";
  } else{
    return "red";
  }
}