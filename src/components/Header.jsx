const Header = () => {
	return (
		<header>
			<nav className="light-blue darken-2">
				<div className="nav-wrapper">
					<div className="row">
						<div className="col s1 header__line"><a href="#!" className="brand-logo"><i className="material-icons">cloud</i>My weather app</a></div>
						<div className="col s11">
							<ul className="right hide-on-med-and-down">
								<li><a href="#!"><i className="material-icons">view_module</i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;