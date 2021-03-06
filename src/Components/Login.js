import { Link } from 'react-router-dom';
import { Button } from './Button';
export function Login({ onClick }) {
	return (
		<div>
			<h4>Log in</h4>
			<p>Access your resource edge account</p>
			<h5>Email Address</h5>
			<input placeholder="Enter email" />
			<Link to="/dash">
				<Button className="login sign-in" />
			</Link>
			<hr />
			<h6 onClick={onClick}>Forgot Password?</h6>
		</div>
	);
}
