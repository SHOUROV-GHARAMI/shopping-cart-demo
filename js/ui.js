// Render products
function renderProducts() {
const productList = document.getElementById("product-list");
productList.innerHTML = "";
products.forEach(p => {
    const div = document.createElement("div");
    div.className = "bg-white p-3 shadow rounded-md";
    div.innerHTML = `
    <img src="${p.image}" alt="${p.name}" class="w-full h-32 object-cover mb-2 rounded">
    <h3 class="font-bold">${p.name}</h3>
    <p class="text-sm text-gray-600">${p.desc}</p>
    <p class="mt-2 font-semibold">$${p.price}</p>
    <button onclick="addToCart(${p.id})"
            class="mt-2 bg-blue-600 text-white px-3 py-1 rounded">
        Add to Cart
    </button>
    `;
    productList.appendChild(div);
});
}

// Render cart
function updateCartUI() {
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const discountedTotal = document.getElementById("discounted-total");

cartItems.innerHTML = "";
cartCount.textContent = cart.reduce((sum, i) => sum + i.quantity, 0);

cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "flex justify-between items-center border-b pb-2";
    div.innerHTML = `
    <div>
        <p class="font-semibold">${item.name}</p>
        <p class="text-sm">$${item.price} x 
        <input type="number" min="1" value="${item.quantity}"
                onchange="updateQuantity(${item.id}, this.value)"
                class="w-12 border rounded text-center">
        </p>
    </div>
      <p>$${(item.price * item.quantity).toFixed(2)}</p>
    `;
    cartItems.appendChild(div);
});

const total = calculateTotal();
cartTotal.textContent = total.toFixed(2);

  // If promo already applied, recalc
if (appliedPromo) {
    applyPromo(appliedPromo, true);
}
}

// Init
renderProducts();

// Event listeners
document.getElementById("clear-cart").addEventListener("click", clearCart);