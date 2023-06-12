class UI {

  static addFilmUI(newFilm) {
    const filmList = document.querySelector("#films");
    filmList.innerHTML += ` <tr>
  <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"> </td>
  <td>${newFilm.title}</td>
  <td>${newFilm.director}</td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr> 
<tr>`

  }
  static alert(type, message) {
    const div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.innerHTML = message;
    firstCardBody.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, 2000);
  }
  static loadAllFilmsUI(films) {
    const filmList = document.querySelector("#films");
    films.forEach(function (film) {
      filmList.innerHTML += ` <tr>
  <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
  <td>${film.title}</td>
  <td>${film.director}</td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr> 
<tr>`

    })

  }
  static clearFilmUI(element) {
    let delItem = element.target.parentElement.parentElement;

    delItem.remove();
  }
  static clearAllFilmsUI() {
    const tbody = document.getElementById("films");
    while (tbody.firstChild.textContent != "") {
      tbody.firstChild.remove();
    }
  }


}


