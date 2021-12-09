import { FillLogo } from '../svg/icon';
import blueLogo from '../img/blueLogo.png';
import { Button } from '../Components/Button';
export function Auth() {
	return (
		<main>
			<div className="Logos">
				<FillLogo />
				<img src={blueLogo} alt="Company Blue Logo" />
			</div>
			<div className="card">
				<h4>Log in</h4>
				<p>Access your resource edge account</p>
				<h5>Email Address</h5>
				<input placeholder="Enter email" />
				<Button className="login sign-in" />
				<hr />
				<h6>Forgot Password?</h6>
			</div>
		</main>
	);
}
