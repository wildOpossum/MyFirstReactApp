import img from './error.gif'
const ErrorMessage = () => {
	return(
		<div className="error-message" style={{paddingBottom: '70px', paddingTop: '70px'}}>
			<img style={{display: 'block', width: '100px', height: '100px', objectFit: 'contain', margin: '0 auto'}} src={img}/>
		</div>		
	);
}
export default ErrorMessage