'use strict';

const tableHeader = document.querySelector('#salesTable thead');
const tableFooter = document.querySelector('#salesTable thead:last-of-type');
const tableBody = document.querySelector('#salesTable tbody');

function Sales(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.cookiesSold = [];
}

let salesArray = [
  new Sales('Seattle', 23, 65, 6.3),
  new Sales('Tokyo', 3, 24, 1.2),
  new Sales('Dubai', 11, 38, 3.7),
  new Sales('Paris', 20, 38, 2.3),
  new Sales('Lima', 2, 16, 4.6),

];

Sales.prototype.randomCustomer = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Sales.prototype.totalCookiesSold = function () {
  for (let i = 0; i < this.hour.length; i++) {
    this.total = 0;
    let perHour = Math.round(this.randomCustomer() * this.avg);
    this.cookiesSold.push(perHour);
    this.total = this.cookiesSold.reduce(function (a, b) {
      return a + b;
    }, 0);
  }
  return this.total, this.cookiesSold;
};

let head = function () {
  let thIndex = document.createElement('th');
  thIndex.textContent = '';
  tableHeader.appendChild(thIndex);
  for (let i = 0; i < salesArray[0].hour.length; i++) {
    let th = document.createElement('th');
    th.textContent = `${salesArray[0].hour[i]}`;
    tableHeader.appendChild(th);
  }
  let thTotal = document.createElement('th');
  thTotal.textContent = 'Grand Total';
  tableHeader.appendChild(thTotal);
};

Sales.prototype.render = function () {
  let tr = document.createElement('tr');
  tableBody.appendChild(tr);
  let tdName = document.createElement('td');
  tdName.textContent = `${this.name}`;
  tr.appendChild(tdName);
  for (let i = 0; i < this.hour.length; i++) {
    let td = document.createElement('td');
    td.textContent = `${this.cookiesSold[i]}`;
    tr.appendChild(td);
  }
  let tdTotal = document.createElement('td');
  tdTotal.textContent = `${this.total}`;
  tr.appendChild(tdTotal);
};

let foot = function () {
  let hourTotal = [];
  let thIndex = document.createElement('th');
  thIndex.textContent = 'Total';
  tableFooter.appendChild(thIndex);
  for (let i = 0; i < salesArray[0].hour.length; i++) {
    let total = 0;
    for (let j = 0; j < salesArray.length; j++) {
      total += salesArray[j].cookiesSold[i];
    }
    hourTotal.push(total);
    let th = document.createElement('th');
    th.textContent = `${hourTotal[i]}`;
    tableFooter.appendChild(th);
  }
  let thTotal = document.createElement('th');
  let grandTotal = 0;
  for (let i = 0; i < salesArray.length; i++) {
    grandTotal += salesArray[i].total;
  }
  thTotal.textContent = grandTotal;
  tableFooter.appendChild(thTotal);
};

let master = function () {
  head();
  for (let i = 0; i < salesArray.length; i++) {
    let sales = salesArray[i];
    sales.totalCookiesSold();
    sales.render();
  }
  foot();
};

master();


let resetFooter = function() {
  while (tableFooter.firstChild) {
    tableFooter.removeChild(tableFooter.firstChild);
  } foot();
};

let storeForm = document.getElementById('store_form');

storeForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let form = event.target;

  let city = form.city;
  let min = form.min;
  let max = form.max;
  let avg = form.avg;

  let store = new Sales(city.value, parseInt(min.value), parseInt(max.value), parseInt(avg.value));

  for (let i = 0; i < salesArray.length; i++) {
    if (city.value === salesArray[i].name) {
      return;
    }
  }

  salesArray.push(store);

  console.log(salesArray);

  store.randomCustomer();
  store.totalCookiesSold();
  store.render();
  // tableFooter.htmlContent = '';
  // foot();
  resetFooter();

  city.value = '';
  min.value = '';
  max.value = '';
  avg.value = '';
});
