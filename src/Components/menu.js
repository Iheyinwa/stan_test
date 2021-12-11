import { Employee, TalentManager } from '../svg/icon';
import { Link } from 'react-router-dom';
export function Menu() {
	return (
		<div className="menu">
			<p className="name">OSITADINMA NWANGWU</p>
			<h6>Profile</h6>
			<p className="decision">Use Resource Edge as</p>
			<ul>
				<li>
					<TalentManager />
					Talent Manager
				</li>
				<li>
					<Employee />Employee
				</li>
			</ul>
			<div className="horizontalLine" />
			<Link to="/">
				<p className="signout">Logout</p>
			</Link>
		</div>
	);
}
