// Cart state
let cart = [];
let appliedPromo = null; // Track if promo is used

// Add product to cart
function addToCart(productId) {
const product = products.find(p => p.id === productId);
const item = cart.find(i => i.id === productId);

if (item) {
    item.quantity++;
} else {
    cart.push({ ...product, quantity: 1 });
}

updateCartUI();
}

// Update quantity
function updateQuantity(productId, newQty) {
const item = cart.find(i => i.id === productId);
if (item) {
    if (newQty <= 0) {
    cart = cart.filter(i => i.id !== productId);
    } else {
    item.quantity = newQty;
    }
}
updateCartUI();
}

// Clear cart
function clearCart() {
cart = [];
appliedPromo = null;
document.getElementById("discounted-total").classList.add("hidden");
updateCartUI();
}

// Calculate total
function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}