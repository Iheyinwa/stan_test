import { FillLogo } from '../svg/icon';
import blueLogo from '../img/blueLogo.png';
import { Login } from '../Components/Login';
import { Reset } from '../Components/Reset';
import { useState } from 'react';
export function Auth() {
	const [ form, setForm ] = useState(false);

	const onClick = () => {
		setForm(!form);
	};
	return (
		<main className="auth">
			<div className="Logos">
				<FillLogo />
				<img src={blueLogo} alt="Company Blue Logo" />
			</div>
			<div className="card">{form ? <Login onClick={onClick} /> : <Reset onClick={onClick} />}</div>
		</main>
	);
}
