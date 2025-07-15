export class Product {
  constructor(id, name, price, image, currency = "฿") {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.currency = currency; // Allows flexibility for different currencies
  }

  render() {
    return `
        <div class="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition">
          <img src="${this.image}" alt="Image of ${this.name}"
            class="w-24 h-24 mx-auto object-cover rounded-md">
          <h3 class="text-lg font-semibold mt-2">${this.name}</h3>
          <p class="text-gray-600">${this.currency}${this.price.toFixed(2)}</p>
          <button class="bg-blue-500 text-white px-4 py-2 mt-2 rounded add-to-cart hover:bg-blue-600 transition"
            data-id="${this.id}" aria-label="Add ${this.name} to cart">
            Add to Cart
          </button>
        </div>
      `;
  }
}
