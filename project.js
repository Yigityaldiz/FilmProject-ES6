 const filmTitle = document.getElementById("title");
 const filmDirector = document.getElementById("director");
 const filmUrl = document.getElementById("url")
 const form = document.getElementById("film-form");
 const firstCardBody = document.querySelectorAll(".card-body")[0];
 const secondCardBody = document.querySelectorAll(".card-body")[1];
 const clearButton = document.getElementById("clear-films");


 

 eventListeners();
 
 
 function eventListeners(e){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",loadAllFilms);
    secondCardBody.addEventListener("click",clearFilm);
    clearButton.addEventListener("click",clearAllFilms);
    
   

 }

 function addFilm(e){
    const title = filmTitle.value;
    const url = filmUrl.value;
    const director = filmDirector.value;

    if(title === "" || url === "" || director === ""){
        UI.alert("danger","Lutfen tum bilgileri giriniz");
    }
    else{
        const newFilm = new Film(url,title,director);
        UI.addFilmUI(newFilm);
        Storage.addStorage(newFilm);
        UI.alert("success","Filminiz basariyla eklendi");
        
    }
    title = "";
    url = "";
    director="";

    e.preventDefault();
 }

 function loadAllFilms(e){
    const films = Storage.getFilmsFromStorage();
    UI.loadAllFilmsUI(films);
  
 }

 function clearFilm(e){
    if(e.target.id === "delete-film"){
       UI.clearFilmUI(e);
       Storage.clearFilmStorage(e);
    }
 }
 function clearAllFilms(e){
    UI.clearAllFilmsUI();
    Storage.clearAllFilmsStorage();
    UI.alert("success","Tum filmler silindi");


 }