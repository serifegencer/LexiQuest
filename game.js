const categories = {
  family: [
    { english: "mother", turkish: "anne" },
    { english: "father", turkish: "baba" },
    { english: "brother", turkish: "erkek kardeş" },
    { english: "sister", turkish: "kız kardeş" },
    { english: "son", turkish: "oğul" },
    { english: "daughter", turkish: "kız evlat" },
    { english: "uncle", turkish: "amca" },
    { english: "aunt", turkish: "hala" },
    { english: "cousin", turkish: "kuzen" },
    { english: "grandparents", turkish: "büyükanne ve büyükbaba" },
  ],
  body: [
    { english: "head", turkish: "baş" },
    { english: "eye", turkish: "göz" },
    { english: "ear", turkish: "kulak" },
    { english: "nose", turkish: "burun" },
    { english: "mouth", turkish: "ağız" },
    { english: "arm", turkish: "kol" },
    { english: "leg", turkish: "bacak" },
    { english: "finger", turkish: "parmak" },
    { english: "foot", turkish: "ayak" },
    { english: "back", turkish: "sırt" },
  ],
  jobs: [
    { english: "doctor", turkish: "doktor" },
    { english: "teacher", turkish: "öğretmen" },
    { english: "engineer", turkish: "mühendis" },
    { english: "lawyer", turkish: "avukat" },
    { english: "nurse", turkish: "hemşire" },
    { english: "chef", turkish: "aşçı" },
    { english: "artist", turkish: "sanatçı" },
    { english: "driver", turkish: "şoför" },
    { english: "scientist", turkish: "bilim insanı" },
    { english: "architect", turkish: "mimar" },
  ],

  food: [
    { english: "apple", turkish: "elma" },
    { english: "banana", turkish: "muz" },
    { english: "bread", turkish: "ekmek" },
    { english: "cheese", turkish: "peynir" },
    { english: "chicken", turkish: "tavuk" },
    { english: "fish", turkish: "balık" },
    { english: "milk", turkish: "süt" },
    { english: "water", turkish: "su" },
  ],

  animals: [
    { english: "dog", turkish: "köpek" },
    { english: "cat", turkish: "kedi" },
    { english: "horse", turkish: "at" },
    { english: "elephant", turkish: "fil" },
    { english: "lion", turkish: "aslan" },
    { english: "tiger", turkish: "kaplan" },
    { english: "rabbit", turkish: "tavşan" },
    { english: "bear", turkish: "ayı" },
  ],

  weather: [
    { english: "sunny", turkish: "güneşli" },
    { english: "rainy", turkish: "yağmurlu" },
    { english: "cloudy", turkish: "bulutlu" },
    { english: "snowy", turkish: "kar yağışlı" },
    { english: "windy", turkish: "rüzgarlı" },
    { english: "stormy", turkish: "fırtınalı" },
    { english: "foggy", turkish: "sisli" },
    { english: "hot", turkish: "sıcak" },
    { english: "cold", turkish: "soğuk" },
    { english: "humid", turkish: "nemli" },
  ],
  furniture: [
    { english: "chair", turkish: "sandalye" },
    { english: "table", turkish: "masa" },
    { english: "sofa", turkish: "koltuk" },
    { english: "bed", turkish: "yatak" },
    { english: "lamp", turkish: "lamba" },
    { english: "cupboard", turkish: "dolap" },
    { english: "shelf", turkish: "raf" },
    { english: "wardrobe", turkish: "gardırop" },
  ],
  color: [
    { english: "red", turkish: "kırmızı" },
    { english: "blue", turkish: "mavi" },
    { english: "green", turkish: "yeşil" },
    { english: "yellow", turkish: "sarı" },
    { english: "orange", turkish: "turuncu" },
    { english: "purple", turkish: "mor" },
    { english: "black", turkish: "siyah" },
    { english: "white", turkish: "beyaz" },
  ],
  clothes: [
    { english: "shirt", turkish: "gömlek" },
    { english: "pants", turkish: "pantolon" },
    { english: "dress", turkish: "elbise" },
    { english: "jacket", turkish: "ceket" },
    { english: "shoes", turkish: "ayakkabı" },
    { english: "socks", turkish: "çorap" },
    { english: "hat", turkish: "şapka" },
    { english: "scarf", turkish: "atkı" },
  ],
  transportation: [
    { english: "car", turkish: "araba" },
    { english: "bus", turkish: "otobüs" },
    { english: "train", turkish: "tren" },
    { english: "airplane", turkish: "uçak" },
    { english: "bike", turkish: "bisiklet" },
    { english: "boat", turkish: "tekne" },
    { english: "ship", turkish: "gemi" },
    { english: "subway", turkish: "metro" },
    { english: "truck", turkish: "kamyon" },
    { english: "taxi", turkish: "taksi" },
    { english: "scooter", turkish: "scooter" },
    { english: "motorcycle", turkish: "motosiklet" },
    { english: "helicopter", turkish: "helikopter" },
    { english: "train station", turkish: "tren istasyonu" },
    { english: "airport", turkish: "havaalanı" },
    { english: "bus station", turkish: "otobüs terminali" },
    { english: "ferry", turkish: "feribot" },
    { english: "parking lot", turkish: "otopark" },
    { english: "ride", turkish: "yolculuk" },
    { english: "trip", turkish: "seyahat" },
  ],
  places: [
    { english: "city", turkish: "şehir" },
    { english: "park", turkish: "park" },
    { english: "beach", turkish: "plaj" },
    { english: "mountain", turkish: "dağ" },
    { english: "forest", turkish: "orman" },
    { english: "restaurant", turkish: "restoran" },
    { english: "market", turkish: "pazar" },
    { english: "school", turkish: "okul" },
    { english: "library", turkish: "kütüphane" },
    { english: "hospital", turkish: "hastane" },
    { english: "stadium", turkish: "stadyum" },
    { english: "museum", turkish: "müze" },
    { english: "theater", turkish: "tiyatro" },
    { english: "airport", turkish: "havaalanı" },
    { english: "mall", turkish: "alışveriş merkezi" },
    { english: "hotel", turkish: "otel" },
    { english: "church", turkish: "kilise" },
    { english: "temple", turkish: "tapınak" },
    { english: "square", turkish: "meydan" },
    { english: "zoo", turkish: "zoo" },
  ],
  emotions: [
    { english: "happy", turkish: "mutlu" },
    { english: "sad", turkish: "üzgün" },
    { english: "angry", turkish: "kızgın" },
    { english: "excited", turkish: "heyecanlı" },
    { english: "scared", turkish: "korkmuş" },
    { english: "nervous", turkish: "sinirli" },
    { english: "surprised", turkish: "şaşırmış" },
    { english: "calm", turkish: "sakin" },
    { english: "bored", turkish: "sıkılmış" },
    { english: "confused", turkish: "karışık" },
    { english: "proud", turkish: "gururlu" },
    { english: "embarrassed", turkish: "utanmış" },
    { english: "guilty", turkish: "suçlu" },
    { english: "hopeful", turkish: "umutlu" },
    { english: "jealous", turkish: "kıskanmış" },
    { english: "grateful", turkish: "minnettar" },
    { english: "lonely", turkish: "yalnız" },
    { english: "relieved", turkish: "rahatlamış" },
    { english: "shy", turkish: "çekingen" },
    { english: "in love", turkish: "aşık" },
  ],
};

let selectedCategory = null;
let level = 1;
let flippedCards = [];
let matchedCards = 0;
let totalCards = 8;
let maxLevel = 6;
let totalPairs = 4;
let totalCorrectMatches = 0;
let wrongMatches = 0;
let score = 0;

function startGameWithCategory(category) {
  selectedCategory = category;
  document.querySelector(".category-selection").style.display = "none"; // Hide category selection
  document.querySelector(".game-container").style.display = "block"; // Show playground
  startGame();
}

function startGame() {
  resetGame();
  createCards();
}

// function resetGame() {
//     flippedCards = [];
//     matchedCards = 0;
//     document.getElementById('level').textContent = level;
//     document.getElementById('game-over').style.display = 'none';
//     document.getElementById('next-level').style.display = 'none';
//     totalPairs = level + 3;
//     totalCards = totalPairs * 2;

//     totalCorrectMatches = 0;
//     wrongMatches = 0;
//     score = 0;
// }

function createCards() {
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";

  let shuffledWords = shuffle(
    categories[selectedCategory].slice(0, totalPairs)
  );

  let allWords = [];
  shuffledWords.forEach((pair) => {
    allWords.push(pair.english, pair.turkish);
  });

  allWords = shuffle(allWords);

  allWords.forEach((word) => {
    const card = createCard(word);
    cardsContainer.appendChild(card);
  });
}

function createCard(word) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.word = word;
  card.addEventListener("click", flipCard);
  return card;
}

function flipCard() {
  const card = this;
  if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
    card.classList.add("flipped");
    card.textContent = card.dataset.word;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  const [firstCard, secondCard] = flippedCards;

  if (
    categories[selectedCategory].some(
      (pair) =>
        pair.english === firstCard.dataset.word &&
        pair.turkish === secondCard.dataset.word
    ) ||
    categories[selectedCategory].some(
      (pair) =>
        pair.turkish === firstCard.dataset.word &&
        pair.english === secondCard.dataset.word
    )
  ) {
    matchedCards++;
    totalCorrectMatches++;
    score += 10;
    updateStats();

    if (matchedCards === totalPairs) {
      document.getElementById("game-over").style.display = "block";
      document.getElementById("next-level").style.display = "block";
    }
  } else {
    wrongMatches++;
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard.textContent = "";
      secondCard.textContent = "";
      updateStats();
    }, 1000);
  }

  flippedCards = [];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function updateStats() {
  document.getElementById(
    "stats"
  ).textContent = `Doğru Eşleşme: ${totalCorrectMatches}, Yanlış Eşleşme: ${wrongMatches}, Skor: ${score}`;
}

function nextLevel() {
  level++;
  if (level > maxLevel) {
    alert("Tebrikler! Oyunu Kazandınız! Skorunuz: " + score);
    level = 1;
    score = 0;
    totalCorrectMatches = 0;
    wrongMatches = 0;
  }
  startGame();
}

function restartLevel() {
  startGame();
}
// Return to Main Menu function
function goBackToCategory() {
  // Hide playground
  document.querySelector(".game-container").style.display = "none"; // Show category selection page
  document.querySelector(".category-selection").style.display = "block"; // Resetting game state

  resetGame();
}

// Game reset function (for restart)
function resetGame() {
  flippedCards = [];
  matchedCards = 0;
  document.getElementById("level").textContent = level;
  document.getElementById("game-over").style.display = "none";
  document.getElementById("next-level").style.display = "none";
  totalPairs = level + 3;
  totalCards = totalPairs * 2;

  totalCorrectMatches = 0;
  wrongMatches = 0;
  score = 0;
}

function restartLevel() {
  level = 1; // Will go back to level 1
  startGame(); // start game

}
// When you click on the repeat level button
function restartLevel() {
  level = 1; // Level will be reset
  startGame(); // The game will start from the beginning
}

// When the level increases
function nextLevel() {
  level++; // Level up
  if (level > maxLevel) {
    // If the upper limit of the level is reached
    alert("Tebrikler! Oyunu Kazandınız! Skorunuz: " + score);
    level = 1; // Reset level
    score = 0; // Reset score
    totalCorrectMatches = 0; // Reset correct matches
    wrongMatches = 0; //Reset wrong matches
  }
  startGame(); // Start new level
}

// Game start and start reset
function startGame() {
  resetGame(); // The game will reset
  createCards(); //New cards will be created
}

// Game reset function
function resetGame() {
  flippedCards = []; // Reset cards
  matchedCards = 0; // Reset matches
  document.getElementById("level").textContent = level; // level indicator
  document.getElementById("game-over").style.display = "none"; //Hide game over message
  document.getElementById("next-level").style.display = "none"; //Hide Next level button 
  totalPairs = level + 3; //Increase number of matches per level (difficulty will increase)
  totalCards = totalPairs * 2; // Increase number of cards
  totalCorrectMatches = 0; // Reset correct matches
  wrongMatches = 0; // Reset wrong matches
  score = 0; // Reset score
}

// Cards creation function
function createCards() {
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = ""; // Clear old cards

  let shuffledWords = shuffle(
    categories[selectedCategory].slice(0, totalPairs)
  ); // Shuffle the cards

  let allWords = [];
  shuffledWords.forEach((pair) => {
    allWords.push(pair.english, pair.turkish); // Add both English and Turkish cards
  });

  allWords = shuffle(allWords); // Shuffle all cards

  allWords.forEach((word) => {
    const card = createCard(word);
    cardsContainer.appendChild(card); // Add cards
  });
}
