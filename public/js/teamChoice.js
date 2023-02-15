// let id;
let teamId;
// let firstChoice;
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

for (let i = 0; i < choice.length; i++) {
  const img = choice[i];
  img.addEventListener("click", (event) => {
    let clicked = event.target;
    console.dir(event.target);
    let id = clicked.parentElement.id;
    console.log(id);
    chosenTeam = document.getElementById(id);
    //   chosenTeam.style.boxShadow = "10px";
    // stats();
    window.location.href = "/api/game/" + id;
  });
}

// for (let i = 0; i < choice.length; i++) {
//   const img = choice[i];
//   img.addEventListener("click", team);
// }

stats();

// // API returns all NBA teams
// // when logo is clicked, matches id with nickname key in API object and returns team id from array
function stats() {
  fetch("https://api-nba-v1.p.rapidapi.com/teams", teamInfo)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.response);
      console.log(window.location.pathname.split("/").pop());
      let id = window.location.pathname.split("/").pop();
      for (let i = 0; i < response.response.length; i++) {
        if (id === response.response[i].nickname) {
          teamId = response.response[i].id;
          console.log(teamId);
        }
      }
      fetch(
        "https://api-nba-v1.p.rapidapi.com/teams/statistics?id=" +
          teamId +
          "&season=2021",
        teamStats
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(teamId);
          response.parameters["id"] = teamId;
          console.log(response.parameters);
          console.log(response.response);
          let source = document.getElementById("myTemplate").innerHTML;
          let template = Handlebars.compile(source);
          const context = {
            games: response.response[0].games,
            assists: response.response[0].assists,
            blocks: response.response[0].blocks,
            steals: response.response[0].steals,
            points: response.response[0].points,
            fastBreakPoints: response.response[0].fastBreakPoints,
            pointsInPaint: response.response[0].pointsInPaint,
          };
          console.log(context);
          let html = template(context);
          console.log(html);
          document.getElementById("content").innerHTML = html;
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
}
