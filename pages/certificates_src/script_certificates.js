const cardsContainer = document.getElementById("cards-container");
const categoryButtons = document.querySelectorAll(".category");
let certifications = {};

fetch("../../../New_AboutMe/certificates.json")
  .then(response => response.json())
  .then(data => {
    certifications = data;
    loadCards("htb");
  });

function loadCards(category) {
  cardsContainer.innerHTML = "";
  certifications[category].forEach(cert => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${cert.title}</h3>
      <p>${cert.description}</p>
      ${cert.link ? `<a href="${cert.link}" target="_blank" class="btn-link">Ver Certificado</a>` : ""}
    `;

    cardsContainer.appendChild(card);
  });
}

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".category.active")?.classList.remove("active");
    btn.classList.add("active");
    loadCards(btn.dataset.category);
  });
});
