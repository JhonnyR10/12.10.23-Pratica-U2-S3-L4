const addressBarContent = new URLSearchParams(location.search);
const photoId = addressBarContent.get("photoId");

const renderPhotos = function (data) {
  const img = document.querySelector("img");
  img.src = data.src.original;
  const h5 = document.querySelector("h5");
  h5.innerText = data.alt;
  const anchor = document.createElement("a");
  anchor.setAttribute("href", data.photographer_url);
  const p = document.createElement("p");
  p.innerText = data.photographer;
  anchor.appendChild(p);
  const divC = document.querySelector(".card-body");
  divC.appendChild(anchor);
  const bg = data.avg_color;
  const divBg = document.querySelector("main");
  divBg.style.backgroundColor = bg;
};

fetch("https://api.pexels.com/v1/photos/" + photoId, {
  headers: {
    authorization: "dpwhIH4mbzQF7KIiueodxRdhJWlEO8WqwH7cTJGiHekISz8NxSgw1ul9",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("ERRORE NELLA RESPONSE");
    }
  })
  .then((details) => {
    console.log(details);
    renderPhotos(details);
  })
  .catch((err) => {
    console.log(err);
  });
