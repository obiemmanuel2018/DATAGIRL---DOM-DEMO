let startButton = document.querySelector("header button");
let cancelButton = document.querySelector("#add-modal .btn--passive");
let addButton = document.querySelector("#add-modal .btn--success");
const movieTitle = document.querySelector("#title");
const movieImageUrl = document.querySelector("#image-url");
const movieRating = document.querySelector("#rating");

const movies = [];

const deleteMovieHandler = (id) => {
  console.log("I am to Delete Movie with ID", id);
};
const updateUI = (movie) => {
  if (movies.length) {
    const entryText = document.querySelector("#entry-text");
    entryText.style.display = "none";
    const movieList = document.querySelector("#movie-list");

    movieList.innerHTML += `
           <li>
           <div onClick=${deleteMovieHandler(movie.id)} id=${movie.id} class="modal_element">
             <div class="movie-element__image">
                <img src="${movie.imageURL}" alt="">
             </div>
             <div class="movie-element__info">
                <h2>${movie.title}</h2>
                <p>${movie.rating}</p>
             </div>
           </div>
         </li>`;
    // const movieDiv = movieList.querySelector(`.model_element`);
    // movieDiv.addEventListener("click", deleteMovieHandler.bind(movie.id));
  }
};
const validate = () => {
  if (
    movieTitle.value.trim() &&
    movieImageUrl.value.trim() &&
    movieRating.value.trim() &&
    +movieRating.value >= 0 &&
    +movieRating.value <= 5
  ) {
    return true;
  } else {
    return false;
  }
};

const toggleModalHandler = () => {
  const modal = document.querySelector("#add-modal");
  modal.classList.toggle("visible");
  toggleBackdrop();
};

const toggleBackdrop = () => {
  console.log("backdrop Ran");
  const backdrop = document.querySelector("#backdrop");
  backdrop.classList.toggle("visible");
};

const clearInput = () => {
  movieTitle.value = "";
  movieImageUrl.value = "";
  movieRating.value = "";
};

const addMovieHandler = () => {
  // Validate
  const isValid = validate();

  if (!isValid) {
    alert("Form Is Invalid!!");
    return;
  }

  // We create a movie object
  const movieObj = {
    id: Math.random(),
    title: movieTitle.value,
    imageURL: movieImageUrl.value,
    rating: movieRating.value,
  };
  //   Clear Form
  clearInput();
  // add the movie object to our array of movies
  movies.push(movieObj);
  updateUI(movieObj);
};

const cancelModalHandler = () => {
  toggleModalHandler();
};

startButton.addEventListener("click", toggleModalHandler);
cancelButton.addEventListener("click", cancelModalHandler);
addButton.addEventListener("click", addMovieHandler);
// I want to click here
