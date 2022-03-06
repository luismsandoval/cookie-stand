'use strict';

// const salesList = document.getElementById('salesList');

// let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// let seattle = {
//   name: 'Seattle',
//   hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   total: 0,
//   cookiesSold: [],
//   randomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   totalCookiesSold: function () {
//     for (let i = 0; i < this.hour.length; i++) {
//       let perHour = Math.round(this.randomCustomer() * this.avg);
//       this.cookiesSold.push(perHour);
//       this.total = this.cookiesSold.reduce(function (a, b) {
//         return a + b;
//       }, 0);
//     }
//     return this.total, this.cookiesSold;
//   },
//   render: function () {
//     let sales = document.createElement('ul');
//     sales.textContent = `${this.name} Store`;
//     salesList.appendChild(sales);
//     for (let i = 0; i < this.hour.length; i++) {
//       let perHour = document.createElement('li');
//       perHour.textContent = `${this.hour[i]}: ${this.cookiesSold[i]} cookies sold`;
//       sales.appendChild(perHour);
//     }
//     let totalHour = document.createElement('li');
//     totalHour.textContent = `Total: ${this.total} cookies sold`;
//     sales.appendChild(totalHour);
//   }
// };

// seattle.totalCookiesSold();
// seattle.render();

// let tokyo = {
//   name: 'Tokyo',
//   hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   total: 0,
//   cookiesSold: [],
//   randomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   totalCookiesSold: function () {
//     for (let i = 0; i < this.hour.length; i++) {
//       let perHour = Math.round(this.randomCustomer() * this.avg);
//       this.cookiesSold.push(perHour);
//       this.total = this.cookiesSold.reduce(function (a, b) {
//         return a + b;
//       }, 0);
//     }
//     return this.total, this.cookiesSold;
//   },
//   render: function () {
//     let sales = document.createElement('ul');
//     sales.textContent = `${this.name} Store`;
//     salesList.appendChild(sales);
//     for (let i = 0; i < this.hour.length; i++) {
//       let perHour = document.createElement('li');
//       perHour.textContent = `${this.hour[i]}: ${this.cookiesSold[i]} cookies sold`;
//       sales.appendChild(perHour);
//     }
//     let totalHour = document.createElement('li');
//     totalHour.textContent = `Total: ${this.total} cookies sold`;
//     sales.appendChild(totalHour);
//   }
// };

// tokyo.totalCookiesSold();
// tokyo.render();

// let dubai = {
//   name: 'Dubai',
//   hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   total: 0,
//   cookiesSold: [],
//   randomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   totalCookiesSold: function () {
//     for (let i = 0; i < this.hour.length; i++) {
//       let perHour = Math.round(this.randomCustomer() * this.avg);
//       this.cookiesSold.push(perHour);
//       this.total = this.cookiesSold.reduce(function (a, b) {
//         return a + b;
//       }, 0);
//     }
//     return this.total, this.cookiesSold;
//   },
//   render: function () {
//     let sales = document.createElement('ul');
//     sales.textContent = `${this.name} Store`;
//     salesList.appendChild(sales);
//     for (let i = 0; i < this.hour.length; i++) {
//       let perHour = document.createElement('li');
//       perHour.textContent = `${this.hour[i]}: ${this.cookiesSold[i]} cookies sold`;
//       sales.appendChild(perHour);
//     }
//     let totalHour = document.createElement('li');
//     totalHour.textContent = `Total: ${this.total} cookies sold`;
//     sales.appendChild(totalHour);
//   }
// };

// dubai.totalCookiesSold();
// dubai.render();

// let paris = {
//   name: 'Paris',
//   hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   total: 0,
//   cookiesSold: [],
//   randomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   totalCookiesSold: function () {
//     for (let i = 0; i < this.hour.length; i++) {
//       let perHour = Math.round(this.randomCustomer() * this.avg);
//       this.cookiesSold.push(perHour);
//       this.total = this.cookiesSold.reduce(function (a, b) {
//         return a + b;
//       }, 0);
//     }
//     return this.total, this.cookiesSold;
//   },
//   render: function () {
//     let sales = document.createElement('ul');
//     sales.textContent = `${this.name} Store`;
//     salesList.appendChild(sales);
//     for (let i = 0; i < this.hour.length; i++) {
//       let perHour = document.createElement('li');
//       perHour.textContent = `${this.hour[i]}: ${this.cookiesSold[i]} cookies sold`;
//       sales.appendChild(perHour);
//     }
//     let totalHour = document.createElement('li');
//     totalHour.textContent = `Total: ${this.total} cookies sold`;
//     sales.appendChild(totalHour);
//   }
// };

// paris.totalCookiesSold();
// paris.render();

// let lima = {
//   name: 'Lima',
//   hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   total: 0,
//   cookiesSold: [],
//   randomCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   totalCookiesSold: function () {
//     for (let i = 0; i < this.hour.length; i++) {
//       let perHour = Math.round(this.randomCustomer() * this.avg);
//       this.cookiesSold.push(perHour);
//       this.total = this.cookiesSold.reduce(function (a, b) {
//         return a + b;
//       }, 0);
//     }
//     return this.total, this.cookiesSold;
//   },
//   render: function () {
//     let sales = document.createElement('ul');
//     sales.textContent = `${this.name} Store`;
//     salesList.appendChild(sales);
//     for (let i = 0; i < this.hour.length; i++) {
//       let perHour = document.createElement('li');
//       perHour.textContent = `${this.hour[i]}: ${this.cookiesSold[i]} cookies sold`;
//       sales.appendChild(perHour);
//     }
//     let totalHour = document.createElement('li');
//     totalHour.textContent = `Total: ${this.total} cookies sold`;
//     sales.appendChild(totalHour);
//   }
// };

// lima.totalCookiesSold();
// lima.render();

// let storesSales = {
//   sales: [seattle.cookiesSold, tokyo.cookiesSold, dubai.cookiesSold, paris.cookiesSold, lima.cookiesSold],
//   totalSales: [seattle.total, tokyo.total, dubai.total, paris.total, lima.total]
// };

// console.log(storesSales.sales);
// console.log(storesSales.totalSales);

const tableHeader = document.querySelector('#salesTable thead');
const tableBody = document.querySelector('#salesTable tbody');

let tHead = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
  for (let i = 0; i < tHead.length; i++) {
    let th = document.createElement('th');
    th.textContent = `${tHead[i]}`;
    tableHeader.appendChild(th);
  }
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
  for (let i = 0; i < hours.length; i++) {
    let total = 0;
    let hourTotal = [];
    for (let j = 0; j < hours.length; j++) {
      total += salesArray[i].cookiesSold[j];
      return total;
    }
    hourTotal.push(total);
    let th = document.createElement('th');
    th.textContent = `${hourTotal[i]}`;
    tableBody.appendChild(th);
  }
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
