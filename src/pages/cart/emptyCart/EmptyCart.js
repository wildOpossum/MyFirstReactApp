import { Link } from 'react-router-dom';
import './cart-empty.scss';
import shopingCart from '../../../assets/cart/shopping-cart.svg';

const EmptyCart = () => {
	return(
		<section className="page-cart-empty cart-empty">
			<div className="cart-empty__container">
				<Link to="/" className="cart-empty__btn btn">Go shopping</Link>
				<div className="cart-empty__image">
					<img src={shopingCart} alt="cart-empty"/>
				</div>
				<h2 className="cart-empty__title">Cart is empty</h2>
				<div className="cart-empty__text">But it's never too late to fix it :)</div>				
			</div>
		</section>
	);
}

export default EmptyCart;