const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3e0c346377msh286e6e470d53c55p1d6e09jsn13e1bcaa6c46",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
  },
};

// original code
// const choice = document.getElementsByClassName("nba");

// const team = (event) => {
//   let clicked = event.target;
//   console.dir(event.target);
//   let id = clicked.parentElement.id;
//   console.log(id);
//   window.location.href = "/api/game/" + id;
// };

// for (let i = 0; i < choice.length; i++) {
//   const img = choice[i];
//   img.addEventListener("click", team);
// }

// fetch("https://api-nba-v1.p.rapidapi.com/teams", options)
//   .then((response) => response.json())
//   .then((response, event) => {
//     console.log(response.response);
//     for (let i = 0; i < response.response.length; i++) {
//       let clicked = event.target;
//       let id = clicked.parentElement.id;
//       if (id === nickname) {
//         console.log(response.response);
//       }
//     }
//   })
//   .catch((err) => console.error(err));

// additional code
const choice = document.getElementsByClassName("nba");
let id = null; // Declare and initialize the id variable to null

const team = (event) => {
  let clicked = event.target;
  let id = clicked.parentElement.id;
  window.location.href = "/api/game/" + id;
};

for (let i = 0; i < choice.length; i++) {
  const img = choice[i];
  img.addEventListener("click", (event) => {
    let parent = event.target.parentElement;
    id = parent.id; // Assign the value of id
    team(event);
  });
}

fetch("https://api-nba-v1.p.rapidapi.com/teams", options)
  .then((response) => response.json())
  .then((response) => {
    for (let i = 0; i < response.response.length; i++) {
      let team = response.response[i].id;
      if (team.nickname === id) {
        console.log(team);
        console.log(id);
      }
    }
  })
  .catch((err) => console.error(err));

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
