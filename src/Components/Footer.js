import { Facebook, Instagram, LinkedIn, Twitter } from '../svg/icon';

export function Footer() {
	return (
		<footer>
			<div className="logo">
				<h3>resource edge</h3>
				<p>Throw paperwork into the trash</p>
			</div>
			<div className="socials">
				<ul className="icons">
					<li>
						<Facebook />
					</li>
					<li>
						<Twitter />
					</li>
					<li>
						<LinkedIn />
					</li>
					<li>
						<Instagram />
					</li>
				</ul>
				<p>Copyright &copy; Genesys DevStudio. All rights reserved</p>
			</div>
		</footer>
	);
}
