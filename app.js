function loginOne () {
    window.location.href = "login.html";
}

function prevIcon() {
    // Redirect to another page by setting the href property of the location object
    window.location.href = "index.html";

}


function passwordToggle () {
    var x = document.getElementById("passwordInput");
    var eyeClosedEl = document.getElementById("eyeClosed");
    var eyeOpenEl = document.getElementById("eyeOpen");

    if(x.type === "password") {
        x.type = "text";
        eyeClosedEl.classList.add("d-none");
        eyeOpenEl.classList.remove("d-none");
    }
    else {
        x.type = "password";
        eyeClosedEl.classList.remove("d-none");
        eyeOpenEl.classList.add("d-none");
    }
}

function validateLoginDetails () {
    var userNameEl = document.getElementById("userName").value;

    var passwordInputEl = document.getElementById("passwordInput").value

    var correctUserName = "kiran";
    
    var correctPassword = "kiran@2022";

    if (userNameEl === correctUserName && passwordInputEl === correctPassword) {
        
        window.location.href = "home.html";
        console.log("valid");
    }
    else {
        alert("Invalid username or password. Please try again");
        console.log("invalid");
    }
}



// function createAndAppendNowPlaying(data){
//     var rootEl = document.getElementById("root");

//     let nowPlayingRootEl = document.createElement("div");
//     nowPlayingRootEl.classList.add("d-flex", "flex-row", "justify-content-center");
//     rootEl.appendChild(nowPlayingRootEl);

//     let moviePosterEl = document.createElement("img");
//     // moviePosterEl.src = `https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}.jpg`;
//     moviePosterEl.src = `https://image.tmdb.org/t/p/original/${data.results[0].poster_path}`;
//     moviePosterEl.classList.add("movie-poster-image");
//     // console.log(data);
//     // moviePosterEl.style.color = "white";
//     nowPlayingRootEl.appendChild(moviePosterEl);

//     let posterPaths = document.createElement("img");
//     posterPaths.src = `https://image.tmdb.org/t/p/w500/${data.results.map(movie => movie.poster_path)}`;
//     nowPlayingRootEl.appendChild(posterPaths);
//     console.log(posterPaths);

//     // const movies = data.results[0,1,2,3,4].poster_path;
//     // movies.forEach(movies => {

//     //   const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`; // Assuming 'poster_path' contains the image path
  
//     //   const imgElement = document.createElement('img');
//     //   imgElement.src = imageUrl;
//     //   imgElement.alt = movies.title;
//     //   nowPlayingRootEl.appendChild(imgElement);
//     // });

//     // let titleEl = document.createElement("h1");
//     // titleEl.textContent = data.results.map(movie => movie.title);
//     // titleEl.style.color = "white";
//     // nowPlayingRootEl.appendChild(titleEl);
//     // console.log(titleEl);

// }


function nowPlaying () {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjk1N2Y5NTZiMzhkNGUwOTNiZWRkNDY2ODgxMTQzMSIsInN1YiI6IjY0YmY4NDllMDU4MjI0MDBiMDc2NmQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UO9XwHD2qpZiDp-_SSWERUnrW39GGyd4mv2ax7wXJlg'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        // .then(response => response.json())
        // .then(response => console.log(data))
        // .catch(err => console.error(err));
        .then(function(response){
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            // createAndAppendNowPlaying(data);
            // var rootEl = document.getElementById("root");

            // const posterPathEl = document.createElement("h1");
            // posterPathEl.textContent = data.results.map(movie => movie.title);
            // rootEl.appendChild(posterPathEl);
            // console.log(posterPathEl);

            const rootEl = document.getElementById('root');

            let nowPlayingRootEl = document.createElement("div");
            nowPlayingRootEl.classList.add("d-flex", "flex-row", "poster-overflow");
            rootEl.appendChild(nowPlayingRootEl);

            if (data.results && data.results.length > 0) {
              data.results.forEach(movie => {
                if (movie.poster_path) {
                  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                  const img = document.createElement('img');
                  img.src = posterUrl;
                  img.alt = movie.title + ' Poster';
                  img.classList.add('movie-poster-image');
                  nowPlayingRootEl.appendChild(img);
                }
              });
            } else {
              nowPlayingRootEl.textContent = 'No movies found';
            }
        })
}

nowPlaying();