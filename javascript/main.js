function createCard(challenge) {
  return `
     <article class="card" data-id="${challenge.id}">
        <img class="card-img" src="${challenge.image}" alt="${challenge.name}">
        <h2 class="card-title">${challenge.name}</h2>
        <p class="card-description">${challenge.description}</p>

        <a href="${challenge.path}">View Live</a>
        <a href="${challenge.code}">Code</a>
    </article>
    `;
}

function renderCard(challenges) {
  const cardsContainer = document.getElementById("cardsContainer");
  if (!cardsContainer) {
    console.error("Not found");
    return;
  }
  const cardsHTML = challenges
    .map((challenge) => createCard(challenge))
    .join("");

  cardsContainer.innerHTML = cardsHTML;
}

async function loadCards() {
  try {
    const response = await fetch("./javascript/data.json");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const challenges = await response.json();
    renderCard(challenges);
  } catch (error) {
    console.log("Error");
    document.getElementById("cardsContainer").innerHTML = "<p>Error</p>";
  }
}
document.addEventListener("DOMContentLoaded", loadCards);
