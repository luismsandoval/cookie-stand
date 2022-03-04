'use strict';

const salesList = document.getElementById('salesList');

let seattle = {
  name: 'Seattle',
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  min: 23,
  max: 65,
  avg: 6.3,
  total: 0,
  cookiesSold: [],
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  totalCookiesSold: function () {
    for (let i = 0; i < this.hour.length; i++) {
      let perHour = Math.round(this.randomCustomer() * this.avg);
      this.cookiesSold.push(perHour);
      this.total = this.cookiesSold.reduce(function (a, b) {
        return a + b;
      }, 0);
    }
    return this.total, this.cookiesSold;
  },
  render: function () {
    let sales = document.createElement('ul');
    sales.textContent = `${this.name} Store`;
    salesList.appendChild(sales);
    for (let i = 0; i < this.hour.length; i++) {
      let perHour = document.createElement('li');
      perHour.textContent = `${this.hour[i]}: ${this.cookiesSold[i]} cookies sold`;
      sales.appendChild(perHour);
    }
    let totalHour = document.createElement('li');
    totalHour.textContent = `Total: ${this.total} cookies sold`;
    sales.appendChild(totalHour);
  }
};

seattle.totalCookiesSold();
seattle.render();

let tokyo = {
  name: 'Tokyo',
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  min: 3,
  max: 24,
  avg: 1.2,
  total: 0,
  cookiesSold: [],
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  totalCookiesSold: function () {
    for (let i = 0; i < this.hour.length; i++) {
      let perHour = Math.round(this.randomCustomer() * this.avg);
      this.cookiesSold.push(perHour);
      this.total = this.cookiesSold.reduce(function (a, b) {
        return a + b;
      }, 0);
    }
    return this.total, this.cookiesSold;
  },
  render: function () {
    let sales = document.createElement('ul');
    sales.textContent = `${this.name} Store`;
    salesList.appendChild(sales);
    for (let i = 0; i < this.hour.length; i++) {
      let perHour = document.createElement('li');
      perHour.textContent = `${this.hour[i]}: ${this.cookiesSold[i]} cookies sold`;
      sales.appendChild(perHour);
    }
    let totalHour = document.createElement('li');
    totalHour.textContent = `Total: ${this.total} cookies sold`;
    sales.appendChild(totalHour);
  }
};

tokyo.totalCookiesSold();
tokyo.render();

let dubai = {
  name: 'Dubai',
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  min: 11,
  max: 38,
  avg: 3.7,
  total: 0,
  cookiesSold: [],
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  totalCookiesSold: function () {
    for (let i = 0; i < this.hour.length; i++) {
      let perHour = Math.round(this.randomCustomer() * this.avg);
      this.cookiesSold.push(perHour);
      this.total = this.cookiesSold.reduce(function (a, b) {
        return a + b;
      }, 0);
    }
    return this.total, this.cookiesSold;
  },
  render: function () {
    let sales = document.createElement('ul');
    sales.textContent = `${this.name} Store`;
    salesList.appendChild(sales);
    for (let i = 0; i < this.hour.length; i++) {
      let perHour = document.createElement('li');
      perHour.textContent = `${this.hour[i]}: ${this.cookiesSold[i]} cookies sold`;
      sales.appendChild(perHour);
    }
    let totalHour = document.createElement('li');
    totalHour.textContent = `Total: ${this.total} cookies sold`;
    sales.appendChild(totalHour);
  }
};

dubai.totalCookiesSold();
dubai.render();

let paris = {
  name: 'Paris',
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  min: 20,
  max: 38,
  avg: 2.3,
  total: 0,
  cookiesSold: [],
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  totalCookiesSold: function () {
    for (let i = 0; i < this.hour.length; i++) {
      let perHour = Math.round(this.randomCustomer() * this.avg);
      this.cookiesSold.push(perHour);
      this.total = this.cookiesSold.reduce(function (a, b) {
        return a + b;
      }, 0);
    }
    return this.total, this.cookiesSold;
  },
  render: function() {
    let sales = document.createElement('ul');
    sales.textContent = `${this.name} Store`;
    salesList.appendChild(sales);
    for (let i = 0; i < this.hour.length; i++) {
      let perHour = document.createElement('li');
      perHour.textContent = `${this.hour[i]}: ${this.cookiesSold[i]} cookies sold`;
      sales.appendChild(perHour);
    }
    let totalHour = document.createElement('li');
    totalHour.textContent = `Total: ${this.total} cookies sold`;
    sales.appendChild(totalHour);
  }
};

paris.totalCookiesSold();
paris.render();

let lima = {
  name: 'Lima',
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  min: 2,
  max: 16,
  avg: 4.6,
  total: 0,
  cookiesSold: [],
  randomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  totalCookiesSold: function () {
    for (let i = 0; i < this.hour.length; i++) {
      let perHour = Math.round(this.randomCustomer() * this.avg);
      this.cookiesSold.push(perHour);
      this.total = this.cookiesSold.reduce(function (a, b) {
        return a + b;
      }, 0);
    }
    return this.total, this.cookiesSold;
  },
  render: function () {
    let sales = document.createElement('ul');
    sales.textContent = `${this.name} Store`;
    salesList.appendChild(sales);
    for (let i = 0; i < this.hour.length; i++) {
      let perHour = document.createElement('li');
      perHour.textContent = `${this.hour[i]}: ${this.cookiesSold[i]} cookies sold`;
      sales.appendChild(perHour);
    }
    let totalHour = document.createElement('li');
    totalHour.textContent = `Total: ${this.total} cookies sold`;
    sales.appendChild(totalHour);
  }
};

lima.totalCookiesSold();
lima.render();
