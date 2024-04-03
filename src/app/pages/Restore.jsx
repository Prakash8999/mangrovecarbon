import React from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
	return (
		<>


			<div style={{ position: 'relative', backgroundColor: '#222222' }}>
				{/* This div will cover the lower part of the iframe */}
				<div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: '#222222', height: '24vh' }}></div>

				<div style={{ position: 'absolute', bottom: 40, left: 20, width: 32, backgroundColor: '#222222', height: 10 }}></div>

				<div style={{ position: 'fixed', top: '10px', width: '100%', textAlign: 'left', left:'10px' , zIndex: 999 }}>
					<Link to={'/deforestation'} style={linkStyle}>
						Deforestation
					</Link>
				</div>

				<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: '#222222', height: '10vh' }}>


				</div>

				{/* The iframe */}
				<iframe src="https://cbuelow.shinyapps.io/target-setting/" frameBorder="0" style={{ width: '100%', height: '100vh' }} scrolling="no"></iframe>
			</div>
		</>
	);
};


const linkStyle = {
	backgroundColor: 'black',
	color: 'white',
	borderRadius: '5px',
	padding: '10px 20px',
	textDecoration: 'none', // remove underline
	display: 'inline-block' // to center horizontally
}

export default Test;
