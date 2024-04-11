const row = document.getElementById("row");
const btnLoadImages = document.getElementById("loadImages");
const btnloadSecondImages = document.getElementById("loadSecondImages");
const funcForImage = (URL) => {
  fetch(URL, {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json",
      Authorization: "j0jbn7sZ4uybhI3NkkfsmRcE8JrcVYC3jCNoisZOgAQyaseMe4N54kiS",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      console.log(data);

      data.photos.forEach((obj) => {
        const img = obj.src.medium;
        const title = obj.photographer;
        const description = obj.alt;
        const id = obj.id;
        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.innerHTML = ` <div class="card mb-4 shadow-sm">
        <img
          src="${img}"
          class="bd-placeholder-img card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">
            ${description}
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                id="btnHide"
                class="btn  btn-sm  btn-outline-secondary"
              >
                Hide
              </button>
            </div>
            <small class="text-muted">${id}</small>
          </div>
        </div>
      </div>`;
        row.appendChild(div);
      });
    })
    .then(() => {
      const btnHide = document.querySelectorAll("#btnHide");
      console.log(btnHide);
      btnHide.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const card = e.target.parentNode.parentNode.parentNode.parentNode;
          card.remove();
        });
      });
    });
};
const loadImage = () => {
  btnLoadImages.addEventListener("click", (URL) => {
    funcForImage("https://api.pexels.com/v1/search?query=bird");
  });
  btnloadSecondImages.addEventListener("click", (URL) => {
    funcForImage("https://api.pexels.com/v1/search?query=puppy");
  });
};
loadImage();
