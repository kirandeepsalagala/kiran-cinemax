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
            const rootEl = document.getElementById('root');
            // const root2El = document.getElementById("root2");

            // let carouselItemEl = document.getElementById("carouselItem");

            // let carouselImage1El = document.getElementById("carouselImage1");
            // carouselImage1El.src = `https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}`;
            // carouselItemEl.appendChild(carouselImage1El);


            let nowPlayingRootEl = document.createElement("div");
            nowPlayingRootEl.classList.add("d-flex", "flex-row", "poster-overflow");
            nowPlayingRootEl.style.marginTop = "20px"
            rootEl.appendChild(nowPlayingRootEl);

            const posterContainer = document.createElement("div");
            posterContainer.classList.add("movie-poster-container","d-flex", "flex-row");
            nowPlayingRootEl.appendChild(posterContainer);

            // let titlesRootEl = document.createElement("div");
            // titlesRootEl.style.backgroundColor = "blue";
            // titlesRootEl.classList.add("d-flex", "flex-row","title");
            // posterContainer.appendChild(titlesRootEl);

            if (data.results && data.results.length > 0) {
              data.results.forEach(movie => {

                if (movie.poster_path) {
                  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
                  const img = document.createElement('img');
                  img.src = posterUrl;
                  img.alt = movie.title + 'Poster';
                  img.classList.add('movie-poster-image');
                  posterContainer.appendChild(img);
                  
                  // let titleEl = document.createElement("h1");
                  // titleEl.textContent = movie.original_title;
                  // titleEl.classList.add("title-color");
                  // titlesRootEl.appendChild(titleEl);
                }
              });
            } else {
              nowPlayingRootEl.textContent = 'No movies found';
            }
        })
}

nowPlaying();

function popularContainer () {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjk1N2Y5NTZiMzhkNGUwOTNiZWRkNDY2ODgxMTQzMSIsInN1YiI6IjY0YmY4NDllMDU4MjI0MDBiMDc2NmQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UO9XwHD2qpZiDp-_SSWERUnrW39GGyd4mv2ax7wXJlg'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    // .then(response => response.json())
    // .then(response => console.log(data))
    // .catch(err => console.error(err));
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      console.log(data);
    })
}
popularContainer();