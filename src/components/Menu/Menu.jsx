import './Menu.css'

const Menu = () => {
  return (
    <section>
      <ul className="menu__grid">
        <li className="menu__pizza">
          <img src="/pizza2.png" alt="pizza-image" />
          <h4>Mexican Green Wave</h4>
          <p>liberal sprinkling of exotic Mexican herbs</p>
          <button>Order</button>
        </li>
        <li className="menu__pizza">
          <img src="/pizza2.png" alt="pizza-image" />
          <h4>Peppy Paneer</h4>
          <p>Chunky paneer with crisp capsicum and spicy red pepper </p>
          <button>Order</button>
        </li>
        <li className="menu__pizza">
          <img src="/pizza2.png" alt="pizza-image" />
          <h4>PANEER MAKHANI</h4>
          <p>Paneer and Capsicum on Makhani Sauce</p>
          <button>Order</button>
        </li>
        <li className="menu__pizza">
          <img src="/pizza2.png" alt="pizza-image" />
          <h4>CHEESE N CORN</h4>
          <p>Cheese I Golden Corn | Cheese n Corn Pizza</p>
          <button>Order</button>
        </li>
        <li className="menu__pizza">
          <img src="/pizza2.png" alt="pizza-image" />
          <h4>FRESH VEGGIE</h4>
          <p>Onion I Capsicum</p>
          <button>Order</button>
        </li>
        <li className="menu__pizza">
          <img src="/pizza2.png" alt="pizza-image" />
          <h4>VEGGIE PARADISE</h4>
          <p>Goldern Corn, Black Olives, Capsicum & Red Paprika</p>
          <button>Order</button>
        </li>
      </ul>
    </section>
  )
}

export default Menu