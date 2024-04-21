import './spinner.scss';

const Spinner = () => {
	return (
		<div className="spinner" style={{paddingBottom: '70px', paddingTop: '70px'}}>
			<span className="loader" style={{margin: '0 auto', background: 'none', display: 'block', marginTop: '70px', marginBottom: '70px'}}></span>
		</div>
		
	)
}

export default Spinner;