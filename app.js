
const productos = [
    { id: 1, nombre: "Manzana", precio: 0.50 },
    { id: 2, nombre: "Agua", precio: 1.00 },
    { id: 3, nombre: "Chocolate", precio: 1.50 },
    { id: 4, nombre: "Pan", precio: 0.80 }
];

const carrito = [];

function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const contenedor = document.getElementById("carrito");
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    const lista = document.createElement("ul");
    let total = 0;

    carrito.forEach(producto => {
        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - ${producto.precio.toFixed(2)}€`;
        total += producto.precio;
        lista.appendChild(item);
    });

    contenedor.appendChild(lista);

    const totalElem = document.createElement("p");
    totalElem.innerHTML = `<strong>Total: ${total.toFixed(2)}€</strong>`;
    contenedor.appendChild(totalElem);
}

function enviarPorWhatsApp() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let mensaje = "Hola, quiero comprar:\n";
    let total = 0;

    carrito.forEach(producto => {
        mensaje += `- ${producto.nombre} (${producto.precio.toFixed(2)}€)\n`;
        total += producto.precio;
    });

    mensaje += `\nTotal: ${total.toFixed(2)}€`;
    const numero = "34644938677";
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(link, "_blank");
}
