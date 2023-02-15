
let teamId;
let chosenTeam;

// general team information
const teamInfo = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

// team statistics from 2021 season
const teamStats = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

// each team in homepage.handlebars
const choice = document.getElementsByClassName("nba");

// grabs team id from API and changes route
for (let i = 0; i < choice.length; i++) {
  const img = choice[i];
  img.addEventListener("click", (event) => {
    let clicked = event.target;
    let id = clicked.parentElement.id;
    chosenTeam = document.getElementById(id);
    window.location.href = "/api/game/" + id;
  });
}

stats();

// matches id with nickname key in API object and returns team id from array
function stats() {
  fetch("https://api-nba-v1.p.rapidapi.com/teams", teamInfo)
    .then((response) => response.json())
    .then((response) => {
      let id = window.location.pathname.split("/").pop();
      for (let i = 0; i < response.response.length; i++) {
        if (id === response.response[i].nickname) {
          teamId = response.response[i].id;
        }
      }
      //   team statistics
      fetch(
        "https://api-nba-v1.p.rapidapi.com/teams/statistics?id=" +
          teamId +
          "&season=2021",
        teamStats
      )
        .then((response) => response.json())
        .then((response) => {
          response.parameters["id"] = teamId;
          let source = document.getElementById("myTemplate").innerHTML;
          let template = Handlebars.compile(source);
          //   object of team statistics to be displayed to user
          const context = {
            games: response.response[0].games,
            assists: response.response[0].assists,
            blocks: response.response[0].blocks,
            steals: response.response[0].steals,
            points: response.response[0].points,
            fastBreakPoints: response.response[0].fastBreakPoints,
            pointsInPaint: response.response[0].pointsInPaint,
          };
          let html = template(context);
          document.getElementById("content").innerHTML = html;
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
}
