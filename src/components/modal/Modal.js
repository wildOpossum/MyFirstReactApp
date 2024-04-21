import './modal.scss';

const Modal = () => {
	return(
		<div className="modal">
			<div className="modal__dialog">
				<div className="modal__content">
					<form action="#" data-login="" name="loginform" >
						<div data-close className="modal__close">&times;</div>
						<div className="modal__title">Log in</div>
						<div className="modal-login modal-pass">
							<label htmlFor="login" className="modal-loginl__label">Login</label>
							<div className="modal-login__sign">
								Need an account? <a href="#">Sign up</a>
							</div>
						</div>
						<input required placeholder="Login" name="login" id="login" type="text" autoComplete="off" className="modal__input"/>
						<div className="modal-login modal-pass">
							<label htmlFor="password" className="modal-pass__label">Password</label>
							<div className="modal-pass__show"><a href="#">Show</a></div>
						</div>

						<input required placeholder="Password" id="password" name="password" type="password" className="modal__input"/>
						<button className="btn modal-btn">Log in</button>
						<a className="modal__fogot" href="#">Forgot password?</a>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Modal;