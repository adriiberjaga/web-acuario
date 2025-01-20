import { useState } from 'react';
import styles from "../styles/Catalogo.module.css";
import Cart from '../../components/tsx/Cart';

export default function Catalogo() {
  interface Product {
    title: string;
    desc: string;
    price: number;
    image: string;
  }

  interface CartItem extends Product {
    quantity: number;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const products: Product[] = [
    {
      title: "Acuario Completo 100L",
      desc: "Acuario completo con filtro e iluminación LED",
      price: 299.99,
      image: '/acuariocompleto.jpg'
    },
    {
      title: "Filtro Externo Pro",
      desc: "Filtro profesional para acuarios hasta 200L",
      price: 89.99,
      image: '/filtroexterno.png'
    },
    {
      title: "Kit CO2 Profesional",
      desc: "Sistema completo de CO2 para plantas",
      price: 149.99,
      image: '/kitco2.jpg'
    },
    {
      title: "Pack Plantas Acuáticas",
      desc: "Set de 10 plantas variadas",
      price: 39.99,
      image: 'a'
    },
  ];

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.title === product.title);
      if (existingItem) {
        return prevItems.map(item =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (title: string, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.title === title
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (title: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.title !== title));
  };

  return (
    <div className={styles.container}>
      <div className={styles.catalogHeader}>
        <h1>Nuestro Catálogo</h1>
        <p>Encuentra todo lo que necesitas para tu acuario</p>

        <div className={styles.filters}>
          <button className={styles.filterButton}>Acuarios</button>
          <button className={styles.filterButton}>Peces</button>
          <button className={styles.filterButton}>Equipamiento</button>
          <button className={styles.filterButton}>Plantas</button>
          <button className={styles.filterButton}>Decoración</button>
        </div>
      </div>

      <div className={styles.productsGrid}>
        {products.map((producto) => (
          <div key={producto.title} className={styles.productCard}>
            <img src={producto.image} alt="image" className={styles.productImage}></img>
            <div className={styles.productInfo}>
              <h3>{producto.title}</h3>
              <p className={styles.description}>{producto.desc}</p>
              <p className={styles.price}>${producto.price}</p>
              <button
                onClick={() => addToCart(producto)}
                className={styles.addToCart}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Aquí no renderizas el carrito en Catalogo, lo pasas a Cart.tsx */}
      <div className={styles.cartSection}>
        <Cart
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />
      </div>
    </div>
  );
}
