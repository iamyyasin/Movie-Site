//! Slider Start
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
let clickCounter = 0;

arrows.forEach((arrow, i) => {
    const ratio = Math.floor(window.innerWidth / 300);
    const images = movieLists[i].querySelectorAll('img');
    arrow.addEventListener('click', () => {
        if(ratio + clickCounter < images.length) {
            clickCounter = (clickCounter + 1) % images.length;
            updateSlidePosition();
        } else {
            movieLists[i].style.transform = `translateX(0)`;
            clickCounter = 0;
        }
    });

    function updateSlidePosition() {
        const slideWidth = images[0].offsetWidth + 30;
        console.dir(slideWidth);
        movieLists[i].style.transform = `translateX(-${slideWidth * clickCounter}px)`;
    }
});
//! Slider End

//! Dark Light Mode Start
const roundBtn = document.getElementById('round-btn');
const items = document.querySelectorAll('#header,.menu-list a,.profile-container,.dark-light-mode,#round-btn,#sidebar,#sidebar i,#container,.picture,#title,.part,.select,.options-list,.movie-list-title,.arrow');
const title = document.querySelector('.picture img');

roundBtn.addEventListener('click', roundMode);

function roundMode() {
    items.forEach((item) => {
        item.classList.toggle('active');
    });
};
//! Dark Light Mode End

//! Select Box Start
const select = document.querySelector('.select');
const options_list = document.querySelector('.options-list');
const options = document.querySelectorAll('.option');

select.addEventListener('click', () => {
    options_list.classList.toggle('click');
    select.querySelector('.fa-angle-down').classList.toggle('fa-angle-up');
});

options.forEach((option) => {
    option.addEventListener('click', () => {
        options.forEach((option) => {option.classList.remove('selected')});
        select.querySelector('span').innerHTML = option.innerHTML;
        option.classList.add('selected');
        options_list.classList.toggle('click');
        select.querySelector('.fa-angle-down').classList.toggle('fa-angle-up');
    });
});
//! Select Box End
