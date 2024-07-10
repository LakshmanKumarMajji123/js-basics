// Products Data
const products = [
  { id: 1, name: 'Product 1', price: 10.00 },
  { id: 2, name: 'Product 2', price: 20.00 },
  { id: 3, name: 'Product 3', price: 30.00 }
];

// Initialize Cart
let cart = []; //empty arry taken for cart

// Function to Display Products
const displayProducts = () => {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '';
  
  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <p>Price: $${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsContainer.appendChild(productDiv);
  });
};

// Function to Add Product to Cart
const addToCart = (productId) => {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  displayCart();
};

// Function to Display Cart
const displayCart = () => {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  
  let totalPrice = 0;
  cart.forEach(item => {
      const cartItem = document.createElement('li');
      cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${item.id})">Remove</button>`;
      cartItemsContainer.appendChild(cartItem);
      totalPrice += item.price;
  });
  
  document.getElementById('total-price').innerText = totalPrice.toFixed(2);
};

// Function to Remove Product from Cart
const removeFromCart = (productId) => {
  const productIndex = cart.findIndex(p => p.id === productId);
  if (productIndex > -1) {
      cart.splice(productIndex, 1);
      displayCart();
  }
};

// Initialize
displayProducts();
