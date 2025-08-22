const productList = document.getElementById("product-list");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCartBtn = document.getElementById("clear-cart");

// Display products
function displayProducts() {
    productList.innerHTML = products.map(product => `
        <div class="bg-white shadow-md rounded p-4 flex flex-col">
            <img src="${product.image}" alt="${product.name}" class="h-40 w-full object-cover rounded mb-2">
            <h3 class="font-bold text-lg">${product.name}</h3>
            <p class="text-gray-600 text-sm">${product.description}</p>
            <p class="font-semibold mt-2">$${product.price}</p>
            <button onclick="addToCart(${product.id})" 
                class="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
            </button>
        </div>
    `).join('');
}

// Update Cart UI
function updateCartUI() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="flex justify-between items-center mb-2 border-b pb-2">
                <div>
                    <h4 class="font-bold">${item.name}</h4>
                    <p>$${item.price} x 
                        <input type="number" min="1" value="${item.quantity}" 
                            onchange="updateQuantity(${item.id}, this.value)" 
                            class="w-16 border rounded px-1">
                    </p>
                </div>
                <button onclick="removeFromCart(${item.id})" 
                    class="text-red-500 hover:text-red-700">Remove</button>
            </div>
        `).join('');
    }

    cartTotal.textContent = calculateTotal();
}

// Event listeners
clearCartBtn.addEventListener("click", clearCart);

// Initialize
displayProducts();
updateCartUI();
