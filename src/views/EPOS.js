import { products } from "../utils/products.js";
import { Product } from "../components/Product.js";
import { Cart } from "../components/Cart.js";
import { Checkout } from "../components/Checkout.js";

const cart = new Cart();

const productContainer = document.getElementById("products-container");

// Global event listener for cart actions:
document.addEventListener("click", (event) => {
  const productId = parseInt(event.target.dataset.id);
  if (!productId) return;

  if (event.target.classList.contains("increase-btn")) {
    cart.increaseQuantity(productId);
  }

  if (event.target.classList.contains("decrease-btn")) {
    cart.decreaseQuantity(productId);
  }

  if (event.target.classList.contains("remove-btn")) {
    cart.removeProduct(productId);
  }
});

// In add-to-cart event:
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productId = parseInt(event.target.dataset.id);
    const product = products.find((p) => p.id === productId);
    cart.addProduct(product);
    displayCart();
  });
});

// On initial load:
displayCart();

// Function to display all products
export function displayProducts() {
  products.forEach((productData) => {
    const product = new Product(
      productData.id,
      productData.name,
      productData.price,
      productData.image
    );
    const productCard = document.createElement("div");
    productCard.innerHTML = product.render();
    productContainer.appendChild(productCard);
  });

  // Attach event listeners for "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.target.dataset.id);
      const product = products.find((p) => p.id === productId);
      cart.addProduct(product);
    });
  });
}

export function displayCart() {
  cart.render();
  // Instantiate Checkout after the form is rendered
  if (document.getElementById("checkout-form")) {
    new Checkout(cart); // use the instance but no need to store it in a variable
  }
}
