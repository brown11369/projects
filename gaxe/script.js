let movies = [];

if(localStorage.getItem("movies")!==null){
  movies=JSON.parse(localStorage.getItem("movies"));
}
else{
  localStorage.setItem("movies",JSON.stringify(movies));
}



function displaymoviestable(moviearr) {

  document.getElementById("movies").innerHTML="";



  moviearr.forEach(function (movie, index) {
    let row = document.createElement("tr");

    let numbering = document.createElement("td");
    numbering.append(index + 1);
    row.appendChild(numbering);

    let title = document.createElement("td");
    title.append(movie.title);
    row.appendChild(title);

    let releaseDate = document.createElement("td");
    releaseDate.append(movie.releaseDate);
    row.appendChild(releaseDate);

    let genretd = document.createElement("td");
    movie.genres.forEach(function (genre, index) {
      genretd.append(genre + ", ");
    });
    row.appendChild(genretd);

    let duration = document.createElement("td");
    duration.append(movie.duration);
    row.appendChild(duration);

    let imdbRating = document.createElement("td");
    imdbRating.append(movie.imdbRating);
    row.appendChild(imdbRating);

    let action = document.createElement("td");
    action.classList.add("action");

    let view = document.createElement("i");
    view.classList.add("fa-solid");
    view.classList.add("fa-eye");
    action.append(view);
    view.onclick=open_modal.bind(this, movie);


    let edit = document.createElement("i");
    edit.classList.add("fa-solid");
    edit.classList.add("fa-pen-to-square");
    action.append(edit);
    edit.onclick=updatemovie.bind(this,movie.id)

    let trash = document.createElement("i");
    trash.classList.add("fa-solid");
    trash.classList.add("fa-trash-can");
    action.append(trash);
    trash.onclick=deltmovie.bind(this,movie.id);

    row.appendChild(action);

    document.getElementById("movies").appendChild(row);
  });
}

displaymoviestable(movies);


function open_modal(movie){
document.getElementById("title").innerText=movie.title;

document.getElementById("modal_img").src=movie.posterurl;

document.getElementById("genres").src=movie.genres;

document.getElementById("storyline").innerText=movie.storyline;

document.getElementById("duration").innerText=movie.duration;

document.getElementById("imdb").innerText=movie.imdbRating;

document.getElementById("rldate").innerText=movie.releaseDate;



document.getElementById("modal").style.display="flex";

}

function addmovie(){

  let lastid;

  if(movies.length!==0)
  {
    lastid=movies[movies.length-1].id;
  }
  else{
    lastid=0;
  }

  

  let movie ={
    ratings:[],
    id:lastid+1,
  }

  movie.title=document.getElementById("addTitle").value;
  movie.genres=document.getElementById("addGenre").value.split(",");
  movie.duration=document.getElementById("addDuration").value;
  movie.releaseDate=document.getElementById("addDate").value;
  movie.actors=document.getElementById("addActor").value.split(",");
  movie.imdbRating=document.getElementById("addImdb").value;
  movie.posterurl=document.getElementById("addUrl").value;
  movie.storyline=document.getElementById("storyLine").value;



  movies.push(movie);

  localStorage.setItem("movies",JSON.stringify(movies));

  displaymoviestable(movies);

  document.getElementById("addFrm").reset();

  document.getElementById("addDate").type="text";
  console.log(movie);


}

// update movie

let movieupdate=null;


function updatemovie(id){

  movieupdateid=id;
  let movie=movies.find((movie,index)=>{
    return movie.id===id;
  })

  movieupdate=movie;

  document.getElementById("updateTitle").value=movie.title;

  let genres="";
  movie.genres.forEach((genre,i)=>{
    genres+=genre+",";
  })

  document.getElementById("updateGenre").value=genres.substring(0,genres.length-1);


  document.getElementById("updateDuration").value=movie.duration;

  document.getElementById("updateDate").value=movie.releaseDate;

  let actors="";
  movie.actors.forEach((actor,i)=>{
    actors+=actor+",";
  })
  document.getElementById("updateActor").value=actors.substring(0,actors.length-1);


  document.getElementById("updateImdb").value=movie.imdbRating;

  document.getElementById("updateUrl").value=movie.posterurl;

  document.getElementById("updatestoryLine").value=movie.storyline;



  document.getElementById("updateModal").style.display="flex";
}


// edit upadte filed

function updtmovie(){



  movieupdate.title=document.getElementById("updateTitle").value;
  movieupdate.genres=document.getElementById("updateGenre").value.split(",");
  movieupdate.duration=document.getElementById("updateDuration").value;
  movieupdate.releaseDate=document.getElementById("updateDate").value;
  movieupdate.actors=document.getElementById("updateActor").value.split(",");
  movieupdate.imdbRating=document.getElementById("updateImdb").value;
  movieupdate.posterurl=document.getElementById("updateUrl").value;
  movieupdate.storyline=document.getElementById("updatestoryLine").value;


  localStorage.setItem("movies",JSON.stringify(movies));

  displaymoviestable(movies);

  document.getElementById("addDate").type="text";


}
















// //////////////////////////////////////////////////






function deltmovie(id){

  let cnfrm=confirm("are you sure you want to delete this movie")

  if(cnfrm===true){
    let index=movies.findIndex((movie,index)=>{
      return movie.id===id;
    })
    
    movies.splice(index,1)
    localStorage.setItem("movies",JSON.stringify(movies));
  
    displaymoviestable(movies);
  }

}




function openadmodal(){
  document.getElementById("adm-modal").style.display="flex";
}

function close_modal(cls){
  cls=document.getElementById(cls).style.display="none";
}


function cdate(){
  document.getElementById("addDate").type="date";
}