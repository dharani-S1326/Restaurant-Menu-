function openOrder() {
    const orderSection = document.getElementById("order");
    orderSection.style.display = "block";
    orderSection.scrollIntoView({ behavior: "smooth" });
}

function selectItem(itemName) {
    openOrder();
    document.getElementById("item").value = itemName;
}

document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const qty = document.getElementById("qty").value.trim();
    const error = document.getElementById("error");

    if (name === "") {
        error.textContent = "Please enter your name";
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        error.textContent = "Enter valid 10 digit phone number";
        return;
    }

    if (qty === "" || qty <= 0) {
        error.textContent = "Please enter valid quantity";
        return;
    }

    error.style.color = "green";
    error.textContent = "Order placed successfully!";
});
