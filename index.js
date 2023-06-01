async function getProducts() {
  try {
    const response = await fetch("http://localhost:8080/api/products");
    const data = await response.json();
    // Traitez les données de la réponse
    console.log(data);
  } catch (error) {
    // Gérez les erreurs
    console.error("Erreur lors de la récupération des produits:", error);
  }
}

// Appel de la fonction asynchrone
getProducts();
