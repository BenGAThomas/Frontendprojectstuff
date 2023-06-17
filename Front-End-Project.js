// const testApi = document.getElementById("test");
// const testApiTwo = document.getElementById("testTwo");
const urlThree =
  "https://api-football-v1.p.rapidapi.com/v3/teams?league=253&season=2023";
const url2 =
  "https://api-football-v1.p.rapidapi.com/v3/standings?league=253&season=2023&team=1608";
const url = "https://api-football-v1.p.rapidapi.com/v3/leagues";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6decee34d5msh22f17ec7e198e9dp1d23a5jsn4f4bc0ff41f6",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
};
// let myApiTest = document.getElementById("myUl");
let myApiTestTwo = document.getElementById("teamsList");
let testingImageDiv = document.getElementById("imageDiv");
// let teamInformationArray = [];

function getTest() {
  fetch(urlThree, options)
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      const teamInformationArray = data.response.map((tObj) => {
        return {
          founded: tObj.team.founded,
          name: tObj.team.name,
          city: tObj.venue.city,
          logo: tObj.team.logo,
          venueName: tObj.venue.name,
          venueCapacity: tObj.venue.capacity,
        };
      });
      console.log(teamInformationArray);

      // { founded: 20007, name: "soccer team name", city: "Houston"}

      for (let i = 0; i < teamInformationArray.length; i++) {
        let cur = teamInformationArray[i];
        let option = document.createElement("li");
        let teamLogo = document.createElement("img");
        teamLogo.setAttribute("src", cur.logo);
        teamLogo.setAttribute("id", cur.name);
        option.innerHTML = cur.name;
        // myApiTest.appendChild(option);
        testingImageDiv.appendChild(teamLogo);
        // add an onclick event to each
        // showRestOfTeam(teamInformationArray[i]);
      }
      return teamInformationArray;
    }).then((teamInformationArray) => {
      let teamImages = document.querySelectorAll('img');
      console.log(teamImages);
      teamImages.forEach((image) => {
        image.addEventListener('click', () => {
          const teamToShow = teamInformationArray.find(team => team.name === image.id)
          showRestOfTeam(teamToShow)
        })
      })
    });

    
}

function showRestOfTeam(teamInformation) {
  document.getElementById("teamName").innerHTML = teamInformation.name;
  document.getElementById("teamInfo").innerHTML = teamInformation.city;
  document.getElementById("teamFounded").innerHTML = teamInformation.founded;
  document.getElementById("teamVenueName").innerHTML = teamInformation.venueName;
  document.getElementById("teamVenueCapacity").innerHTML = teamInformation.venueCapacity;
  
  // console.log(teamInformation);
//passes all the info into the HTML document.
}



// function getTestTwo() {
//   fetch(urlThree, options)
//     .then((resp) => {
//       console.log(resp);
//       return resp.json();
//     })
//     .then((data) => {
//       console.log(data);
//       for (let i = 0; i < data.response.length; i++) {
//         let cur = data.response[i];
//         let option = document.createElement("option");
//         option.innerHTML = cur.team.name;
//         myApiTestTwo.appendChild(option);
//       }
//     });
// }

getTest();




// .then((data) => {
//   console.log(data);
//   for (let i = 0; i < data.response.length; i++) {
//     let cur = data.response[i];
//     let option = document.createElement("li");
//     option.innerHTML = cur.team.id;
//     myApiTestTwo.appendChild(option);
//   }
// });

//   fetch(urlThree, options)
//     .then((resp) => {
//       console.log(resp);
//       return resp.json();
//     })
//     .then((data) => {
//       console.log(
//         "my data.response[0].league.name.id",
//         data,
//         data.response[0].league.name
//       );
//       myShat.id = data.response[0].league.id;
//     })
//     .then(() => {
//       testApi.innerHTML = myShat.name;
//       testApiTwo.innerHTML = myShat.id;
//     });
// }
// let myApiTest = document.getElementById("myUl");

// function fetchMyShit() {
//   fetch(urlThree, options)
//     .then((resp) => {
//       return resp.json();
//     })
//     .then((data) => {
//       for (let i = 0; i < data.response.length; i++) {
//         let cur = data.response[i];
//         var li = document.createElement("li");
//         li.innerHTML = cur.league.name;
//         myApiTest.appendChild(li);
//       }
//     });
// }


// fetchMyShit();
// let myApiTest = document.getElementById("myUl");

// function fetchMyShit() {
//   fetch("https://api-football-v1.p.rapidapi.com/v3/leagues", options)
//     .then((resp) => resp.json())
//     .then((data) => doItAll(data));
// }

// function doItAll(data) {
//   populateMyUls(data);
// }

// // legos
// function populateMyUls(data) {
//   for (let i = 0; i < data.response.length; i++) {
//     let cur = getCurrent(data.response, i);
//     let li = createLi(cur.league.name);
//     appendChild(li);
//   }
// }

// function sayMyName(name) {
//   console.log(name);
// }

// sayMyName(); // undefined
// sayMyName("cesar"); // cesar
// sayMyName("jason"); // jason

// function getCurrent(array, index) {
//   return array[index];
// }

// function createLi(name) {
//   let li = document.createElement("li");
//   li.innerHTML = name;
//   return li;
// }

// function appendChild(child) {
//   myApiTest.appendChild(li);
// }

// fetchMyShit();

// const americanLeagueName = "Major League Soccer";

// function getTest() {
//   fetch(url, options)
//     .then((resp) => {
//       console.log(resp);
//       return resp.json();
//     })
//     .then((data) => {
//       console.log(data);
//       //   const americanLeague = data.response.find(
//       //     (resp) =>
//       //       resp.league.name.toLowerCase() === americanLeagueName.toLowerCase()
//       //   );
//       //   testapi.innerText = americanLeague.league.name;
//     })
//     .catch((e) => {
//       console.error(e);
//     });
// }

// getTest();

// let myApiTest = document.getElementById("myUl");

// function fetchMyShit() {
//   fetch(urlThree, options)
//     .then((resp) => {
//       return resp.json();
//     })
//     .then((data) => {
//       for (let i = 0; i < data.response.length; i++) {
//         let cur = data.response[i];
//         var li = document.createElement("li");
//         li.innerHTML = cur.name;
//         myApiTest.appendChild(li);
//       }
//     });
// }

// let myApiTest = document.getElementById("myUl")

// function fetchMyShit() {
//     fetch(urlThree, options)
//     .then(resp => {
//         return resp.json()
//     })
//     .then(data => {
//         // assume response is an array
//         for (let i = 0; i < data.response.length; i++) {
//             let cur = data.response[i];
//             var li = document.createElement("tr");
//             li.innerHTML = cur.name;
//             myApiTest.appendChild(li)
//         }
//     })
// }

/// HTML
// Object
// data = {
//     key: value,
//     keyTwo: value,
//     keyThree: {
//         name: 'Cesar'
//     },
// }

// let name = data.keyThree.name // Cesar

// // Array
// [value, value, value]
//   0       1       2
// <div>
//     <ul id="myUl">
//         <li>whatever</li>
//     </ul>

//     <table>
//         <tr>whatever</tr>
//     </table>
// </div>

// let data = {
//   name: "cesar",
//   age: 36,
//   isShort: false,
//   activities: {
//     favorite: ["eat", "sleet"],
//     disliked: {
//       movies: [
//         { title: "batman", date: "1988" },
//         { title: "superman", date: "1999" },
//       ],
//     },
//   },
//   kids: ["leo", "ripley"],
// };

// // What is my name?
// data.name;
// // What are the kids?
// // for (start; end; each index)
// for (let i = 0; i < data.kids.length; i++) {
//   let cur = data.kids[i]; //ripley
//   console.log(cur); // ripley
// }
// // What are the favorite activities?
// for (let i = 0; i < data.activities.favorite.length; i++) {
//   let cur = data.activities.favorite[i];
//   console.log(cur);
// }
// // What are the movies?
// let movies = data.activities.disliked.movies;
// for (let i = 0; i < movies.length; i++) {
//   let cur = movies[i];
//   console.log("my movies", cur);
// }
