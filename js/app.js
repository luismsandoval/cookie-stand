'use strict';

const tableHeader = document.querySelector('#salesTable thead');
const tableFooter = document.querySelector('#salesTable thead:last-of-type');
const tableBody = document.querySelector('#salesTable tbody');

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
  new Sales('Seattle', 2, 16, 4.6),
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

Sales.prototype.head = function () {
  let thIndex = document.createElement('th');
  thIndex.textContent = '';
  tableHeader.appendChild(thIndex);
  for (let i = 0; i < hour.length; i++) {
    let th = document.createElement('th');
    th.textContent = `${hour[i]}`;
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

Sales.prototype.foot = function () {
  let hourTotal = [];
  let thIndex = document.createElement('th');
  thIndex.textContent ='Total';
  tableFooter.appendChild(thIndex);
  for (let i = 0; i < hour.length; i++) {
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


Sales.prototype.master = function () {
  Sales.prototype.head();
  for (let i = 0; i < salesArray.length; i++) {
    let sales = salesArray[i];
    sales.totalCookiesSold();
    sales.render();
  }
  Sales.prototype.foot();
};


Sales.prototype.master();
