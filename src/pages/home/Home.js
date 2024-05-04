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
import Search from "../../components/search/Search";

const Home = () => {
	const filteredCatSelector = createSelector(
        (state) => state.categories.activeCategories,
        (state) => state.pizzas.pizzas,
		(state) => state.sort.sort,
		(state) => state.sort.searchValue,		
        (categories, pizzas, sort, searchValue) => {			
			const filters = () => {
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
			}
			const res = filters();

			if(searchValue || searchValue !== ''){
				console.log(searchValue);
				const searchRes = res;
				return searchRes.filter(item => {
					if(item.title.toLowerCase().includes(searchValue.toLowerCase())){
						return true;
					}else{
						return false;
					}
				})
				.map(item => ({...item}));
			}
			
            if (categories === 'all') {				
                return res;
            } else {
				return res.filter(item => item.category === categories);			               
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
					<Search/>
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