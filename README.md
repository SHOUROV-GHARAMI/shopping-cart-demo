Simple Shopping Cart project using HTML, Tailwind & JavaScript.
Requirements: User Interface (UI)

1. Product List: Display a grid or list of products with details
such as:
• Product Image
• Product Name
• Description
• Price
• "Add to Cart" button

2. Checkout Interface
Functional Requirements
Product Display: Display products in UI with proper styling.
Add to Cart: Allow users to add items to the cart by clicking an "Add to Cart" button & update the cart
count dynamically.
View Cart: Show items added to the cart with details.
Update Quantity: Allow users to change the quantity of items in the cart.
Clear Cart: Option to empty the cart completely.
Calculate Total: Automatically update the total price as items are added or their quantities are updated.
Responsive Design: Ensure the cart and product display adapt to different screen sizes.
Checkout Process: Display a summary of the cart items and total cost.

Mandatory Requirements:
• Separate JS logic for products, cart operations, and UI updates.
• Error handling (e.g., prevent adding negative quantities).

New update :
Task: Extend your Shopping Cart project(Assignment) by adding a Promo Code Feature. 
Requirements:
1. Add an input field and Apply Promo Code button in the cart section. 
2. Accept two promo codes only: 
○ ostad10 → Apply 10% discount on the total amount. 
○ ostad50 → Apply 50% discount on the total amount. 
3. Display the discounted total dynamically after applying a valid code. 
4. Show an error message for invalid promo codes. 
5. Ensure a promo code can only be applied once per checkout. 
Expected Behavior 
● If the total is $100 and the user enters ostad10 → Total becomes $90. 
● If a user enters ostad50 → Total becomes $50. 
● If the user enters any other code → Show "Invalid Promo Code". 
