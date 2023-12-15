//! Transform Start
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
        movieLists[i].style.transform = `translateX(${
          movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
        }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
//! Transform End

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
const options = document.querySelector('.option');

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