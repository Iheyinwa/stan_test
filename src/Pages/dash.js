import { Button } from '../Components/Button';
import { Toggle } from '../svg/icon';
import blueLogo from '../img/blueLogo.png';
import user from '../img/user.png';
import { useState } from 'react';
import { Menu } from '../Components/menu';
export function Dash() {
	const [ State, setState ] = useState(false);
	const onClick = () => setState(!State);
	return (
		<div>
			<nav className="navbar navDash">
				<Toggle onClick={onClick} className="toggle" />
				<img src={blueLogo} alt="Company Blue Logo" />
				<div class="verticalLine" />
				<p>TM Dashboard</p>
				<img src={user} alt="User Avatar" className="user" />
			</nav>
			{State && <Menu />}
			<main className="dash">
				<h4>Hello, Ositadinma Nwangwu</h4>
				<p>Welcome and good to have you back.</p>

				<h5>Things to do</h5>
				<ul>
					<li>
						<div class="checkmark" />
						Upload your employee performance agreement <Button text="Begin" className="begin" />
					</li>
					<li>
						<div class="checkmark" />
						Start quarterly self review<Button text="Resume" className="resume" />
					</li>
				</ul>
			</main>
		</div>
	);
}
