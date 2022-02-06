// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = price.innerText * quantity.value;

  return +subtotal.innerText;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  let total = 0;

  let everyProduct = document.querySelectorAll('.product');

  everyProduct.forEach(function (product) {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  document.getElementById('total-value').querySelector('span').innerText =
    total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
