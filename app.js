js
let cart = [];
function addToCart(product) {
    cart.push(product);
    updateCart();
}
function updateCart() {
    document.getElementById("cart").innerHTML = "";
    cart.forEach(item => 
        let li = document.createElement("li");
        li.textContent = item;
        document.getElementById("cart").appendChild(li);
    });
    let message = "Hola, quiero comprar: " + cart.join(", ");
    let = "https://wa.me/644938677?text=" + encodeURIComponent(message);
    document.getElementById("whatsappBtn").inclick = () => {
      window.open(url, "_blank");
    };
  }
