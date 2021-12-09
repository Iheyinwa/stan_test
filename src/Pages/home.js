import { Footer } from '../Components/Footer';
import { Nav } from '../Components/Nav';
import relax from '../img/Relax.png';
import employeeDirectory from '../img/Employee_Directory.png';
import travelLogistics from '../img/Direct Reports - List.png';
import payroll from '../img/Payroll.png';
import UNN from '../img/UNN.png';
import tenece from '../img/tenece.png';
import privateEstates from '../img/Private Estates.png';
import genesys from '../img/Genesys.png';

export function Home(props) {
	return (
		<div>
			<Nav />
			<section className="one">
				<div className="sect_one">
					<h3>
						Throw paperwork<br />into the trash where<br />it belongs.
					</h3>
					<p>Eliminate all the hassle involved in managing people operations by automating it.</p>
				</div>
				<aside>
					<img src={relax} alt="Relaxation" />
				</aside>
			</section>

			<section className="two">
				<div className="sect_two">
					<h3>Human Resources</h3>
					<p>Onboard new employees, manage the employee lifecycle and measure employee performance.</p>
				</div>

				<div className="cards">
					<div className="card_one">
						<h4>Employee Management</h4>
						<p>
							From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module
							eliminates all the complexities & paperwork involved in managing your team.
						</p>
					</div>

					<div className="card_two">
						<h4>Performance Management</h4>
						<p>
							Manage and track employee performance with our easy-to-use tools for goal setting,
							performance agreements and performance reviews.
						</p>
					</div>

					<div className="card_three">
						<h4>Paid time off</h4>
						<p>
							Employees can request for paid time off, vacations, sick leaves or educational leaves and
							get approvals all within Resource Edge. HR managers can equally ensure compliance.
						</p>
					</div>
				</div>

				<img src={employeeDirectory} alt="Employee Directory" />
			</section>

			<section className="three">
				<div className="sect_three">
					<h3>Admin & Logistics</h3>
					<p>Manage and track company assets as well as logistics for travelling employees</p>
				</div>

				<div className="three_aside">
					<div>
						<h4>Travel & Logistics</h4>
						<p>Make travel requests, get approvals, and have access to travel information.</p>
					</div>

					<div>
						<h4>Travel & Logistics</h4>
						<p>Make travel requests, get approvals, and have access to travel information.</p>
					</div>
				</div>

				<img src={travelLogistics} alt="Travel and Logistics" />
			</section>

			<section className="four">
				<div className="sect_four">
					<h3>Finance</h3>
					<p>
						Generate invoices, track expenditure, and manage complex payrolls for multiple teams and
						companies
					</p>
				</div>

				<div className="four_aside">
					<div>
						<h4>RE Vouchers</h4>
						<p>
							Track and manage expenditure for multiple teams across your organisation using Resource Edge
							Vouchers
						</p>
					</div>

					<div>
						<h4>Payroll</h4>
						<p>
							Our easy to use systems takes away the pain of managing complex payrolls for organisations
							of all sizes.
						</p>
					</div>
				</div>

				<img src={payroll} alt="Employee Payroll" />
			</section>
			<section className="five">
				<img
					src={UNN}
					alt="University Of Nigeria, to restore the dignity of man"
					style={{ height: '70px', width: '267.75px' }}
				/>
				<img src={tenece} alt="tenece logo" style={{ height: '63px', width: '142px' }} />
				<img src={privateEstates} alt="Private Estates Logo" style={{ height: '56.69px', width: '280px' }} />
				<img src={genesys} alt="Genesys Logo" style={{ height: '45px', width: '183px' }} />
			</section>
			<Footer />
		</div>
	);
}
