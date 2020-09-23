/* 
Plans:
I want to make gados be convinced by the reach, and not by a click. Something like each 100 posts converts
a gado.

Now, I need to have a money like entity, to be the entity that buy things. And it can't be the posts reach,
this is exclusive to gathering new gados

This money entity will be responsible for buying the means that increase the abilities of my posts and the 
posts of each gado.
Initially, each of my clicks makes a post. And gados make a post every some time (It would be good here to have
  a statistic of posts per day that a person does).
then player can buy things that increase this number.

For example, 
you can make different social media accounts, now each click will post on each of the accounts.
you can make Wapp groups, each of your clicks posts on the wapp groups too, and the wapp group posts are 
fowarded to other people. So 1 post in a wapp group generates more posts through sharing
You can buy bots that do posts more often during the day.
You can put the bots in the wapp groups

etc etc
I guess the point of the game is to show how you can get a huge reach on the internet and get people to
share your content.

Cite Animal Farm in something related to the cows.

*/

let reachCurrentValue = 0;
let postsPerSecond = 0;
let postPerSecondInterval;
let gadoNumber = 0;
let gadoPostsPerSecond = 0;

startPostPerSecondInterval();

function postButtonAction() {
  reachCurrentValue++;
  updateReachScoreValueText();
}

function addOneGado() {
  gadoPostsPerSecond = gadoPostsPerSecond + 1 / 60;
  gadoNumber++;
  updatePostsPerSecondValue();
  updatePostsPerSecondText();
  updateGadoText();
}

function updatePostsPerSecondValue() {
  postsPerSecond = gadoPostsPerSecond;
}

function updatePostsPerSecondText() {
  document
    .getElementsByClassName("reach-score__per-second")[0]
    .getElementsByTagName("span")[1].innerHTML = +postsPerSecond.toFixed(2);

  if (postsPerSecond > 0 && postsPerSecond < 2) {
    document
      .getElementsByClassName("reach-score__per-second")[0]
      .getElementsByTagName("span")[0].innerHTML = "Postagem";
  } else if (postsPerSecond >= 2) {
    document
      .getElementsByClassName("reach-score__per-second")[0]
      .getElementsByTagName("span")[0].innerHTML = "Postagens";
  }
}

function updateReachScoreValueText() {
  document
    .getElementsByClassName("reach-score__value")[0]
    .getElementsByTagName("span")[0].innerHTML = +reachCurrentValue.toFixed(2);

  if (reachCurrentValue > 0 && reachCurrentValue < 2) {
    document
      .getElementsByClassName("reach-score__value")[0]
      .getElementsByTagName("span")[1].innerHTML = "postagem";
  } else if (reachCurrentValue >= 2) {
    document
      .getElementsByClassName("reach-score__value")[0]
      .getElementsByTagName("span")[1].innerHTML = "postagens";
  }
}

function updateGadoText() {
  document
    .getElementsByClassName("gado-button__value")[0]
    .getElementsByTagName("span")[0].innerHTML = +gadoNumber.toFixed(2);

  document
    .getElementsByClassName("gado-button__per-second")[0]
    .getElementsByTagName("span")[0].innerHTML = +gadoPostsPerSecond.toFixed(2);
}

function startPostPerSecondInterval() {
  postPerSecondInterval = setInterval(function() {
    reachCurrentValue = reachCurrentValue + postsPerSecond;
    updateReachScoreValueText();
  }, 1000);
}
