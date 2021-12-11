import blueLogo from '../img/blueLogo.png';
import { Button } from './Button';
import { Link } from 'react-router-dom';
export function Nav() {
	return (
		<nav className="navbar">
			<ul>
				<li className="nav">
					<img src={blueLogo} alt="Company Blue Logo" />
					<p>Features</p>
					<p>About</p>
				</li>

				<li className="button">
					<Button className="logout" text="Sign Up" />
					<Link to="/auth">
						<Button className="login" text="Sign in" />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
