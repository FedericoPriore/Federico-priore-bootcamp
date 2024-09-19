import { Link } from "react-router-dom";
import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className="search-bar">
        <div className="search-bar__logo-container">
          <a href="/">
          <img htmlFor="inicio" className="search-bar__logokaluc" src="/img/kaluc.webp" alt="Ka-luc-logo"/>
          </a>
        </div>
        <form action="#" className="search-bar__form-container">
          <label className="search-bar__form-label">Tortas y Postres</label>
          <input 
          type="search" className="search-bar__form-search" id="busqueda"
          />
          <input 
          type="submit" className="search-bar__form-submit" value="Buscar"
          />
        </form>
        <div className="search-bar__carrito-container"><Link to="carrito"><img src="/img/car.svg" alt="Carrito-container"/></Link></div>
        <div className="menu-toogle">
          <label htmlFor="menu" className="menu-toogle__label">
            <span className="menu-toogle__top-bread"></span>
            <span className="menu-toogle__meat"></span>
            <span className="menu-toogle__bottom-bread"></span>
          </label>
        </div>
      </div>
  );
};

export default SearchBar;
