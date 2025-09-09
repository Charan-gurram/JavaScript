const cartCount = document.getElementById("cartCount");
const cartList = document.getElementById("cartList");
const buttons = document.querySelectorAll(".add-to-cart");

let count = 0;

for (let i = 0; i < buttons.length; i++) {
  let btn = buttons[i];  // pick each button one by one

  btn.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;

    // Create list item in cart
    const li = document.createElement("li");
    li.textContent = `Product ${i + 1} added to cart`;
    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Remove";
    delBtn.addEventListener("click", () => {
      cartList.removeChild(li);
      count--;
      cartCount.textContent = count;
    });
    cartList.appendChild(li);
    li.appendChild(delBtn);
  });



}
