const Error = (props) => {
	const errorMessage = props.errorMessage;

	return (errorMessage) ? (
		<div className="error-block">
			<h4>{errorMessage}</h4>
			<p className="flow-text ">Something went wrong</p>
		</div>
	) : (<div></div>);
}

export default Error;