const playerHand = document.getElementById("player-hand");
const opponentHand = document.getElementById("opponent-hand");
const centerPile = document.getElementById("center-pile");
const playButton = document.getElementById("play-button");

const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let playerDeck = shuffle([...cards]);
let opponentDeck = shuffle([...cards]);
let centerCards = [];

function shuffle(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function drawCard(deck, hand) {
  if (deck.length > 0) {
    const card = deck.pop();
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.textContent = card;
    hand.appendChild(cardElement);
    return card;
  }
  return null;
}

function playTurn() {
  const playerCard = drawCard(playerDeck, playerHand);
  const opponentCard = drawCard(opponentDeck, opponentHand);

  if (playerCard && opponentCard) {
    centerCards.push(playerCard, opponentCard);
    centerPile.textContent = centerCards.join(" ");
  } else {
    alert("ゲーム終了！");
    playButton.disabled = true;
  }
}

playButton.addEventListener("click", playTurn);
