import { products } from "./products.js";
import { Product } from "./Product.js";
import { Cart } from "./Cart.js";
import { Checkout } from "./Checkout.js";

const cart = new Cart();

new Checkout(cart); // use the instance but no need to store it in a variable

const productContainer = document.getElementById("products-container");

// Function to display all products
function displayProducts() {
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

// Clear cart event listener
document.getElementById("clear-cart").addEventListener("click", () => {
  if (cart.items.length === 0) {
    alert("Your cart is already empty.");
    return;
  }

  if (confirm("Are you sure you want to clear the cart?")) {
    cart.clear();
  }
});

// Global event listener for cart actions
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

// Load products and cart on page load
window.onload = () => {
  displayProducts();
  cart.render();
};
