import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

const Products: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 },
  ];

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
          ? { ...item, price: item.price + product.price, quantity: (item.quantity || 1) + 1 }
          : item
        );
      }
      return [...prevCart, product];
    });
  };
  const removeFromCart = (product: Product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div id="products-container">
      <h2>Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} - Cant. {item.quantity || 1}
            <button onClick={() => removeFromCart(item)}>Eliminar del carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
