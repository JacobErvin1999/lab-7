"use strict";
//try using military time instead
var hours = [
  "0600",
  "0700",
  "0800",
  "0900",
  "1000",
  "1100",
  "1200",
  "1300",
  "1400",
  "1500",
  "1600",
  "1700",
  "1800",
  "1900"
];

var pikePlace = {
  locationName: "Pike Place Market",
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) +
          this.minCustomersPerHour
      );
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(
        this.customersEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theDiv = document.getElementById("pike");
    var h3 = document.createElement("h3");
    h3.textContent = this.locationName;
    theDiv.appendChild(h3);
    var ul = document.createElement("ul");
    theDiv.appendChild(ul);
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      ul.appendChild(liEl);
    }
    liEl = document.createElement("li");
    liEl.textContent = "Total: " + this.totalDailyCookies + " cookies";
    ul.appendChild(liEl);
  }
};

var seaTac = {
  locationName: "SeaTac Airport",
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerSale: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) +
          this.minCustomersPerHour
      );
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(
        this.customersEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theDiv = document.getElementById("seaTac");
    var h3 = document.createElement("h3");
    h3.textContent = this.locationName;
    theDiv.appendChild(h3);
    var ul = document.createElement("ul");
    theDiv.appendChild(ul);
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      ul.appendChild(liEl);
    }
    liEl = document.createElement("li");
    liEl.textContent = "Total: " + this.totalDailyCookies + " cookies";
    ul.appendChild(liEl);
  }
};
var seattleCenter = {
  locationName: "Seattle Center",
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerSale: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) +
          this.minCustomersPerHour
      );
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(
        this.customersEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theDiv = document.getElementById("seattleCenter");
    var h3 = document.createElement("h3");
    h3.textContent = this.locationName;
    theDiv.appendChild(h3);
    var ul = document.createElement("ul");
    theDiv.appendChild(ul);
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      ul.appendChild(liEl);
    }
    liEl = document.createElement("li");
    liEl.textContent = "Total: " + this.totalDailyCookies + " cookies";
    ul.appendChild(liEl);
  }
};

var capitolHill = {
  locationName: "Capitol Hill",
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerSale: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) +
          this.minCustomersPerHour
      );
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(
        this.customersEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theDiv = document.getElementById("capitolHill");
    var h3 = document.createElement("h3");
    h3.textContent = this.locationName;
    theDiv.appendChild(h3);
    var ul = document.createElement("ul");
    theDiv.appendChild(ul);
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      ul.appendChild(liEl);
    }
    liEl = document.createElement("li");
    liEl.textContent = "Total: " + this.totalDailyCookies + " cookies";
    ul.appendChild(liEl);
  }
};

var alki = {
  locationName: "Alki",
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerSale: 4.6,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) +
          this.minCustomersPerHour
      );
    }
  },
  calcCustomersEachHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(
        Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) +
          this.minCustomersPerHour
      );
    }
  },
  calcCookiesEachHour: function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(
        this.customersEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCookiesEachHour();
    var theDiv = document.getElementById("alki");
    var h3 = document.createElement("h3");
    h3.textContent = this.locationName;
    theDiv.appendChild(h3);
    var ul = document.createElement("ul");
    theDiv.appendChild(ul);
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      ul.appendChild(liEl);
    }
    liEl = document.createElement("li");
    liEl.textContent = "Total: " + this.totalDailyCookies + " cookies";
    ul.appendChild(liEl);
  }
};

//create variable to hold all shops and assign an empty array
var allShops = [pikePlace, seaTac, seattleCenter, capitolHill, alki]; //add my stores

(function renderAllShops() {
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
})();

console.log("Its Working");
