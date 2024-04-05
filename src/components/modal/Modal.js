import './modal.scss';

const Modal = () => {
	return(
		<div class="modal">
			<div class="modal__dialog">
				<div class="modal__content">
					<form action="#" data-login="" name="loginform" >
						<div data-close class="modal__close">&times;</div>
						<div class="modal__title">Log in</div>
						<div class="modal-login modal-pass">
							<label for="login" class="modal-loginl__label">Login</label>
							<div class="modal-login__sign">
								Need an account? <a href="#">Sign up</a>
							</div>
						</div>
						<input required placeholder="Login" name="login" id="login" type="text" autocomplete="off" class="modal__input"/>
						<div class="modal-login modal-pass">
							<label for="password" class="modal-pass__label">Password</label>
							<div class="modal-pass__show"><a href="#">Show</a></div>
						</div>

						<input required placeholder="Password" id="password" name="password" type="password" class="modal__input"/>
						<button class="btn modal-btn">Log in</button>
						<a class="modal__fogot" href="#">Forgot password?</a>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Modal;