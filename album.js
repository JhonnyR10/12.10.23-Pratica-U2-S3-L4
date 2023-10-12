const bottoneLoad = document.getElementById("btnPrimary");
const renderPhotos = function (data) {
  const imgTag = document.querySelectorAll("img");
  const small = document.querySelectorAll("small");

  const photoObjects = data;

  imgTag.forEach((imgTag, index) => {
    if (index < photoObjects.photos.length) {
      const photo = photoObjects.photos[index].src;
      const id = photoObjects.photos[index].id;
      console.log(photo.original);
      console.log(id);
      imgTag.src = photo.original;
      console.log(small);
      small[index].innerText = "";
      small[index].innerText = id;
    }
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

//BOTTONE HIDE
const bottoneHide = document.querySelectorAll(".removeCard");

bottoneHide.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".col-md-4");
    console.log(card);
    card.remove();
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
