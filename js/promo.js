// Apply promo code
function applyPromo(code, auto = false) {
const total = calculateTotal();
const discountedTotal = document.getElementById("discounted-total");
const errorMsg = document.getElementById("promo-error");

  if (!auto) { // only check once if user clicks
    if (appliedPromo) {
    errorMsg.textContent = "Promo code already applied!";
    errorMsg.classList.remove("hidden");
    return;
    }
}

if (code === "ostad10") {
    appliedPromo = "ostad10";
    const discounted = total * 0.9;
    discountedTotal.textContent = `Discounted Total: $${discounted.toFixed(2)}`;
    discountedTotal.classList.remove("hidden");
    errorMsg.classList.add("hidden");
} else if (code === "ostad50") {
    appliedPromo = "ostad50";
    const discounted = total * 0.5;
    discountedTotal.textContent = `Discounted Total: $${discounted.toFixed(2)}`;
    discountedTotal.classList.remove("hidden");
    errorMsg.classList.add("hidden");
} else {
    if (!auto) {
    errorMsg.textContent = "Invalid Promo Code!";
    errorMsg.classList.remove("hidden");
    }
}
}

document.getElementById("apply-promo").addEventListener("click", () => {
const code = document.getElementById("promo-code").value.trim();
applyPromo(code);
});