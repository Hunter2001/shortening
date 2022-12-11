'use strict';
//========= SELECT ELEMENTS ============
const totalShorteningLabel = document.querySelector('.total_shortening');
const shorteningList = document.querySelector('.shortening_list');
const workingoutList = document.querySelector('.workingout_list');
// MODAL
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnAddShortening = document.querySelectorAll('.add_shortening_button');
//
//========= data ==========
const shortenings = [
  '13 h 45 m',
  '5 h 26 m',
  '5 h 6 m',
  '4 h 24 m',
  '1 h 58 m',
  '3 h 19 m',
  '4 h 11 m',
  '4 h 6 m',
];

const workingOut = ['2 h 40 m', '8 h 0 m'];

// =====Convert hours to minutes====
const reduceAll = function (arr) {
  return arr
    .map(time => {
      // We need to divide hours and minutes
      const divide = time.split('h');
      // parse hours, minutes
      const hours = parseInt(divide[0]);
      const minutes = parseInt(divide[1]);
      // convert hours to minutes
      //add converted hours to minutes
      const total = hours * 60 + minutes;
      return total;
    })
    .reduce((acc, cur) => acc + cur, 0);
};

const totalShortening = reduceAll(shortenings);
console.log(
  `Total Shortening: ${Math.trunc(totalShortening / 60)} hours ${
    totalShortening % 60
  } minutes`
);

const totalWorkingOut = reduceAll(workingOut);
console.log(
  `Total Working Out: ${Math.trunc(totalWorkingOut / 60)} hours ${
    totalWorkingOut % 60
  } minutes`
);

const shorteningsRemain = totalShortening - totalWorkingOut;

totalShorteningLabel.textContent = `${Math.trunc(
  shorteningsRemain / 60
)} hours ${shorteningsRemain % 60} minutes`;
// console.log('13 h 45 m'.split('h'));

// ========  UPDATE UI  ===========
const updateUI = function () {
  // ======= fill in the shortening list row ========
  shortenings.forEach((cur, i) => {
    const html = `
      <div class="shortening_row">
      <p>${cur}</p>
      </div>
      `;
    shorteningList.insertAdjacentHTML('afterbegin', html);
  });

  // =========== fill in the workin out row ===========
  workingOut.forEach((cur, i) => {
    const html = `
        <div class="workingout_row">
        <p>${cur}</p>
        </div>
        `;
    workingoutList.insertAdjacentHTML('afterbegin', html);
    console.log(cur);
  });
};

updateUI();
