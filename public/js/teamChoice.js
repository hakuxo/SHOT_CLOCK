let id;
let teamId;
let firstChoice;
let chosenTeam;

const teamInfo = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

const teamStats = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

// grabs all teams in homepage.handlebars
const choice = document.getElementsByClassName("nba");

// once clicked, grabs id and changes route
function teamOne(event) {
  let clicked = event.target;
  console.dir(event.target);
  id = clicked.parentElement.id;
  console.log(id);
  chosenTeam = document.getElementById(id);
  chosenTeam.style.boxShadow = "10px";
  stats();
  
  // make a new function for team 2 that includes this line so the route changes?
  // but it's needed in the stats function (line 51) so ??????
  window.location.href = "/api/game/" + id;
}





for (let i = 0; i < choice.length; i++) {
  const img = choice[i];
  img.addEventListener("click", teamOne);
}

// // API returns all NBA teams
// // when logo is clicked, matches id with nickname key in API object and returns team id from array
function stats() {
  fetch("https://api-nba-v1.p.rapidapi.com/teams", teamInfo)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.response);
      console.log(window.location.pathname.split("/").pop());
      id = window.location.pathname.split("/").pop();
      for (let i = 0; i < response.response.length; i++) {
        if (id === response.response[i].nickname) {
          teamId = response.response[i].id;
          console.log(teamId);
        }
      }
      fetch(
        "https://api-nba-v1.p.rapidapi.com/teams/statistics?id=" +
          teamId +
          "&season=2022",
        teamStats
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(teamId);
          response.parameters["id"] = teamId;
          console.log(response.parameters);
          console.log(response);
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
}

// brainstorm...
// function?
// async await
// if else statements
// if id === hawks, grab their currents stats?
// choose another team and call the same function (call it twice)
// render predictions page with both teams' stats showing
// and when they play each other?

// brainstorm part 2
// choose team 1
// put team info in handlebars
// choose second team
// put team info in handlebars and render to predictions page
