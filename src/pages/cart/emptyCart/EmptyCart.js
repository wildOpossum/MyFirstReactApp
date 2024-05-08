import { Link } from 'react-router-dom';
import './cart-empty.scss';
import shopingCart from '../../../assets/cart/shopping-cart.svg';

const EmptyCart = () => {
	return(
		<section class="page-cart-empty cart-empty">
			<div class="cart-empty__container">
				<Link to="/" class="cart-empty__btn btn">Go shopping</Link>
				<div class="cart-empty__image">
					<img src={shopingCart} alt="cart-empty"/>
				</div>
				<h2 class="cart-empty__title">Cart is empty</h2>
				<div class="cart-empty__text">But it's never too late to fix it :)</div>				
			</div>
		</section>
	);
}

export default EmptyCart;