import './abountUs.scss';
import pizzas from '../../assets/abount-us/pizzas.png';
import pizzaSlice from '../../assets/abount-us/pizza-slice.png';
import pizza from '../../assets/abount-us/pizza';
import free from '../../assets/main/free';

const AbountUs = () => {
	return(
		<section class="page__abount abount">
			<div class="abount__container">
				<div class="abount__column-left column-left">
					<h2 class="column-left__title title">About us</h2>
					<div class="column-left__text">In just a couple of years, we have opened 6 outlets in different cities: Kyiev, Roma, Torino, London, Tokio, and in the future we plan to develop the network in other major cities of World.</div>
					<div class="column-left__image">
						<img src={pizzas} alt="pizzas"/>
					</div>			
					<div class="column-left__text">The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing work in order to receive / prepare / form / deliver customer orders on time.</div>
				</div>
				<div class="abount__column-right column-right">
					<div class="column-right__body">
						
							<img class="column-right__top" src={pizzaSlice} alt="pizza-slice"/>
										
						<div class="column-right__basic">
							<img src={pizza} alt="pizza"/>
						</div>				
						<img class="column-right__bottom" src={free} alt="free"/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AbountUs;