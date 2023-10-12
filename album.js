const bottoneLoad = document.getElementById("btnPrimary");
const createModal = function (img) {
  //const divModal = document.createElement("div");
  //divModal.className = "modal fade";
  //divModal.setAttribute("id", "exempleModal");
  //divModal.setAttribute("tabindex", "-1");
  //divModal.setAttribute("aria-labelledby", "exampleModalLabel");
  //divModal.setAttribute("aria-hidden", "true");
  //divModal.innerHTML = `  <div class="modal-dialog">
  //                               <div class="modal-content">
  //                              <div class="modal-header">
  //                             <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
  //                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //                           </div>
  //                          <div class="modal-body">
  //                          <img
  //                        src=""
  //                      class="card-img-top" id="img-modal"/>
  //                  </div>
  //          </div>
  //       </div>`;

  //document.body.appendChild(divModal);
  const imgM = document.getElementById("img-modal");
  imgM.src = img;
};

//RENDERIZZA TUTTE LE IMMAGINI AGGIUNGENDO TUTTI I DETTAGLI DELLE CARD(IL LORO ID, IL PULSANTE HIDE)
//E TUTTI GLI EVENTI A LORO COLLEGATI (REINDIRIZZAMENTO A PAGINA DETAIL QUANDO SI CLICCA FOTO E TITOLO)
const renderPhotos = function (data) {
  const main = document.querySelector("main");
  const imgTag = main.querySelectorAll("img");
  const small = document.querySelectorAll("small");
  const h5 = document.querySelectorAll("h5");
  const hide = document.querySelectorAll(".card .btn:nth-of-type(2)");
  const bottonView = document.querySelectorAll(".card .btn:nth-of-type(1)");
  console.log(bottonView);

  const photoObjects = data;
  //RENDER IMAGE
  imgTag.forEach((imgTag, index) => {
    if (index < photoObjects.photos.length) {
      const photo = photoObjects.photos[index].src;
      const id = photoObjects.photos[index].id;
      const alt = photoObjects.photos[index].alt;
      console.log(photo.original);
      console.log(id);
      imgTag.src = photo.original;

      small[index].innerText = id;

      h5[index].innerText = alt;
      hide[index].innerText = "Hide";
      hide[index].classList.add("removeCard");
      imgTag.addEventListener("click", function () {
        location.href = `detail.html?photoId=${id}`;
      });
      h5[index].addEventListener("click", function () {
        location.href = `detail.html?photoId=${id}`;
      });

      //BOTTONE VIEW
      bottonView[index].setAttribute("data-bs-toggle", "modal");
      bottonView[index].setAttribute("data-bs-target", "#exampleModal");
    }
  });
  //BOTTONE HIDE
  const bottoneHide = document.querySelectorAll(".removeCard");
  bottoneHide.forEach((button) => {
    button.addEventListener("click", function () {
      const card = this.closest(".col-md-4");
      card.remove();
    });
  });

  //BOTTONE VIEW

  bottonView.forEach((button) => {
    button.addEventListener("click", function () {
      // Attiva il modal utilizzando Bootstrap
      console.log(button);

      const imgElement = button.closest(".card").querySelector("img");
      console.log(imgElement.src);
      const img = imgElement.src;
      createModal(img);
    });
  });
};

bottoneLoad.addEventListener("click", function () {
  fetch(
    "https://api.pexels.com/v1/search?query=dog&size=small&orientation=portrait",
    {
      headers: {
        Authorization:
          "dpwhIH4mbzQF7KIiueodxRdhJWlEO8WqwH7cTJGiHekISz8NxSgw1ul9",
      },
    }
  )
    .then((res) => {
      console.log("Response ottenuta dalla GET", res);
      if (res.ok) {
        // la chiamata è terminata correttamente con un 200
        console.log("ok");
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((data) => {
      console.log("EVENTS", data);
      // qua ora dovremmo creare delle cards per ogni evento ricevuto!
      // delego questo codice ad una funzione separata che chiamo renderEvents
      renderPhotos(data);
    })
    .catch((err) => {
      console.log("Si è verificato un errore:", err);
    });
});

//BOTTONE SECONDARIO
const bottoneLoadS = document.getElementById("btnSecondary");

bottoneLoadS.addEventListener("click", function () {
  fetch(
    "https://api.pexels.com/v1/search?query=videogames&size=small&orientation=portrait",
    {
      headers: {
        Authorization:
          "dpwhIH4mbzQF7KIiueodxRdhJWlEO8WqwH7cTJGiHekISz8NxSgw1ul9",
      },
    }
  )
    .then((res) => {
      console.log("Response ottenuta dalla GET", res);
      if (res.ok) {
        // la chiamata è terminata correttamente con un 200
        console.log("ok");
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((data) => {
      console.log("EVENTS", data);
      // qua ora dovremmo creare delle cards per ogni evento ricevuto!
      // delego questo codice ad una funzione separata che chiamo renderEvents
      renderPhotos(data);
    })
    .catch((err) => {
      console.log("Si è verificato un errore:", err);
    });
});

//FUNZIONE PER CERCARE IMMAGINI

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault;
  const inputSearch = document.getElementById("search");
  let ricerca = inputSearch.value;
  fetch(
    "https://api.pexels.com/v1/search?query=" +
      ricerca +
      "&size=small&orientation=portrait",
    {
      headers: {
        Authorization:
          "dpwhIH4mbzQF7KIiueodxRdhJWlEO8WqwH7cTJGiHekISz8NxSgw1ul9",
      },
    }
  )
    .then((res) => {
      console.log("Response ottenuta dalla GET", res);
      if (res.ok) {
        // la chiamata è terminata correttamente con un 200
        console.log("ok");
        return res.json();
      } else {
        throw new Error("Errore nel contattare il server");
      }
    })
    .then((data) => {
      console.log("EVENTS", data);
      // qua ora dovremmo creare delle cards per ogni evento ricevuto!
      // delego questo codice ad una funzione separata che chiamo renderEvents
      renderPhotos(data);
    })
    .catch((err) => {
      console.log("Si è verificato un errore:", err);
    });
});
