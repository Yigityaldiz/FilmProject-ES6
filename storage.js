class Storage{

  static addStorage(newFilm) {
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
  
  
  }
  static getFilmsFromStorage() {
    let films;
    if (localStorage.getItem("films") === null ) {
      films = [];
    }
    else {
      films = JSON.parse(localStorage.getItem("films"));
    }
  
    return films;
  
  }
  static clearFilmStorage(element){
    let a = element.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    console.log(a);
    let films = this.getFilmsFromStorage();
    films.forEach(function(film,index){
      if(film.title === a){
        films.splice(index,1);
      }
      localStorage.setItem("films",JSON.stringify(films));
    })
    
    console.log(a);
  
  }
  static clearAllFilmsStorage(){
    localStorage.removeItem("films");
  }

}
