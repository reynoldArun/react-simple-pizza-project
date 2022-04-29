import { Link } from 'react-router-dom'

import './Home.css';

const Home = () => {
  return <header className="header">
      <div className="header__img">
          <img src="/pizza2.png" alt="pizza-img" className="header__pizza"/>
      </div>
      <div className="header__content">
          <h1 className='header_heading'>Best Pizza In Every State</h1>
          <h3>50% off on 1st Purchase</h3>
          <Link to="/">
            <button className='header__btn'>View Menu</button>
          </Link>
      </div>
  </header>;
};

export default Home;
