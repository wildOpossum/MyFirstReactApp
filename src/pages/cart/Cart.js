import { Link } from 'react-router-dom';

import EmptyCart from './emptyCart/EmptyCart';
import './cart.scss';
import argentina from '../../assets/pizza-menu/advancend/search-svgrepo-com.svg'

const Cart = () => {
	
	return(		
		<section class="page-cart cart">
			<div class="cart__container">
				<div class="cart-content">
					<div class="cart-content__top top-content">
						<button class="top-content__clear trash">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							
							<span>Clear the cart</span>
						</button>
					</div>
					<ul class="cart-content__list">
						<li class="cart-content__item">
							<article class="cart-content__product cart-product">
								<div class="cart-product__image">
									<img src={argentina} alt="Argentina"/>
								</div>
								<div class="cart-product__text">
									<h2 class="cart-product__title">Pizza Argentina</h2>
									<div class="cart-product__size">size: 28</div>
								</div>
								<div class="cart-product__amount cart-amount counter">
									<button class="cart-amount__count count-minus counter-general"><span></span></button>
									<span class="cart-amount__couter counter-amount">1</span>
									<button class="cart-amount__count count-plus counter-general"><span></span></button>
								</div>
								<div class="cart-product__price ">8.00<sup>$</sup></div>						
								<button class="cart-product__delete trash">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
										<path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</button>
							</article>
						</li>						
					</ul>
					<div class="cart-content__bottom">
						<div class="cart-content__fullprice">
							<div class="amount">Payment amount:</div>
							<div class="fullprice">$00.00</div>
						</div>
						<div class="cart-content__btn">
							<Link to="/" class="cart-btn__back btn">to order</Link>
							<Link to="/" class="cart-btn__back btn">to pay</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cart;