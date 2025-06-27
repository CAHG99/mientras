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

// Referencias al DOM
const productForm = document.getElementById('productForm');
const nombreInput = document.getElementById('nombre');
const precioInput = document.getElementById('precio');
const categoriaInput = document.getElementById('categoria');
const productosList = document.getElementById('productosList');

// Función para agregar un nuevo producto
function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const categoria = prompt("Ingrese la categoría del producto:");

    if (!nombre || isNaN(precio) || !categoria) {
        alert("Datos inválidos. Inténtalo de nuevo.");
        return;
    }

    // Asignar nuevo ID de manera automática
    const nuevoId = Object.keys(productos).length + 1;
    productos[nuevoId] = { id: nuevoId, nombre, precio };

    // Agregar el nombre al Set (evita duplicados)
    setProductos.add(nombre);

    // Verificar si la categoría existe y agregar el producto a esa categoría
    if (mapProductos.has(categoria)) {
        // Si ya es un arreglo, agregamos el nuevo producto
        mapProductos.get(categoria).push(nombre);
    } else {
        // Si no existe la categoría, la creamos con un arreglo que contiene el nuevo producto
        mapProductos.set(categoria, [nombre]);
    }

    alert(`✅ Producto agregado: ${nombre} en categoría ${categoria}`);
}

// Recorrer el objeto productos
console.log("\nObjeto productos:");
for (const id in productos) {
    const p = productos[id];
    console.log(`ID: ${p.id}, Nombre: ${p.nombre}, Precio: $${p.precio}`);
}

// Recorrer el set de productos únicos
console.log("\nSet de productos únicos:");
for (const producto of setProductos) {
    console.log(`Producto: ${producto}`);
}

// Recorrer el Map de productos por categoría
console.log("\nMapa de productos por categoría:");
mapProductos.forEach((productos, categoria) => {
    console.log(`Categoría: ${categoria}, Productos: ${productos.join(", ")}`);
});
