import './notFound.scss';
import page404 from '../../assets/not-found/404.png';

const NotFound = () => {
	return(
		<section class="page-not-found not-found">
			<div class="not-found__container">
				<div class="not-found__image">
					<img src={page404} alt="404"/>
				</div>
				<h2 class="not-found__title">Oops! Page not found</h2>
				<div class="not-found__text">Sorry, the page you are looking for cloud not found</div>
				<a href="" class="not-found__btn btn">Return Home</a>
			</div>
		</section>
	)
}

export default NotFound;