export function renderHeader() {
  document.querySelector("header").innerHTML = `
     <h1
        class="text-6xl font-extrabold text-gray-800"
        style="font-family: 'Honk'"
      >
        🛍️ ShopX
      </h1>
      <p class="text-gray-600 mt-2">
        Browse, add to cart, and checkout in one seamless experience.
      </p>
`;
}
