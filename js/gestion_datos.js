const productos = {
    1: { id: 1, nombre: "Laptop", precio: 1500 },
    2: { id: 2, nombre: "Mouse", precio: 25 },
    3: { id: 3, nombre: "Teclado", precio: 50 },
};

const setProductos = new Set(Object.values(productos).map(p => p.nombre));

const mapProductos = new Map([
    ["Electrónica", ["Laptop"]],
    ["Accesorios", ["Mouse", "Teclado"]],
]);

// Función para agregar un nuevo producto
function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const categoria = prompt("Ingrese la categoría del producto:");

    if (!nombre || isNaN(precio) || !categoria) {
        alert("Datos inválidos. Inténtalo de nuevo.");
        return;
    }

    const nuevoId = Object.keys(productos).length + 1;
    productos[nuevoId] = { id: nuevoId, nombre, precio };

    setProductos.add(nombre);

    if (mapProductos.has(categoria)) {
        mapProductos.get(categoria).push(nombre);
    } else {
        mapProductos.set(categoria, [nombre]);
    }

    alert(`✅ Producto agregado: ${nombre} en categoría ${categoria}`);
}

//Recorrer objetos
console.log("\n📦 Objeto productos:");
for (const id in productos) {
    const p = productos[id];
    console.log(`ID: ${p.id}, Nombre: ${p.nombre}, Precio: $${p.precio}`);
}

//Recorrer Set
console.log("\n✅ Set de productos únicos:");
for (const producto of setProductos) {
    console.log(`Producto: ${producto}`);
}

//Recorrer Map
console.log("\n🗂️ Mapa de productos por categoría:");
mapProductos.forEach((productos, categoria) => {
    console.log(`Categoría: ${categoria}, Productos: ${productos.join(", ")}`);
});
