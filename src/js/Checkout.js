export class Checkout {
  constructor(cart) {
    this.cart = cart;
    this.checkoutForm = document.getElementById("checkout-form");

    // Attach event listener to the checkout form
    this.checkoutForm.addEventListener("submit", (event) =>
      this.submitOrder(event)
    );
  }

  submitOrder(event) {
    event.preventDefault();

    // Get form input values
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const addressInput = document.getElementById("address");

    // Validate form fields
    if (!nameInput.value || !emailInput.value || !addressInput.value) {
      alert("Please fill in all checkout details.");
      return;
    }

    // Simulate order confirmation
    alert(`${nameInput.value}'s order has been placed successfully.`);

    // Clear cart and reset form fields
    this.cart.clear();
    nameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
  }
}
