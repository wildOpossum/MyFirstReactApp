import { NavLink, Link } from 'react-router-dom';
import user from '../../assets/icons/user.svg';
import cart from '../../assets/icons/cart.svg';
import './header.scss';
const Header = () => {
	const setActive = ({isActive}) => isActive ? 'menu__link active' : 'menu__link'
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo"><Link className="header__logo-link" to="/">pizzashop</Link></div>
				<div className="header__menu menu">
					<nav className="menu__body">
						<ul className="menu__list">
							<li className="menu__item"><NavLink to="/" className={setActive}>Home</NavLink></li>
							<li className="menu__item"><NavLink to="menu" className={setActive}>Menu</NavLink></li>							
							<li className="menu__item"><NavLink to="abountUs" className={setActive}>About us</NavLink></li>
						</ul>
					</nav>			
				</div>
				<div className="header__actions actions">
					<button className="actions__login"><span>Log in</span><img src={user} alt="user"/></button>
					<Link to="cart" className="actions__cart">
						<img src={cart} alt="cart" />
						<span>99</span>
					</Link>
					<button className="icon-menu menu__icon"><span></span></button>			
				</div>
				
			</div>
		</header>
	)
}

export default Header;