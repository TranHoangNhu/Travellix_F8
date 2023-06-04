fetch("./data/tour_card.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.content); // show ra data được hiển thị như thế.
    renderItemTourCard(data.content); // một callback được viết ra để render item và có tham số là data.content là đầu vào
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// axios.get("./data/tour_card.json")
//   .then((response) => {
//     console.log(response.data.content);
//     renderItemTourCard(response.data.content);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

function renderItemTourCard(arrTourCard) {
  let html = "";
  for (let tour of arrTourCard) {
    html += `
          <div class="col">
          <div class="card h-100 card2">
            <img src=${tour.src} alt="tourcardImg" />
            <div class="card-body">
              <h5 class="card-title fw-bold text-center fw-bold">${tour.title}</h5>
              <p class="card-text">${tour.description}</p>
            </div>
            <div class="card-body2">
               <span class="vote bg-light bg-dark text-white">${tour.vote}<i class="far fa-star ms-2 text-warning"></i></span>
               <span class="price bg-success text-white">${tour.price} đ</span>
             </div>
            </div>
        </div>
                `;
  }
  console.log(html);
  document.querySelector("#renderTourApi").innerHTML = html;
}
