import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	return(
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__top footer-top">
					<div className="footer-top__column footer-top__column-first">
						<div className="footer-top__content">
							<Link to="/" className="footer-top__title ">pizzashop</Link>
						</div>
					</div>
					<div className="footer-top__column">
						<div className="footer-top__content content-footer-top">
							<h2 className="content-footer-top__title">Home</h2>
							<ul className="content-footer-top__list">
								<li className="content-footer-top__item"><Link to="cart" className="content-footer-top__link">To Order</Link></li>
								<li className="content-footer-top__item"><Link to="abountUs" className="content-footer-top__link">About us</Link></li>
								<li className="content-footer-top__item"><Link to="Events" className="content-footer-top__link">Events</Link></li>
								<li className="content-footer-top__item"><Link to="menu" className="content-footer-top__link">Menu</Link></li>
							</ul>
						</div>
					</div>
					<div className="footer-top__column">
						<div className="footer-top__content content-footer-top">
							<h2 className="content-footer-top__title">Events</h2>
							<ul className="content-footer-top__list">
								<li className="content-footer-top__item"><Link to="3+1" className="content-footer-top__link">3 Pizza 1 Free Coffee</Link></li>
								<li className="content-footer-top__item"><Link to="2+1" className="content-footer-top__link">2 Pizza for 1 Price</Link></li>
								<li className="content-footer-top__item"><Link to="tour" className="content-footer-top__link">Kitchen Tour</Link></li>					
							</ul>
						</div>
					</div>
					<div className="footer-top__column">
						<div className="footer-top__content content-footer-top">
							<h2 className="content-footer-top__title">Menu</h2>
							<ul className="content-footer-top__list">
								<li className="content-footer-top__item"><Link to="menu" className="content-footer-top__link">Show All</Link></li>
								<li className="content-footer-top__item"><Link to="menu" className="content-footer-top__link">Seaproducts</Link></li>
								<li className="content-footer-top__item"><Link to="menu" className="content-footer-top__link">Vegan</Link></li>
								<li className="content-footer-top__item"><Link to="menu" className="content-footer-top__link">Meat</Link></li>					
							</ul>
						</div>
					</div>
					<div className="footer-top__column">
						<div className="footer-top__content content-footer-top">
							<h2 className="content-footer-top__title">About Us</h2>
							<ul className="content-footer-top__list">
								<li className="content-footer-top__item"><Link to="history" className="content-footer-top__link">Our History</Link></li>
								<li className="content-footer-top__item"><Link to="whyMe" className="content-footer-top__link">Why We?</Link></li>				
							</ul>
						</div>
					</div>
				</div>
				<div className="footer__bottom footer-bottom">
					<div className="footer-bottom__column">
						<a href="tel:+49373335533" className="footer-bottom__contact">+4 (937) 333-55-33</a>
					</div>
					<div className="footer-bottom__column">
						<div className="footer-bottom social-footer">
							<div className="social-footer__items">
								<a href="https://www.instagram.com/" className="social-footer__item">									
									<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="url(#icon-grad)"/>
										<path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="url(#icon-grad)"/>
										<path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="url(#icon-grad)"/>
										<defs>
											<linearGradient id="icon-grad" x1="15" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
												<stop offset="0%" stopColor="#ff6432"/>
												<stop offset="100%" stopColor="#ffa228"/>
											</linearGradient>
										</defs>
									</svg>
								</a>
								<a href="https://twitter.com/?lang=uk" className="social-footer__item">								
									<svg fill="none" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
										viewBox="0 0 485 485" space="preserve">
										<g>
											<path d="M85,341.458c28.599,18.34,62.568,29.037,99.065,29.037c118.871,0,183.873-98.473,183.873-183.876
												c0-2.799-0.063-5.587-0.186-8.36c12.629-9.111,23.585-20.493,32.249-33.453c-11.59,5.14-24.045,8.616-37.118,10.178
												c13.344-8,23.591-20.662,28.415-35.754c-12.488,7.404-26.319,12.785-41.038,15.681c-11.788-12.56-28.584-20.406-47.173-20.406
												c-35.688,0-64.626,28.935-64.626,64.623c0,5.065,0.574,9.997,1.677,14.729c-53.71-2.698-101.33-28.424-133.203-67.526
												c-5.564,9.547-8.751,20.647-8.751,32.492c0,22.419,11.406,42.201,28.748,53.79c-10.595-0.336-20.56-3.245-29.271-8.084
												c-0.006,0.271-0.006,0.541-0.006,0.814c0,31.311,22.278,57.429,51.841,63.368c-5.423,1.474-11.133,2.268-17.027,2.268
												c-4.164,0-8.213-0.406-12.161-1.163c8.225,25.676,32.093,44.361,60.373,44.88c-22.119,17.336-49.984,27.668-80.262,27.668
												C95.199,342.365,90.056,342.059,85,341.458z" fill="url(#icon-grad-t)"/>
											<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z" fill="url(#icon-grad-t)"/>
										</g>
										<defs>
											<linearGradient id="icon-grad-t" x1="400" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
												<stop offset="0%" stopColor="#ff6432"/>
												<stop offset="100%" stopColor="#ffa228"/>
											</linearGradient>
										</defs>
									</svg>
								</a>
								<a href="https://www.facebook.com/?locale=uk_UA" className="social-footer__item">									
									<svg fill="none" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" fill="url(#icon-grad-f)"/>
										<defs>
											<linearGradient id="icon-grad-f" x1="20" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
												<stop offset="0%" stopColor="#ff6432"/>
												<stop offset="100%" stopColor="#ffa228"/>
											</linearGradient>
										</defs>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default Footer;