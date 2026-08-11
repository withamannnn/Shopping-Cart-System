# Shopping Cart System

A simple and interactive **Shopping Cart System** built using HTML, CSS, and Vanilla JavaScript.

This project demonstrates how to work with JavaScript arrays, objects, functions, DOM manipulation, array methods such as `find`, `filter`, and `reduce`, event listeners, calculations, and dynamic UI rendering.

## Features

* Add products to the shopping cart
* Remove individual products
* Increase product quantity
* Decrease product quantity
* Automatically remove a product when its quantity reaches zero
* Calculate total number of items
* Calculate cart subtotal
* Apply discount coupons
* Calculate discount amount
* Calculate final cart total
* Clear the entire cart
* Dynamically render cart items
* Format prices using Indian Rupee notation
* Responsive and clean user interface

## Discount Coupons

The project includes two coupon codes:

| Coupon Code | Discount |
| ----------- | -------- |
| `SAVE10`    | 10%      |
| `SAVE20`    | 20%      |

Any other coupon code will be treated as invalid.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Google Fonts - Outfit

## Project Structure

```text
shopping-cart/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

### 1. Product Data

The cart is stored in a JavaScript array containing product objects.

```javascript
let cart = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Mouse", price: 800, quantity: 3 },
  { id: 3, name: "Keyboard", price: 1500, quantity: 1 },
];
```

Each product contains:

* `id`
* `name`
* `price`
* `quantity`

### 2. Adding Products

The `addProduct()` function creates a new product object and adds it to the cart using `push()`.

```javascript
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
```

### 3. Removing Products

The `filter()` method is used to create a new cart without the selected product.

```javascript
const removeProduct = (id) => {
  cart = cart.filter((p) => p.id !== id);
  renderCart();
};
```

### 4. Updating Quantity

The `find()` method is used to locate a product by its ID.

```javascript
const findProductById = (id) => {
  return cart.find((p) => p.id === id);
};
```

The quantity can then be increased or decreased.

### 5. Calculating Total Items

The `reduce()` method calculates the total quantity of all products.

```javascript
const calculateTotalItems = () => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};
```

For example:

```text
Laptop     → 1
Mouse      → 3
Keyboard   → 1

Total Items = 5
```

### 6. Calculating Subtotal

The subtotal is calculated by multiplying each product's price by its quantity.

```javascript
const calculateSubtotal = () => {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};
```

### 7. Applying Discounts

The application supports coupon-based discounts.

```javascript
if (code.toUpperCase() === "SAVE10") {
  discountRate = 0.1;
} else if (code.toUpperCase() === "SAVE20") {
  discountRate = 0.2;
}
```

The discount amount is calculated using:

```javascript
const discountAmount = subtotal * discountRate;
```

The final total is:

```javascript
const finalTotal = subtotal - discountAmount;
```

### 8. Dynamic Rendering

The `renderCart()` function updates the table whenever the cart changes.

It:

1. Clears the existing table
2. Loops through the cart
3. Creates table rows dynamically
4. Displays product information
5. Displays quantity controls
6. Displays product subtotal
7. Updates cart summary information

```javascript
cartItemsContainer.innerHTML = "";

cart.forEach((item) => {
  // Create and display product row
});
```

## Example Calculation

Suppose the cart contains:

```text
Laptop      ₹50,000 × 1
Mouse       ₹800 × 3
Keyboard    ₹1,500 × 1
```

The subtotal will be:

```text
₹50,000 + ₹2,400 + ₹1,500
= ₹53,900
```

If `SAVE10` is applied:

```text
Discount = ₹53,900 × 10%
         = ₹5,390

Final Total = ₹53,900 - ₹5,390
            = ₹48,510
```

## JavaScript Concepts Practiced

This project is useful for understanding several important JavaScript concepts:

### Arrays

```javascript
cart.push(newProduct);
```

### Objects

```javascript
{
  id: 1,
  name: "Laptop",
  price: 50000,
  quantity: 1
}
```

### `find()`

Used to find a specific product.

```javascript
cart.find((p) => p.id === id);
```

### `filter()`

Used to remove products.

```javascript
cart.filter((p) => p.id !== id);
```

### `reduce()`

Used for calculations.

```javascript
cart.reduce((total, item) => total + item.quantity, 0);
```

### `forEach()`

Used to loop through cart products.

```javascript
cart.forEach((item) => {
  // Render product
});
```

### DOM Manipulation

```javascript
document.getElementById("cart-items");
```

```javascript
document.createElement("tr");
```

```javascript
element.textContent = value;
```

### Event Listeners

The project uses event listeners for:

* Adding products
* Applying coupons
* Clearing the cart

```javascript
element.addEventListener("click", () => {
  // Action
});
```

### Template Literals

Dynamic HTML is generated using template literals.

```javascript
row.innerHTML = `
  <td>${item.id}</td>
  <td>${item.name}</td>
  <td>₹${item.price}</td>
`;
```

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/your-username/shopping-cart.git
```

### 2. Open the project

```bash
cd shopping-cart
```

### 3. Run the project

Open `index.html` directly in your browser.

You can also use the **Live Server** extension in VS Code for a better development experience.

## Future Improvements

Some features that could be added in future versions:

* Save cart data using `localStorage`
* Product search
* Product categories
* Product images
* Stock management
* Tax calculation
* Delivery charges
* Multiple coupon types
* Coupon expiration
* Checkout functionality
* Payment integration
* Dark mode
* Responsive mobile table design
* Product editing functionality
* Cart persistence after page refresh

## Learning Goals

The main goal of this project is to practice JavaScript fundamentals by building a real-world application.

After completing this project, you should have a better understanding of:

* Arrays and objects
* Array methods
* Functions
* DOM manipulation
* Event handling
* Dynamic HTML generation
* Mathematical calculations
* Conditional statements
* Template literals
* State management using JavaScript variables

## Author

**Aman**

If you found this project useful, feel free to explore the code and improve it with additional features.
