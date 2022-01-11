import { NavLink } from "react-router-dom";
import './categorySelector.css'

function CategorySelector (){
    return (
        <nav className="categorySelector">
            <h2 className="categorySelector__title">
                Category:
            </h2>
            <ul className="categorySelector__list">
                <li className="categorySelector__items">
                    <NavLink exact className='categorySelector__links' activeClassName='active' to={'/shop'}>All</NavLink>
                </li>
                <li className="categorySelector__items">
                    <NavLink exact className='categorySelector__links' activeClassName='active' to={'/category/asset'}>Asset</NavLink>
                </li>
                <li className="categorySelector__items">
                    <NavLink exact className='categorySelector__links' activeClassName='active' to={'/category/currency'}>Currency</NavLink>
                </li>
                <li className="categorySelector__items">
                    <NavLink exact className='categorySelector__links' activeClassName='active' to={'/category/memecoin'}>Meme Coin</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default CategorySelector;