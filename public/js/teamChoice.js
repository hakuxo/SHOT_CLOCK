// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46",
//     "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
//   },
// };

// fetch("https://api-nba-v1.p.rapidapi.com/teams", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const choice = document.getElementsByClassName("nba");

const team = (event) => {
  let clicked = event.target;
  console.dir(event.target);
  let id = clicked.parentElement.id;
  console.log(id);
  window.location.href = "/api/game/" + id;
};

for (let i = 0; i < choice.length; i++) {
  const img = choice[i];
  img.addEventListener("click", team);
}

// brainstorm...
// function?
// async await
// if else statements
// if id === hawks, grab their currents stats?
// choose another team and call the same function (call it twice)
// render predictions page with both teams' stats showing
// and when they play each other?
