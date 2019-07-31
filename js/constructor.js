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
Store.totalCookiesPerHour= [];
Store.setupCookieArray= function() {
  for (var i = 0; i < hoursInDay; i++) {
    Store.totalCookiesPerHour.push(0);
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
    Store.totalCookiesPerHour[i] += oneHour;
  }
}
Store.prototype.render= function() {
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


function renderHeader(){
  var thead = document.querySelector("thead");
  var tr = document.createElement("tr");
  thead.appendChild(tr);
  var td = document.createElement("td");
  tr.appendChild(td);
  for (var i = 6; i < hoursInDay+6; i++) {
    var td = document.createElement("td");
    var time = i%12 !== 0 ? i%12 : i;
    time += i<12 ? "am" : "pm";
    td.textContent = time;
    tr.appendChild(td);
  }
  td = document.createElement("td");
  td.textContent = "Total";
  tr.appendChild(td);
}

function renderFooter(){
  var tfoot = document.querySelector("tfoot");
  var tr = document.createElement("tr");
  tfoot.appendChild(tr);
  var td = document.createElement("td");
  td.textContent = "Total";
  tr.appendChild(td);
  var totalCookies= 0;
  for (var i = 0; i < hoursInDay; i++){
    var td = document.createElement("td");
    td.textContent = Store.totalCookiesPerHour[i];
    tr.appendChild(td);
    totalCookies += Store.totalCookiesPerHour[i];
  }
  var td = document.createElement("td");
  td.textContent = totalCookies;
  tr.appendChild(td);
}
//create variable to hold all shops and assign an empty array
var allShops = []; //add my stores

(function renderAllShops() {
  allShops.push(new Store("1st and Pike", 23, 65, 6.3));
  allShops.push(new Store("SeaTac Airport", 3, 24, 1.2));
  allShops.push(new Store("Seattle Center", 11, 38, 3.7));
  allShops.push(new Store("Capitol Hill", 20, 38, 2.3));
  allShops.push(new Store("Alki", 2, 16, 4.6));
  Store.setupCookieArray();
  renderHeader();
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
  renderFooter();
})();