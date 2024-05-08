import './notFound.scss';
import page404 from '../../assets/not-found/404.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return(
		<section className="page-not-found not-found">
			<div className="not-found__container">
				<div className="not-found__image">
					<img src={page404} alt="404"/>
				</div>
				<h2 className="not-found__title">Oops! Page not found</h2>
				<div className="not-found__text">Sorry, the page you are looking for cloud not found</div>
				<Link to="/" className="not-found__btn btn">Return Home</Link>
			</div>
		</section>
	)
}

export default NotFound;