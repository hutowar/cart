const basket = {};
/**
 * в дату передается e.target.closest('.addToCart')
 * т.е. эллемент кнопки с атрибутом data.id
 * @param {*} data - event.target
 */
function addToBasket(data) {
  const targetdata = data.closest(".featuredItem");

  if (!basket[data.dataset.id]) {
    basket[data.dataset.id] = {
      id: data.dataset.id,
      name: targetdata.querySelector(".featuredName").textContent,
    //   price: targetdata.querySelector(".featuredPrice").textContent,
      price: Number(targetdata.querySelector(".featuredPrice").textContent),
      count: 1,
      description: targetdata.querySelector(".featuredText").textContent,
      imgSrc: targetdata.querySelector("img").src,
    };
  } else {
    basket[data.dataset.id].count++;
  }
}

/**
 * Эта функция занимается прорисовкой одного элемента
 * @param {*} data - объект[ключ]
 */
function renderBasket(data) {
  return `<div class="basketRow" data-id="${data.id}">
    <div>${data.name}</div>
    <div>
      <span class="productCount">${data.count}</span> шт.
    </div>
    <div>${data.price} ₽</div>
    <div>
      <span class="productTotalRow">
        ${data.price * data.count}.00 ₽
      </span>
    </div>
    <div><button class="productRemove">-</button></div>
  </div>`;
}

function refreshBasket() {
  let html = "";
  let totalvalue = 0;
  let totalCount = 0;
  for (const key in basket) {
    html += renderBasket(basket[key]);
    totalvalue += basket[key].price * basket[key].count;
    totalCount += basket[key].count;
  }
  document.querySelector('.basketList').innerHTML = html;
  document.querySelector('.basketTotalValue').textContent = totalvalue;
  document.querySelector('.cartIconWrap span').textContent = totalCount;
}
