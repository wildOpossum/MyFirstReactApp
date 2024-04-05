import './mainSection.scss';
import lightning from '../../assets/main/Lightning.png';
import apple from '../../assets/main/apple.svg';
import google from '../../assets/main/google.svg';
import promo from '../../assets/main/promo.png';
import free from '../../assets/main/free.png';

const MainSection = () => {
	return(
		<section className="page__main main-section">
			<div className="main-section__container">
				<div className="main-section__body body-section">
					<div className="body-section__left">
						<div className="body-section__content content-left">
							<h1 className="content-left__title">
								The Fastest Pizza <span className="content-left__lightnig"><img src={lightning} alt="Lightning"/></span> Delivery
							</h1>
							<div className="content-left__text">
								We will deliver juicy pizza for your family in 30 minutes, if the courier is late - 
								<span>pizza is free!</span>
							</div>
							<div className="content-left__btns btns-block">
								<h2 className="btns-block__title">Quickly order your favourite food with a handy app!</h2>
								<div className="content-left__text btns-block__text">
									Download our app, place your order in one click and track its status in real time.
								</div>
								<div className="btns-block__download">
									<a href="" className="btns-block__link">
										<img src={apple} alt="apple"/>
									</a>
									<a href="" className="btns-block__link">
										<img src={google} alt="google"/>
									</a>						
								</div>
							</div>					
						</div>
					</div>
					<div className="body-section__right">
						<div className="body-section__content content-right">
							<div className="content-right__image">
								<img src={promo} alt="promo"/>
								<div className="content-right__mini-img">
									<img src={free} alt="free"/>
								</div>						
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MainSection;