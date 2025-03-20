const LS_KEY = "basket";

const container = document.querySelector(".js-list");

function createMarkup(arr) {
  return arr.map(
    ({ id, img, name, price, description }) => `
    <li class="product-card js-product" data-it"${id}"></li>
    `
  );
}
