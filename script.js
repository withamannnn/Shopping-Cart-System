let cart = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Mouse", price: 800, quantity: 3 },
  { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
];

let nextId = 4;
let discountRate = 0;

const cartItemsContainer = document.getElementById("cart-items");
const totalItemsEl = document.getElementById("total-items");
const subtotalPriceEl = document.getElementById("subtotal-price");
const discountPercentEl = document.getElementById("discount-percent");
const discountAmountEl = document.getElementById("discount-amount");
const finalTotalEl = document.getElementById("final-total");

// Find product by ID
const findProductById = (id) => {
  return cart.find((p) => p.id === id);
};

// Add Product
const addProduct = (name, price, quantity = 1) => {
  const newProduct = {
    id: nextId++,
    name,
    price: Number(price),
    quantity: Number(quantity),
  };
  cart.push(newProduct);
  renderCart();
};

// Remove Product
const removeProduct = (id) => {
  cart = cart.filter((p) => p.id !== id);
  renderCart();
};

// Increase Quantity
const increaseQuantity = (id) => {
  const product = findProductById(id);
  if (product) {
    product.quantity += 1;
    renderCart();
  }
};

// Increase Quantity
const decreaseQuantity = (id) => {
  const product = findProductById(id);
  if (product) {
    product.quantity -= 1;
    if (product.quantity <= 0) {
      removeProduct(id);
    } else {
      renderCart();
    }
  }
};

// Calculate total items
const calculateTotalItems = () => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

// Calculate total price
const calculateSubtotal = () => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Apply Discount

const applyDiscount = (code) => {
  if (code.toUpperCase() === "SAVE10") {
    discountRate = 0.1;
    alert("10% Discount Applied");
  } else if (code.toUpperCase() === "SAVE20") {
    discountRate = 0.2;
    alert("20% Discount Applied");
  } else {
    alert("Invalid Coupon Code!");
    discountRate = 0;
  }
  renderCart();
};

// Clear Cart
const clearCart = () => {
  cart = [];
  discountRate = 0;
  renderCart();
};

const renderCart = () => {
  cartItemsContainer.innerHTML = "";
  cart.forEach((item) => {
    const subtotal = item.price * item.quantity;
    const row = document.createElement("tr");

    // FIXED: Added missing quote after decreaseQuantity
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>₹${item.price.toLocaleString()}</td>
      <td>
        <button class="qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
        <span style="margin: 0 8px;">${item.quantity}</span>
        <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
      </td>
      <td>₹${subtotal.toLocaleString()}</td>
      <td>
        <button class="btn btn-danger btn-remove" onclick="removeProduct(${item.id})">Remove</button>
      </td>
    `;
    cartItemsContainer.appendChild(row);
  });

  // Calculate Summaries
  const totalItems = calculateTotalItems();
  const subtotal = calculateSubtotal();
  const discountAmount = subtotal * discountRate;
  const finalTotal = subtotal - discountAmount;

  // Update UI
  totalItemsEl.textContent = totalItems;
  subtotalPriceEl.textContent = subtotal.toLocaleString();
  discountPercentEl.textContent = discountRate * 100;
  discountAmountEl.textContent = discountAmount.toLocaleString();
  finalTotalEl.textContent = finalTotal.toLocaleString();
};

// --- EVENT LISTENERS (MOVED OUTSIDE renderCart) ---

document.getElementById("add-product-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("prod-name");
  const priceInput = document.getElementById("prod-price");
  const qtyInput = document.getElementById("prod-qty");

  addProduct(nameInput.value, priceInput.value, qtyInput.value);

  nameInput.value = "";
  priceInput.value = "";
  qtyInput.value = "1";
});

// Discount Button Handler
document.getElementById("apply-discount-btn").addEventListener("click", () => {
  const code = document.getElementById("coupon-code").value.trim();
  applyDiscount(code);
});

// Clear Cart Handler
document.getElementById("clear-cart-btn").addEventListener("click", () => {
  clearCart();
});

// Initial Render
renderCart();
