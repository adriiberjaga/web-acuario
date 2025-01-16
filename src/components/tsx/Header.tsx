import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css'
import logo from './yourlogohere.jpg'
import { useState } from 'react'

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={styles.main}>
        <div className={styles.mainContent}>
            {/* Botón de menú móvil */}
            <button 
              className={styles.menuButton}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              ☰
            </button>

            <div className={styles.mainContentLeft}>
              <NavLink to={'/'}>Inicio</NavLink>
              <NavLink to={'/catalogo'}>Catálogo</NavLink>
            </div>
            
            <div>
              <img className={styles.mainContentmidimg} src={logo} alt="" />
            </div>
            
            <div className={styles.mainContentRigth}>
                <button className={styles.mainContentRigthBtnLog}>Login</button>
                <button className={styles.mainContentRigthBtnCart}>Carrito</button>
            </div>

            {/* Sidebar */}
            <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
                <button 
                  className={styles.closeButton}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  ×
                </button>
                <div className={styles.sidebarContent}>
                <div className={styles.mainContentLeftSide}>
              <NavLink to={'/'}>Inicio</NavLink>
              <NavLink to={'/catalogo'}>Catálogo</NavLink>
            </div>
                    <button className={styles.mainContentRigthBtnLog}>Login</button>
                    <button className={styles.mainContentRigthBtnCart}>Carrito</button>
                </div>
                <div className={styles.mainContentRigthInfo}>                     {/* CONTENIDO QUE IRA EN EL FOOTER TAMBIEN */}
                      <NavLink  to="/ayuda" className={styles.mainContentRigthText}>Ayuda</NavLink>
                      <NavLink to="/sigue-tu-pedido" className={styles.mainContentRigthText}>Sigue tu pedido</NavLink>
                      <NavLink to="/sobre-nosotros" className={styles.mainContentRigthText}>Sobre nosotros</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}