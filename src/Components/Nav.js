import blueLogo from '../img/blueLogo.png';
import { Button } from './Button';
export function Nav() {
	const onClick = () => {
		alert(1);
	};
	return (
		<nav className="navbar">
			<ul>
				<li className="nav">
					<img src={blueLogo} alt="Company Blue Logo" />
					<p>Features</p>
					<p>About</p>
				</li>

				<li className="button">
					<Button className="logout" onClick={onClick} text="Sign Up" />
					<Button className="login" text="Sign in" onClick={onClick} />
				</li>
			</ul>
		</nav>
	);
}
