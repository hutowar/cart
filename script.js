const dataItems = JSON.parse(json);

const tempEl = document.querySelector("#templateItemCard");

const itemsBox = document.querySelector(".featuredItems");
function renderCards(card) {
  const cloneEl = tempEl.content.cloneNode(true);
  const cardImg = cloneEl.querySelector(".featuredImgWrap img");


  cardImg.setAttribute("src", card.img);
  cardImg.setAttribute("alt", card.name);
  cloneEl.querySelector(".featuredName").textContent = card.name;
  cloneEl.querySelector(".featuredText").textContent = card.description;
  cloneEl.querySelector(".featuredPrice").textContent = card.price;
  cloneEl.querySelector(".addToCart").dataset.id = card.id;
  itemsBox.prepend(cloneEl);
}
dataItems.goods.forEach((card) => {
  renderCards(card);
});

document.querySelector('.featuredItems').addEventListener('click', function (e) {
  if (e.target.closest('.addToCart')) {
    const target = e.target.closest('.addToCart');
    addToBasket(target);
    refreshBasket();
  }
});
document.querySelector('.basketList').addEventListener('click', function (e) {
  if (e.target.classList.contains('productRemove')) {
    // console.log(e.target.closest('.basketRow').dataset.id);

    if (basket[e.target.closest('.basketRow').dataset.id].count === 1) {
      delete basket[e.target.closest('.basketRow').dataset.id];
    } else {
      basket[e.target.closest('.basketRow').dataset.id].count--;
    }
    refreshBasket();
  }
});

document.querySelector('.cartIcon').addEventListener('click', function (e) {
  document.querySelector('.basket').classList.toggle('hidden');
});