const baseUrl = "http://localhost:1337/api";

// Function to fetch products
async function fetchProducts() {
  const response = await fetch(`${baseUrl}/products`);
  const data = await response.json();
  const productsContainer = document.querySelector(".products-container");

  data.data.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <img src="${baseUrl}${product.attributes.image}" alt="${product.attributes.name}">
      <h3>${product.attributes.name}</h3>
      <p>${product.attributes.description}</p>
      <p><strong>$${product.attributes.price}</strong></p>
    `;
    productsContainer.appendChild(productCard);
  });
}

// Fetch and render data on page load
document.addEventListener("DOMContentLoaded", () => {
  fetchCategories();
  fetchProducts();
});