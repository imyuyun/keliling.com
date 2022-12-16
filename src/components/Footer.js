import React, { Fragment } from 'react';
import InstagramLogo from '../assets/instagram.svg';
import TwitterLogo from '../assets/twitter.svg';
import FacebookLogo from '../assets/facebook.svg';

const Footer = () => {
	return (
		<Fragment>
			<div className="container p-3">
				<div className="row text-center mb-4">
					<div className="col-lg-4">
						<img src={InstagramLogo} alt="Instagram" />
					</div>
					<div className="col-lg-4">
						<img src={TwitterLogo} alt="Twitter" />
					</div>
					<div className="col-lg-4">
						<img src={FacebookLogo} alt="Facebook" />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Footer;
