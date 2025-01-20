interface Product {
    title: string;
    desc: string;
    price: number;
    image: string;
  }
  
  interface CartItem extends Product {
    quantity: number;
  }
  
  interface CartProps {
    items: CartItem[];
    onUpdateQuantity: (title: string, newQuantity: number) => void;
    onRemoveItem: (title: string) => void;
  }
  
  export default function Cart({ items, onUpdateQuantity, onRemoveItem }: CartProps) {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    if (items.length === 0) {
      return (
        <div className="cart">
          <p>El carrito está vacío</p>
        </div>
      );
    }
  
    return (
      <div className="cart">
        <h2>Carrito de Compras</h2>
        {items.map((item) => (
          <div key={item.title} className="cart-item">
            <img src={item.image} alt={item.title} width="50" height="50" />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p className="cart-item-price">${item.price}</p>
              <div className="cart-item-controls">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value > 0) onUpdateQuantity(item.title, value);
                  }}
                />
                <button onClick={() => onRemoveItem(item.title)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
        <div className="cart-total">
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      </div>
    );
  }
  