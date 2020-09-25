/* 
Plans:

you can make different social media accounts
pages 

Upgrades:
Gados imcrease the amount of friends they have
Wapp groups forward the messages to their friends

You can buy bots that do posts more often during the day.
You can put the bots in the wapp groups

etc etc
I guess the point of the game is to show how you can get a huge reach on the internet and get people to
share your content.

Cite Animal Farm in something related to the cows.

*/

let currentReach = 0;
let postsPerSecond = 0;
let postPerSecondInterval;

startPerSecondInterval();

function postButtonAction() {
  currentReach += friendsNumber;
  updateCurrentReachText();
}

function updateReachPerSecondValue() {
  postsPerSecond = gadoReachPerSecond + wappReachPerSecond;
}

function updateReachPerSecondText() {
  if (postsPerSecond < 10) {
    document
      .getElementsByClassName("reach-score__per-second")[0]
      .getElementsByTagName("span")[0].innerHTML = +postsPerSecond.toFixed(4);
  } else if (postsPerSecond < 100) {
    document
      .getElementsByClassName("reach-score__per-second")[0]
      .getElementsByTagName("span")[0].innerHTML = +postsPerSecond.toFixed(3);
  } else if (postsPerSecond < 1000) {
    document
      .getElementsByClassName("reach-score__per-second")[0]
      .getElementsByTagName("span")[0].innerHTML = +postsPerSecond.toFixed(2);
  } else if (postsPerSecond < 10000) {
    document
      .getElementsByClassName("reach-score__per-second")[0]
      .getElementsByTagName("span")[0].innerHTML = +postsPerSecond.toFixed(1);
  } else {
    document
      .getElementsByClassName("reach-score__per-second")[0]
      .getElementsByTagName("span")[0].innerHTML = +postsPerSecond.toFixed(0);
  }
}

function updateCurrentReachText() {
  document
    .getElementsByClassName("reach-score__value")[0]
    .getElementsByTagName("span")[0].innerHTML = +currentReach.toFixed(0);
}

/* 
***************************************************************************************
EVERY SECOND BEHAVIOR
***************************************************************************************
*/

function startPerSecondInterval() {
  postPerSecondInterval = setInterval(loopFunction, 1000);
}

function loopFunction() {
  currentReach = currentReach + postsPerSecond;
  updateCurrentReachText();
}

/* 
***************************************************************************************
FRIENDS
***************************************************************************************
*/

let friendsNumber = 1;
let friendNecessaryReach = 20;

function addOneFriend() {
  if (currentReach >= friendNecessaryReach) {
    friendsNumber++;
    currentReach = currentReach - friendNecessaryReach;
    friendNecessaryReach = friendNecessaryReach + 5 * friendsNumber;
    updateCurrentReachText();
    updateFriendsText();
  }
}

function updateFriendsText() {
  document
    .getElementsByClassName("friends__number")[0]
    .getElementsByTagName("span")[0].innerHTML = +friendsNumber;

  document
    .getElementsByClassName("friends__next")[0]
    .getElementsByTagName("span")[0].innerHTML = +friendNecessaryReach;
}

/* 
***************************************************************************************
GADOS
***************************************************************************************
*/

let gadoNumber = 0;
let gadoNecessaryReach = 130;
let gadoPostsPerSecond = 0;
let gadoReachPerSecond = 0;
let gadoAverageFriends = 5;

function addOneGado() {
  if (currentReach >= gadoNecessaryReach) {
    gadoNumber = gadoNumber + 1;
    currentReach = currentReach - gadoNecessaryReach;
    gadoReachPerSecond = (gadoNumber * gadoAverageFriends) / 60 / 60;
    gadoNecessaryReach = gadoNecessaryReach + 10 * gadoNumber;
    updateCurrentReachText();
    updateReachPerSecondValue();
    updateReachPerSecondText();
    updateGadoText();
  }
}

function updateGadoText() {
  document
    .getElementsByClassName("gado__number")[0]
    .getElementsByTagName("span")[0].innerHTML = +gadoNumber;

  document
    .getElementsByClassName("gado__next")[0]
    .getElementsByTagName("span")[0].innerHTML = +gadoNecessaryReach;
}

/* 
***************************************************************************************
WAPP
***************************************************************************************
*/

let wappNumber = 0;
let wappNecessaryReach = 560;
let wappPostsPerSecond = 0;
let wappReachPerSecond = 0;
let wappAverageParticipantNumber = 30;

function addOneWapp() {
  if (currentReach >= wappNecessaryReach) {
    wappNumber = wappNumber + 1;
    currentReach = currentReach - wappNecessaryReach;
    wappReachPerSecond = (wappNumber * wappAverageParticipantNumber) / 60 / 60;
    wappNecessaryReach = wappNecessaryReach + 20 * wappNumber;
    updateCurrentReachText();
    updateReachPerSecondValue();
    updateReachPerSecondText();
    updateWappText();
  }
}

function updateWappText() {
  document
    .getElementsByClassName("wapp__number")[0]
    .getElementsByTagName("span")[0].innerHTML = +wappNumber;

  document
    .getElementsByClassName("wapp__next")[0]
    .getElementsByTagName("span")[0].innerHTML = +wappNecessaryReach;
}
