import { useRef } from "react";
import './Header.styles.css';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../Assets/2.png';

export default function Header() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={Logo} alt='logo' className="logoImage" />
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Services</a>
				<a href="/#">Portfolio</a>
				<a href="/#">Contact</a>
                <a href="/#">Blog</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
		<FaBars />
			</button>
		</header>
    )
}
