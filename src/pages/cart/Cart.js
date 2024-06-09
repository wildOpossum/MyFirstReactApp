import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import EmptyCart from './emptyCart/EmptyCart';
import CartItem from '../../components/cartItem/cartItem';
import './cart.scss';

import { clearCart } from '../../redux/slice/cartSlice';

const Cart = () => {
	const dispatch = useDispatch();	
	const {items, totalPrice} = useSelector(state => state.cart);
	
	if (!totalPrice || items.length < 1) {
		return <EmptyCart/>
	}	

	const onClickClearCart = () => {
		dispatch(clearCart());
	}

	return(		
		<section className="page-cart cart">
			<div className="cart__container">
				<div className="cart-content">
					<div className="cart-content__top top-content">
						<button onClick={onClickClearCart} className="top-content__clear trash">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							
							<span>Clear the cart</span>
						</button>
					</div>
					{items.map((item )=> (<CartItem key={item.id + item.size + item.title} {...item}/>))}
					<div className="cart-content__bottom">
						<div className="cart-content__fullprice">
							<div className="amount">Payment amount:</div>
							<div className="fullprice">${parseFloat(totalPrice.toFixed(2))}</div>
						</div>
						<div className="cart-content__btn">
							<Link to="/" className="cart-btn__back btn">to order</Link>
							<Link to="/" className="cart-btn__back btn">to pay</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cart;