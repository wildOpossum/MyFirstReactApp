import React from "react";
import { useEffect } from 'react';
import { fetchPizzas } from '../../redux/slice/pizzaSlice';
import { createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import PizzaMenu from "../../components/pizzaMenu/PizzaMenu";
import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/Error/ErrorMessage";
import Categories from "../../components/categories/Categories";
import Sort from "../../components/sort/Sort";

const Home = () => {
	const filteredCatSelector = createSelector(
        (state) => state.categories.activeCategories,
        (state) => state.pizzas.pizzas,
		(state) => state.sort.sort,		
        (categories, pizzas, sort) => {
			if(sort.sortProperty === 'rating'){				
				const sortArr = pizzas.map((item) => item);				
				return sortPizzas(sortArr, 'rating', true);
			}			
			if(sort.sortProperty === '-price'){				
				const sortArr = pizzas.map((item) => item);
				return sortPizzas(sortArr, 'price', false);
			}
			if(sort.sortProperty === 'price'){				
				const sortArr = pizzas.map((item) => item);
				return sortPizzas(sortArr, 'price', true);
			}
			if(sort.sortProperty === '-title'){				
				const sortArr = pizzas.map((item) => item);
				return sortPizzas(sortArr, 'title', false);
			}
			if(sort.sortProperty === 'title'){				
				const sortArr = pizzas.map((item) => item);
				return sortPizzas(sortArr, 'title', true);
			}

            if (categories === 'all') {
                return pizzas;
            } else {
                return pizzas.filter(item => item.category === categories);
            }		
        }
		
    );
	const dispatch = useDispatch();
	const pizzas = useSelector(filteredCatSelector);
	const  {pizzasLoadingStatus} = useSelector(state => state.pizzas.pizzasLoadingStatus);	

	function sortPizzas(array, prop, dir = false){
		const res = array.sort((a, b) => {
			let diff = a[prop] < b[prop];

			if(dir === true) diff = a[prop] > b[prop]
			if (diff === true) return -1
		})
		return res;
	}

	useEffect(() => {
		dispatch(fetchPizzas());
	},[]);	

	if (pizzasLoadingStatus === 'loading') {
		return <Spinner/>
	}else if (pizzasLoadingStatus === 'error'){
		return <ErrorMessage/>
	}

	const pizzaMenu = pizzas.map(obj => {
		return (<PizzaMenu key={obj.id} {...obj}	/>
	)
	})
	
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
									<path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#1C274C"/>
								</svg>
							</button>					
						</form>
					</div>
					<Sort/>
				</div>
				<div className="pizza-menu__items items-pizza">
					<Categories/>
					{
						<div className="items-pizza__body">
								{pizzaMenu}
						</div>
						
					}			
				</div>
			</div>
		</section>
	)
}

export default Home