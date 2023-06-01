async function consume(id) {
  const response = await fetch(
    `http://localhost:8080/api/products/consume?id=${id}`
  );
  const data = await response.json();
  console.log("Vous avez consommer " + data.name);
}

async function getProducts() {
  try {
    const response = await fetch("http://localhost:8080/api/products");
    const data = await response.json();

    let articleContainer = document.querySelector(".articles-container");
    let menuContainer = document.querySelector(".menus-container");

    // Traitez les données de la réponse
    for (let i = 0; i < data.length; i++) {
      let product = data[i];

      if (product.type == "article") {
        let article = document.createElement("article");

        if (product.size == "big") {
          article.classList.add("big");
        }

        article.innerHTML = `
          <div class="text-article">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}&nbsp;€</p>
          </div>
          <div class="img-article">
            <div class="image-container">
              <img src="${product.img}" alt="">
            </div>
            <button onclick="consume(${product.id})">Acheter</button>
          </div>
        `;

        articleContainer.append(article);
      } else if (product.type == "menu") {
        let menu = document.createElement("article");

        menu.innerHTML = `
          <div class="text-article">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}&nbsp;€ &nbsp;&nbsp;<button onclick="consume(${product.id})">Acheter</button></p>
          </div>
          <div class="img-article">
            <div class="image-container">
              <img src="${product.img}" alt="">
            </div>
            <div class="image-container">
              <img src="${product.img2}" alt="">
            </div>
          </div>
        `;

        menuContainer.append(menu);
      }
    }
  } catch (error) {
    // Gérez les erreurs
    console.error("Erreur lors de la récupération des produits:", error);
  }
}

// Appel de la fonction asynchrone
getProducts();
