import { Link } from 'react-router-dom'


const Home = () => {
  return <header className="header">
      <div className="header__img">
          <img src="" alt="pizza-img" className="header__pizza"/>
      </div>
      <div className="header__content">
          <h1>Best Pizza In Every State</h1>
          <h3>50% off on 1st Purchase</h3>
          <Link to="/">
            View Menu
          </Link>
      </div>
  </header>;
};

export default Home;
