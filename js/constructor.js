"use strict";
//try using military time instead
var hoursInDay = 13;

var Store= function(name, min, max, avg){
  this.locationName= name;
  this.minCustomersPerHour= min;
  this.maxCustomersPerHour= max;
  this.avgCookiesPerSale= avg;
  this.customersEachHour= [];
  this.cookiesEachHour= [];
  this.totalDailyCookies= 0;
}
Store.prototype.totalCookiesPerHour= [];
Store.prototype.setupCookieArray= function() {
  for (var i = 0; i < hoursInDay; i++) {
    this.totalCookiesPerHour.push(0);
  }
}
Store.prototype.calcCustomersEachHour= function() {
  for (var i = 0; i < hoursInDay; i++) {
    this.customersEachHour.push(
      Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) +
        this.minCustomersPerHour
    );
  }
}
Store.prototype.calcCookiesEachHour= function() {
  this.calcCustomersEachHour();
  for (var i = 0; i < hoursInDay; i++) {
    var oneHour = Math.ceil(
      this.customersEachHour[i] * this.avgCookiesPerSale
    );
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
    this.totalCookiesPerHour [i] += oneHour;
  }
}
Store.prototype.render= function() {
  this.setupCookieArray();
  this.calcCookiesEachHour();
  var tbody = document.querySelector("tbody");
  var tr = document.createElement("tr");
  tbody.appendChild(tr);
  var td = document.createElement("td");
  td.textContent = this.locationName;
  tr.appendChild(td);
  for (var i = 0; i < hoursInDay; i++) {
    var td = document.createElement("td");
    td.textContent = this.cookiesEachHour[i];
    tr.appendChild(td);
  }
  td = document.createElement("td");
  td.textContent = this.totalDailyCookies;
  tr.appendChild(td);
}

//create variable to hold all shops and assign an empty array
var allShops = []; //add my stores

(function renderAllShops() {
  allShops.push(new Store("1st and Pike", 23, 65, 6.3));
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
})();