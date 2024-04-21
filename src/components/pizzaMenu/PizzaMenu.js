import './pizzaMenu.scss';

import { useState } from 'react';

const PizzaMenu = ({id, imageUrl, title, subscribe, sizes, price}) => {	
	const [activeSize, setActiveSize] = useState(0);

	const renderSizes = sizes?.map((item, i) => 
		<li 
		key={i} 
		onClick={() => setActiveSize(i)} className={activeSize === i ? "item-pizza__size-item active" : "item-pizza__size-item"}> 
			{item}
		</li>)
	return(				
		
			<div data-pizza-type="mt" className="items-pizza__item item-pizza">
				<a href="" className="item-pizza__image">
					<img src={imageUrl} alt={title}/>
				</a>
				<h3 className="item-pizza__title">{title}</h3>
				<div className="item-pizza__subscribe">{subscribe}</div>
					<ul className="item-pizza__size">
					{
						renderSizes
					}
					</ul>
				<div className="item-pizza__order pizza-order">
					<div className="pizza-order__price">
						{price}<sup>$</sup>
					</div>
					<div className="pizza-order__total counter">
						<button className="pizza-order__count count-minus counter-general"><span></span></button>
						<span className="pizza-order__couter counter-amount">1</span>
						<button className="pizza-order__count count-plus counter-general "><span></span></button>
					</div>
				</div>
				<button className="item-pizza__btn btn">Order Now</button>
			</div>						
		

	)
}

export default PizzaMenu