export class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
    this.cartContainer = document.getElementById("cart-items");
  }

  // Save cart state & re-render UI
  save() {
    localStorage.setItem("cart", JSON.stringify(this.items));
    this.render();
  }

  // Add a product to the cart or increase quantity if it already exists
  addProduct(product) {
    const existingProduct = this.items.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    this.save();
  }

  // Increase the quantity of an item in the cart
  increaseQuantity(productId) {
    const product = this.items.find((p) => p.id === productId);
    if (product) {
      product.quantity += 1;
      this.save();
    }
  }

  // Decrease the quantity of an item in the cart
  decreaseQuantity(productId) {
    const productIndex = this.items.findIndex((p) => p.id === productId);
    if (productIndex !== -1) {
      if (this.items[productIndex].quantity > 1) {
        this.items[productIndex].quantity -= 1;
      } else {
        this.items.splice(productIndex, 1);
      }
      this.save();
    }
  }

  // Remove a product from the cart
  removeProduct(productId) {
    this.items = this.items.filter((product) => product.id !== productId);
    this.save();
  }

  // Clear the entire cart
  clear() {
    this.items = [];
    localStorage.removeItem("cart");
    this.render();
  }

  // Render the cart UI
  render() {
    // clear the cart container to ensure that every time render() runs, it starts with a clean slate instead of appending duplicate elements
    this.cartContainer.innerHTML = "";

    // handle empty cart case
    if (this.items.length === 0) {
      this.cartContainer.innerHTML = `<p class="text-gray-500 text-center">Your cart is empty. 🛒</p>`;
      return;
    }

    // iterates over each product in the cart items array, creating an HTML structure for each item.
    this.items.forEach((product) => {
      // creates a new div element to represent the cart item and adds TailwindCSS classes
      const cartItem = document.createElement("div");
      cartItem.classList.add(
        "flex",
        "items-center",
        "justify-between",
        "p-4",
        "border-b",
        "bg-white",
        "shadow"
      );

      // generate inner HTML for Cart Item (product image, product name & price, quantity controls, remove button)
      cartItem.innerHTML = `
          <div class="flex items-center space-x-4">
            <img src="${product.image}" alt="${
        product.name
      }" class="w-16 h-16 rounded">
            <div>
              <h3 class="text-lg font-medium">${product.name}</h3>
              <p class="text-gray-600">฿${(
                product.price * product.quantity
              ).toFixed(2)}</p>
              <div class="flex items-center mt-1">
                <button data-id="${
                  product.id
                }" class="decrease-btn bg-gray-300 text-black px-2 py-1 rounded-lg hover:bg-gray-400 transition">-</button>
                <span class="px-3">${product.quantity}</span>
                <button data-id="${
                  product.id
                }" class="increase-btn bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600 transition">+</button>
              </div>
            </div>
          </div>
          <button data-id="${
            product.id
          }" class="remove-btn bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
            Remove ❌
          </button>
        `;

      // adds the dynamically generated cart item div into the cartContainer
      this.cartContainer.appendChild(cartItem);
    });

    // Total and clear cart button
    const total = this.items
      .reduce((sum, p) => sum + p.price * p.quantity, 0)
      .toFixed(2);
    const totalDiv = document.createElement("div");
    totalDiv.className = "flex justify-between items-center mt-4 p-2 border-t";
    totalDiv.innerHTML = `
    <h3 class="text-lg font-medium text-gray-700">
      Total:
      <span class="font-bold text-gray-900">฿${total}</span>
    </h3>
    <button
      id="clear-cart"
      class="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
    >
      Clear Cart 🗑️
    </button>
  `;
    this.cartContainer.appendChild(totalDiv);

    // Checkout form
    const checkoutDiv = document.createElement("div");
    checkoutDiv.innerHTML = `
    <h2 class="text-2xl font-semibold text-gray-700 mt-6" style="font-family: 'Honk'">Checkout</h2>
    <form id="checkout-form" class="mt-4 space-y-3">
      <input type="text" id="name" placeholder="Full Name" class="w-full p-2 border rounded" required />
      <input type="email" id="email" placeholder="Email Address" class="w-full p-2 border rounded" required />
      <input type="text" id="address" placeholder="Shipping Address" class="w-full p-2 border rounded" required />
      <button type="submit" class="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
        Place Order ✅
      </button>
    </form>
  `;
    this.cartContainer.appendChild(checkoutDiv);

    // Attach clear cart event
    const clearBtn = document.getElementById("clear-cart");
    if (clearBtn) {
      clearBtn.onclick = () => {
        if (this.items.length === 0) {
          alert("Your cart is already empty.");
          return;
        }
        if (confirm("Are you sure you want to clear the cart?")) {
          this.clear();
        }
      };
    }
  }
}
