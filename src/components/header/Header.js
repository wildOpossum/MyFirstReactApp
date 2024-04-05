import user from '../../assets/icons/user.svg';
import cart from '../../assets/icons/cart.svg';
import './header.scss';
const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo"><a className="header__logo-link" href="">pizzashop</a></div>
				<div className="header__menu menu">
					<nav className="menu__body">
						<ul className="menu__list">
							<li className="menu__item"><a href="#" className="menu__link active">Home</a></li>
							<li className="menu__item"><a href="#" className="menu__link">Menu</a></li>							
							<li className="menu__item"><a href="#" className="menu__link">About us</a></li>
						</ul>
					</nav>			
				</div>
				<div className="header__actions actions">
					<button className="actions__login"><span>Log in</span><img src={user} alt="user"/></button>
					<div className="actions__cart">
						<img src={cart} alt="cart" />
						<span>99</span>
					</div>
					<button className="icon-menu menu__icon"><span></span></button>			
				</div>
				
			</div>
		</header>
	)
}

export default Header;