const toggleSidebare = () => {
  document.body.classList.toggle('open');
};
function openSearch() {
  document.getElementById('myOverlay').style.display = 'block';
}

function closeSearch() {
  document.getElementById('myOverlay').style.display = 'none';
}

$(document).ready(function () {
  $('.owl-carousel').owlCarousel();
});
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 3,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: false,
      loop: false,
    },
    1300: {
      items: 2.5,
      nav: false,
      loop: false,
    },
  },
});
function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#f00', '#000', toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#f00', '#000', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max - to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
    ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
    ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector('#toSlider');
  if (Number(currentTarget.value) <= 0) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 1;
  }
}

const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');

fillSlider(fromSlider, toSlider, '#f00', '#000', toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, '');
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, 'toInput');

////////////////////////////////////

const fromSlider2 = document.querySelector('#fromSlider2');
const toSlider2 = document.querySelector('#toSlider2');
fillSlider(fromSlider2, toSlider2, '#f00', '#000', toSlider2);
setToggleAccessible(toSlider2);

fromSlider2.oninput = () => controlFromSlider(fromSlider2, toSlider2, '');
toSlider2.oninput = () => controlToSlider(fromSlider2, toSlider2, 'toInput');

/////////////////////////////////

const fromSlider3 = document.querySelector('#fromSlider3');
const toSlider3 = document.querySelector('#toSlider3');
fillSlider(fromSlider3, toSlider3, '#f00', '#000', toSlider3);
setToggleAccessible(toSlider3);

fromSlider3.oninput = () => controlFromSlider(fromSlider3, toSlider3, '');
toSlider3.oninput = () => controlToSlider(fromSlider3, toSlider3, 'toInput');
