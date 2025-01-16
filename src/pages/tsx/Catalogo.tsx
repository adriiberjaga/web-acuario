import styles from '../styles/Catalogo.module.css'

export default function Catalogo() {
  return (
    <div className={styles.container}>
      {/* Header del catálogo */}
      <div className={styles.catalogHeader}>
        <h1>Nuestro Catálogo</h1>
        <p>Encuentra todo lo que necesitas para tu acuario</p>
        
        {/* Filtros */}
        <div className={styles.filters}>
          <button className={styles.filterButton}>Acuarios</button>
          <button className={styles.filterButton}>Peces</button>
          <button className={styles.filterButton}>Equipamiento</button>
          <button className={styles.filterButton}>Plantas</button>
          <button className={styles.filterButton}>Decoración</button>
        </div>
      </div>

      {/* Grid de productos */}
      <div className={styles.productsGrid}>
        {/* Producto 1 */}
        <div className={styles.productCard}>
          <div className={styles.productImage}></div>
          <div className={styles.productInfo}>
            <h3>Acuario Completo 100L</h3>
            <p className={styles.description}>Acuario completo con filtro e iluminación LED</p>
            <p className={styles.price}>299.99€</p>
            <button className={styles.addToCart}>Añadir al carrito</button>
          </div>
        </div>

        {/* Producto 2 */}
        <div className={styles.productCard}>
          <div className={styles.productImage}></div>
          <div className={styles.productInfo}>
            <h3>Filtro Externo Pro</h3>
            <p className={styles.description}>Filtro profesional para acuarios hasta 200L</p>
            <p className={styles.price}>89.99€</p>
            <button className={styles.addToCart}>Añadir al carrito</button>
          </div>
        </div>

        {/* Producto 3 */}
        <div className={styles.productCard}>
          <div className={styles.productImage}></div>
          <div className={styles.productInfo}>
            <h3>Kit CO2 Profesional</h3>
            <p className={styles.description}>Sistema completo de CO2 para plantas</p>
            <p className={styles.price}>149.99€</p>
            <button className={styles.addToCart}>Añadir al carrito</button>
          </div>
        </div>

        {/* Producto 4 */}
        <div className={styles.productCard}>
          <div className={styles.productImage}></div>
          <div className={styles.productInfo}>
            <h3>Pack Plantas Acuáticas</h3>
            <p className={styles.description}>Set de 10 plantas variadas</p>
            <p className={styles.price}>39.99€</p>
            <button className={styles.addToCart}>Añadir al carrito</button>
          </div>
        </div>

        {/* Más productos... */}
      </div>
    </div>
  )
}