'use strict';

const YearSem = (y,s) => {
  const yearEle = document.querySelector('#' + y);
  const semeEle = document.querySelector('#' + s);

  let semList;
  let indexOfyear;
  // Indian States/ UT and Districts
  const years = {
    '1': [
      '1','2'
    ],
    '2': [
      '3','4'
    ],
    '3': [
      '5','6'
    ],
    '4': [
      '7','8'
    ],
   
  };
console.log(Object.values(years));
  // States Array
  const year = Object.keys(years);
  // Districts Array
  const semester = Object.values(years);

  for (let i = 0; i < year.length; i++) {
    const yearlist = document.createElement('option');
    yearEle.appendChild(yearlist);
    yearlist.innerText = year[i];
    yearlist.setAttribute('value', year[i]);
  }

  const createOption = function () {
    for (let i = 0; i < semester[indexOfyear].length; i++) {
        semList = document.createElement('option');
      semeEle.appendChild(semList);
      semList.innerText = semester[indexOfyear][i];
      semList.setAttribute('value', semester[indexOfyear][i]);
    }
  };

  yearEle.addEventListener('change', function () {
    const Yearvalue = yearEle.value;
    indexOfyear = year.indexOf(Yearvalue);

    if (semeEle.hasChildNodes()) {
      while (semeEle.hasChildNodes()) {
        semeEle.removeChild(semeEle.firstChild);
      }
      createOption();
    } else {
      createOption();
    }
  });
};