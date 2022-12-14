'use strict';
//========= SELECT ELEMENTS ============
const totalShorteningLabel = document.querySelector('.total_shortening');
const shorteningList = document.querySelector('.shortening_list');
const workingoutList = document.querySelector('.workingout_list');
// Buttons
const btnShortening = document.querySelector('.shortening_button');
const btnWorkingout = document.querySelector('.workingout_button');
// Inputs
const inputShortening = document.querySelector('.input_shortening_time');
const inputWorkingout = document.querySelector('.input_workingout_time');
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

// ========  UPDATE UI  ===========
const updateUI = function () {
  shorteningList.innerHTML = '';
  workingoutList.innerHTML = '';
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
  });
  // ================== do the math ======================
  const shorteningsRemain = reduceAll(shortenings) - reduceAll(workingOut);
  totalShorteningLabel.textContent = `${Math.trunc(
    shorteningsRemain / 60
  )} hours ${shorteningsRemain % 60} minutes`;
  // ====================  console log  =================
  // console.clear();
  console.log(
    `Total Shortening: ${Math.trunc(reduceAll(shortenings) / 60)} hours ${
      reduceAll(shortenings) % 60
    } minutes`
  );

  console.log(
    `Total Working Out: ${Math.trunc(reduceAll(workingOut) / 60)} hours ${
      reduceAll(workingOut) % 60
    } minutes`
  );
};

updateUI();

// ================   Apply add functionality   ===============
//=======  add function  =======
const addValues = function (arr, time) {
  console.log(time);
  // no values
  if (time == '') return alert("You didn't select the time");
  console.log('add values function executed');
  updateUI();
};

btnShortening.addEventListener('click', e => {
  e.preventDefault();
  addValues(shortenings, inputShortening.value);
});

btnWorkingout.addEventListener('click', e => {
  e.preventDefault();
  addValues(shortenings, inputShortening.value);
});

// =============================================================
