let id;
let teamId;

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46",
//     "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
//   },
// };

// original code
// grabs all teams in homepage.handlebars
const choice = document.getElementsByClassName("nba");

// once clicked, grabs id and changes route
const team = (event) => {
  let clicked = event.target;
  console.dir(event.target);
  id = clicked.parentElement.id;
  console.log(id);
  window.location.href = "/api/game/" + id;
};

for (let i = 0; i < choice.length; i++) {
  const img = choice[i];
  img.addEventListener("click", team);
}

// API returns all NBA teams
// when logo is clicked, matches id with nickname key in API object and returns team id from array
// fetch("https://api-nba-v1.p.rapidapi.com/teams", options)
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response.response);
//     console.log(window.location.pathname.split("/").pop());
//     id = window.location.pathname.split("/").pop();
//     for (let i = 0; i < response.response.length; i++) {
//       if (id === response.response[i].nickname) {
//         teamId = response.response[i].id;
//         console.log(teamId);
//       };
//     }
//   })
//   .catch((err) => console.error(err));

// brainstorm...
// function?
// async await
// if else statements
// if id === hawks, grab their currents stats?
// choose another team and call the same function (call it twice)
// render predictions page with both teams' stats showing
// and when they play each other?

// brainstorm part 2
// fetch in click event?
// match id with nickname in array
// if response.response.nickname === id
