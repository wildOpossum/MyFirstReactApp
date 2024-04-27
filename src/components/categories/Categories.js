import { useHttp } from "../../hooks/httpHooks";
import { useEffect } from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { fetchCategories, categoriesChanged } from "../../redux/slice/categoriesSlice";

const Categories = () => {
	const [activeCat, setActiveCat] = useState(0);	
	const {categories, categoriesLoadingStatus, activeCategories} = useSelector(state => state.categories);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	},[]);	

	const renderCat = (arr) => {		
		const items = arr?.map((item) => {			
			return (
				<button 
					data-pizza-type="" 
					key={item.name}
					id={item.name}
					className={item.name === activeCategories ? "items-pizza__type active" : "items-pizza__type"} 
					onClick={() => dispatch(categoriesChanged(item.name))} >
						{item.label}
				</button>							)
		})
		return (
			<nav className="items-pizza__navigation">
				{items}					
			</nav>
		)
	}
	
	const renderItem = renderCat(categories);

	return(
		<nav className="items-pizza__navigation">
			{renderItem}					
		</nav>
	)
}

export default Categories;