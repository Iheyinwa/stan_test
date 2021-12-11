import { Button } from './Button';
export function Reset({ onClick }) {
	return (
		<div className="reset">
			<h4>Reset Password</h4>
			<p>To enable us reset your password, enter your email below</p>
			<h5>Email Address</h5>
			<input placeholder="Enter email" />
			<Button className="login sign-in" />
			<hr />
			<h6 onClick={onClick}>Back to Login</h6>
		</div>
	);
}
