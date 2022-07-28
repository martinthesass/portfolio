/*=========
VIEW
==========*/

let view = {
  displayMessage: function (msg) {
    let messageArea = document.getElementById("messagearea");
    messageArea.innerHTML = msg;
  },

  displayHit: function (location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },

  displayMiss: function (location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  },
};

/*=========
MODEL
==========*/

let model = {
  boardsize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] },
  ],

  /*check is sunk?*/

  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];

      let index = ship.locations.indexOf(guess);

      /*players guess*/
      if (index >= 0) {
        ship.hits[index] = "hit";

        view.displayHit(guess);
        view.displayMessage("HIT!");

        if (this.isSunk(ship)) {
          view.displayMessage("im sunk!");
          this.shipsSunk++;
        }

        return true;
      }
    }

    view.displayMiss(guess);
    view.displayMessage("no hit sucka!");

    return false;
  },

  isSunk: function (ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  },

  generateShipLocations: function () {
    let locations;

    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));

      this.ships[i].locations = locations;
    }
  },

  generateShip: function () {
    let direction = Math.floor(Math.random() * 2);

    let row;

    let col;

    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardsize);
      col = Math.floor(
        Math.random() * (this.boardsize - (this.shipLength + 1))
      );
    } else {
      row = Math.floor(
        Math.random() * (this.boardsize - (this.shipLength + 1))
      );
      col = Math.floor(Math.random() * this.boardsize);
    }

    let newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push(row + i + "" + col);
      }
    }
    return newShipLocations;
  },

  collision: function (locations) {
    for (var i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];

      for (var j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  },
};

/*CONTROLLER*/

let controller = {
  guesses: 0,

  processGuess: function (guess) {
    let location = parseGuess(guess);

    if (location) {
      this.guesses++;
      let hit = model.fire(location);

      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(
          "you sank all my battleships in " + this.guesses + " guesses"
        );
      }
    }
  },
};

function parseGuess(guess) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g"];

  if (guess === null || guess.length !== 2) {
    alert("enter a letter and number");
  } else {
    let firstCharacter = guess.charAt(0);
    let row = alphabet.indexOf(firstCharacter);

    let column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert("oops that is not on the board");
    } else if (
      row < 0 ||
      row >= model.boardsize ||
      column < 0 ||
      column >= model.boardsize
    ) {
      alert("oops thats off the board");
    } else {
      return row + column;
    }
  }
  return null;
}

/*GET PLAYERS GUESS*/

function init() {
  let fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  let guessInput = document.getElementById("guessInput");
  guessInput.onkeydown = handleKeyPress;

  model.generateShipLocations();
}

function handleKeyPress(e) {
  let fireButton = document.getElementById("fireButton");
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

function handleFireButton() {
  let guessInput = document.getElementById("guessInput");
  let guess = guessInput.value;
  controller.processGuess(guess);
  guessInput.value = "";
}

window.onload = init;

/*Generate random ships*/
