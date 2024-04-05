import './pizzaMenu.scss';

import capriciosa from '../../assets/pizza-menu/Capricciosa.png';
import venecia from '../../assets/pizza-menu/venezia.png';
import meat from '../../assets/pizza-menu/meat.png';
import chesse from '../../assets/pizza-menu/cheese.png';
import argentina from '../../assets/pizza-menu/Argentina.png';
import mushroom from '../../assets/pizza-menu/mushroom.png';
import tomato from '../../assets/pizza-menu/Tomato.png';
import gia from '../../assets/pizza-menu/italianx2.png';

const PizzaMenu = () => {
	return(
		<section className="page__pizza-menu pizza-menu">
			<div className="pizza-menu__container">
				<h2 className="pizza-menu__title title">Menu</h2>
				<div className="pizza-menu__advanced advanced-menu">
					<div className="advanced-menu__search">
						<form className="advanced-menu__form" >
							<input placeholder="search" name="search" type="text" className="advanced-menu__input"></input>
							<button className="advanced-menu__btn">						
								<svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#1C274C"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#1C274C"/>
								</svg>
							</button>					
						</form>
					</div>
					<div className="pizza-menu__sorting sorting">
						<div className="sorting__select ">
							<span>Sort:</span>
							<span className="sorting__toggle">by popularity</span>
							<div className="sorting__popup popup-sorting">
								<ul>
									<li>
										by popularity
									</li>
									<li>
										Alphabetical ↑
									</li>
									<li>
										Alphabetical ↓
									</li>
									<li>
										price: Low to High ↑
									</li>
									<li>
										price: High to Low ↓
									</li>							
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="pizza-menu__items items-pizza">
					<nav className="items-pizza__navigation">
						<button data-pizza-type="" className="items-pizza__type active">Show All</button>
						<button data-pizza-type="mt" className="items-pizza__type button ">Meat</button>
						<button data-pizza-type="vg" className="items-pizza__type button ">Vegetarian</button>
						<button data-pizza-type="sp" className="items-pizza__type button ">Sea products</button>
						<button data-pizza-type="mr" className="items-pizza__type button ">Mushroom</button>
					</nav>
					<div className="items-pizza__body">
						<div data-pizza-type="mt" className="items-pizza__item item-pizza">
							<a href="" className="item-pizza__image">
								<img src={capriciosa} alt="Capricciosa"/>
							</a>
							<h3 className="item-pizza__title">Capricciosa</h3>
							<div className="item-pizza__subscribe">House made Pizza Sauce, Mozzarella, Italian Ham, Beef Pepperoni, Sautéed Mushrooms & Sautéed Artichokes</div>
							<ul className="item-pizza__size">
								<li className="item-pizza__size-item">22</li>
								<li className="item-pizza__size-item active">28</li>
								<li className="item-pizza__size-item">33</li>
							</ul>
							<div className="item-pizza__order pizza-order">
								<div className="pizza-order__price">
									8,35<sup>$</sup>
								</div>
								<div className="pizza-order__total counter">
									<button className="pizza-order__count count-minus counter-general"><span></span></button>
									<span className="pizza-order__couter counter-amount">1</span>
									<button className="pizza-order__count count-plus counter-general "><span></span></button>
								</div>
							</div>
							<button className="item-pizza__btn btn">Order Now</button>
						</div>
						<div data-pizza-type="mr" className="items-pizza__item item-pizza">
							<div className="item-pizza__image">
								<img src={venecia} alt="Venecia"/>
							</div>
							<h3 className="item-pizza__title">Venecia</h3>
							<div className="item-pizza__subscribe">Mozzarella, Homemade Ricotta Cheese, Fresh Oregano, Roasted Cherry Tomatoes, Fresh Basil</div>
							<ul className="item-pizza__size">
								<li className="item-pizza__size-item">22</li>
								<li className="item-pizza__size-item active">28</li>
								<li className="item-pizza__size-item">33</li>
							</ul>
							<div className="item-pizza__order pizza-order">
								<div className="pizza-order__price">
									8,35<sup>$</sup>
								</div>
								<div className="pizza-order__total counter">
									<button className="pizza-order__count count-minus counter-general"><span></span></button>
									<span className="pizza-order__couter counter-amount">1</span>
									<button className="pizza-order__count count-plus counter-general "><span></span></button>
								</div>
							</div>
							<button className="item-pizza__btn btn">Order Now</button>
						</div>
						<div data-pizza-type="vg" className="items-pizza__item item-pizza">
							<div className="item-pizza__image">
								<img src={meat} alt="meat"/>
							</div>
							<h3 className="item-pizza__title">Meat</h3>
							<div className="item-pizza__subscribe">House Made Pizza Sauce, Mozzarella, Italian Ham (Prosciutto Cotto), Beef Pepperoni, House made Italian Sausage, Homemade Meatballs</div>
							<ul className="item-pizza__size">
								<li className="item-pizza__size-item">22</li>
								<li className="item-pizza__size-item active">28</li>
								<li className="item-pizza__size-item">33</li>
							</ul>
							<div className="item-pizza__order pizza-order">
								<div className="pizza-order__price">
									9,35<sup>$</sup>
								</div>
								<div className="pizza-order__total counter">
									<button className="pizza-order__count count-minus counter-general"><span></span></button>
									<span className="pizza-order__couter counter-amount">1</span>
									<button className="pizza-order__count count-plus counter-general "><span></span></button>
								</div>
							</div>
							<button className="item-pizza__btn btn">Order Now</button>
						</div>
						<div data-pizza-type="mt" className="items-pizza__item item-pizza">
							<div className="item-pizza__image">
								<img src={chesse} alt="Cheese"/>
							</div>
							<h3 className="item-pizza__title">Cheese</h3>
							<div className="item-pizza__subscribe">Ricotta Cheese, Mozarella, House Made Pizza Sauce.</div>
							<ul className="item-pizza__size">
								<li className="item-pizza__size-item">22</li>
								<li className="item-pizza__size-item active">28</li>
								<li className="item-pizza__size-item">33</li>
							</ul>
							<div className="item-pizza__order pizza-order">
								<div className="pizza-order__price">
									8,35<sup>$</sup>
								</div>
								<div className="pizza-order__total counter">
									<button className="pizza-order__count count-minus counter-general"><span></span></button>
									<span className="pizza-order__couter counter-amount">1</span>
									<button className="pizza-order__count count-plus counter-general "><span></span></button>
								</div>
							</div>
							<button className="item-pizza__btn btn">Order Now</button>
						</div>
						<div data-pizza-type="sp" className="items-pizza__item item-pizza">
							<div className="item-pizza__image">
								<img src={argentina} alt="Argentina"/>
							</div>
							<h3 className="item-pizza__title">Argentina</h3>
							<div className="item-pizza__subscribe">Crushed tomato sauce, goat cheese, mozzarella, prosciutto, garlic and crushed red pepper baked in our wood-fired oven and topped with fresh spinach</div>
							<ul className="item-pizza__size">
								<li className="item-pizza__size-item">22</li>
								<li className="item-pizza__size-item active">28</li>
								<li className="item-pizza__size-item">33</li>
							</ul>
							<div className="item-pizza__order pizza-order">
								<div className="pizza-order__price">
									7,35<sup>$</sup>
								</div>
								<div className="pizza-order__total counter">
									<button className="pizza-order__count count-minus counter-general"><span></span></button>
									<span className="pizza-order__couter counter-amount">1</span>
									<button className="pizza-order__count count-plus counter-general "><span></span></button>
								</div>
							</div>
							<button className="item-pizza__btn btn">Order Now</button>
						</div>
						<div data-pizza-type="mt" className="items-pizza__item item-pizza">
							<div className="item-pizza__image">
								<img src={mushroom} alt="mushroom"/>
							</div>
							<h3 className="item-pizza__title">mushroom</h3>
							<div className="item-pizza__subscribe">House made Pizza Sauce, Mozzarella, Italian Ham, Beef Pepperoni, Sautéed Mushrooms & Sautéed Artichokes</div>
							<ul className="item-pizza__size">
								<li className="item-pizza__size-item">22</li>
								<li className="item-pizza__size-item active">28</li>
								<li className="item-pizza__size-item">33</li>
							</ul>
							<div className="item-pizza__order pizza-order">
								<div className="pizza-order__price">
									6,35<sup>$</sup>
								</div>
								<div className="pizza-order__total counter">
									<button className="pizza-order__count count-minus counter-general"><span></span></button>
									<span className="pizza-order__couter counter-amount">1</span>
									<button className="pizza-order__count count-plus counter-general "><span></span></button>
								</div>
							</div>
							<button className="item-pizza__btn btn">Order Now</button>
						</div>
						<div data-pizza-type="mr" className="items-pizza__item item-pizza">
							<div className="item-pizza__image">
								<img src={tomato} alt="Tomato"/>
							</div>
							<h3 className="item-pizza__title">Tomato</h3>
							<div className="item-pizza__subscribe">House made Pizza Sauce, Mozzarella, Italian Ham, Beef Pepperoni, Sautéed Mushrooms & Sautéed Artichokes</div>
							<ul className="item-pizza__size">
								<li className="item-pizza__size-item">22</li>
								<li className="item-pizza__size-item active">28</li>
								<li className="item-pizza__size-item">33</li>
							</ul>
							<div className="item-pizza__order pizza-order">
								<div className="pizza-order__price">
									7,35<sup>$</sup>
								</div>
								<div className="pizza-order__total counter">
									<button className="pizza-order__count count-minus counter-general"><span></span></button>
									<span className="pizza-order__couter counter-amount">1</span>
									<button className="pizza-order__count count-plus counter-general "><span></span></button>
								</div>
							</div>
							<button className="item-pizza__btn btn">Order Now</button>
						</div>
						<div data-pizza-type="mt" className="items-pizza__item item-pizza">
							<div className="item-pizza__image">
								<img src={gia} alt="Pizza Gia"/>
							</div>
							<h3 className="item-pizza__title">Pizza Gia</h3>
							<div className="item-pizza__subscribe">House made Pizza Sauce, Mozzarella, Italian Ham, Beef Pepperoni, Sautéed Mushrooms & Sautéed Artichokes</div>
							<ul className="item-pizza__size">
								<li className="item-pizza__size-item">22</li>
								<li className="item-pizza__size-item active">28</li>
								<li className="item-pizza__size-item">33</li>
							</ul>
							<div className="item-pizza__order pizza-order">
								<div className="pizza-order__price">
									8,35<sup>$</sup>
								</div>
								<div className="pizza-order__total counter">
									<button className="pizza-order__count count-minus counter-general"><span></span></button>
									<span className="pizza-order__couter counter-amount">1</span>
									<button className="pizza-order__count count-plus counter-general "><span></span></button>
								</div>
							</div>
							<button className="item-pizza__btn btn">Order Now</button>
						</div>											
					</div>
				</div>
			</div>
		</section>
	)
}

export default PizzaMenu