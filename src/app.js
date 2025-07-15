import { renderHeader } from "./components/Header.js";
import { renderFooter } from "./components/Footer.js";
import { displayCart, displayProducts } from "./views/EPOS.js";

// Load products and cart on page load
window.onload = () => {
  renderHeader();
  displayProducts();
  displayCart();
  renderFooter();
};
