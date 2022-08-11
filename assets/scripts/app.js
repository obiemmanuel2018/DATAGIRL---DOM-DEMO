let startButton = document.querySelector("header button");
let cancelButton = document.querySelector('#add-modal .btn--passive');

const toggleModalHandler = () => {
    const modal = document.querySelector("#add-modal");
    modal.classList.toggle("visible")
    toggleBackdrop();
};

const toggleBackdrop = ()=>{
    console.log('backdrop Ran')
    const backdrop = document.querySelector("#backdrop");
    backdrop.classList.toggle("visible");
}

const cancelModalHandler = ()=>{
    toggleModalHandler();
} 

startButton.addEventListener("click",toggleModalHandler);
cancelButton.addEventListener("click",cancelModalHandler)
// I want to click here
