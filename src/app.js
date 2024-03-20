const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo",
];

// initialize players with image and strength
const initPlayers = (players) => {
  let detailedPlayers = [];

  for (let i = 0; i < players.length; i++) {
    let obj = {};

    obj.id = i + 1;
    obj.name = players[i];
    obj.strength = getRandomStrength();
    obj.image= `images/super-${obj.id}.png`
    obj.type=(i%2===0?"hero":"villain");

    detailedPlayers.push(obj);
  }

  // Create players using for loop
  // Type your code here

  console.log(detailedPlayers);
  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  // Return a random integer (0,100]
  // Note: You can use Math.random() and Math.ceil()
  return Math.floor(Math.random() * 101);
};

const buildPlayers = (players, type) => {
  let fragment ="";

// console.log(players,type)
for(let i=0;i<players.length;i++){
    if(players[i].type==type){
        console.log(players[i])
       fragment= fragment+` <div class="player">
        <img src="${players[i].image}" alt="">
        <div class="name">${players[i].name}</div>
        <div class="strength">${players[i].strength}</div>
     </div>`
    }
}
// console.log(players)
  // Loop through players and accumulate HTML template
  // depending of type of player(hero|villain)
  // Type your code here

  return fragment;
};
// Display players in HTML
const viewPlayers = (players) => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
