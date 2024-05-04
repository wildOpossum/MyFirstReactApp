import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/slice/sortSlice";

export const sortList = [
	{name: 'by popularity', sortProperty: 'rating'}, 
	{name: 'price: Low to High ↑', sortProperty: '-price'},
	{name: 'price: High to Low ↓', sortProperty: 'price'}, 
	{name: 'Alphabetical ↑', sortProperty: '-title'},
	{name: 'Alphabetical ↓', sortProperty: 'title'},
];

const Sort = () => {
	const dispatch = useDispatch();
	const sort = useSelector(state => state.sort.sort);
	const [openSort, setOpenSort] = useState();
	const sortRef = useRef();		
	
	const onClickSort = (objSort) => {		
		dispatch(setSort(objSort))
		setOpenSort(false);
	}

	useEffect(() => {
		const onHandleClick = (event) => {
			const path = event.composedPath() ? event.composedPath() : event.path;			
			if(!path.includes(sortRef.current)){
				setOpenSort(false);				
			}
		}
		document.body.addEventListener('click', onHandleClick);
		return () => {
			document.body.removeEventListener('click', onHandleClick);
		}
	}, []);
	
	const renderSort = (arr) => {
		const items = arr?.map((item) => {
			
			return(
			<li
				key={item.sortProperty}
				onClick={() => onClickSort(item)}				
			>
				{item.name}
			</li>
			);			
		});
		return (			
			<div className={openSort ? "sorting__select active" : "sorting__select "} >
				<span >Sort: </span>
				<span  className="sorting__toggle">{sort.name}</span>
				{openSort && <div className="sorting__popup popup-sorting">
					<ul>
						{items}
					</ul>
				</div>
				}
			</div>
		)
	}

	const rendersortList = renderSort(sortList)

	return (
		<div ref={sortRef} onClick={() => setOpenSort(!openSort)} className="pizza-menu__sorting sorting">			
			{rendersortList}				
		</div>
	)
}

export default Sort;