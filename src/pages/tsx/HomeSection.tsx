import { NavLink } from 'react-router-dom'
import styles from '../styles/HomeSection.module.css'


export default function HomeSection() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Descubre el mundo submarino</h1>
          <p>Especialistas en acuarios y vida marina desde 1995</p>
          <NavLink to={'/Catalogo'}>
          <button  className={styles.ctaButton}>Ver catálogo</button>
          </NavLink>
        </div>
      </div>

      {/* Features Section */}
      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>Acuarios a medida</h3>
          <p>Diseñamos el acuario perfecto para tu espacio</p>
        </div>
        <div className={styles.feature}>
          <h3>Mantenimiento</h3>
          <p>Servicio profesional para tu ecosistema</p>
        </div>
        <div className={styles.feature}>
          <h3>Especies exóticas</h3>
          <p>Gran variedad de peces y corales</p>
        </div>
      </div>

      {/* Products Preview */}
      <div className={styles.productsPreview}>
        <h2>Nuestros productos destacados</h2>
        <div className={styles.productsGrid}>
          <div className={styles.productCard}>
            <div className={styles.productImage}></div>
            <h3>Acuarios completos</h3>
            <p>Listos para instalar</p>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImage}></div>
            <h3>Equipamiento</h3>
            <p>La mejor tecnología</p>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImage}></div>
            <h3>Alimentación</h3>
            <p>Nutrición especializada</p>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImage}></div>
            <h3>Decoración</h3>
            <p>Elementos naturales</p>
          </div>
        </div>
      </div>
    </div>
  )
}