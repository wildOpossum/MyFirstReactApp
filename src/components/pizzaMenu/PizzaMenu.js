import './pizzaMenu.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addProduct, decQuantity, removeProduct } from '../../redux/slice/cartSlice';

const PizzaMenu = ({id, imageUrl, title, subscribe, sizes, price}) => {	
	const [activeSize, setActiveSize] = useState(0);
	const dispatch = useDispatch();
	
	const item = {
		id,
		title,
		price,
		imageUrl,					
		size: sizes[activeSize],
	};
	const sortQuantiti = useSelector((state) => state.cart.items);
	
	const quantity = useSelector((state) => {
		const similarPizzas = state.cart.items?.filter(
			(pizza) => pizza.title === title
		);				
		const totalQuantity = similarPizzas?.reduce(
			(sum, pizza) => sum + pizza.count, 0
		);
		return totalQuantity;
	});	
		
	const onClickDecQuntiti = () => {		
		const size = item.size
		if (activeSize === 0){			
			dispatch(decQuantity({id, activeSize, size}));
		}else if (activeSize === 1){			
			dispatch(decQuantity({id, activeSize, size})); 
		} else if (activeSize === 2){			
			dispatch(decQuantity({id, activeSize, size}));
		}

		if(sortQuantiti[0]?.count < 1) dispatch(removeProduct({id, size}));
		if(sortQuantiti[1]?.count < 1) dispatch(removeProduct({id, size}));
		if(sortQuantiti[2]?.count < 1) dispatch(removeProduct({id, size}));
	}

	const onClickAdd = () => {		
		dispatch(addProduct(item));		
	};

	const renderSizes = sizes?.map((item, i) => 
		<li 
		key={i} 
		onClick={() => setActiveSize(i)} className={activeSize === i ? "item-pizza__size-item active" : "item-pizza__size-item"}> 
			{item}
		</li>);

	return(				
		
			<div data-pizza-type="mt" className="items-pizza__item item-pizza">
				<Link href="" className="item-pizza__image">
					<img src={imageUrl} alt={title}/>
				</Link>
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
						<button onClick={onClickDecQuntiti} className="pizza-order__count count-minus counter-general"><span></span></button>
						<span className="pizza-order__couter counter-amount">{quantity} </span>
						<button onClick={onClickAdd} className="pizza-order__count count-plus counter-general "><span></span></button>
					</div>
				</div>
				<button onClick={onClickAdd} className="item-pizza__btn btn">Order Now</button>
			</div>						
		

	)
}

export default PizzaMenu