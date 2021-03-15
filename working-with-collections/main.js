console.log('Lodash is loaded:', typeof _ !== 'undefined');

var cardDeck;
var shuffledDeck;
var cardsNum;

var players = [
  {
    name: 'Mario',
    hand: []
  },
  {
    name: 'Luigi',
    hand: []
  },
  {
    name: 'Peach',
    hand: []
  },
  {
    name: 'Bowser',
    hand: []
  }
];

var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var suits = ['Diamonds', 'Spades', 'Hearts', 'Clubs'];

function startGame(players, cards) {
  cardsNum = cards;
  determineWinner();
}

function createDeck() {
  cardDeck = [];
  for (var i = 0; i < ranks.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      var card = { 'rank': ranks[i], 'suit': suits[j] };
      cardDeck.push(card);
    }
  }
}

function shuffleDeck() {
  shuffledDeck = [];
  createDeck();
  for (let i = 0; i < 52; i++) {
    var num = Math.floor(Math.random() * cardDeck.length);
    let randomCard = cardDeck[num];
    shuffledDeck.push(randomCard);
    cardDeck.splice(num, 1);
  }
}

function dealCards() {
  shuffleDeck();
  for (let i = 0; i < players.length; i++) {
    if (players[i].hand[0]) {
      players[i].hand = []
    }
    for (var j = 0; j < shuffledDeck.length; j++) {
      if (players[i].hand.length < cardsNum) {
        players[i].hand.push(shuffledDeck[j]);
        shuffledDeck.splice(j, 1);
      }
    }
  }
}

function determineWinner() {
  dealCards();
  var compTotal;
  var winner;
  var tie;
  var tiedPlayers = [];
  for (var i = 0; i < players.length; i++) {
    var total = 0;
    for (var j = 0; j < players[i].hand.length; j++) {
      if (players[i].hand[j].rank === 'J' || players[i].hand[j].rank === 'Q' || players[i].hand[j].rank === 'K') {
        total += 10;
      } else if (players[i].hand[j].rank === 'A') {
        total += 11;
      } else {
        total += parseInt(players[i].hand[j].rank);
      }
    }
    if (compTotal) {
      if (total > compTotal) {
        compTotal = total;
        winner = players[i].name;
      } else if (total === compTotal) {
        tie = true;
        tiedPlayers.push({ 'name': winner, 'hand': [] });
        tiedPlayers.push({ 'name': players[i].name, 'hand': [] })
      }
    } else {
      compTotal = total;
      winner = players[i].name;
    }
  }
  if (tie) {
    startGame(tiedPlayers, 2);
  } else {
    console.log('Winner:', winner);
  }
}
